// ====================================
// ODAI AYYAD PORTFOLIO - JAVASCRIPT
// AMG GT Black Series P1 Theme
// ====================================

// ====================================
// SECTION 1: PROJECT DATA (CUSTOMIZABLE)
// Add, edit, or remove projects here
// ====================================
const portfolioData = [
    {
        id: 1,
        title: 'YOLOv11 Traffic Safety System',
        description: 'Real-time traffic safety system trained on 14,800+ images for driver monitoring and traffic sign detection. Achieved 94.7% mAP50 and 89.2% mAP50-95, ranking in top 7 among 125 interns.',
        image: 'assets/images/yolo-traffic.jpg',
        tech: ['YOLOv11', 'Computer Vision', 'Python', 'Deep Learning'],
        link: '' // Optional: Add GitHub or demo link
    },
    {
        id: 2,
        title: 'YouTube AI Agent',
        description: 'Multi-tool AI agent automating content strategy generation including titles, descriptions, thumbnails, posting times, and analytics using GPT-4o and GPT-3.5.',
        image: 'assets/images/youtube-agent.jpg',
        tech: ['LangChain', 'GPT-4o', 'GPT-3.5', 'AI Agents'],
        link: ''
    },
    {
        id: 3,
        title: 'ML Model Collection',
        description: 'Comprehensive machine learning models including regression, classification, clustering, and association rules using Pandas, NumPy, and Scikit-learn with hands-on work in ANNs, CNNs, and RNNs.',
        image: 'assets/images/ml-models.jpg',
        tech: ['Scikit-learn', 'TensorFlow', 'Keras', 'Deep Learning'],
        link: ''
    }
    // TO ADD MORE PROJECTS:
    // Copy the above object structure and modify:
    // {
    //     id: 4,
    //     title: 'Your Project Title',
    //     description: 'Project description here...',
    //     image: 'assets/images/your-image.jpg',
    //     tech: ['Tech1', 'Tech2', 'Tech3'],
    //     link: 'https://github.com/...' // Optional
    // }
];

// ====================================
// SECTION 2: BACKGROUND ANIMATION
// Creates floating particles and AMG tri-star
// EFFECT: Subtle background movement
// ====================================
function initBackgroundAnimation() {
    const bgAnimation = document.getElementById('bgAnimation');

    // Create floating particles
    const particleCount = 50; // Reduced for performance

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
@@ -62,62 +62,60 @@
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(1, 245, 209, 0.25)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';

        // Animation properties
        const duration = Math.random() * 20 + 15;

        const delay = Math.random() * 5;
        const xMovement = (Math.random() - 0.5) * 200;
        const yMovement = (Math.random() - 0.5) * 200;

        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        bgAnimation.appendChild(particle);
    }

    // Create animated lines
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.width = Math.random() * 200 + 100 + 'px';
        line.style.height = '1px';
        line.style.background = 'linear-gradient(90deg, transparent, rgba(1, 245, 209, 0.3), transparent)';
        line.style.left = Math.random() * 100 + '%';
        line.style.top = Math.random() * 100 + '%';
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.pointerEvents = 'none';

        const duration = Math.random() * 15 + 10;
        line.style.animation = `drift ${duration}s linear infinite`;

        bgAnimation.appendChild(line);
    }
}

// ====================================
// SECTION 3: 3D CAROUSEL INITIALIZATION
// Creates rotating 3D project carousel
// DYNAMIC: Auto-generates from portfolioData
// ====================================

let currentIndex = 0;
const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');

function createCarouselItem(data, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.dataset.index = index;
    
    // Generate tech badges HTML
    const techBadges = data.tech.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    // Create link button if URL exists
    const linkButton = data.link 
        ? `<a href="${data.link}" target="_blank" class="card-cta">View Project</a>`
        : `<button class="card-cta" onclick="alert('Project details coming soon!')">Learn More</button>`;
    
    // Build card HTML
    item.innerHTML = `
        <div class="card">
            <div class="card-number">0${data.id}</div>
            <div class="card-image">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">${techBadges}</div>
            ${linkButton}
        </div>
    `;
    
    return item;
}

function initCarousel() {
    if (!carousel) return; // Safety check
    
    // Create carousel items from data
    portfolioData.forEach((data, index) => {
        const item = createCarouselItem(data, index);
        carousel.appendChild(item);
        
        // Create indicator dot
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    updateCarousel();
}

// ====================================
// SECTION 4: CAROUSEL POSITIONING
// Updates 3D positions of carousel items
// ANIMATION LOGIC: Controls rotation effect
// ====================================
function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = items.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;
    
    items.forEach((item, index) => {
        // Calculate position relative to current index
        let offset = index - currentIndex;
        
        // Wrap around for continuous rotation
        if (offset > totalItems / 2) {
            offset -= totalItems;
        } else if (offset < -totalItems / 2) {
            offset += totalItems;
        }
        
        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;
        
        // Reset styles
        item.style.transform = '';
        item.style.opacity = '';
        item.style.zIndex = '';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
        
        // Spacing adjustments for responsive design
        let spacing1 = 400;
        let spacing2 = 600;
        let spacing3 = 750;
        
        if (isMobile) {
            spacing1 = 280;
            spacing2 = 420;
            spacing3 = 550;
        } else if (isTablet) {
            spacing1 = 340;
            spacing2 = 520;
            spacing3 = 650;
        }
        
        // Position based on offset
        if (absOffset === 0) {
            // CENTER CARD - Main focus
            item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (absOffset === 1) {
            // SIDE CARDS - Immediate neighbors
            const translateX = sign * spacing1;
            const rotation = isMobile ? 25 : 30;
            const scale = isMobile ? 0.88 : 0.85;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.8';
            item.style.zIndex = '5';
        } else if (absOffset === 2) {
            // FARTHER SIDE CARDS
            const translateX = sign * spacing2;
            const rotation = isMobile ? 35 : 40;
            const scale = isMobile ? 0.75 : 0.7;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.5';
            item.style.zIndex = '3';
        } else if (absOffset === 3) {
            // BACKGROUND CARDS
            const translateX = sign * spacing3;
            const rotation = isMobile ? 40 : 45;
            const scale = isMobile ? 0.65 : 0.6;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.3';
            item.style.zIndex = '2';
        } else {
            // HIDDEN CARDS - Behind everything
            item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
            item.style.opacity = '0';
            item.style.zIndex = '1';
        }
    });
    
    // Update indicator dots
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// ====================================
// SECTION 5: CAROUSEL CONTROLS
// Navigation functions
// ====================================
function nextSlide() {
    currentIndex = (currentIndex + 1) % portfolioData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// ====================================
// SECTION 6: MOBILE MENU
// Hamburger menu functionality
// ====================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ====================================
// SECTION 7: HEADER SCROLL EFFECT
// Makes header transparent on scroll
// ====================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ====================================
// SECTION 8: SMOOTH SCROLLING
// Smooth navigation to sections
// ====================================
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// SECTION 9: ACTIVE NAVIGATION UPDATE
// Highlights current section in menu
// ====================================
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ====================================
// SECTION 10: SCROLL REVEAL ANIMATION
// Fades in sections as you scroll
// EFFECT: Progressive content reveal
// ====================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    observer.observe(section);
});

// ====================================
// SECTION 11: TIMELINE ANIMATION
// Staggered reveal for experience items
// ====================================
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });
    
    timelineObserver.observe(item);
});

// ====================================
// SECTION 12: SKILLS ANIMATION
// Staggered reveal for skill categories
// ====================================
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.transition = `all 0.6s ease ${index * 0.1}s`;
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    skillsObserver.observe(category);
});

// ====================================
// SECTION 13: COURSE CARDS ANIMATION
// Staggered reveal for learning section
// ====================================
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.05}s`;
    
    const courseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    courseObserver.observe(card);
});

// ====================================
// SECTION 14: SCROLL TO TOP BUTTON
// Floating button to return to top
// ====================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #C0C0C0, #A8A8A8);
    color: #0a0a0a;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(192, 192, 192, 0.3);
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
    scrollTopBtn.style.boxShadow = '0 8px 30px rgba(192, 192, 192, 0.5)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0) scale(1)';
    scrollTopBtn.style.boxShadow = '0 5px 20px rgba(192, 192, 192, 0.3)';
});

// ====================================
// SECTION 15: CAROUSEL AUTO-ROTATION
// Optional: Auto-advance carousel
// Comment out if you don't want auto-rotation
// ====================================

// Auto-rotate every 5 seconds
// setInterval(nextSlide, 5000);

// ====================================
// SECTION 16: KEYBOARD NAVIGATION
// Arrow keys control carousel
// ====================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// ====================================
// SECTION 17: CAROUSEL RESPONSIVE UPDATE
// Updates carousel on window resize
// ====================================
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateCarousel();
    }, 250);
});

// ====================================
// SECTION 18: PARALLAX EFFECT
// Hero section parallax on scroll
// EFFECT: Subtle depth on homepage
// ====================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// ====================================
// SECTION 19: LOADING SCREEN
// Hides loader after page loads
// ====================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
        
        // Initialize background animation after loading
        initBackgroundAnimation();
    }, 1500);
});

// ====================================
// SECTION 20: EVENT LISTENERS SETUP
// Initialize carousel controls
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    initCarousel();
    
    // Carousel button controls
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
});



// ====================================
// CSS ANIMATIONS - INJECTED
// Float animation for particles
// ====================================
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
        }
        50% {
            transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px);
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(style);

// ====================================
// CONSOLE LOG - CONFIRMATION
// ====================================
console.log('✅ Odai Ayyad Portfolio - Loaded Successfully');
console.log('🚗 AMG GT Black Series P1 Theme Active');
console.log('📊 Projects loaded:', portfolioData.length);
