// Basic interactions: dynamic year, scroll reveal, mobile nav, and theme toggle

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll(
    '.section, .hero-card, .work-card, .skill-group, .journey-column, .tool-card, .contact-card, .info-card'
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a small delay based on index for staggered effect in grids
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, index * 50); // 50ms stagger
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger slightly earlier
      rootMargin: '0px 0px -50px 0px' // Offset to trigger a bit before fully in view
    }
  );

  revealEls.forEach(el => observer.observe(el));

  // Mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
    });

    navLinks.addEventListener('click', event => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
      }
    });
  }

  // Theme toggle (dark / light)
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const storedTheme = window.localStorage.getItem('theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    body.setAttribute('data-theme', storedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = body.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', next);
      window.localStorage.setItem('theme', next);
    });
  }
});



