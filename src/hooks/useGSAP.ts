import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  pageTransitions, 
  scrollAnimations, 
  hoverAnimations, 
  textAnimations, 
  threeDAnimations, 
  lightingEffects,
  cleanupAnimations 
} from '@/utils/gsapAnimations';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const refs = useRef<Map<string, HTMLElement>>(new Map());
  const animations = useRef<Map<string, gsap.core.Tween>>(new Map());

  // Register element reference
  const registerRef = useCallback((id: string, element: HTMLElement | null) => {
    if (element) {
      refs.current.set(id, element);
    } else {
      refs.current.delete(id);
    }
  }, []);

  // Get element by ID
  const getElement = useCallback((id: string) => {
    return refs.current.get(id);
  }, []);

  // Page transitions
  const fadeIn = useCallback((id: string) => {
    const element = getElement(id);
    if (element) {
      const anim = pageTransitions.fadeIn(element);
      animations.current.set(`fadeIn_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  const slideIn = useCallback((id: string, direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
    const element = getElement(id);
    if (element) {
      const anim = pageTransitions.slideIn(element, direction);
      animations.current.set(`slideIn_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  const scaleIn = useCallback((id: string) => {
    const element = getElement(id);
    if (element) {
      const anim = pageTransitions.scaleIn(element);
      animations.current.set(`scaleIn_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  // Scroll animations
  const parallax = useCallback((id: string, speed: number = 0.5) => {
    const element = getElement(id);
    if (element) {
      const anim = scrollAnimations.parallax(element, speed);
      animations.current.set(`parallax_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  const revealOnScroll = useCallback((id: string, direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
    const element = getElement(id);
    if (element) {
      const anim = scrollAnimations.revealOnScroll(element, direction);
      animations.current.set(`reveal_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  const staggerReveal = useCallback((ids: string[], stagger: number = 0.1) => {
    const elements = ids.map(id => getElement(id)).filter(Boolean) as HTMLElement[];
    if (elements.length > 0) {
      const anim = scrollAnimations.staggerReveal(elements, stagger);
      animations.current.set(`stagger_${ids.join('_')}`, anim);
      return anim;
    }
  }, [getElement]);

  // Hover animations
  const hoverScale = useCallback((id: string, scale: number = 1.05) => {
    const element = getElement(id);
    if (element) {
      return {
        onMouseEnter: () => hoverAnimations.scale(element, scale),
        onMouseLeave: () => gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' })
      };
    }
    return {};
  }, [getElement]);

  const hoverGlow = useCallback((id: string, color: string = '#3b82f6') => {
    const element = getElement(id);
    if (element) {
      return {
        onMouseEnter: () => hoverAnimations.glow(element, color),
        onMouseLeave: () => gsap.to(element, { 
          boxShadow: 'none', 
          filter: 'brightness(1)', 
          duration: 0.3, 
          ease: 'power2.out' 
        })
      };
    }
    return {};
  }, [getElement]);

  const hoverLift = useCallback((id: string, y: number = -10) => {
    const element = getElement(id);
    if (element) {
      return {
        onMouseEnter: () => hoverAnimations.lift(element, y),
        onMouseLeave: () => gsap.to(element, { y: 0, duration: 0.3, ease: 'power2.out' })
      };
    }
    return {};
  }, [getElement]);

  // Text animations
  const typewriter = useCallback((id: string, text: string, speed: number = 0.05) => {
    const element = getElement(id);
    if (element) {
      const anim = textAnimations.typewriter(element, text, speed);
      animations.current.set(`typewriter_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  const staggerText = useCallback((ids: string[], stagger: number = 0.05) => {
    const elements = ids.map(id => getElement(id)).filter(Boolean) as HTMLElement[];
    if (elements.length > 0) {
      const anim = textAnimations.staggerText(elements, stagger);
      animations.current.set(`staggerText_${ids.join('_')}`, anim);
      return anim;
    }
  }, [getElement]);

  // 3D animations
  const rotate3D = useCallback((id: string, rotationY: number = 360) => {
    const element = getElement(id);
    if (element) {
      const anim = threeDAnimations.rotate3D(element, rotationY);
      animations.current.set(`rotate3D_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  const float = useCallback((id: string, distance: number = 20) => {
    const element = getElement(id);
    if (element) {
      const anim = threeDAnimations.float(element, distance);
      animations.current.set(`float_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  // Lighting effects
  const spotlight = useCallback((id: string, color: string = '#3b82f6') => {
    const element = getElement(id);
    if (element) {
      const anim = lightingEffects.spotlight(element, color);
      animations.current.set(`spotlight_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  const pulse = useCallback((id: string, color: string = '#3b82f6') => {
    const element = getElement(id);
    if (element) {
      const anim = lightingEffects.pulse(element, color);
      animations.current.set(`pulse_${id}`, anim);
      return anim;
    }
  }, [getElement]);

  // Timeline creation
  const createTimeline = useCallback((config = {}) => {
    return gsap.timeline({
      paused: true,
      ...config
    });
  }, []);

  // Cleanup animations
  const cleanup = useCallback(() => {
    animations.current.forEach(anim => anim.kill());
    animations.current.clear();
    cleanupAnimations();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return {
    registerRef,
    getElement,
    // Page transitions
    fadeIn,
    slideIn,
    scaleIn,
    // Scroll animations
    parallax,
    revealOnScroll,
    staggerReveal,
    // Hover animations
    hoverScale,
    hoverGlow,
    hoverLift,
    // Text animations
    typewriter,
    staggerText,
    // 3D animations
    rotate3D,
    float,
    // Lighting effects
    spotlight,
    pulse,
    // Utilities
    createTimeline,
    cleanup
  };
}; 