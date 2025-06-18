
// Data
const skills = {
    "Programming & DBs": {
        icon: "fas fa-code",
        skills: ["Python", "R", "Java", "SQL (PL/SQL)", "MongoDB", "XML"]
    },
    "Data Analysis & ML": {
        icon: "fas fa-brain",
        skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "CUDA"]
    },
    "Visualization & BI": {
        icon: "fas fa-chart-bar",
        skills: ["Tableau", "Power BI", "Excel (VBA)"]
    },
    "Big Data & Cloud": {
        icon: "fas fa-cloud",
        skills: ["Apache Spark", "Hadoop", "AWS (S3, EC2)"]
    },
    "DevOps & Tools": {
        icon: "fas fa-tools",
        skills: ["GitHub", "Linux Bash", "Docker", "Kubernetes", "Airflow", "Kafka"]
    },
    "Data Handling": {
        icon: "fas fa-database",
        skills: ["Data Cleaning", "Wrangling", "ETL", "Data Quality"]
    },
    "Statistics": {
        icon: "fas fa-calculator",
        skills: ["Regression", "Hypothesis Testing", "A/B Testing", "Trend Analysis"]
    },
    "Soft Skills": {
        icon: "fas fa-users",
        skills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Learning"]
    }
};

const projects = [
    {
        title: "Synthia - Synthetic Financial Data Generator",
        category: "ai",
        description: "A generative AI platform that creates high-fidelity, privacy-preserving synthetic financial data using GANs and LLMs for training ML models without exposing sensitive customer information.",
        technologies: ["GANs", "LLMs", "Python", "Cloud Computing"],
        github: "https://github.com/manojkumartechie/synthia-ai",
        demo: "#"
    },
    {
        title: "QuantumLeap - Explainable Credit Scoring",
        category: "fintech",
        description: "Advanced credit scoring model incorporating alternative data sources with Explainable AI (XAI) to provide highly accurate risk scores and transparent decision-making.",
        technologies: ["XGBoost", "SHAP", "LIME", "Python", "Big Data"],
        github: "https://github.com/manojkumartechie/quantumleap-credit",
        demo: "#"
    },
    {
        title: "Cerberus - Multi-Layered Fraud Detection",
        category: "ai",
        description: "Real-time fraud detection engine analyzing credit, debit, and trading transactions using supervised and unsupervised ML models to detect known and emerging fraud patterns.",
        technologies: ["Graph Neural Networks", "Autoencoders", "Kafka", "Python"],
        github: "https://github.com/manojkumartechie/cerberus-fraud",
        demo: "#"
    },
    {
        title: "Prism - Personal Finance Dashboard",
        category: "analytics",
        description: "Comprehensive dashboard providing 360-degree view of financial life, aggregating data from all accounts with real-time analysis and predictive insights.",
        technologies: ["Plaid API", "D3.js", "React", "Real-time Analytics"],
        github: "https://github.com/manojkumartechie/prism-dashboard",
        demo: "#"
    },
    {
        title: "Optimus - RL Portfolio Optimization",
        category: "ai",
        description: "Portfolio management system using reinforcement learning to dynamically adjust asset allocations, learning from real-time market data to develop adaptive trading policies.",
        technologies: ["Deep Q-Networks", "Time-Series Analysis", "Python", "Cloud Computing"],
        github: "https://github.com/manojkumartechie/optimus-portfolio",
        demo: "#"
    },
    {
        title: "Pulse - Market Sentiment Analysis",
        category: "analytics",
        description: "Real-time platform analyzing news, social media, and regulatory filings to gauge market sentiment using advanced NLP for predictive market insights.",
        technologies: ["NLP", "Apache Flink", "Python", "Real-time Processing"],
        github: "https://github.com/manojkumartechie/pulse-sentiment",
        demo: "#"
    }
];

// Typing animation
const typingTexts = ["Data Scientist", "AI Engineer", "ML Specialist", "Analytics Expert"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeText() {
    const currentText = typingTexts[textIndex];
    const typedElement = document.getElementById('typed-text');
    
    if (!typedElement) return;
    
    if (isDeleting) {
        typedElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Navigation functionality - Enhanced
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
    
    // Enhanced navbar scroll effect
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
    });
}

// Skills rendering with enhanced animations
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    Object.entries(skills).forEach(([category, data], index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <h3><i class="${data.icon}"></i> ${category}</h3>
            <div class="skill-tags">
                ${data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

// Projects rendering with enhanced animations
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        // Enhanced project card with 3D effects
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category.toUpperCase()}</span>
            </div>
            <div class="project-content">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demo}" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        `;
        
        // Add 3D tilt effect on mouse move
        projectCard.addEventListener('mousemove', (e) => {
            const rect = projectCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            projectCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });
        
        projectCard.addEventListener('mouseleave', () => {
            projectCard.style.transform = '';
        });
        
        projectsGrid.appendChild(projectCard);
    });
}

// Enhanced scroll animations with reveal effects
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.skill-category, .project-card, .contact-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections and cards
    document.querySelectorAll('.reveal-section').forEach(section => {
        observer.observe(section);
    });
    
    // Pre-style elements for animation
    document.querySelectorAll('.skill-category, .project-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Enhanced parallax effects
function initParallaxEffects() {
    const orbs = document.querySelectorAll('.orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.05;
            const yPos = rate * speed;
            const rotation = scrolled * 0.02;
            
            orb.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotation}deg)`;
        });
        
        // Parallax for section backgrounds
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            if (section.id !== 'home') {
                const yPos = -(scrolled * 0.1);
                section.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
    });
}

// Enhanced loading animation
function initLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Trigger hero animation with delay
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-animation');
            if (heroContent) {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }
        }, 300);
        
        // Animate elements on page load
        setTimeout(() => {
            document.querySelectorAll('.reveal-section').forEach((section, index) => {
                setTimeout(() => {
                    section.classList.add('revealed');
                }, index * 200);
            });
        }, 800);
    });
}

// Enhanced interactive effects
function addInteractiveEffects() {
    // Enhanced social links with 3D effects
    const socialLinks = document.querySelectorAll('.social-link, .social-contact-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) scale(1.1) rotateY(15deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
        });
    });
    
    // Enhanced button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            btn.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Enhanced card hover effects with 3D transforms
    const cards = document.querySelectorAll('.glass-morphism, .skill-category, .project-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('project-card')) {
                card.style.transform = 'translateY(-8px) rotateX(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('project-card')) {
                card.style.transform = 'translateY(0) rotateX(0deg)';
            }
        });
    });
    
    // Smooth scroll with enhanced easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mouse trail effect
function initMouseTrail() {
    const trail = [];
    const maxTrailLength = 20;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (trail.length > maxTrailLength) {
            trail.shift();
        }
        
        // Clean up old trail points
        trail.forEach((point, index) => {
            if (Date.now() - point.time > 1000) {
                trail.splice(index, 1);
            }
        });
    });
}

// Performance optimization
function optimizePerformance() {
    // Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        // Update scroll-dependent elements
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Preload critical images
    const criticalImages = [];
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
    
    // Initialize all functionality
    initNavigation();
    renderSkills();
    renderProjects();
    initParallaxEffects();
    initLoadingAnimation();
    optimizePerformance();
    
    // Initialize animations after elements are rendered
    setTimeout(() => {
        initScrollAnimations();
        addInteractiveEffects();
        initMouseTrail();
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate animations on resize
    const navbar = document.getElementById('navbar');
    if (navbar && window.innerWidth <= 768) {
        navbar.style.background = 'rgba(10, 14, 26, 0.95)';
    }
});

// Handle visibility change for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when tab is visible
        document.body.style.animationPlayState = 'running';
    }
});
