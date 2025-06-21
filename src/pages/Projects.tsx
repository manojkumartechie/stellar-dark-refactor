import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Shield, TrendingUp, BarChart3, Brain, Activity, ChevronDown, ChevronUp, Play, Award } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Synthia - Synthetic Financial Data Generator",
      category: "ai",
      description: "A generative AI platform that creates high-fidelity, privacy-preserving synthetic financial data using GANs and LLMs for training ML models without exposing sensitive customer information.",
      detailedDescription: "Synthia revolutionizes financial data privacy by generating synthetic datasets that maintain statistical properties of real data while ensuring complete privacy compliance. The platform uses advanced Generative Adversarial Networks (GANs) combined with Large Language Models to create realistic financial transactions, customer profiles, and market data.",
      technologies: ["GANs", "LLMs", "Python", "TensorFlow", "PyTorch", "Docker", "AWS"],
      github: "https://github.com/manojkumartechie/synthia-ai",
      demo: "#",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      businessImpact: "Reduced data privacy compliance costs by 60% and accelerated ML model development by 3x",
      metrics: {
        accuracy: "98.5%",
        performance: "40% faster",
        cost_savings: "$2.3M annually"
      },
      features: [
        "Privacy-preserving data generation",
        "Real-time synthetic data streaming",
        "Custom data schema support",
        "GDPR/CCPA compliance built-in"
      ],
      testimonial: {
        text: "Synthia transformed our data strategy, enabling us to develop ML models without privacy concerns.",
        author: "Dr. Sarah Chen, Chief Data Officer"
      }
    },
    {
      id: 2,
      title: "QuantumLeap - Explainable Credit Scoring",
      category: "fintech",
      description: "Advanced credit scoring model incorporating alternative data sources with Explainable AI (XAI) to provide highly accurate risk scores and transparent decision-making.",
      detailedDescription: "QuantumLeap redefines credit scoring by integrating traditional financial data with alternative data sources like social media activity, utility payments, and mobile usage patterns. The XAI framework ensures every decision is explainable and compliant with financial regulations.",
      technologies: ["XGBoost", "SHAP", "LIME", "Python", "Apache Spark", "Kafka", "PostgreSQL"],
      github: "https://github.com/manojkumartechie/quantumleap-credit",
      demo: "#",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      businessImpact: "Improved loan approval accuracy by 25% while reducing default rates by 18%",
      metrics: {
        accuracy: "94.2%",
        precision: "91.8%",
        recall: "89.5%"
      },
      features: [
        "Alternative data integration",
        "Real-time scoring API",
        "Explainable AI dashboard",
        "Regulatory compliance reporting"
      ],
      testimonial: {
        text: "The explainability features helped us gain regulatory approval 50% faster than traditional models.",
        author: "Michael Rodriguez, Risk Management Director"
      }
    },
    {
      id: 3,
      title: "Cerberus - Multi-Layered Fraud Detection",
      category: "security",
      description: "Real-time fraud detection engine analyzing credit, debit, and trading transactions using supervised and unsupervised ML models to detect known and emerging fraud patterns.",
      detailedDescription: "Cerberus employs a multi-layered approach combining rule-based systems, machine learning models, and graph neural networks to detect fraudulent activities in real-time. The system processes millions of transactions per second with sub-millisecond latency.",
      technologies: ["Graph Neural Networks", "Autoencoders", "Kafka", "Redis", "Python", "Kubernetes"],
      github: "https://github.com/manojkumartechie/cerberus-fraud",
      demo: "#",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      businessImpact: "Prevented $50M in fraudulent transactions while reducing false positives by 35%",
      metrics: {
        detection_rate: "99.1%",
        false_positive: "0.8%",
        latency: "< 50ms"
      },
      features: [
        "Real-time transaction monitoring",
        "Adaptive learning algorithms",
        "Multi-channel fraud detection",
        "Automated response system"
      ],
      testimonial: {
        text: "Cerberus has been instrumental in protecting our customers and reducing fraud losses significantly.",
        author: "Jennifer Park, Head of Security Operations"
      }
    },
    {
      id: 4,
      title: "Prism - Personal Finance Dashboard",
      category: "analytics",
      description: "Comprehensive dashboard providing 360-degree view of financial life, aggregating data from all accounts with real-time analysis and predictive insights.",
      detailedDescription: "Prism creates a unified view of users' financial health by securely connecting to bank accounts, credit cards, investments, and loans. Advanced analytics provide personalized insights, spending predictions, and financial goal tracking.",
      technologies: ["Plaid API", "D3.js", "React", "Node.js", "MongoDB", "AWS Lambda"],
      github: "https://github.com/manojkumartechie/prism-dashboard",
      demo: "#",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: BarChart3,
      gradient: "from-green-500 to-emerald-500",
      businessImpact: "Increased user engagement by 150% and improved financial goal achievement by 40%",
      metrics: {
        user_satisfaction: "4.8/5",
        engagement: "+150%",
        goal_achievement: "+40%"
      },
      features: [
        "Multi-account aggregation",
        "Predictive spending analysis",
        "Goal tracking and recommendations",
        "Secure data encryption"
      ],
      testimonial: {
        text: "Prism gave me complete visibility into my finances and helped me save $10,000 in the first year.",
        author: "Alex Thompson, Beta User"
      }
    },
    {
      id: 5,
      title: "Optimus - RL Portfolio Optimization",
      category: "ai",
      description: "Portfolio management system using reinforcement learning to dynamically adjust asset allocations, learning from real-time market data to develop adaptive trading policies.",
      detailedDescription: "Optimus leverages deep reinforcement learning to create adaptive portfolio management strategies. The system continuously learns from market conditions, news sentiment, and economic indicators to optimize asset allocation in real-time.",
      technologies: ["Deep Q-Networks", "PyTorch", "Alpha Vantage API", "Docker", "Kubernetes"],
      github: "https://github.com/manojkumartechie/optimus-portfolio",
      demo: "#",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Brain,
      gradient: "from-indigo-500 to-purple-500",
      businessImpact: "Achieved 23% higher returns compared to traditional portfolio strategies",
      metrics: {
        returns: "+23%",
        sharpe_ratio: "1.85",
        max_drawdown: "-8.2%"
      },
      features: [
        "Reinforcement learning algorithms",
        "Real-time market data integration",
        "Risk-adjusted optimization",
        "Backtesting framework"
      ],
      testimonial: {
        text: "Optimus consistently outperformed our traditional strategies while maintaining lower risk profiles.",
        author: "David Kim, Portfolio Manager"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'security', label: 'Security' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore my portfolio of data science and AI projects that demonstrate expertise in machine learning, analytics, and innovative solutions with measurable business impact.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-morphism rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -100, rotateX: 90 }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                layout
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Project Image */}
                  <motion.div 
                    className="relative overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />
                    <motion.div 
                      className="absolute top-4 left-4 p-3 rounded-lg bg-black/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Project Content */}
                  <div className="space-y-6">
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2"
                        whileHover={{ scale: 1.02, color: "#3b82f6" }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Business Impact */}
                    <motion.div 
                      className="bg-green-500/10 border border-green-500/20 rounded-lg p-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">Business Impact</span>
                      </div>
                      <p className="text-gray-300 text-sm">{project.businessImpact}</p>
                    </motion.div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <motion.div 
                          key={key}
                          className="text-center p-3 bg-white/5 rounded-lg"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        >
                          <div className="text-lg font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-all duration-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600/50 hover:bg-blue-500/50 text-white rounded-lg transition-all duration-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={18} />
                        <span>Demo</span>
                      </motion.a>
                      <motion.button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="flex items-center gap-2 px-6 py-3 bg-purple-600/50 hover:bg-purple-500/50 text-white rounded-lg transition-all duration-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedProject === project.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        <span>Details</span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10 p-8 bg-black/20"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-4">Detailed Overview</h4>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {project.detailedDescription}
                          </p>
                          
                          <h5 className="text-lg font-semibold text-white mb-3">Key Features</h5>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <motion.li 
                                key={index}
                                className="flex items-center gap-2 text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, index) => (
                              <motion.span
                                key={index}
                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {project.testimonial && (
                            <motion.div 
                              className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <h5 className="text-lg font-semibold text-white mb-3">Client Testimonial</h5>
                              <blockquote className="text-gray-300 italic mb-3">
                                "{project.testimonial.text}"
                              </blockquote>
                              <cite className="text-blue-400 font-medium">
                                — {project.testimonial.author}
                              </cite>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;