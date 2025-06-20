import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Rocket, Github, Linkedin, ExternalLink } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Data Scientist', 'AI Engineer', 'ML Specialist', 'Analytics Expert'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const socialLinks = [
    {
      href: 'https://github.com/manojkumartechie',
      icon: Github,
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      href: 'https://www.linkedin.com/in/manojkumartechie/',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      href: 'https://leetcode.com/manojkumartechie/',
      icon: ExternalLink,
      label: 'LeetCode',
      color: 'hover:text-yellow-400'
    },
    {
      href: 'https://www.kaggle.com/manojkumartechie',
      icon: ExternalLink,
      label: 'Kaggle',
      color: 'hover:text-cyan-400'
    }
  ];

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateY: -90
    },
    in: {
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    out: {
      opacity: 0,
      scale: 1.2,
      rotateY: 90
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
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Gradient Blur Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-3xl" />
      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 opacity-30">
        <ThreeScene />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full glass-morphism flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <motion.span 
              className="gradient-text"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Manoj Kumar K
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.h2
            className="text-2xl md:text-4xl mb-8 text-gray-300"
            variants={itemVariants}
          >
            I'm a{' '}
            <motion.span 
              className="text-blue-400"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {currentText}
            </motion.span>
            <motion.span 
              className="text-blue-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            🚀 Experienced in identifying and resolving complex data challenges, delivering{' '}
            <motion.strong 
              className="text-white"
              whileHover={{ scale: 1.05, color: "#3b82f6" }}
            >
              actionable insights
            </motion.strong>
            , and supporting data-driven decision-making with expertise in machine learning, 
            big data technologies, and financial analytics.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="https://drive.google.com/file/d/1I3trn1h04xdu1u-Exw6edlgC1PVmOi22/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary glass-morphism"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.a
              href="/projects"
              className="btn btn-secondary glass-morphism"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                backgroundColor: "#3b82f6",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={20} />
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 glass-morphism rounded-full flex items-center justify-center text-white transition-colors duration-300 ${link.color}`}
                whileHover={{ 
                  scale: 1.2, 
                  y: -10,
                  rotate: 360,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20, rotate: -180 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;