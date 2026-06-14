import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    company: "Big Byte Innovations",
    position: "Full Stack Developer Intern",
    period: "June 2025 - August 2025",
    location: "On-Site",
    description: [
      "Designed responsive and cross-browser compatible web pages.",
      "Used HTML5, CSS3, Bootstrap, and React.js",
      "Collaborated to meet project requirements and deadlines",
      "Utilized Git and GitHub for version control and efficient code management",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    icon: "💻",
  },
  {
    id: 2,
    company: "CodeQuotient",
    position: "Web Development Intern",
    period: "22nd Feburary 2026 - 31st May 2026",
    location: "On-Site",
    description: [
     "Focused on building scalable web applications using modern frontend technologies and reusable UI components to enhance user experience",
      "Actively practices data structures and algorithms in Java while collaborating on projects using Git and GitHub for efficient version control."
    ],
    technologies: ["JavaScript", "HTML/CSS", "React", "Git", "Express" , "Node.js"],
    icon: "💻",
  },
 
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a0f2a] to-[#020617]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm font-semibold"
            animate={{
              textShadow: [
                "0 0 0px rgba(6, 182, 212, 0)",
                "0 0 10px rgba(6, 182, 212, 0.5)",
                "0 0 0px rgba(6, 182, 212, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✦ My Journey ✦
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            Professional
            <span className="text-cyan-400 block mt-2">Experience</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />

          {/* Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 lg:space-y-0"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative lg:flex lg:items-center lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full z-10">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75" />
                </div>

                {/* Card Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-500/20 p-6 md:p-8 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-2xl">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-cyan-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        📅 {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        📍 {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-gray-300 text-sm md:text-base flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-1">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs md:text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Empty spacer for desktop layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Quote / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-500/20">
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              "Every line of code is an opportunity to create something amazing. 
              I've worked with amazing teams and clients to deliver impactful solutions."
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-cyan-400">★</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
      
      </div>
    </section>
  );
};

export default Experience;