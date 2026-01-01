// 1. Sticky Navigation Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// 2. Mobile Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');

    // Optional: Animate burger lines
    burger.classList.toggle('toggle-burger');
});

// Close menu when a link is clicked (for mobile)
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 3. Prevent Iframe from jumping (Optional)
// Ensures the page doesn't scroll to the bottom automatically when iframe loads
window.onload = function() {
    window.scrollTo(0, 0);
};