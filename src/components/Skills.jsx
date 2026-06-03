import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: ["React.js", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"],
    color: "cyan"
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "JWT Auth"],
    color: "blue"
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: ["Git/GitHub", "Postman", "VS Code", "Vercel", "Figma"],
    color: "purple"
  },
  {
    name: "Learning",
    icon: "📚",
    skills: ["Next.js", "TypeScript", "System Design", "AWS Basics"],
    color: "pink"
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.1 + i * 0.03 }}
                    className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-300 text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            💼 Available for <span className="text-cyan-400">freelance work</span> and <span className="text-cyan-400">full-time opportunities</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;