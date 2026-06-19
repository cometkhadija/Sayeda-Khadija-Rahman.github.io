document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Portfolio Loaded!");

    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-right a');
    const bottomLinks = document.querySelectorAll('.bottom-nav a');

    // ===== NAVBAR SCROLL EFFECT =====
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveLink();
    });

    // ===== UPDATE ACTIVE LINK =====
    function updateActiveLink() {
        let current = 'home';
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        bottomLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // ===== SMOOTH SCROLL ON CLICK =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, null, link.getAttribute('href'));
            }
        });
    });

    // ===== CONTACT FORM =====
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const status = document.getElementById('formStatus');
            const btn = this.querySelector('button');

            if (!name || !email || !message) {
                status.innerHTML = '<span style="color: #ff6b6b;">⚠️ Please fill all fields</span>';
                return;
            }

            if (!email.includes('@')) {
                status.innerHTML = '<span style="color: #ff6b6b;">⚠️ Valid email required</span>';
                return;
            }

            status.innerHTML = '<span style="color: #ffd54f;">⏳ Sending...</span>';
            btn.disabled = true;

            setTimeout(() => {
                status.innerHTML = '<span style="color: #4ecdc4;">✅ Message sent! I\'ll reply soon.</span>';
                btn.disabled = false;
                this.reset();
                setTimeout(() => status.innerHTML = '', 5000);
            }, 1500);
        });
    }

    // ============================================
    // ===== PROJECT DATA =====
    // ============================================
    const projectData = {
        1: {
            title: 'CreatorHub Ecommerce Platform',
            description: 'JU Creator\'s Hub is a student-powered e-commerce platform dedicated to the creative and entrepreneurial minds of Jahangirnagar University. Within the campus, many students independently run small businesses—ranging from handmade jewelry and crafts to home-cooked meals and customized clothing. Despite their potential, these initiatives often lack the digital exposure and structured systems needed to grow. This platform aims to bridge that gap by offering a centralized online space where student-led ventures can thrive. It supports both sellers and buyers within the JU community, encouraging innovation, self-reliance, and a spirit of collaboration.',
            tech: ['HTML', 'CSS', 'Django', 'JavaScript', 'SQLite'],
            features: [
                'Product browsing with category-based navigation and clear product visuals',
                'Smart search and filtering by keywords and product categories',
                'Detailed product pages with pricing, availability, seller information, and external links',
                'Shopping cart system for managing multiple products before checkout',
                'Simple checkout process with Cash on Delivery and direct seller contact options',
                'Responsive design optimized for mobile, tablet, and desktop devices',
                'Seller dashboard for managing shop activities and product listings',
                'Inventory management system to add, update, and remove products',
                'External promotion links integration for Facebook, YouTube, and WhatsApp',
                'Basic order management to view and respond to customer orders',
                'Admin dashboard for centralized platform management',
                'User management with monitoring and access control features',
                'Product moderation to review, edit, or remove listings',
                'Order tracking overview for monitoring platform-wide order activities'
            ],
            github: 'https://github.com/yourusername/creatorhub'
        },
        2: {
            title: 'AI-Powered Career Plan Adviser',
            description: 'This project aims to develop an intelligent, user-friendly Android application that leverages AI to provide personalized career guidance for Computer Science and Engineering students. By integrating advanced AI models with a robust online backend, the app will deliver tailored recommendations, year-wise preparation plans, and real-time market insights. This solution will empower students to make informed career decisions and better prepare for their professional journeys.',
            tech: ['Android Studio', 'Django REST Framework', 'TensorFlow', 'Retrofit', 'Scikit-learn', 'JWT Tokens', 'PostgreSQL'],
            features: [
                'Account Management with secure authentication',
                'Career Goal Selection based on student interests',
                'Personalized Roadmap Access with year-wise plans',
                'Progress Tracking with visual analytics',
                'AI Assistance for personalized recommendations'
            ],
            github: 'https://github.com/yourusername/career-adviser'
        },
        3: {
            title: 'Knowledge Graph QA System',
            description: 'A semantic question answering system that processes natural language queries and retrieves answers from a Bangla knowledge graph. Built for low-resource language processing with transformer-based models.',
            tech: ['Neo4j', 'Python', 'NLP', 'Transformers', 'Flask'],
            features: [
                'Natural language understanding for Bangla queries',
                'Graph-based knowledge retrieval and reasoning',
                'Transformer-based semantic parsing',
                'Interactive query interface with visualization',
                'Support for complex multi-hop questions'
            ],
            github: 'https://github.com/yourusername/knowledge-qa'
        },
        4: {
            title: 'Thunderstorm Forecasting',
            description: 'A machine learning model that predicts thunderstorm events using historical climate data of Bangladesh. The system uses ensemble methods and time-series analysis for accurate weather prediction.',
            tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
            features: [
                'Ensemble learning for improved prediction accuracy',
                'Time-series analysis of climate patterns',
                'Feature engineering from meteorological data',
                'Visualization of prediction results and trends',
                'Published in Q1 journal (International Journal of Climatology)'
            ],
            github: 'https://github.com/yourusername/thunderstorm-forecast'
        },
        5: {
            title: 'OBE Result Analysis System',
            description: 'An educational analytics platform designed for Outcome-Based Education (OBE). The system analyzes student performance data, generates insights, and helps educators track learning outcomes effectively.',
            tech: ['Django', 'React', 'SQL', 'Docker', 'Redis'],
            features: [
                'Comprehensive student performance tracking',
                'AI-based performance analytics and recommendations',
                'Real-time result processing and reporting',
                'Interactive dashboards for educators and admins',
                'Outcome-based assessment and progress monitoring'
            ],
            github: 'https://github.com/yourusername/obe-system'
        }
    };

    // ============================================
    // ===== OPEN PROJECT MODAL =====
    // ============================================
    window.openProject = function(id) {
        console.log("🔍 Opening project:", id);
        const project = projectData[id];
        if (!project) {
            console.error("❌ Project not found:", id);
            return;
        }

        // Set title
        document.getElementById('modalTitle').textContent = project.title;

        // Set description
        document.getElementById('modalDescription').textContent = project.description;

        // Set technologies
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = '';
        project.tech.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techContainer.appendChild(span);
        });

        // Set features
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Set GitHub link
        document.getElementById('modalGithub').href = project.github;

        // Show modal
        document.getElementById('projectModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // ============================================
    // ===== CLOSE PROJECT MODAL =====
    // ============================================
    window.closeProject = function() {
        document.getElementById('projectModal').classList.remove('active');
        document.body.style.overflow = '';
    };

    // ============================================
    // ===== CLOSE ON OUTSIDE CLICK =====
    // ============================================
    window.closeProjectOutside = function(event) {
        if (event.target === event.currentTarget) {
            closeProject();
        }
    };

    // ============================================
    // ===== CLOSE WITH ESC KEY =====
    // ============================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProject();
        }
    });

    // ============================================
    // ===== VIEW DETAILS BUTTON HANDLER =====
    // ============================================
    function handleViewDetails(button) {
        const projectId = button.dataset.project;
        console.log("🎯 View Details clicked! Project ID:", projectId);
        
        if (projectId) {
            const id = parseInt(projectId);
            if (projectData[id]) {
                openProject(id);
            } else {
                console.error("❌ Project data not found for ID:", id);
                alert("Project details not found. Please check the project data.");
            }
        } else {
            console.error("❌ No project ID found on button");
        }
    }

    // Add click listeners to all .btn-view buttons
    document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleViewDetails(this);
        });
    });

    // Fallback: Handle dynamically added buttons or clicks
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.btn-view');
        if (btn && !btn._listenerAdded) {
            btn._listenerAdded = true;
            // The main listener above will handle it
            // But if it doesn't, this will catch it
            handleViewDetails(btn);
        }
    });

    // ============================================
    // ===== INITIALIZATION =====
    // ============================================
    updateActiveLink();
    console.log("✅ All systems ready!");
    console.log("✅ Project data loaded:", Object.keys(projectData).length, "projects");
    console.log("✅ View Details buttons found:", document.querySelectorAll('.btn-view').length);
});