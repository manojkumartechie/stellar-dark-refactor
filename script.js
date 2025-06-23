// GSAP Navigation System
class GSAPNavigation {
    constructor() {
        this.isMenuOpen = false;
        this.tl = null;
        
        // DOM elements
        this.hamburgerBtn = document.getElementById('hamburger-btn');
        this.closeBtn = document.getElementById('close-btn');
        this.slideMenu = document.getElementById('slide-menu');
        this.menuOverlay = document.getElementById('menu-overlay');
        this.menuItems = document.querySelectorAll('.menu-item');
        this.menuFooter = document.querySelector('.menu-footer');
        this.menuLinks = document.querySelectorAll('.menu-link');
        
        this.init();
    }
    
    init() {
        this.createTimeline();
        this.bindEvents();
        this.handleKeyboardNavigation();
        this.setActiveLink();
    }
    
    createTimeline() {
        // Create GSAP timeline
        this.tl = gsap.timeline({ paused: true });
        
        // Set initial states
        gsap.set(this.slideMenu, { x: '100%' });
        gsap.set(this.menuOverlay, { opacity: 0, visibility: 'hidden' });
        gsap.set(this.menuItems, { x: 50, opacity: 0 });
        gsap.set(this.closeBtn, { scale: 0, rotation: -180, opacity: 0 });
        gsap.set(this.menuFooter, { y: 20, opacity: 0 });
        
        // Build animation timeline
        this.tl
            .to(this.menuOverlay, { 
                opacity: 1, 
                visibility: 'visible',
                duration: 0.3, 
                ease: 'power2.out' 
            })
            .to(this.slideMenu, { 
                x: '0%', 
                duration: 0.6, 
                ease: 'power3.out' 
            }, '-=0.1')
            .to(this.closeBtn, { 
                scale: 1, 
                rotation: 0, 
                opacity: 1,
                duration: 0.4, 
                ease: 'back.out(1.7)' 
            }, '-=0.3')
            .to(this.menuItems, { 
                x: 0, 
                opacity: 1, 
                duration: 0.4, 
                stagger: 0.1, 
                ease: 'power2.out',
                onComplete: () => {
                    this.menuItems.forEach(item => item.classList.add('active'));
                }
            }, '-=0.2')
            .to(this.menuFooter, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    this.menuFooter.classList.add('active');
                }
            }, '-=0.1');
    }
    
    bindEvents() {
        // Hamburger button click
        this.hamburgerBtn.addEventListener('click', () => this.openMenu());
        
        // Close button click
        this.closeBtn.addEventListener('click', () => this.closeMenu());
        
        // Overlay click
        this.menuOverlay.addEventListener('click', () => this.closeMenu());
        
        // Menu link clicks
        this.menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.navigateToSection(targetId);
                this.closeMenu();
            });
        });
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMenu();
            }
        });
    }
    
    handleKeyboardNavigation() {
        // Tab navigation within menu
        this.slideMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = this.slideMenu.querySelectorAll(
                    'button, a, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }
    
    openMenu() {
        if (this.isMenuOpen) return;
        
        this.isMenuOpen = true;
        document.body.style.overflow = 'hidden';
        
        // Update ARIA attributes
        this.hamburgerBtn.setAttribute('aria-expanded', 'true');
        this.menuOverlay.setAttribute('aria-hidden', 'false');
        
        // Animate hamburger to X
        gsap.to('.hamburger-line-1', { rotation: 45, y: 6, duration: 0.3 });
        gsap.to('.hamburger-line-2', { opacity: 0, duration: 0.3 });
        gsap.to('.hamburger-line-3', { rotation: -45, y: -6, duration: 0.3 });
        
        // Play timeline
        this.tl.play();
        
        // Focus management
        setTimeout(() => {
            this.closeBtn.focus();
        }, 600);
    }
    
    closeMenu() {
        if (!this.isMenuOpen) return;
        
        this.isMenuOpen = false;
        document.body.style.overflow = '';
        
        // Update ARIA attributes
        this.hamburgerBtn.setAttribute('aria-expanded', 'false');
        this.menuOverlay.setAttribute('aria-hidden', 'true');
        
        // Animate X back to hamburger
        gsap.to('.hamburger-line-1', { rotation: 0, y: 0, duration: 0.3 });
        gsap.to('.hamburger-line-2', { opacity: 1, duration: 0.3 });
        gsap.to('.hamburger-line-3', { rotation: 0, y: 0, duration: 0.3 });
        
        // Remove active classes
        this.menuItems.forEach(item => item.classList.remove('active'));
        this.menuFooter.classList.remove('active');
        
        // Reverse timeline
        this.tl.reverse();
        
        // Focus management
        setTimeout(() => {
            this.hamburgerBtn.focus();
        }, 600);
    }
    
    navigateToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    setActiveLink() {
        // Set active link based on current section
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    
                    // Remove active from all links
                    this.menuLinks.forEach(link => {
                        link.removeAttribute('aria-current');
                    });
                    
                    // Add active to current link
                    const activeLink = document.querySelector(`.menu-link[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.setAttribute('aria-current', 'page');
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-80px 0px -50% 0px'
        });
        
        sections.forEach(section => observer.observe(section));
    }
}

// Typing Animation
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = this.txt;

        let typeSpeed = 150;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Scroll Reveal Animation
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal-on-scroll');
        this.init();
    }

    init() {
        this.observeElements();
        this.checkElementsInView();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }

    checkElementsInView() {
        this.elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('revealed');
            }
        });
    }
}

// Project Filter
class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.filterProjects(filter);
                this.setActiveButton(button);
            });
        });
    }

    filterProjects(filter) {
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                gsap.to(card, { 
                    opacity: 1, 
                    scale: 1, 
                    duration: 0.3,
                    display: 'block'
                });
            } else {
                gsap.to(card, { 
                    opacity: 0, 
                    scale: 0.8, 
                    duration: 0.3,
                    onComplete: () => {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }

    setActiveButton(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
}

// Smooth Scrolling for all internal links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.debounceScrollEvents();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    debounceScrollEvents() {
        let ticking = false;
        
        const updateScrollElements = () => {
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollElements);
                ticking = true;
            }
        });
    }

    preloadCriticalResources() {
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        if (!this.validateForm(data)) {
            return;
        }

        this.showSuccessMessage();
        this.form.reset();
    }

    validateForm(data) {
        const required = ['name', 'email', 'message'];
        
        for (let field of required) {
            if (!data[field] || data[field].trim() === '') {
                this.showError(`Please fill in the ${field} field.`);
                return false;
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showError('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    showError(message) {
        let errorDiv = document.querySelector('.form-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            errorDiv.style.cssText = `
                color: #ef4444;
                background: rgba(239, 68, 68, 0.1);
                border: 1px solid rgba(239, 68, 68, 0.2);
                padding: 12px;
                border-radius: 8px;
                margin-bottom: 16px;
            `;
            this.form.insertBefore(errorDiv, this.form.firstChild);
        }
        errorDiv.textContent = message;
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }

    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.style.cssText = `
            color: #10b981;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.2);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 16px;
        `;
        successDiv.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        
        this.form.insertBefore(successDiv, this.form.firstChild);
        
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 5000);
    }
}

// Theme Manager
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }
}

// Analytics and Tracking
class Analytics {
    constructor() {
        this.events = [];
        this.init();
    }

    init() {
        this.trackPageView();
        this.trackUserInteractions();
    }

    trackPageView() {
        this.logEvent('page_view', {
            page: window.location.pathname,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            referrer: document.referrer
        });
    }

    trackUserInteractions() {
        document.querySelectorAll('.btn, .project-link, .social-link').forEach(element => {
            element.addEventListener('click', (e) => {
                this.logEvent('button_click', {
                    element: e.target.textContent || e.target.className,
                    timestamp: new Date().toISOString()
                });
            });
        });

        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.logEvent('section_view', {
                        section: entry.target.id,
                        timestamp: new Date().toISOString()
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => sectionObserver.observe(section));
    }

    logEvent(eventName, data) {
        this.events.push({ event: eventName, data });
        console.log('Analytics Event:', eventName, data);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new TypeWriter(typedElement, [
            'Data Scientist',
            'AI Engineer', 
            'ML Specialist',
            'Analytics Expert'
        ], 2000);
    }

    // Initialize all components
    new GSAPNavigation();
    new ScrollReveal();
    new ProjectFilter();
    new SmoothScroll();
    new PerformanceOptimizer();
    new ContactForm();
    new ThemeManager();
    new Analytics();

    // Add loading animation completion
    document.body.classList.add('loaded');
});

// Handle window resize
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        console.log('Window resized');
    }, 250);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden');
    } else {
        console.log('Page visible');
    }
});

// Service Worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});