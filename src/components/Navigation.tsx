import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/">
              <motion.h1 
                className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                Manoj Kumar K
              </motion.h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.a
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                      location === item.path 
                        ? 'text-blue-400 bg-blue-500/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {location === item.path && (
                      <motion.div
                        layoutId="activeDesktop"
                        className="absolute inset-0 bg-blue-500/20 rounded-lg border border-blue-400/30"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 rounded-lg mt-2 border border-white/10">
                {navItems.map((item, index) => (
                  <Link key={item.path} href={item.path}>
                    <motion.a
                      onClick={closeMobileMenu}
                      className={`relative block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                        location === item.path 
                          ? 'text-blue-400 bg-blue-500/20 border border-blue-400/30' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        x: 4,
                        boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                      {location === item.path && (
                        <motion.div
                          layoutId="activeMobile"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 rounded-r"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                    </motion.a>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            style={{ top: '64px' }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;