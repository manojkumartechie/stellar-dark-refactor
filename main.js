
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

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
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
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.05)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}

// Skills rendering with animation
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    Object.entries(skills).forEach(([category, data], index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category glass-morphism card-3d reveal-on-scroll';
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

// Projects rendering with animation
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card glass-morphism card-3d reveal-on-scroll';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
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
                    <a href="${project.github}" target="_blank" class="project-link glass-morphism">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demo}" class="project-link glass-morphism">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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

// Reveal on scroll animation
function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Parallax effect for floating orbs
function initParallaxEffects() {
    const orbs = document.querySelectorAll('.floating-orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.transform = `translate3d(0, ${rate * speed}px, 0)`;
        });
    });
}

// Add interactive hover effects
function addInteractiveEffects() {
    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
        
        btn.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            btn.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Enhanced card tilt effects
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Add CSS keyframes for ripple effect
function addRippleKeyframes() {
    if (!document.querySelector('#ripple-keyframes')) {
        const style = document.createElement('style');
        style.id = 'ripple-keyframes';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Performance optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.addEventListener;
    
    // Add will-change property to animated elements
    const animatedElements = document.querySelectorAll('.card-3d, .floating-orb, .btn');
    animatedElements.forEach(element => {
        element.style.willChange = 'transform';
    });
    
    // Optimize scroll performance
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Remove will-change after animation
            animatedElements.forEach(element => {
                element.style.willChange = 'auto';
            });
        }, 150);
    }, { passive: true });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple keyframes
    addRippleKeyframes();
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
    
    // Initialize all functionality
    initNavigation();
    renderSkills();
    renderProjects();
    initSmoothScrolling();
    initParallaxEffects();
    
    // Initialize reveal animations after content is loaded
    setTimeout(() => {
        initRevealOnScroll();
        addInteractiveEffects();
        optimizePerformance();
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reset card transforms on mobile
    if (window.innerWidth <= 768) {
        const cards = document.querySelectorAll('.card-3d');
        cards.forEach(card => {
            card.style.transform = 'none';
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animation
    const heroContent = document.querySelector('.hero-content .fade-in');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
});
