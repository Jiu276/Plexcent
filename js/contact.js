// Contact page functionality
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    setupScrollEffects();
});

function setupEventListeners() {
    // Mobile navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const backToTopBtn = document.getElementById('backToTop');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Back to top button
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // FAQ accordion
    setupFAQAccordion();
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('.submit-btn');
    const formData = new FormData(e.target);

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Sending...';

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        // Reset button
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Show success message
        showFormMessage('success', 'Thank you for your message! We\'ll get back to you within 24 hours.');

        // Reset form
        e.target.reset();
    }, 2000);
}

// Show form message
function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';

    // Insert before form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(messageDiv, form);

    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Setup FAQ accordion
function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Header hide/show on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        // Back to top button
        if (scrollTop > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.info-item, .faq-item');
    animatedElements.forEach((element, index) => {
        element.dataset.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
        observer.observe(element);
    });
}

// Form validation
function validateForm(formData) {
    const errors = [];

    if (!formData.get('name').trim()) {
        errors.push('Name is required');
    }

    if (!formData.get('email').trim()) {
        errors.push('Email is required');
    } else if (!isValidEmail(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }

    if (!formData.get('subject')) {
        errors.push('Please select a subject');
    }

    if (!formData.get('message').trim()) {
        errors.push('Message is required');
    } else if (formData.get('message').length < 10) {
        errors.push('Message must be at least 10 characters long');
    }

    return errors;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});