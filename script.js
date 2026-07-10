// ============================================================
// SHIVCH BESPOKE — Site Script
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // ---- Hero slide index (01 / 02 / 03) ----
  const slideNums = document.querySelectorAll('.slide-num');
  const nextBtn = document.getElementById('hero-next');
  const prevBtn = document.getElementById('hero-prev');
  let current = 0;

  function setActiveSlide(index) {
    slideNums.forEach((el, i) => el.classList.toggle('active', i === index));
    current = index;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      setActiveSlide((current + 1) % slideNums.length);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      setActiveSlide((current - 1 + slideNums.length) % slideNums.length);
    });
  }
  slideNums.forEach((el, i) => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => setActiveSlide(i));
  });

  // ---- Watch the film button (placeholder action) ----
  const watchFilm = document.getElementById('watch-film');
  if (watchFilm) {
    watchFilm.addEventListener('click', () => {
      // Replace this with a modal / video embed of your brand film
      alert('Add your brand film link or modal here.');
    });
  }

});
