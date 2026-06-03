import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["About", "Skills", "Projects", "Contact"];
let socials = [
  {
    subject: "Github",
    link: "https://github.com/Abhiverma21?tab=repositories",
    icon: "",
  },
  {
    subject: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-verma1828/",
    icon: "",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu when clicking a link
  const handleNavClick = (item) => {
    setIsOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex items-center justify-between
              rounded-2xl sm:rounded-full
              px-4 sm:px-6 md:px-8
              py-3 sm:py-4
              transition-all duration-300
              ${
                scrolled
                  ? "bg-black/50 backdrop-blur-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
                  : "bg-black/30 backdrop-blur-lg border border-cyan-500/10"
              }
            `}
          >
            {/* Logo with enhanced animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative">
                <h1 className="text-white font-bold text-lg sm:text-xl tracking-wider">
                
                  ABHISHEK VERMA
                 
                </h1>
               
              </div>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`
                      transition-all duration-300 text-base lg:text-lg font-medium
                      ${
                        activeSection === item.toLowerCase()
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-cyan-400"
                      }
                    `}
                  >
                    {item}
                  </a>

                  {/* Active indicator */}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full
                      ${activeSection === item.toLowerCase() ? "hidden" : ""}
                    `}
                  />
                </motion.li>
              ))}
            </ul>

            {/* Resume Button - Desktop */}
            <motion.a
              href="/Abhishek Verma .pdf"
              target="_blank"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                hidden md:block
                px-6 py-2.5 rounded-full
                bg-gradient-to-r from-cyan-500 to-blue-600
                text-white font-semibold text-sm lg:text-base
                hover:shadow-lg hover:shadow-cyan-500/40
                transition-all duration-300
                relative overflow-hidden group
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Mobile Menu Button - Hamburger with animation */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden relative w-10 h-10 focus:outline-none z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-6 h-5">
                  <motion.span
                    animate={
                      isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full"
                  />
                  <motion.span
                    animate={
                      isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute top-2 left-0 w-full h-0.5 bg-cyan-400 rounded-full"
                  />
                  <motion.span
                    animate={
                      isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full"
                  />
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - FULL WIDTH */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu - FULL WIDTH */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="fixed top-0 right-0 w-full h-full bg-gradient-to-br from-[#020617] via-[#0a0f2a] to-[#020617] shadow-2xl z-40 md:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header with close button */}
              <div className="sticky top-0 bg-[#020617]/95 backdrop-blur-xl border-b border-cyan-500/20 z-10">
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h2 className="text-white font-bold text-2xl">
                        <span className="text-cyan-400">&lt;</span>
                        Menu
                        <span className="text-cyan-400">/&gt;</span>
                      </h2>
                      <p className="text-gray-400 text-sm mt-1">
                        Let's explore the world
                      </p>
                    </motion.div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ rotate: 90 }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cyan-400 text-xl transition-all"
                  >
                    ✕
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex flex-col min-h-[calc(100%-80px)]">
                <div className="flex-1 p-6">
                  {/* Animated decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2 }}
                    className="h-px bg-gradient-to-r from-cyan-500/50 via-transparent to-cyan-500/50 mb-8"
                  />

                  {/* Navigation Items - Full width cards */}
                  <ul className="space-y-3">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item);
                          }}
                          className="
                            block w-full
                            px-6 py-5 rounded-2xl
                            bg-white/5 backdrop-blur-sm
                            border border-white/10
                            hover:border-cyan-500/50
                            text-white
                            hover:bg-gradient-to-r
                            hover:from-cyan-500/20
                            hover:to-blue-500/20
                            transition-all duration-300
                            group
                            relative overflow-hidden
                          "
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-bold block">
                                {item}
                              </span>
                              <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">
                                {item === "About"}
                                {item === "Skills" }
                                {item === "Projects"}
                                {item === "Contact" }
                              </span>
                            </div>
                            <motion.span
                              className="text-3xl text-cyan-400"
                              animate={{ x: [0, 10, 0] }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              →
                            </motion.span>
                          </div>
                          
                          {/* Hover background effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Resume Button - Full width */}
                  <motion.a
                    href="/Abhishek Verma .pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      w-full mt-8 px-6 py-5 rounded-2xl
                      bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600
                      text-white font-bold text-lg
                      shadow-lg shadow-cyan-500/30
                      transition-all duration-300
                      inline-flex items-center justify-center gap-3
                      relative overflow-hidden group
                    "
                  >
                    <span>Resume</span>
                   
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.a>

                  {/* Social Links Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 pt-8 border-t border-white/10"
                  >
                    <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                      <span className="w-8 h-px bg-cyan-400/50 mx-12"></span>
                      Connect with me
                      <span className="w-8 h-px bg-cyan-400/50"></span>
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {socials.map((social, idx) => (
                        <motion.a
                          key={idx}
                          target="_blank"
                          href={social.link}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 + idx * 0.1 }}
                          whileHover={{ y: -3, scale: 1.02 }}
                          className="
                            flex items-center justify-center gap-2
                            px-4 py-3 
                            bg-white/5 
                            rounded-xl
                            border border-white/10
                            text-cyan-400 
                            text-sm 
                            font-medium
                            hover:bg-white/10 
                            hover:border-cyan-500/50
                            transition-all
                            group
                          "
                        >
                          <span className="text-xl">{social.icon}</span>
                          <span>{social.subject}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Footer text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 text-center"
                  >
                    <p className="text-gray-500 text-xs">
                      © 2026 Abhishek Verma
                    </p>
                    <p className="text-gray-600 text-[10px] mt-1">
                      Full Stack Developer
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;