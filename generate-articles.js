const fs = require('fs');
const path = require('path');

// Blog posts data (same as in script.js)
const blogPosts = [
    {
        id: 1,
        title: "Best Productivity Apps for Remote Workers in 2025",
        excerpt: "Discover the top productivity applications that can transform your remote work experience and boost your efficiency.",
        category: "product-reviews",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
        date: "2025-08-15",
        readTime: "8 min read",
        content: `
            <h1>Best Productivity Apps for Remote Workers in 2025</h1>
            <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80" alt="Remote worker using productivity apps on laptop at home office" class="article-image">

            <p>The remote work revolution has fundamentally changed how we approach productivity. With teams scattered across different time zones and working from various environments, the right tools can make or break your work-from-home experience.</p>

            <h2>Essential Categories of Productivity Apps</h2>

            <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Slack interface showing team communication channels" class="article-image">

            <p>Remote work productivity falls into several key categories: communication, project management, time tracking, and focus enhancement. Each category serves a unique purpose in creating a seamless work experience.</p>

            <h3>Top Communication Tools</h3>
            <p><strong>Slack</strong> continues to dominate team communication with its channel-based approach and extensive integration capabilities. Its threaded conversations and file sharing make it ideal for maintaining organized discussions.</p>

            <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Microsoft Teams video conference call on computer screen" class="article-image">

            <p><strong>Microsoft Teams</strong> has emerged as a strong contender, especially for organizations already using Office 365. Its integrated approach to video calls, file collaboration, and chat makes it a comprehensive solution.</p>

            <h3>Project Management Excellence</h3>
            <p><strong>Notion</strong> has revolutionized how teams organize information. Its flexibility allows for everything from simple note-taking to complex project databases, making it perfect for teams that need customization.</p>

            <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Notion workspace showing project management dashboard" class="article-image">

            <p><strong>Asana</strong> excels in traditional project management with its timeline views, task dependencies, and progress tracking. It's particularly effective for teams working on complex, multi-phase projects.</p>

            <h3>Time Management and Focus</h3>
            <p><strong>RescueTime</strong> provides detailed analytics about how you spend your digital time, helping identify productivity patterns and time-wasting activities. Its automatic tracking requires no manual input, making it perfect for busy professionals.</p>

            <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="RescueTime productivity dashboard showing time tracking analytics and focus scores on laptop screen" class="article-image">

            <h2>Conclusion</h2>
            <p>The key to remote work productivity isn't using every available tool, but rather selecting the right combination that fits your team's workflow and communication style. Start with one tool in each category and gradually expand based on your specific needs.</p>
        `
    },
    {
        id: 2,
        title: "Complete Guide to E-commerce Platforms: Shopify vs WooCommerce",
        excerpt: "An in-depth comparison of the two leading e-commerce platforms to help you make the right choice for your online business.",
        category: "platform-guides",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
        date: "2025-07-22",
        readTime: "12 min read",
        content: `
            <h1>Complete Guide to E-commerce Platforms: Shopify vs WooCommerce</h1>
            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80" alt="Online store interface comparison showing Shopify and WooCommerce platforms" class="article-image">

            <p>Choosing the right e-commerce platform is one of the most critical decisions you'll make for your online business. Today, we'll dive deep into comparing Shopify and WooCommerce, the two most popular solutions in the market.</p>

            <h2>Platform Overview</h2>

            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="E-commerce platform comparison showing online store management interfaces for different solutions" class="article-image">

            <p><strong>Shopify</strong> is a hosted solution that provides everything you need to run an online store. It handles hosting, security, and updates automatically, making it ideal for entrepreneurs who want to focus on their business rather than technical details.</p>

            <p><strong>WooCommerce</strong> is a WordPress plugin that transforms your WordPress website into a fully functional e-commerce store. It offers complete control over your store's design and functionality but requires more technical knowledge.</p>

            <h2>Ease of Use Comparison</h2>

            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="User-friendly e-commerce store setup interface with drag and drop features" class="article-image">

            <p>Shopify wins in the ease-of-use category. Its drag-and-drop interface allows you to set up a professional-looking store within hours. The platform handles all technical aspects, including security certificates, hosting, and software updates.</p>

            <p>WooCommerce requires more setup time and technical knowledge. You'll need to handle WordPress hosting, security, backups, and updates manually or through your hosting provider.</p>

            <h2>Customization and Flexibility</h2>

            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="WordPress dashboard showing WooCommerce plugin settings and customization options" class="article-image">

            <p>WooCommerce offers unlimited customization possibilities. Being open-source, you can modify every aspect of your store's functionality and appearance. With access to thousands of WordPress themes and plugins, the possibilities are endless.</p>

            <p>Shopify provides good customization options through its theme store and app marketplace, but you're somewhat limited by the platform's structure. However, for most businesses, Shopify's customization options are more than sufficient.</p>

            <h2>Cost Analysis</h2>

            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Shopify vs WooCommerce cost comparison spreadsheet showing monthly fees, hosting costs, and transaction fees breakdown" class="article-image">

            <p>Shopify's pricing is straightforward but can become expensive as your business grows. Plans start at $39/month, but you'll also pay transaction fees unless you use Shopify Payments.</p>

            <p>WooCommerce itself is free, but you'll need to pay for hosting, domain, SSL certificate, and premium plugins. While potentially cheaper initially, costs can add up as you scale.</p>

            <h2>Final Recommendation</h2>
            <p>Choose <strong>Shopify</strong> if you want a hassle-free, all-in-one solution and don't mind paying for convenience. Choose <strong>WooCommerce</strong> if you need maximum flexibility, have technical skills, and want complete control over your store.</p>
        `
    },
    {
        id: 3,
        title: "Essential Web Development Tools Every Developer Should Know",
        excerpt: "From code editors to debugging tools, discover the essential toolkit that every modern web developer needs in 2025.",
        category: "tech-tips",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
        date: "2025-06-10",
        readTime: "10 min read",
        content: `
            <h1>Essential Web Development Tools Every Developer Should Know</h1>
            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80" alt="Web development tools and code editor setup on developer workstation" class="article-image">

            <p>The web development landscape evolves rapidly, with new tools and frameworks emerging constantly. However, some tools have proven their worth and become essential parts of every developer's toolkit.</p>

            <h2>Code Editors and IDEs</h2>

            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Visual Studio Code interface showing HTML CSS JavaScript code" class="article-image">

            <p><strong>Visual Studio Code</strong> has become the gold standard for web development. Its extensive plugin ecosystem, built-in Git integration, and intelligent IntelliSense make it perfect for both beginners and experienced developers.</p>

            <p><strong>WebStorm</strong> by JetBrains offers powerful refactoring tools and excellent JavaScript support, making it ideal for complex projects that require advanced code analysis and debugging capabilities.</p>

            <h2>Version Control and Collaboration</h2>

            <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Git version control workflow showing branch management, commits, and merge operations in development environment" class="article-image">

            <p><strong>Git</strong> remains the cornerstone of modern development workflows. Understanding branching, merging, and collaboration workflows is essential for any developer working on team projects.</p>

            <p><strong>GitHub</strong> provides not just repository hosting but also project management tools, CI/CD through Actions, and a platform for open-source collaboration.</p>

            <h2>Browser Developer Tools</h2>

            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Chrome DevTools debugging interface showing console and elements panel" class="article-image">

            <p>Chrome DevTools and Firefox Developer Edition offer powerful debugging capabilities. Features like the Elements inspector, Network tab, and Performance profiler are indispensable for troubleshooting and optimization.</p>

            <h2>Build Tools and Task Runners</h2>

            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Webpack and Vite build tools configuration files and terminal output" class="article-image">

            <p><strong>Webpack</strong> and <strong>Vite</strong> have revolutionized how we bundle and serve web applications. They handle module bundling, code splitting, and hot reloading, making development more efficient.</p>

            <p><strong>npm scripts</strong> provide a simple way to automate common tasks without additional build tools, perfect for smaller projects or when you need lightweight automation.</p>

            <h2>Testing and Quality Assurance</h2>

            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Jest testing framework showing test results and code coverage" class="article-image">

            <p><strong>Jest</strong> for unit testing, <strong>Cypress</strong> for end-to-end testing, and <strong>ESLint</strong> for code quality ensure your applications are robust and maintainable.</p>

            <h2>Conclusion</h2>
            <p>While tools are important, remember that they're meant to enhance your productivity, not complicate your workflow. Start with the basics and gradually add tools as your projects and skills grow.</p>
        `
    },
    {
        id: 4,
        title: "Smart Home Security Systems: Protecting Your Digital Life",
        excerpt: "Explore the latest smart home security technologies and learn how to protect your connected devices from cyber threats.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
        date: "2025-05-03",
        readTime: "7 min read",
        content: `
            <h1>Smart Home Security Systems: Protecting Your Digital Life</h1>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80" alt="Smart home security control panel showing multiple camera feeds, door lock status, and motion sensor alerts" class="article-image">

            <p>As our homes become increasingly connected, security extends beyond traditional locks and alarms to encompass cybersecurity, privacy protection, and intelligent automation systems.</p>

            <h2>The Modern Security Landscape</h2>

            <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Ring video doorbell with motion detection showing visitor alert on smartphone app" class="article-image">

            <p>Today's smart home security systems go far beyond simple burglar alarms. They integrate cameras, motion sensors, door locks, and environmental monitoring into cohesive systems that can be controlled remotely and respond intelligently to threats.</p>

            <p>Leading platforms like <strong>Ring</strong>, <strong>ADT</strong>, and <strong>SimpliSafe</strong> offer comprehensive solutions that combine hardware, software, and professional monitoring services.</p>

            <h2>Key Security Components</h2>

            <img src="images/锁.png" alt="Professional smart door lock with digital keypad showing keyless entry and smartphone control features" class="article-image">

            <p><strong>Smart Cameras</strong> with AI-powered detection can distinguish between family members, pets, and potential intruders, reducing false alarms while maintaining security.</p>

            <p><strong>Smart Locks</strong> allow keyless entry through smartphones, temporary access codes for guests, and activity logging to track who enters and exits your home.</p>

            <h2>Cybersecurity Considerations</h2>

            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Network security interface showing WPA3 encryption settings and IoT device isolation for smart home protection" class="article-image">

            <p>Smart home devices can become entry points for cybercriminals. Ensure your network is secured with WPA3 encryption, regular firmware updates, and strong, unique passwords for each device.</p>

            <p>Consider creating a separate IoT network for smart home devices to isolate them from computers and phones containing sensitive personal information.</p>

            <h2>Privacy and Data Protection</h2>

            <img src="images/数据.png" alt="Smart home security app privacy settings interface showing data collection controls, storage options, and user permissions management" class="article-image">

            <p>Review privacy policies carefully and understand what data your security devices collect, how it's stored, and who has access. Many systems offer local storage options to keep sensitive footage on your premises.</p>

            <h2>Integration and Automation</h2>
            <img src="images/自动.png" alt="Smart home automation system showing integrated security, lighting, and climate control for intelligent occupancy simulation" class="article-image">
            <p>Modern security systems integrate with smart lighting, thermostats, and other connected devices to create the appearance of occupancy when you're away, enhancing both security and energy efficiency.</p>
        `
    },
    {
        id: 5,
        title: "Top 10 Gaming Laptops Under $1500: Performance on a Budget",
        excerpt: "Discover powerful gaming laptops that deliver excellent performance without breaking the bank. Our comprehensive review of 2025's best budget gaming machines.",
        category: "product-reviews",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
        date: "2025-03-18",
        readTime: "15 min read",
        content: `
            <h1>Top 10 Gaming Laptops Under $1500: Performance on a Budget</h1>
            <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80" alt="Gaming laptop displaying Cyberpunk 2077 with RGB keyboard backlighting" class="article-image">

            <p>Gaming laptops have come a long way in recent years, with manufacturers finding innovative ways to pack powerful hardware into affordable packages. Our comprehensive testing reveals the best gaming laptops that won't drain your wallet.</p>

            <h2>What to Look for in Budget Gaming Laptops</h2>

            <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Gaming laptop specifications showing RTX 3050 GPU, AMD Ryzen 5 CPU, RAM, and display features for budget gaming performance" class="article-image">

            <p>The sweet spot for budget gaming lies in finding the right balance between CPU power, GPU performance, RAM capacity, and display quality. Modern budget laptops typically feature GTX 1650 or RTX 3050 graphics cards paired with AMD Ryzen 5 or Intel Core i5 processors.</p>

            <h2>Top Contenders</h2>

            <h3>1. ASUS TUF Gaming A15 - $1299</h3>
            <img src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="ASUS TUF Gaming A15 laptop displaying specifications with AMD Ryzen 7, RTX 3050 Ti graphics, and military-grade durability features" class="article-image">

            <p>Features AMD Ryzen 7 processor and RTX 3050 Ti graphics. The military-grade durability testing ensures this laptop can handle both intense gaming sessions and daily use. Battery life impressively reaches 6-7 hours for productivity tasks.</p>

            <h3>2. Acer Nitro 5 - $1199</h3>
            <p>Offers excellent price-to-performance ratio with Intel Core i5 and RTX 3060 graphics. The 144Hz display provides smooth gaming experiences, though color accuracy could be better for content creation.</p>

            <h2>Performance Benchmarks</h2>

            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Gaming benchmark chart showing FPS performance comparison for Cyberpunk 2077, Valorant, and Minecraft on budget gaming laptops" class="article-image">

            <p>Our testing shows these budget laptops can handle popular titles like Cyberpunk 2077 at medium settings (45-55 FPS), Valorant at high settings (120+ FPS), and Minecraft with shaders (80+ FPS).</p>

            <h2>Upgrade Potential</h2>

            <img src="images/笔记本.png" alt="Gaming laptop internal components showing upgradeable RAM slots and SSD storage options for performance enhancement" class="article-image">

            <p>Most budget gaming laptops allow RAM and storage upgrades. Starting with 8GB RAM and upgrading to 16GB later can significantly improve performance in modern games that demand more memory.</p>

            <h2>Conclusion</h2>
            <p>Budget gaming laptops in 2025 offer unprecedented value, providing solid 1080p gaming performance for under $1500. While they may require some compromises in build quality or display features, they deliver where it matters most: gaming performance.</p>
        `
    },
    {
        id: 6,
        title: "FrenchToast: Your Family's Destination for School Preparation",
        excerpt: "Discover how FrenchToast makes back-to-school shopping easier with quality uniforms, affordable prices, and comprehensive school preparation solutions for families.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=250&fit=crop&crop=entropy&auto=format&q=80",
        date: "2025-08-25",
        readTime: "9 min read",
        content: `
            <h1>FrenchToast: Your Family's Destination for School Preparation</h1>
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80" alt="Students in school uniforms with backpacks walking to school building showing back-to-school preparation" class="article-image">

            <p>As families across the country gear up for another school year, one brand has consistently stood out as the go-to destination for school uniform shopping: FrenchToast. For over three decades, this trusted retailer has been simplifying the back-to-school experience for millions of families with their comprehensive range of quality uniforms and school essentials.</p>

            <h2>The FrenchToast Legacy: Built for School Success</h2>

            <img src="https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Neatly arranged school uniform collection showing polo shirts, khaki pants, plaid skirts, and accessories organized by color" class="article-image">

            <p>Founded with the mission to make quality school uniforms accessible to every family, FrenchToast has evolved from a small uniform supplier to America's leading school uniform retailer. The company understands that school preparation extends far beyond just purchasing clothes – it's about setting students up for success with comfortable, durable, and confidence-building attire.</p>

            <p>What sets FrenchToast apart is their deep understanding of what schools, parents, and students need. Their extensive catalog includes everything from traditional polo shirts and khakis to modern athletic wear and seasonal outerwear, all designed with the school environment in mind.</p>

            <h2>Comprehensive School Uniform Solutions</h2>

            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=300&fit=crop&crop=entropy&auto=format&q=80" alt="Diverse elementary school students in matching polo shirts and khaki uniforms standing together in classroom" class="article-image">

            <p><strong>Girls' Uniform Essentials</strong> include a complete range of options from classic pleated skirts and jumpers to modern athletic shorts and performance polos. FrenchToast's girls' collection focuses on both style and functionality, ensuring students feel confident while meeting dress code requirements.</p>

            <p><strong>Boys' Uniform Standards</strong> feature durable pants, comfortable polo shirts, and dress shirts that can withstand the daily adventures of school life. The collection emphasizes easy care fabrics and reinforced construction in high-wear areas.</p>

            <h3>Extended Sizes and Inclusive Options</h3>
            <p>Understanding that students come in all shapes and sizes, FrenchToast offers an extensive size range including plus sizes, husky fits, and slim options. Their commitment to inclusivity ensures every student can find uniforms that fit properly and feel comfortable throughout the school day.</p>

            <h2>Quality That Withstands the School Year</h2>

            <img src="images/校服/校服1.png" alt="High-quality school uniform polo shirts in navy, white, and light blue colors showing wrinkle-resistant fabric and reinforced seams" class="article-image">

            <p>One of FrenchToast's greatest strengths lies in their fabric technology and construction quality. Their uniforms are designed to endure multiple washings, resist stains, and maintain their shape and color throughout the academic year. Key features include:</p>

            <p><strong>Easy Care Fabrics:</strong> Wrinkle-resistant materials that look crisp even after a full day of activities. Most items can be machine washed and dried, saving busy families time and money on dry cleaning.</p>

            <p><strong>Stain Release Technology:</strong> Many FrenchToast items feature built-in stain protection, making lunch spills and playground mishaps less of a concern for parents.</p>

            <h2>Affordable Pricing for Every Budget</h2>

            <img src="images/校服/校服2.png" alt="School uniform shopping display showing affordable khaki pants, polo shirts, and plaid skirts with price tags and size options" class="article-image">

            <p>FrenchToast recognizes that outfitting multiple children for school can be a significant expense. Their pricing strategy focuses on providing maximum value without compromising quality. Regular sales, bulk discounts, and school-specific pricing programs help families stretch their back-to-school budgets further.</p>

            <p>The company's <strong>School Partner Program</strong> works directly with educational institutions to offer exclusive discounts and simplified ordering processes. This partnership approach ensures that families have access to approved uniform items at competitive prices.</p>

            <h2>Convenient Shopping Experience</h2>

            <img src="images/校服/校服3.png" alt="School uniform essentials laid out including navy polo shirt, khaki pants, plaid skirt, white socks, and black shoes for complete school outfit" class="article-image">

            <p>FrenchToast has invested heavily in creating a seamless shopping experience both online and in retail locations. Their website features school-specific stores, making it easy for parents to find exactly what their child's school requires. Advanced filtering options allow shoppers to sort by size, color, price, and specific school requirements.</p>

            <p><strong>School Store Locator:</strong> Simply enter your school's name to access a customized store with pre-approved uniform items, correct colors, and any special requirements.</p>

            <p><strong>Size Guides and Fit Assistance:</strong> Detailed sizing charts and fit guides help ensure the right size selection, reducing returns and exchanges.</p>

            <h2>Beyond Uniforms: Complete School Preparation</h2>
            <p>While uniforms remain their core focus, FrenchToast has expanded to offer a complete school preparation solution. From backpacks and lunch boxes to socks and belts, families can find everything needed for a successful school year in one convenient location.</p>

            <p>The brand's commitment to supporting student success extends beyond just providing clothes – they're helping families create positive school experiences that build confidence and promote learning.</p>

            <h2>Conclusion</h2>
            <p>FrenchToast has earned its reputation as America's trusted school uniform destination through decades of commitment to quality, affordability, and customer service. As families prepare for the upcoming school year, FrenchToast continues to evolve and adapt, ensuring that students are dressed for success and ready to tackle whatever the academic year brings.</p>
        `
    }
];

// Generate article HTML content
function generateArticleHTML(post) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} - plexcent</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/article.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <a href="index.html" class="nav-logo">
                    <span class="logo-text">plexcent</span>
                </a>
                <a href="index.html" class="back-link">
                    <i class="fas fa-arrow-left"></i> Back to Home
                </a>
            </div>
        </nav>
    </header>

    <main class="article-main">
        <div class="container">
            <article class="article-content">
                ${post.content}

                <div class="article-footer">
                    <div class="article-meta">
                        <span class="article-date">
                            <i class="fas fa-calendar"></i>
                            ${new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        <span class="article-read-time">
                            <i class="fas fa-clock"></i>
                            ${post.readTime}
                        </span>
                    </div>

                    <div class="share-buttons">
                        <h4>Share this article:</h4>
                        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}" target="_blank" class="share-btn twitter">
                            <i class="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}" target="_blank" class="share-btn facebook">
                            <i class="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}" target="_blank" class="share-btn linkedin">
                            <i class="fab fa-linkedin-in"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </main>

    <button class="back-to-top" id="backToTop">
        <i class="fas fa-arrow-up"></i>
    </button>

    <script>
        // Back to top functionality
        const backToTopBtn = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    </script>
</body>
</html>`;
}

// Generate all article files
function generateAllArticles() {
    blogPosts.forEach(post => {
        const articleHTML = generateArticleHTML(post);
        const fileName = `article-${post.id}.html`;

        fs.writeFileSync(fileName, articleHTML, 'utf8');
        console.log(`Generated ${fileName}: ${post.title}`);
    });

    console.log(`\nSuccessfully generated ${blogPosts.length} article files!`);
    console.log('You can now access articles directly via URLs like:');
    blogPosts.forEach(post => {
        console.log(`- article-${post.id}.html`);
    });
}

// Run the generator
generateAllArticles();