import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    number: "5+",
    title: "Projects Built",
  },
  {
    number: "2+",
    title: "Years Learning MERN",
  },
  {
    number: "2",
    title: "Industry Experiences",
  },
  {
    number: "100+",
    title: "DSA Problems",
  },
];

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-cyan-400/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: "-10%",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
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
};

// Animated text character by character
const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex overflow-hidden">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: wordIndex * 0.1 + charIndex * 0.03,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </div>
  );
};

// Glowing card component
const GlowingCard = ({ children, index }) => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="relative bg-white/5 border border-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 flex flex-col justify-center items-center text-center overflow-hidden group"
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05))`
          : "rgba(255, 255, 255, 0.05)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
      {children}
    </motion.div>
  );
};

// Skill tag component
const SkillTag = ({ skill, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, type: "spring" }}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
      className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium cursor-pointer"
    >
      {skill}
    </motion.span>
  );
};

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Redux",
    "Next.js",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2a] to-[#020617] py-28 px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <FloatingParticles />

      {/* Gradient orb that follows mouse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)",
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Grid pattern overlay */}

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-cyan-400 uppercase tracking-[0.3em] mb-4 inline-block"
            animate={{
              textShadow: [
                "0 0 0px rgba(6, 182, 212, 0)",
                "0 0 10px rgba(6, 182, 212, 0.5)",
                "0 0 0px rgba(6, 182, 212, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            ✦ About Me ✦
          </motion.p>

          <motion.span
            className="text-5xl md:text-7xl font-black text-cyan-400 block"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            From Code to Connection
          </motion.span>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          {/* Left Side with typing effect */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-cyan-400 font-bold">👋 Hey there!</span> I'm{" "}
              <span className="text-cyan-400 font-bold relative inline-block">
                Abhishek Verma
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
              , a Full Stack Developer
            </motion.p>

            {[
              "I specialize in building full-stack applications with the MERN stack, turning complex requirements into seamless, user-centric experiences. With professional experience at <span class='text-blue-400 font-bold'>Big Byte Innovations</span> and <span class='text-blue-400 font-bold'>CodeQuotient</span>, I’ve moved beyond just writing code—I build scalable backend architectures, secure authentication flows, and high-performance, responsive frontends. Currently, I am deepening my expertise in system design and advanced React patterns to craft more robust and efficient digital solutions.",
            ].map((text, idx) => (
              <motion.p
                key={idx}
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                // dangerousSetInnerHTML use karna padega taaki <span> render ho sake
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
            {/* Skills section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                ⚡ Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <SkillTag key={idx} skill={skill} index={idx} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <GlowingCard key={index} index={index}>
                <motion.div
                  className="text-6xl mb-3"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  className="text-5xl font-black text-cyan-400 mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  {item.number}
                </motion.h3>
                <p className="text-gray-300 font-medium">{item.title}</p>
              </GlowingCard>
            ))}
          </motion.div>
        </div>

        {/* Animated Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center border-t border-cyan-500/20 pt-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative inline-block"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <p className="relative text-2xl md:text-4xl font-bold text-white max-w-4xl mx-auto">
              "I don't just write code.
              <motion.span
                className="text-cyan-400 block mt-2"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(6, 182, 212, 0)",
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 0px rgba(6, 182, 212, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                I build experiences that users enjoy
              </motion.span>
              and businesses can rely on."
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
