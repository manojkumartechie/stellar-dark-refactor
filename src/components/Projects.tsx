import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Shield, TrendingUp, BarChart3, Brain, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Synthia - Synthetic Financial Data Generator",
      description: "A generative AI platform that creates high-fidelity, privacy-preserving synthetic financial data using GANs and LLMs for training ML models without exposing sensitive customer information.",
      technologies: ["GANs", "LLMs", "Python", "Cloud Computing"],
      github: "https://github.com/manojkumartechie/synthia-ai",
      demo: "#",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "QuantumLeap - Explainable Credit Scoring",
      description: "Advanced credit scoring model incorporating alternative data sources with Explainable AI (XAI) to provide highly accurate risk scores and transparent decision-making.",
      technologies: ["XGBoost", "SHAP", "LIME", "Python", "Big Data"],
      github: "https://github.com/manojkumartechie/quantumleap-credit",
      demo: "#",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cerberus - Multi-Layered Fraud Detection",
      description: "Real-time fraud detection engine analyzing credit, debit, and trading transactions using supervised and unsupervised ML models to detect known and emerging fraud patterns.",
      technologies: ["Graph Neural Networks", "Autoencoders", "Kafka", "Python"],
      github: "https://github.com/manojkumartechie/cerberus-fraud",
      demo: "#",
      icon: Shield,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Prism - Personal Finance Dashboard",
      description: "Comprehensive dashboard providing 360-degree view of financial life, aggregating data from all accounts with real-time analysis and predictive insights.",
      technologies: ["Plaid API", "D3.js", "React", "Real-time Analytics"],
      github: "https://github.com/manojkumartechie/prism-dashboard",
      demo: "#",
      icon: BarChart3,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Optimus - RL Portfolio Optimization",
      description: "Portfolio management system using reinforcement learning to dynamically adjust asset allocations, learning from real-time market data to develop adaptive trading policies.",
      technologies: ["Deep Q-Networks", "Time-Series Analysis", "Python", "Cloud Computing"],
      github: "https://github.com/manojkumartechie/optimus-portfolio",
      demo: "#",
      icon: Brain,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Pulse - Market Sentiment Analysis",
      description: "Real-time platform analyzing news, social media, and regulatory filings to gauge market sentiment using advanced NLP for predictive market insights.",
      technologies: ["NLP", "Apache Flink", "Python", "Real-time Processing"],
      github: "https://github.com/manojkumartechie/pulse-sentiment",
      demo: "#",
      icon: Activity,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of data science and AI projects that demonstrate expertise in machine learning, analytics, and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 card-3d group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Project Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>

              {/* Project Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-all duration-200 hover:scale-105"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/50 hover:bg-blue-500/50 text-white rounded-lg transition-all duration-200 hover:scale-105"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;