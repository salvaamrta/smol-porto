  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
    backToTopButton.style.opacity = '1';
  } else {
    backToTopButton.style.opacity = '0';
    setTimeout(() => {
      backToTopButton.style.display = 'none';
    }, 300);
  }
});
  document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});