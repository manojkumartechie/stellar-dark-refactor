
import React from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navigation = () => {
  const [location] = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/skills', icon: Code, label: 'Skills' },
    { path: '/projects', icon: Briefcase, label: 'Projects' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="container mx-auto">
        <motion.div 
          className="glass-morphism rounded-full px-8 py-4 backdrop-blur-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Manoj Kumar K
            </motion.h1>
            
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.a
                    className={`p-3 rounded-full transition-all duration-300 relative ${
                      location === item.path 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={20} />
                    {location === item.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-blue-500/20 rounded-full border border-blue-400/30"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
