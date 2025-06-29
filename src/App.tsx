import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@/hooks/useGSAP';
import { initGSAPAnimations } from '@/utils/gsapAnimations';
import ThreeDBackground from '@/components/ThreeDBackground';
import EnhancedHero from '@/components/EnhancedHero';
import EnhancedProjects from '@/components/EnhancedProjects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  const { cleanup } = useGSAP();

  useEffect(() => {
    // Initialize GSAP animations
    initGSAPAnimations();

    // Cleanup on unmount
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* 3D Background */}
      <ThreeDBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <EnhancedHero />
        
        {/* Projects Section */}
        <EnhancedProjects />
        
        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Passionate data scientist and AI engineer with expertise in machine learning, 
                deep learning, and data analytics. Creating innovative solutions that drive 
                business growth and technological advancement.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready to collaborate on your next AI project? Let's discuss how we can 
                transform your data into intelligent solutions.
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;