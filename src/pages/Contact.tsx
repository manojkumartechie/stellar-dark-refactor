import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      action: 'View on Map',
      href: 'https://maps.google.com/?q=Dindigul,Tamil+Nadu,India',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/manojkumartechie/',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-700',
      description: 'Professional network and career updates'
    },
    {
      href: 'https://github.com/manojkumartechie',
      icon: Github,
      label: 'GitHub',
      color: 'from-gray-700 to-black',
      description: 'Open source projects and code repositories'
    },
    {
      href: 'https://leetcode.com/manojkumartechie/',
      icon: ExternalLink,
      label: 'LeetCode',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Coding challenges and algorithm solutions'
    },
    {
      href: 'https://www.kaggle.com/manojkumartechie',
      icon: ExternalLink,
      label: 'Kaggle',
      color: 'from-cyan-400 to-blue-400',
      description: 'Data science competitions and datasets'
    }
  ];

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
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ready to discuss your next data science project? Let's explore how we can transform your data into actionable insights and drive business growth together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            className="glass-morphism p-8 rounded-2xl"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Send a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="your.email@company.com"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                  placeholder="Your company name"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, goals, and how I can help..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600/50 hover:bg-blue-500/50 text-white rounded-lg transition-all duration-200 font-semibold"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                className="glass-morphism p-6 rounded-xl relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <card.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1">{card.title}</h4>
                    <p className="text-gray-300 mb-2">{card.info}</p>
                    <motion.a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {card.action} →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-8"
            variants={itemVariants}
          >
            Connect on Social Platforms
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-morphism p-6 rounded-xl text-center group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${link.color} flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <link.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {link.label}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;