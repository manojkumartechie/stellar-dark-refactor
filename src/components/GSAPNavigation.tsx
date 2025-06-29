import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { gsap } from 'gsap';

const GSAPNavigation = () => {
  const [location, navigate] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Refs for GSAP animations
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  // Initialize GSAP timeline
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    // Create timeline for menu animations
    tl.current = gsap.timeline({ paused: true });
    
    // Set initial states
    gsap.set(menuRef.current, { x: '100%' });
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set('.menu-item', { x: 50, opacity: 0 });
    gsap.set(closeButtonRef.current, { scale: 0, rotation: -180 });

    // Build animation timeline
    tl.current
      .to(overlayRef.current, { 
        opacity: 1, 
        duration: 0.3, 
        ease: 'power2.out' 
      })
      .to(menuRef.current, { 
        x: '0%', 
        duration: 0.6, 
        ease: 'power3.out' 
      }, '-=0.1')
      .to(closeButtonRef.current, { 
        scale: 1, 
        rotation: 0, 
        duration: 0.4, 
        ease: 'back.out(1.7)' 
      }, '-=0.3')
      .to('.menu-item', { 
        x: 0, 
        opacity: 1, 
        duration: 0.4, 
        stagger: 0.1, 
        ease: 'power2.out' 
      }, '-=0.2');

    return () => {
      tl.current?.kill();
    };
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
    tl.current?.play();
    
    // Animate hamburger to X
    gsap.to('.hamburger-line-1', { rotation: 45, y: 6, duration: 0.3 });
    gsap.to('.hamburger-line-2', { opacity: 0, duration: 0.3 });
    gsap.to('.hamburger-line-3', { rotation: -45, y: -6, duration: 0.3 });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
    tl.current?.reverse();
    
    // Animate X back to hamburger
    gsap.to('.hamburger-line-1', { rotation: 0, y: 0, duration: 0.3 });
    gsap.to('.hamburger-line-2', { opacity: 1, duration: 0.3 });
    gsap.to('.hamburger-line-3', { rotation: 0, y: 0, duration: 0.3 });
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    closeMenu();
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="gsap-nav">
        <div className="nav-container">
          {/* Logo */}
          <div ref={logoRef} className="nav-logo">
            <button
              onClick={() => navigate('/')}
              className="logo-button"
              aria-label="Go to homepage"
            >
              <span className="logo-text">Manoj Kumar K</span>
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            ref={hamburgerRef}
            className="hamburger-button"
            onClick={openMenu}
            onKeyDown={(e) => handleKeyDown(e, openMenu)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="navigation-menu"
          >
            <span className="hamburger-line hamburger-line-1"></span>
            <span className="hamburger-line hamburger-line-2"></span>
            <span className="hamburger-line hamburger-line-3"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="menu-overlay"
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      {/* Slide-in Menu */}
      <div
        ref={menuRef}
        className="slide-menu"
        id="navigation-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          className="close-button"
          onClick={closeMenu}
          onKeyDown={(e) => handleKeyDown(e, closeMenu)}
          aria-label="Close navigation menu"
        >
          <span className="close-line close-line-1"></span>
          <span className="close-line close-line-2"></span>
        </button>

        {/* Menu Items */}
        <div ref={menuItemsRef} className="menu-items">
          {navItems.map((item, index) => (
            <div key={item.path} className="menu-item">
              <button
                className={`menu-link ${location === item.path ? 'active' : ''}`}
                onClick={() => handleNavClick(item.path)}
                onKeyDown={(e) => handleKeyDown(e, () => handleNavClick(item.path))}
                aria-current={location === item.path ? 'page' : undefined}
              >
                <span className="menu-text">{item.label}</span>
                <span className="menu-underline"></span>
              </button>
            </div>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="menu-footer">
          <p className="menu-footer-text">Let's build something amazing together</p>
        </div>
      </div>

      <style jsx>{`
        /* Main Navigation Styles */
        .gsap-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo .logo-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
        }

        .logo-text:hover {
          transform: scale(1.05);
        }

        /* Hamburger Button */
        .hamburger-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .hamburger-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .hamburger-button:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background: #ffffff;
          margin: 3px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        /* Menu Overlay */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1001;
          backdrop-filter: blur(5px);
        }

        /* Slide-in Menu */
        .slide-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 500px;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
          z-index: 1002;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          overflow-y: auto;
        }

        /* Close Button */
        .close-button {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: none;
          border: none;
          cursor: pointer;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .close-button:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        .close-line {
          position: absolute;
          width: 24px;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
        }

        .close-line-1 {
          transform: rotate(45deg);
        }

        .close-line-2 {
          transform: rotate(-45deg);
        }

        /* Menu Items */
        .menu-items {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-top: 4rem;
        }

        .menu-item {
          position: relative;
        }

        .menu-link {
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
        }

        .menu-link:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 4px;
        }

        .menu-text {
          font-size: 2.5rem;
          font-weight: 600;
          color: #ffffff;
          transition: all 0.3s ease;
          display: block;
        }

        .menu-link:hover .menu-text {
          color: #3b82f6;
          transform: translateY(-2px);
        }

        .menu-link.active .menu-text {
          color: #3b82f6;
        }

        /* Animated Underline */
        .menu-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transform: translateX(-50%);
          transition: width 0.4s ease;
          border-radius: 2px;
        }

        .menu-link:hover .menu-underline,
        .menu-link.active .menu-underline {
          width: 100%;
        }

        /* Menu Footer */
        .menu-footer {
          text-align: center;
          margin-top: 2rem;
        }

        .menu-footer-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          font-style: italic;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
          }

          .slide-menu {
            width: 100%;
            max-width: none;
          }

          .menu-text {
            font-size: 2rem;
          }

          .menu-items {
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .menu-text {
            font-size: 1.8rem;
          }

          .slide-menu {
            padding: 1.5rem;
          }

          .close-button {
            top: 1.5rem;
            right: 1.5rem;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .hamburger-line,
          .close-line,
          .menu-text {
            background: #ffffff;
            color: #ffffff;
          }

          .menu-underline {
            background: #ffffff;
          }
        }
      `}</style>
    </>
  );
};

export default GSAPNavigation;