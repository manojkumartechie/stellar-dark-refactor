import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const EnhancedHero: React.FC = () => {
  const { registerRef, fadeIn, slideIn, typewriter, staggerText, hoverScale, hoverGlow } = useGSAP();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize hero animations
    const tl = gsap.timeline();
    
    // Hero entrance animation
    tl.fromTo(heroRef.current, 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    )
    .add(() => {
      // Start typewriter effect
      typewriter('hero-title', 'Data Scientist & AI Engineer', 0.05);
    }, '-=0.5')
    .add(() => {
      // Stagger animate subtitle and buttons
      staggerText(['hero-subtitle', 'hero-description'], 0.1);
    }, '-=0.3')
    .add(() => {
      // Animate CTA buttons
      gsap.fromTo('.hero-cta', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }
      );
    }, '-=0.2');

    // Parallax effect for background elements
    gsap.to('.hero-bg-element', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, [typewriter, staggerText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-bg-element absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="hero-bg-element absolute top-40 right-40 w-24 h-24 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="hero-bg-element absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main title with typewriter effect */}
          <motion.h1
            ref={(el) => registerRef('hero-title', el)}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'power3.out' }}
          >
            Data Scientist & AI Engineer
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            ref={(el) => registerRef('hero-subtitle', el)}
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transforming Data into Intelligent Solutions
          </motion.h2>

          {/* Description */}
          <motion.p
            ref={(el) => registerRef('hero-description', el)}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Specializing in machine learning, deep learning, and data analytics. 
            Creating innovative AI solutions that drive business growth and technological advancement.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="hero-cta px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              {...hoverGlow('hero-cta-primary', '#3b82f6')}
            >
              View Projects
            </motion.button>

            <motion.button
              className="hero-cta px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              {...hoverGlow('hero-cta-secondary', '#3b82f6')}
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
    </section>
  );
};

export default EnhancedHero; 