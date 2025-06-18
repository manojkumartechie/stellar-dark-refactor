import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss opportunities to collaborate on data science and AI projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-8 text-center card-3d group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <card.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-300 mb-4 break-words">{card.info}</p>

              {/* Action Button or Social Links */}
              {index === 2 ? (
                <div className="flex justify-center gap-3 mt-4">
                  {socialLinks.map((social, socialIndex) => (
                    <motion.a
                      key={socialIndex}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white transition-all duration-300 hover:scale-110`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: socialIndex * 0.1 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              ) : (
                <motion.a
                  href={card.href}
                  className="inline-flex items-center px-6 py-2 bg-blue-600/50 hover:bg-blue-500/50 text-white rounded-lg transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {card.action}
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;