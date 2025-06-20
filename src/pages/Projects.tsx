import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard3D from '../components/ProjectCard3D';

const Projects = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      rotateY: 180,
      scale: 0.8
    },
    in: {
      opacity: 1,
      rotateY: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      rotateY: -180,
      scale: 1.2
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const projects = [
    {
      title: "Synthia - Synthetic Financial Data Generator",
      description: "A generative AI platform that creates high-fidelity, privacy-preserving synthetic financial data using GANs and LLMs for training ML models without exposing sensitive customer information.",
      technologies: ["GANs", "LLMs", "Python", "Cloud Computing"],
      github: "https://github.com/manojkumartechie/synthia-ai",
      demo: "#",
      color: "#8b5cf6"
    },
    {
      title: "QuantumLeap - Explainable Credit Scoring",
      description: "Advanced credit scoring model incorporating alternative data sources with Explainable AI (XAI) to provide highly accurate risk scores and transparent decision-making.",
      technologies: ["XGBoost", "SHAP", "LIME", "Python", "Big Data"],
      github: "https://github.com/manojkumartechie/quantumleap-credit",
      demo: "#",
      color: "#3b82f6"
    },
    {
      title: "Cerberus - Multi-Layered Fraud Detection",
      description: "Real-time fraud detection engine analyzing credit, debit, and trading transactions using supervised and unsupervised ML models to detect known and emerging fraud patterns.",
      technologies: ["Graph Neural Networks", "Autoencoders", "Kafka", "Python"],
      github: "https://github.com/manojkumartechie/cerberus-fraud",
      demo: "#",
      color: "#ef4444"
    },
    {
      title: "Prism - Personal Finance Dashboard",
      description: "Comprehensive dashboard providing 360-degree view of financial life, aggregating data from all accounts with real-time analysis and predictive insights.",
      technologies: ["Plaid API", "D3.js", "React", "Real-time Analytics"],
      github: "https://github.com/manojkumartechie/prism-dashboard",
      demo: "#",
      color: "#10b981"
    },
    {
      title: "Optimus - RL Portfolio Optimization",
      description: "Portfolio management system using reinforcement learning to dynamically adjust asset allocations, learning from real-time market data to develop adaptive trading policies.",
      technologies: ["Deep Q-Networks", "Time-Series Analysis", "Python", "Cloud Computing"],
      github: "https://github.com/manojkumartechie/optimus-portfolio",
      demo: "#",
      color: "#6366f1"
    },
    {
      title: "Pulse - Market Sentiment Analysis",
      description: "Real-time platform analyzing news, social media, and regulatory filings to gauge market sentiment using advanced NLP for predictive market insights.",
      technologies: ["NLP", "Apache Flink", "Python", "Real-time Processing"],
      github: "https://github.com/manojkumartechie/pulse-sentiment",
      demo: "#",
      color: "#f59e0b"
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

  return (
    <motion.div
      className="min-h-screen py-20 relative overflow-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Gradient Blur Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/40 to-purple-900/50 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore my portfolio of data science and AI projects that demonstrate expertise in machine learning, analytics, and innovative solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
            >
              <ProjectCard3D {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;