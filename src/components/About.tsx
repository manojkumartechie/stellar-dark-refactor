import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, PieChart, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
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

  const strengths = [
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Advanced statistical analysis and predictive modeling with expertise in Python, R, and SQL for extracting actionable insights from complex datasets.',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Deep learning, neural networks, time series forecasting, and risk assessment using TensorFlow, PyTorch, and scikit-learn.',
      color: 'text-purple-400'
    },
    {
      icon: PieChart,
      title: 'Financial Analytics',
      description: 'Portfolio optimization, algorithmic trading, fraud detection, and comprehensive risk management solutions for financial institutions.',
      color: 'text-green-400'
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 7826807488', color: 'text-blue-400' },
    { icon: Mail, text: 'manojkumar9384@outlook.com', color: 'text-purple-400' },
    { icon: MapPin, text: 'Dindigul, Tamil Nadu, India', color: 'text-green-400' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Professional Summary */}
          <motion.div
            className="glass-morphism p-8 card-3d"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Dedicated Data Analyst with extensive experience in developing predictive analytics platforms, 
                fraud detection systems, and financial risk models. Specialized in leveraging Python, machine learning, 
                and big data technologies to drive data-driven decision making.
              </p>
              <p>
                Proven track record in implementing end-to-end data solutions from ETL pipelines to interactive 
                dashboards, with expertise in cloud deployment and real-time analytics systems.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Strengths */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8">Core Strengths</h3>
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism p-6 card-3d"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-slate-800/50 ${strength.color}`}>
                      <strength.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;