/* ═══════════════════════════════════════════════
   SHIVCH BESPOKE — Main JS
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR SCROLL ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── HAMBURGER MENU ──
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── HERO SLIDER ──
  const slides     = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;
  let slideTimer;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide]?.classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide]?.classList.add('active');
  }

  function startAutoplay() {
    slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5500);
  }
  function resetAutoplay() {
    clearInterval(slideTimer);
    startAutoplay();
  }

  const slideNext = document.getElementById('slideNext');
  const slidePrev = document.getElementById('slidePrev');
  if (slideNext) slideNext.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoplay(); });
  if (slidePrev) slidePrev.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoplay(); });

  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => { goToSlide(i); resetAutoplay(); });
  });

  if (slides.length > 0) startAutoplay();

  // ── VIDEO MODAL ──
  const watchFilmBtn  = document.getElementById('watchFilm');
  const videoModal    = document.getElementById('videoModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose    = document.getElementById('modalClose');

  function openModal() { videoModal?.classList.add('open'); }
  function closeModal() { videoModal?.classList.remove('open'); }

  watchFilmBtn?.addEventListener('click', openModal);
  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── TESTIMONIAL SLIDER ──
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots         = document.querySelectorAll('.dot');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials[currentTestimonial].classList.remove('active');
    dots[currentTestimonial]?.classList.remove('active');
    currentTestimonial = index;
    testimonials[currentTestimonial].classList.add('active');
    dots[currentTestimonial]?.classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => showTestimonial(i)));
  if (testimonials.length > 0) {
    setInterval(() => showTestimonial((currentTestimonial + 1) % testimonials.length), 5000);
  }

  // ── SCROLL FADE ANIMATION ──
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));

  // Auto-add fade-up to major sections (lazy approach)
  const autoFade = document.querySelectorAll(
    '.process-step, .collection-card, .testimonial-card, .feature-item'
  );
  autoFade.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
    el.classList.add('fade-up');
    observer.observe(el);
  });

});
