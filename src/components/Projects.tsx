import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Only non-AI/ML/Fintech projects remain
const projects = [
  {
    title: "Prism - Personal Finance Dashboard",
    description:
      "Comprehensive dashboard providing 360-degree view of financial life, aggregating data from all accounts with real-time analysis and predictive insights.",
    technologies: ["Plaid API", "D3.js", "React", "Real-time Analytics"],
    github: "https://github.com/manojkumartechie/prism-dashboard",
    demo: "#",
  },
];

const TechnologyChip = ({ tech }) => (
  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
    {tech}
  </span>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of data science and analytics projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <TechnologyChip key={techIndex} tech={tech} />
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                  aria-label={`View ${project.title} code on GitHub`}
                >
<<<<<<< HEAD
                  <Github size={16} style={{ filter: "none" }} />
=======
                  <Github size={16} />
>>>>>>> 18b43fed0822f56f8ea0b7ae668c6b34e0cfd187
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
                  aria-label={`View ${project.title} demo`}
                >
<<<<<<< HEAD
                  <ExternalLink size={16} style={{ filter: "none" }} />
=======
                  <ExternalLink size={16} />
>>>>>>> 18b43fed0822f56f8ea0b7ae668c6b34e0cfd187
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
