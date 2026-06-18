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

        // Update top nav
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Update bottom nav
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
                // Update URL
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

    // Initial update
    updateActiveLink();
});