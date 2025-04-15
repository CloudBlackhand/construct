// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Hide mobile menu on click
        if (window.innerWidth <= 768) {
            document.querySelector('nav').classList.remove('active');
        }
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Fixed header on scroll with transition effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Banner Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const dots = document.querySelectorAll('.hero-slider-dot');
    let currentSlide = 1;
    let slideInterval;

    // Function to change slide
    function changeSlide(slideNumber) {
        hero.className = 'hero';
        setTimeout(() => {
            hero.classList.add(`bg-${slideNumber}`);
        }, 50);
        
        // Update active dot
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[slideNumber - 1].classList.add('active');
        
        currentSlide = slideNumber;
    }

    // Start automatic slide
    function startSlideShow() {
        slideInterval = setInterval(() => {
            currentSlide = currentSlide === 3 ? 1 : currentSlide + 1;
            changeSlide(currentSlide);
        }, 5000);
    }

    // Click event for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideNumber = parseInt(this.getAttribute('data-slide'));
            
            // Clear interval and start new one
            clearInterval(slideInterval);
            changeSlide(slideNumber);
            startSlideShow();
        });
    });

    // Start the slideshow
    startSlideShow();
});

// Form submission
const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formValues = {};
        
        for (const [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        
        // Here you would typically send this data to a server
        // For now we'll just show an alert
        alert('Obrigado por entrar em contato! Retornaremos em breve.');
        
        // Reset form
        this.reset();
    });
}

// Add names to form fields for form submission
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.querySelector('input[placeholder="Nome completo"]');
    const emailInput = document.querySelector('input[placeholder="E-mail"]');
    const phoneInput = document.querySelector('input[placeholder="Telefone"]');
    const messageTextarea = document.querySelector('textarea[placeholder="Sua mensagem"]');
    
    if (nameInput) nameInput.setAttribute('name', 'name');
    if (emailInput) emailInput.setAttribute('name', 'email');
    if (phoneInput) phoneInput.setAttribute('name', 'phone');
    if (messageTextarea) messageTextarea.setAttribute('name', 'message');
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
        !e.target.closest('nav') && 
        !e.target.closest('.mobile-menu-btn') && 
        nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// Animation on scroll (optional effect for elements to appear when scrolled into view)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to these elements when they come into view
document.querySelectorAll('.service-card, .project-card, .stat-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add CSS class for the animation
// This should be added to your CSS file but we're mentioning it here
/*
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.animated {
    opacity: 1;
    transform: translateY(0);
}
*/ 