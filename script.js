// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        if (!navLinks) {
            const menu = document.createElement('ul');
            menu.className = 'nav-links mobile';
            menu.innerHTML = `
                <li><a href="#about">About</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            `;
            navbar.querySelector('.nav-container').appendChild(menu);
            const mobileLinks = document.querySelector('.nav-links.mobile');
            mobileLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuBtn.classList.remove('active');
                    mobileLinks.remove();
                });
            });
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const navbar = document.querySelector('.navbar');
            const offset = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.expertise-card, .project-card, .timeline-content, .achievement-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
    observer.observe(el);
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar_el = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar_el.style.borderBottomColor = 'rgba(42, 42, 42, 0.5)';
    } else {
        navbar_el.style.borderBottomColor = 'var(--border)';
    }

    lastScrollTop = scrollTop;
});

// Counter animation for stats
const animateCounters = () => {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const final = stat.textContent;
        const finalNumber = parseInt(final);
        const isPercentage = final.includes('%');
        const isPlus = final.includes('+');

        let current = 0;
        const increment = finalNumber / 50; // 50 frames

        const counter = setInterval(() => {
            current += increment;
            if (current >= finalNumber) {
                current = finalNumber;
                clearInterval(counter);
            }

            let displayValue = Math.floor(current);
            if (isPercentage) {
                stat.textContent = displayValue + '%';
            } else if (isPlus) {
                stat.textContent = displayValue + '+';
            } else {
                stat.textContent = displayValue + '+';
            }
        }, 30);
    });
};

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    heroObserver.observe(heroSection);
}

// Parallax effect for hero visual
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition < 800) {
            heroVisual.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });
}

// Add hover effect to tech items
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Active navigation link highlighting
const highlightNavigation = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbar = document.querySelector('.navbar');
            const offset = navbar ? navbar.offsetHeight : 0;

            if (pageYOffset >= sectionTop - offset - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = 'var(--text-secondary)';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--text)';
            }
        });
    });
};

highlightNavigation();

// Interactive form handling
const contactForm = document.querySelector('#contact');
if (contactForm) {
    // Add interactive feedback for contact methods
    document.querySelectorAll('.contact-method').forEach(method => {
        method.style.cursor = 'pointer';
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'h' to go to hero
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Ensure smooth initial load
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add animation classes
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transition = 'opacity 600ms ease-out';
        }, 50 * index);
    });
});

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important';
        el.style.transition = 'none !important';
    });
}

// Export stats data (for potential integration with analytics)
window.portfolioStats = {
    projectsDelivered: 50,
    clientsServed: 30,
    technologiesMastered: 15,
    yearsOfExperience: 5
};

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
    }
});

// Performance monitoring
if ('PerformanceObserver' in window) {
    try {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                // Log performance metrics for debugging
                console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
            }
        });

        perfObserver.observe({ entryTypes: ['measure'] });
    } catch (e) {
        // Performance API not available
    }
}
