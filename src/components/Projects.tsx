
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization with automated reporting and alerting system.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      tech: ["React", "D3.js", "Python", "Flask"],
      github: "#",
      demo: "#"
    },
    {
      title: "Sentiment Analysis Engine",
      description: "NLP model for social media sentiment analysis with 92% accuracy across multiple languages.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tech: ["Python", "NLTK", "TensorFlow", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Sales Forecasting System",
      description: "Time series forecasting model for sales prediction with automated feature selection and hyperparameter tuning.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      tech: ["Python", "Prophet", "ARIMA", "AWS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fraud Detection Model",
      description: "Advanced fraud detection system using deep learning and anomaly detection techniques.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tech: ["Python", "PyTorch", "Pandas", "Redis"],
      github: "#",
      demo: "#"
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system with matrix factorization and deep learning approaches.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tech: ["Python", "TensorFlow", "Spark", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of data science projects showcasing end-to-end solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium text-center hover:border-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    Demo <ArrowRight size={14} strokeWidth={1} />
                  </motion.a>
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
