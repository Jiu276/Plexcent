// Products data
const products = [
    {
        id: 1,
        title: "Apple MacBook Pro 14-inch (2025)",
        category: "tech",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80",
        description: "The latest MacBook Pro features the revolutionary M4 chip, stunning Liquid Retina XDR display, and all-day battery life perfect for professionals.",
        longDescription: "The 2025 MacBook Pro represents Apple's most advanced laptop yet, featuring the groundbreaking M4 chip that delivers unprecedented performance while maintaining exceptional energy efficiency. The 14-inch Liquid Retina XDR display offers stunning color accuracy and brightness, making it perfect for creative professionals, developers, and anyone who demands the best visual experience. With up to 22 hours of battery life, advanced thermal design, and a comprehensive array of ports including Thunderbolt 4, this MacBook Pro is designed to handle the most demanding workloads with ease.",
        price: "$1,999",
        originalPrice: "$2,299",
        discount: "13% OFF",
        rating: 4.8,
        reviews: 1247,
        features: [
            "M4 chip with 10-core CPU",
            "14-inch Liquid Retina XDR display",
            "Up to 22 hours battery life",
            "16GB unified memory",
            "512GB SSD storage",
            "Three Thunderbolt 4 ports"
        ],
        specs: {
            "Processor": "Apple M4 chip",
            "Memory": "16GB unified memory",
            "Storage": "512GB SSD",
            "Display": "14-inch Liquid Retina XDR",
            "Graphics": "M4 10-core GPU",
            "Weight": "3.5 lbs",
            "Battery": "Up to 22 hours",
            "Ports": "3x Thunderbolt 4, MagSafe 3"
        },
        tags: ["Apple", "Laptop", "Professional", "M4 Chip"],
        affiliate: true,
        buyLink: "https://apple.com",
        learnMoreLink: "#"
    },
    {
        id: 2,
        title: "Notion Pro - Ultimate Productivity Suite",
        category: "software",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80",
        description: "Transform your workflow with Notion's all-in-one workspace that combines notes, tasks, wikis, and databases in one powerful platform.",
        longDescription: "Notion Pro is the ultimate productivity suite that revolutionizes how teams and individuals organize their work. This all-in-one workspace seamlessly integrates note-taking, project management, knowledge bases, and database functionality into a single, cohesive platform. With its block-based editor, you can create anything from simple to-do lists to complex project dashboards. The collaborative features enable real-time editing, commenting, and sharing, making it perfect for remote teams. Advanced features include unlimited file uploads, version history, advanced permissions, and powerful database relations that can handle complex workflows and data management needs.",
        price: "$10/month",
        originalPrice: "$16/month",
        discount: "37% OFF",
        rating: 4.6,
        reviews: 892,
        features: [
            "Unlimited blocks and file uploads",
            "Advanced database features",
            "Real-time collaboration",
            "Version history",
            "Advanced permissions",
            "API access and integrations"
        ],
        specs: {
            "Plan Type": "Pro subscription",
            "Users": "Unlimited team members",
            "Storage": "Unlimited file uploads",
            "Integrations": "100+ app integrations",
            "Support": "Priority customer support",
            "Mobile": "iOS and Android apps",
            "Offline": "Offline access available",
            "API": "Full API access"
        },
        tags: ["Productivity", "Collaboration", "Database", "Notes"],
        affiliate: true,
        buyLink: "https://notion.so",
        learnMoreLink: "#"
    },
    {
        id: 3,
        title: "Sony WH-1000XM5 Wireless Headphones",
        category: "tech",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80",
        description: "Experience the pinnacle of audio excellence with industry-leading noise cancellation, exceptional sound quality, and all-day comfort.",
        longDescription: "The Sony WH-1000XM5 represents the culmination of Sony's audio engineering expertise, delivering an unparalleled listening experience through cutting-edge technology. These premium wireless headphones feature Sony's most advanced noise canceling processor, the V1, which works in harmony with dual noise sensor technology to provide industry-leading noise cancellation. The newly developed 30mm driver units deliver exceptionally clear sound reproduction across the entire frequency range. With up to 30 hours of battery life, quick charge capabilities, and multipoint connection support, these headphones are designed for the modern lifestyle. The redesigned lightweight design ensures all-day comfort while maintaining durability.",
        price: "$399",
        originalPrice: "$459",
        discount: "13% OFF",
        rating: 4.9,
        reviews: 2156,
        features: [
            "Industry-leading noise cancellation",
            "30-hour battery life",
            "Quick charge (3 min = 3 hours)",
            "Multipoint Bluetooth connection",
            "Adaptive Sound Control",
            "Touch controls and voice assistant"
        ],
        specs: {
            "Driver": "30mm dome type",
            "Frequency Response": "4Hz-40kHz",
            "Battery": "30 hours (NC ON)",
            "Charging": "USB-C, Quick charge",
            "Weight": "250g",
            "Connectivity": "Bluetooth 5.2",
            "Codecs": "LDAC, SBC, AAC",
            "Noise Canceling": "V1 processor + dual sensors"
        },
        tags: ["Headphones", "Noise Canceling", "Wireless", "Premium"],
        affiliate: true,
        buyLink: "https://sony.com",
        learnMoreLink: "#"
    },
    {
        id: 4,
        title: "Fitbit Sense 2 - Advanced Health Smartwatch",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80",
        description: "Monitor your health and wellness with advanced sensors, stress management tools, and comprehensive fitness tracking.",
        longDescription: "The Fitbit Sense 2 is your comprehensive health and wellness companion, packed with advanced sensors and intelligent features that help you understand and improve your overall well-being. This smartwatch goes beyond basic fitness tracking by monitoring stress levels, skin temperature variations, heart rate variability, and sleep quality. The built-in GPS tracks your outdoor activities accurately, while the 6-day battery life ensures continuous monitoring. With Google Assistant integration, music storage, and smartphone notifications, it seamlessly blends health monitoring with smart functionality. The Fitbit Premium subscription includes personalized insights, guided programs, and detailed health reports that help you make informed decisions about your health.",
        price: "$299",
        originalPrice: "$349",
        discount: "14% OFF",
        rating: 4.4,
        reviews: 1567,
        features: [
            "Stress management and EDA sensor",
            "Heart rate and sleep tracking",
            "Built-in GPS",
            "6+ day battery life",
            "Google Assistant built-in",
            "Fitbit Premium included (6 months)"
        ],
        specs: {
            "Display": "1.58\" AMOLED",
            "Battery": "6+ days",
            "Water Resistance": "50 meters",
            "Sensors": "HR, GPS, EDA, ECG, SpO2",
            "Storage": "Music storage",
            "Compatibility": "Android & iOS",
            "Materials": "Aluminum case",
            "Bands": "Interchangeable bands"
        },
        tags: ["Smartwatch", "Fitness", "Health", "Stress Management"],
        affiliate: true,
        buyLink: "https://fitbit.com",
        learnMoreLink: "#"
    },
    {
        id: 5,
        title: "Slack Business+ - Team Communication Platform",
        category: "business",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80",
        description: "Streamline team communication and collaboration with channels, integrations, and advanced security features for growing businesses.",
        longDescription: "Slack Business+ is the premium communication platform designed for growing businesses that need advanced collaboration tools and enterprise-grade security. This comprehensive solution goes beyond basic messaging by providing unlimited message history, guest access controls, and advanced compliance features. The platform integrates with over 2,400 apps, creating a centralized hub for all your team's work. Advanced features include SAML-based single sign-on, data loss prevention, and enterprise key management for enhanced security. With workflow builder, you can automate routine tasks and processes, while huddles provide quick voice and screen sharing capabilities. The platform scales seamlessly as your business grows, supporting unlimited users and providing detailed analytics and reporting tools.",
        price: "$12.50/user/month",
        originalPrice: "$15/user/month",
        discount: "17% OFF",
        rating: 4.5,
        reviews: 3421,
        features: [
            "Unlimited message history",
            "Guest access with restrictions",
            "Advanced security and compliance",
            "2,400+ app integrations",
            "Workflow builder automation",
            "24/7 support with 4-hour response"
        ],
        specs: {
            "Message History": "Unlimited",
            "File Storage": "20GB per member",
            "Video Calls": "Up to 50 participants",
            "Screen Share": "Yes",
            "Apps": "Unlimited app integrations",
            "Security": "SAML SSO, 2FA, DLP",
            "Support": "24/7 with 4hr response",
            "Analytics": "Advanced workspace analytics"
        },
        tags: ["Communication", "Business", "Collaboration", "Enterprise"],
        affiliate: true,
        buyLink: "https://slack.com",
        learnMoreLink: "#"
    },
    {
        id: 6,
        title: "Adobe Creative Suite - Complete Design Package",
        category: "software",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80",
        description: "Unleash your creativity with the industry-standard suite of design, photo, and video editing applications trusted by professionals worldwide.",
        longDescription: "Adobe Creative Suite represents the gold standard in creative software, providing professionals and enthusiasts with the most comprehensive set of design, photography, and video editing tools available. This complete package includes Photoshop for advanced photo editing and digital art, Illustrator for vector graphics and logos, InDesign for layout and typography, Premiere Pro for video editing, After Effects for motion graphics and visual effects, and many more specialized applications. The suite leverages cloud technology for seamless collaboration, version control, and cross-device synchronization. With regular updates, new features, and access to Adobe Fonts and Stock libraries, Creative Suite keeps you at the forefront of creative technology. The subscription model ensures you always have the latest tools and features.",
        price: "$54.99/month",
        originalPrice: "$79.99/month",
        discount: "31% OFF",
        rating: 4.7,
        reviews: 5632,
        features: [
            "20+ creative applications",
            "100GB cloud storage",
            "Adobe Fonts library",
            "Portfolio website",
            "Mobile and desktop sync",
            "Regular updates and new features"
        ],
        specs: {
            "Applications": "20+ desktop & mobile apps",
            "Storage": "100GB cloud storage",
            "Fonts": "Adobe Fonts library access",
            "Stock": "Adobe Stock integration",
            "Collaboration": "Real-time sharing & comments",
            "Support": "Community forums & tutorials",
            "Platform": "Windows, macOS, iOS, Android",
            "Updates": "Automatic app updates"
        },
        tags: ["Design", "Creative", "Photography", "Video Editing"],
        affiliate: true,
        buyLink: "https://adobe.com",
        learnMoreLink: "#"
    }
];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const backToTopBtn = document.getElementById('backToTop');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// State
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupScrollEffects();
});

// Event listeners
function setupEventListeners() {
    // Category filter buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });

    // Mobile navigation
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Back to top button
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Handle category filtering
function handleCategoryFilter(e) {
    // Update active button
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    currentCategory = e.target.dataset.category;
    renderProducts();
}

// Filter products
function getFilteredProducts() {
    if (currentCategory === 'all') {
        return products;
    }
    return products.filter(product => product.category === currentCategory);
}

// Render products
function renderProducts() {
    const filteredProducts = getFilteredProducts();

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');

    // Add event listeners to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.product-buttons')) {
                const productId = card.dataset.productId;
                openProductModal(productId);
            }
        });
    });

    // Add event listeners to buttons
    document.querySelectorAll('.btn-learn-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const productId = btn.dataset.productId;
            openProductModal(productId);
        });
    });

    document.querySelectorAll('.btn-buy-now').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

// Create product card
function createProductCard(product) {
    const categoryNames = {
        'tech': 'Tech & Electronics',
        'software': 'Software & Apps',
        'lifestyle': 'Lifestyle',
        'business': 'Business Tools'
    };

    const starsHTML = generateStarsHTML(product.rating);

    return `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            <div class="product-content">
                <span class="product-category">${categoryNames[product.category]}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>

                <div class="product-rating">
                    <div class="stars">${starsHTML}</div>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>

                <div class="product-price">
                    <div class="price-info">
                        <span class="price">${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                    </div>
                    ${product.discount ? `<span class="discount-badge">${product.discount}</span>` : ''}
                </div>

                <div class="product-features">
                    <h4>Key Features:</h4>
                    <ul class="features-list">
                        ${product.features.slice(0, 3).map(feature => `
                            <li><i class="fas fa-check"></i> ${feature}</li>
                        `).join('')}
                    </ul>
                </div>

                <div class="product-tags">
                    ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                </div>

                <div class="product-buttons">
                    <a href="${product.buyLink}" target="_blank" class="btn-product btn-primary-product btn-buy-now">
                        <i class="fas fa-shopping-cart"></i> Buy Now
                    </a>
                    <button class="btn-product btn-secondary-product btn-learn-more" data-product-id="${product.id}">
                        <i class="fas fa-info-circle"></i> Learn More
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate stars HTML
function generateStarsHTML(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star star"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt star"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="fas fa-star star empty"></i>';
    }

    return starsHTML;
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    const modal = createProductModal(product);
    document.body.appendChild(modal);

    // Show modal
    setTimeout(() => {
        modal.style.display = 'block';
    }, 10);

    // Close modal events
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => closeModal(modal));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Create product modal
function createProductModal(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';

    const starsHTML = generateStarsHTML(product.rating);
    const specsHTML = Object.entries(product.specs).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">${product.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <img src="${product.image}" alt="${product.title}" class="modal-product-image">

                <div class="product-rating">
                    <div class="stars">${starsHTML}</div>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>

                <div class="product-price">
                    <div class="price-info">
                        <span class="price">${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                    </div>
                    ${product.discount ? `<span class="discount-badge">${product.discount}</span>` : ''}
                </div>

                <p class="modal-description">${product.longDescription}</p>

                <div class="product-features">
                    <h4>Key Features:</h4>
                    <ul class="features-list">
                        ${product.features.map(feature => `
                            <li><i class="fas fa-check"></i> ${feature}</li>
                        `).join('')}
                    </ul>
                </div>

                <div class="modal-specs">
                    <h4>Technical Specifications:</h4>
                    <div class="specs-grid">
                        ${specsHTML}
                    </div>
                </div>

                <div class="product-buttons">
                    <a href="${product.buyLink}" target="_blank" class="btn-product btn-primary-product">
                        <i class="fas fa-external-link-alt"></i> View on Official Site
                    </a>
                </div>
            </div>
        </div>
    `;

    return modal;
}

// Close modal
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.removeChild(modal);
    document.body.style.overflow = 'auto';
}

// Scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

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
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe product cards
    const observeElements = () => {
        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
    };

    // Initial observation
    setTimeout(observeElements, 100);

    // Re-observe when products are re-rendered
    const originalRenderProducts = renderProducts;
    renderProducts = function() {
        originalRenderProducts();
        setTimeout(observeElements, 100);
    };
}