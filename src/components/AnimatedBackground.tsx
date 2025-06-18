import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
      
      {/* Animated floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: '10%', left: '10%' }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: '60%', right: '10%' }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 70, -30, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ bottom: '20%', left: '20%' }}
      />
      
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-10"
        style={{
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: '40%', right: '30%' }}
      />
    </div>
  );
};

export default AnimatedBackground;