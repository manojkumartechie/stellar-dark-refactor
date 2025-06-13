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
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.8)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}

// Skills rendering
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    Object.entries(skills).forEach(([category, data], index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category fade-in-up';
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

// Projects rendering and filtering
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card fade-in-up`;
        projectCard.setAttribute('data-category', project.category);
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
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demo}" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Project filtering
function initProjectFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach((card, index) => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                    card.style.animationDelay = `${index * 0.1}s`;
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 70;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.skill-tag, .tech-tag, .strength-item, .contact-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in-up class
    document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Observe child elements for staggered animations
    document.querySelectorAll('.skill-tag, .tech-tag, .strength-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
}

// Parallax effect for floating shapes
function initParallaxEffects() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Add loading animation
function initLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Trigger hero animation
        const heroContent = document.querySelector('.hero-animation');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
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
    initProjectFiltering();
    initSmoothScrolling();
    initParallaxEffects();
    initLoadingAnimation();
    
    // Initialize scroll animations after a short delay to ensure all elements are rendered
    setTimeout(initScrollAnimations, 100);
    
    // Add some interactive effects
    addInteractiveEffects();
});

// Add interactive effects
function addInteractiveEffects() {
    // Add hover effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) scale(1.1) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Create ripple effect
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
    
    // Add floating animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
        });
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate animations on resize
    const navbar = document.getElementById('navbar');
    if (navbar && window.innerWidth <= 768) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .hero-animation {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    body.loaded .hero-animation {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);