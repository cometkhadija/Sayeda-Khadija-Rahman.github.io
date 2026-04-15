// Sayeda Khadija - Portfolio Script
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Sayeda Khadija Portfolio Loaded Successfully!");

    // ======================
    // 1. Smooth Scrolling for Navigation Links
    // ======================
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================
    // 2. Navbar becomes Black on Scroll
    // ======================
    const navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (window.scrollY > 80) {          // 80px স্ক্রল করলেই কালো হয়ে যাবে
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial check (page reload এর সময়)
    handleNavbarScroll();

    // Scroll event listener
    window.addEventListener('scroll', handleNavbarScroll);
});