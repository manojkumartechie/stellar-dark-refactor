import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, PieChart, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: -100,
      rotateX: -90
    },
    in: {
      opacity: 1,
      x: 0,
      rotateX: 0
    },
    out: {
      opacity: 0,
      x: 100,
      rotateX: 90
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const strengths = [
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Advanced statistical analysis and predictive modeling with expertise in Python, R, and SQL for extracting actionable insights from complex datasets.',
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Deep learning, neural networks, time series forecasting, and risk assessment using TensorFlow, PyTorch, and scikit-learn.',
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: PieChart,
      title: 'Financial Analytics',
      description: 'Portfolio optimization, algorithmic trading, fraud detection, and comprehensive risk management solutions for financial institutions.',
      color: 'text-green-400',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 7826807488', color: 'text-blue-400' },
    { icon: Mail, text: 'manojkumar9384@outlook.com', color: 'text-purple-400' },
    { icon: MapPin, text: 'Dindigul, Tamil Nadu, India', color: 'text-green-400' }
  ];

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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50 backdrop-blur-3xl" />
      
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
            About Me
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Professional Summary */}
          <motion.div
            className="glass-morphism p-8 card-3d"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Professional Summary
            </motion.h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Dedicated Data Analyst with expertise in developing predictive analytics platforms, 
                fraud detection systems, and financial risk models. Specialized in leveraging Python, machine learning, 
                and big data technologies to drive data-driven decision making.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Proven track record in implementing end-to-end data solutions from ETL pipelines to interactive 
                dashboards, with expertise in cloud deployment and real-time analytics systems.
              </motion.p>
            </div>

            <motion.div 
              className="mt-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 10, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </motion.div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Core Strengths */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Core Strengths
            </motion.h3>
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism p-6 card-3d relative overflow-hidden"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${strength.gradient} opacity-0`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <motion.div 
                      className={`p-3 rounded-lg bg-slate-800/50 ${strength.color}`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 360,
                        boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <strength.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="text-xl font-semibold text-white mb-2"
                        whileHover={{ color: strength.color.replace('text-', '#') }}
                      >
                        {strength.title}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-300 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {strength.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;