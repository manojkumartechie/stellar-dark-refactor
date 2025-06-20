import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateZ: -180
    },
    in: {
      opacity: 1,
      scale: 1,
      rotateZ: 0
    },
    out: {
      opacity: 0,
      scale: 1.2,
      rotateZ: 180
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email',
      info: 'manojkumar9384@outlook.com',
      action: 'Send Email',
      href: 'mailto:manojkumar9384@outlook.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 7826807488',
      action: 'Call Now',
      href: 'tel:+917826807488',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Dindigul, Tamil Nadu, India',
      action: 'Connect Online',
      href: '#social',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/manojkumartechie/',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-700'
    },
    {
      href: 'https://github.com/manojkumartechie',
      icon: Github,
      label: 'GitHub',
      color: 'from-gray-700 to-black'
    },
    {
      href: 'https://leetcode.com/manojkumartechie/',
      icon: ExternalLink,
      label: 'LeetCode',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      href: 'https://www.kaggle.com/manojkumartechie',
      icon: ExternalLink,
      label: 'Kaggle',
      color: 'from-cyan-400 to-blue-400'
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-cyan-900/40 backdrop-blur-3xl" />
      
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
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Let's discuss opportunities to collaborate on data science and AI projects
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-8 text-center card-3d group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10`}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center relative z-10`}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 360,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <card.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h3 
                  className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-4 break-words"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {card.info}
                </motion.p>

                {/* Action Button or Social Links */}
                {index === 2 ? (
                  <div className="flex justify-center gap-3 mt-4">
                    {socialLinks.map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white transition-all duration-300`}
                        whileHover={{ 
                          y: -3, 
                          scale: 1.1,
                          rotate: 360,
                          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.5 + socialIndex * 0.1 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                ) : (
                  <motion.a
                    href={card.href}
                    className="inline-flex items-center px-6 py-2 bg-blue-600/50 hover:bg-blue-500/50 text-white rounded-lg transition-all duration-200"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.action}
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;