import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="glass-morphism mt-20 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-gray-400"
          whileHover={{ color: '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          &copy; 2025 Manoj Kumar K. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;