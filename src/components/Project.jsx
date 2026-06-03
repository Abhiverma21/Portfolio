import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";

// Import images directly
import quicktalkImg from "../assets/QuickTalk.png";
import SSJ from "../assets/SSJ.png";
import jobtrackerImg from "../assets/JobPilot.png";

const projects = [
  {
    title: "QuickTalk",
    description:
      "Real-time chat application built with the MERN stack featuring authentication, invitations, notifications and Socket.IO powered messaging.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/Abhiverma21/QuickTalk",
    live: "https://quick-talk-orpin.vercel.app/",
    image: quicktalkImg,  
    alt: "QuickTalk Chat App Screenshot"
  },
  {
    title: "Shree Shyam Jewellers",
    description:
      "Modern animated developer portfolio built with React, Tailwind CSS and Framer Motion.",
    tech: ["Next.js", "Tailwind", "Express" , "MongoDB"],
    github: "https://github.com/Abhiverma21/Shree-Shyam-Jewellers",
    live: "https://shree-shyam-jewellers.vercel.app/",
    image: SSJ, 
    alt: "Shree Shyam Jewellers Screenshot"
  },
  {
    title: "Job Tracker",
    description:
      "Application to track job applications, interviews and hiring progress in a single dashboard.",
    tech: ["React", "Node.js", "MongoDB" , "Express"],
    github: "https://github.com/Abhiverma21/Jobpilot-Frontend",
    live: "https://jobpilot-frontend-six.vercel.app/",
    image: jobtrackerImg,  
    alt: "Job Tracker Dashboard Screenshot"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#020617] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Featured Work
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Selected
            <span className="text-cyan-400"> Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-cyan-500/20
                bg-white/5
                backdrop-blur-xl
                p-6
                flex
                flex-col
                md:flex-row
                gap-6
              "
            >
              {/* Tiltable Image Section - Fixed Dimensions */}
              <motion.div
                className="
                  relative
                  w-full
                  md:w-48
                  lg:w-56
                  flex-shrink-0
                  rounded-2xl
                  overflow-hidden
                  cursor-pointer
                "
                style={{
                  aspectRatio: "4/3", // Fixed aspect ratio 4:3
                }}
                whileHover={{
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Actual Project Image */}
                {project.image ? (
                  <div className="w-full h-full relative">
                    <img 
                      src={project.image} 
                      alt={project.alt || project.title}
                      className="
                        w-full 
                        h-full 
                        object-cover 
                        object-center
                        transition-all 
                        duration-500 
                        group-hover:scale-110
                      "
                      style={{
                        objectPosition: "center",
                      }}
                    />
                    {/* Dark Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : (
                  /* Fallback Gradient Background if image not available */
                  <div className="
                    w-full h-full 
                    bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30
                    flex items-center justify-center
                  ">
                    <HiOutlinePhotograph size={48} className="text-white/60" />
                  </div>
                )}
                
                {/* Overlay with title - Fixed position */}
                <div className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/50
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  translate-y-full
                  group-hover:translate-y-0
                  p-3
                ">
                  <p className="text-white font-semibold text-xs sm:text-sm truncate">
                    {project.title}
                  </p>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="relative z-10 flex-1 min-w-0">
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-cyan-500/0
                  via-cyan-500/5
                  to-cyan-500/0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  -z-10
                  rounded-2xl
                " />

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        px-2.5 
                        py-1 
                        rounded-full 
                        text-[10px] 
                        sm:text-xs
                        bg-cyan-500/10 
                        text-cyan-300
                        border 
                        border-cyan-500/20
                        whitespace-nowrap
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-1.5
                      sm:gap-2
                      px-3
                      sm:px-4
                      py-2
                      sm:py-2.5
                      rounded-xl
                      border
                      border-cyan-500/20
                      text-white
                      hover:bg-cyan-500/10
                      transition
                      text-xs
                      sm:text-sm
                    "
                  >
                    <FiGithub size={14} className="sm:w-4 sm:h-4" />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-1.5
                      sm:gap-2
                      px-3
                      sm:px-4
                      py-2
                      sm:py-2.5
                      rounded-xl
                      bg-cyan-400
                      text-black
                      font-semibold
                      hover:bg-cyan-500
                      transition
                      text-xs
                      sm:text-sm
                    "
                  >
                    <FiExternalLink size={14} className="sm:w-4 sm:h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;