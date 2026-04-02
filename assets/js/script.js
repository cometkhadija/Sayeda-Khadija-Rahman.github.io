// Simple script for future interactivity
document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ Sayeda Khadija Portfolio Loaded Successfully!");

  // Smooth scrolling for navigation links
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
});