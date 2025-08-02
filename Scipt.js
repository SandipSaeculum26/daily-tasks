// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});



document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.faq-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.parentElement.querySelector('.faq-content');
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden'); 
      } else {
        content.classList.add('hidden'); 
      }
    });
  });
});
