import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdArrowForward, MdDownload } from "react-icons/md";
import image from "../assets/Abhi2.png";

const Hero = () => {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive utilities
  const responsive = {
    textSize: () => {
      if (windowWidth < 640) return "text-3xl";
      if (windowWidth < 768) return "text-4xl";
      if (windowWidth < 1024) return "text-6xl";
      return "text-7xl";
    },
    imageSize: () => {
      if (windowWidth < 640) return "w-[220px] h-[280px]";
      if (windowWidth < 768) return "w-[280px] h-[350px]";
      if (windowWidth < 1024) return "w-[320px] h-[400px]";
      return "w-[400px] h-[500px]";
    },
    particleCount: () => windowWidth < 768 ? 8 : 15,
  };

  // Social links with react-icons
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Abhiverma21", label: "GitHub", color: "#333" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/abhishek-verma1828/", label: "LinkedIn", color: "#0077b5" },
    { icon: FaEnvelope, href: "mailto:abhishekverma1828@gmail.com", label: "Email", color: "#ea4335" },
  ];

  // Tech stack
  const techStack = ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"];

  // Particles data
  const particles = Array.from({ length: responsive.particleCount() }, () => ({
    size: Math.random() * 2 + 1,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    top: Math.random() * 100,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a0f2a] to-[#020617] flex items-center justify-center"
    >
      {/* Background Particles */}
      <Particles particles={particles} />

      {/* Gradient Orbs */}
      <GradientOrbs />

      {/* Animated Text Marquee */}
      <MarqueeTexts textY={textY} windowWidth={windowWidth} />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <HeroContent 
            responsive={responsive}
            techStack={techStack}
            socialLinks={socialLinks}
          />

          {/* Right Image */}
          <HeroImage 
            imageScale={imageScale}
            imageOpacity={imageOpacity}
            responsive={responsive}
            image={image}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

// Particles Component
const Particles = ({ particles }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {particles.map((particle, i) => (
      <motion.div
        key={i}
        className="absolute bg-cyan-400/20 rounded-full"
        style={{
          width: particle.size,
          height: particle.size,
          left: `${particle.left}%`,
          top: `${particle.top}%`,
        }}
        animate={{
          y: [0, -80, 0],
          x: [0, (Math.random() - 0.5) * 60, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: particle.duration,
          delay: particle.delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

// Gradient Orbs Component
const GradientOrbs = () => (
  <>
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-500/15 blur-[120px]"
    />
    <motion.div
      animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-500/15 blur-[120px]"
    />
  </>
);

// Marquee Texts Component
const MarqueeTexts = ({ textY, windowWidth }) => (
  <>
    {/* Desktop Marquee */}
    <motion.div
      animate={{ x: ["100%", "-100%"] }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      style={{ y: textY }}
      className="absolute top-[20%] whitespace-nowrap text-[150px] font-black text-cyan-400/5 z-0 pointer-events-none hidden lg:block"
    >
      FULL STACK DEVELOPER • MERN STACK • SOCKET.IO •
    </motion.div>

    {/* Tablet Marquee */}
    <motion.div
      animate={{ x: ["100%", "-100%"] }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      style={{ y: textY }}
      className="absolute top-[15%] whitespace-nowrap text-[80px] font-black text-cyan-400/5 z-0 pointer-events-none hidden md:block lg:hidden"
    >
      FULL STACK • MERN • REACT •
    </motion.div>

    {/* Mobile Marquee */}
    <motion.div
      animate={{ x: ["100%", "-100%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      style={{ y: textY }}
      className="absolute top-[10%] whitespace-nowrap text-[40px] font-black text-cyan-400/5 z-0 pointer-events-none block md:hidden"
    >
      MERN • REACT • NODE •
    </motion.div>

    {/* Bottom Marquee - Desktop */}
    <motion.div
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ y: textY }}
      className="absolute bottom-[15%] whitespace-nowrap text-[120px] font-black text-white/3 z-0 pointer-events-none hidden lg:block"
    >
      REACT • NODE • EXPRESS • MONGODB •
    </motion.div>

    {/* Bottom Marquee - Mobile */}
    <motion.div
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ y: textY }}
      className="absolute bottom-[8%] whitespace-nowrap text-[30px] font-black text-white/3 z-0 pointer-events-none block md:hidden"
    >
      REACT • NODE • MONGODB •
    </motion.div>
  </>
);

// Hero Content Component
const HeroContent = ({ responsive, socialLinks }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="flex-1 text-center lg:text-left"
  >
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="inline-block text-cyan-400 uppercase tracking-[0.2em] text-sm font-semibold bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 mb-6">
        Welcome to my Portfolio
      </span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`${responsive.textSize()} font-black text-white leading-tight`}
    >
      Hi, I'm{" "}
      <span className="text-cyan-400 relative inline-block">
        Abhishek Verma
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-gray-300 text-lg mt-6 max-w-lg mx-auto lg:mx-0"
    >
     Transforming complex problems into elegant digital solutions through clean code, scalable architecture, and exceptional user experiences.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
    >
      <PrimaryButton href="#projects">
        <MdArrowForward className="inline-block mr-2" />
        View Projects
      </PrimaryButton>
      <SecondaryButton href="/Abhishek.pdf">
        <MdDownload className="inline-block mr-2" />
        <a href="/Abhishek Verma .pdf" target="_blank">Preview Resume</a>
      </SecondaryButton>
    </motion.div>

    {/* Tech Stack */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-8"
    >
     
    </motion.div>

    {/* Social Links */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="mt-8 flex gap-4 justify-center lg:justify-start"
    >
      {socialLinks.map((social, idx) => (
        <SocialIcon key={idx} {...social} />
      ))}
    </motion.div>
  </motion.div>
);

// Hero Image Component
const HeroImage = ({ imageScale, imageOpacity, responsive, image }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, x: 50 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    style={{ scale: imageScale, opacity: imageOpacity }}
    className="flex-1 flex justify-center"
  >
    <div className="relative">
      {/* Glow Effect */}
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[60px] scale-90"
      />

      {/* Image Container */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className={`relative ${responsive.imageSize()} rounded-2xl overflow-hidden`}>
          {/* Glass Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent backdrop-blur-[2px]" />
          
          {/* Image */}
          <img
            src={image}
            alt="Abhishek Verma"
            className="w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-[#0a0f2a]/20 to-transparent" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/15 to-transparent rounded-tr-full" />
        </div>
      </motion.div>

      {/* Floating Orbs */}
      <FloatingOrbs />
    </div>
  </motion.div>
);

// Floating Orbs Component
const FloatingOrbs = () => (
  <>
    <motion.div
      animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-3 -right-3 w-12 h-12 bg-cyan-500/20 rounded-full blur-md"
    />
    <motion.div
      animate={{ y: [5, -5, 5], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute -bottom-3 -left-3 w-10 h-10 bg-blue-500/20 rounded-full blur-md"
    />
  </>
);

// Scroll Indicator Component
const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
  >
   
  </motion.div>
);

// Reusable Button Components
const PrimaryButton = ({ children, href }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="
      inline-flex items-center justify-center gap-2
      px-8 py-3 rounded-xl
      bg-gradient-to-r from-cyan-500 to-cyan-600
      text-white font-semibold
      shadow-lg shadow-cyan-500/25
      hover:shadow-cyan-500/40
      transition-all duration-300
      relative overflow-hidden group
    "
  >
    <span className="relative z-10 flex items-center gap-2">{children}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700"
      initial={{ x: "100%" }}
      whileHover={{ x: 0 }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

const SecondaryButton = ({ children, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="
      inline-flex items-center justify-center gap-2
      px-8 py-3 rounded-xl
      border-2 border-cyan-500/30
      text-white font-semibold
      hover:border-cyan-500
      hover:bg-cyan-500/10
      transition-all duration-300
    "
  >
    {children}
  </motion.a>
);

const TechBadge = ({ tech }) => (
  <motion.span
    whileHover={{ y: -2 }}
    className="px-3 py-1.5 bg-white/5 border border-cyan-500/20 rounded-lg text-cyan-300 text-sm"
  >
    {tech}
  </motion.span>
);

const SocialIcon = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
      p-2.5 rounded-lg
      bg-white/5
      border border-white/10
      text-cyan-400
      hover:text-white
      hover:bg-cyan-500/20
      hover:border-cyan-500/40
      transition-all duration-300
    "
    aria-label={label}
  >
    <Icon size={20} />
  </motion.a>
);

export default Hero;