document.addEventListener('DOMContentLoaded', () => {
  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.3 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Smooth scrolling for in-page links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Burger menu toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  if (burger) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  }
});