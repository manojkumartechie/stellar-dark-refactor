import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Animation configurations
export const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: 'power3.out',
  stagger: 0.1,
  scrollTrigger: {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
};

// Page transition animations
export const pageTransitions = {
  fadeIn: (element: string | Element) => {
    return gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }
    );
  },
  
  slideIn: (element: string | Element, direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
    const startPos = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      up: { x: 0, y: 100 },
      down: { x: 0, y: -100 }
    };
    
    return gsap.fromTo(element,
      { opacity: 0, ...startPos[direction] },
      { opacity: 1, x: 0, y: 0, duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }
    );
  },
  
  scaleIn: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8, rotationY: 180 },
      { opacity: 1, scale: 1, rotationY: 0, duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }
    );
  },
  
  flipIn: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, rotationX: 90, scale: 0.8 },
      { opacity: 1, rotationX: 0, scale: 1, duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }
    );
  }
};

// Scroll-based animations
export const scrollAnimations = {
  parallax: (element: string | Element, speed: number = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  },
  
  revealOnScroll: (element: string | Element, direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
    const startPos = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      up: { x: 0, y: 100 },
      down: { x: 0, y: -100 }
    };
    
    return gsap.fromTo(element,
      { opacity: 0, ...startPos[direction] },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: ANIMATION_CONFIG.duration,
        ease: ANIMATION_CONFIG.ease,
        scrollTrigger: {
          trigger: element,
          ...ANIMATION_CONFIG.scrollTrigger
        }
      }
    );
  },
  
  staggerReveal: (elements: string | Element[], stagger: number = ANIMATION_CONFIG.stagger) => {
    return gsap.fromTo(elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: ANIMATION_CONFIG.duration,
        ease: ANIMATION_CONFIG.ease,
        stagger,
        scrollTrigger: {
          trigger: elements[0],
          ...ANIMATION_CONFIG.scrollTrigger
        }
      }
    );
  }
};

// Interactive hover animations
export const hoverAnimations = {
  scale: (element: string | Element, scale: number = 1.05) => {
    return gsap.to(element, {
      scale,
      duration: 0.3,
      ease: 'power2.out'
    });
  },
  
  rotate: (element: string | Element, rotation: number = 5) => {
    return gsap.to(element, {
      rotation,
      duration: 0.3,
      ease: 'power2.out'
    });
  },
  
  glow: (element: string | Element, color: string = '#3b82f6') => {
    return gsap.to(element, {
      boxShadow: `0 0 20px ${color}40`,
      filter: 'brightness(1.1)',
      duration: 0.3,
      ease: 'power2.out'
    });
  },
  
  lift: (element: string | Element, y: number = -10) => {
    return gsap.to(element, {
      y,
      duration: 0.3,
      ease: 'power2.out'
    });
  }
};

// Text animations
export const textAnimations = {
  typewriter: (element: string | Element, text: string, speed: number = 0.05) => {
    return gsap.to(element, {
      duration: text.length * speed,
      text: text,
      ease: 'none'
    });
  },
  
  staggerText: (elements: string | Element[], stagger: number = 0.05) => {
    return gsap.fromTo(elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: ANIMATION_CONFIG.ease,
        stagger
      }
    );
  }
};

// 3D animations
export const threeDAnimations = {
  rotate3D: (element: string | Element, rotationY: number = 360) => {
    return gsap.to(element, {
      rotationY,
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });
  },
  
  float: (element: string | Element, distance: number = 20) => {
    return gsap.to(element, {
      y: -distance,
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });
  }
};

// Lighting effects
export const lightingEffects = {
  spotlight: (element: string | Element, color: string = '#3b82f6') => {
    return gsap.to(element, {
      boxShadow: `0 0 30px ${color}60, inset 0 0 20px ${color}20`,
      filter: 'brightness(1.2)',
      duration: 0.5,
      ease: 'power2.out'
    });
  },
  
  pulse: (element: string | Element, color: string = '#3b82f6') => {
    return gsap.to(element, {
      boxShadow: `0 0 20px ${color}80`,
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    });
  }
};

// Timeline utilities
export const createTimeline = (config = {}) => {
  return gsap.timeline({
    paused: true,
    ...config
  });
};

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Initialize GSAP animations
export const initGSAPAnimations = () => {
  // Set default GSAP settings
  gsap.defaults({
    ease: ANIMATION_CONFIG.ease,
    duration: ANIMATION_CONFIG.duration
  });
  
  // Refresh ScrollTrigger on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}; 