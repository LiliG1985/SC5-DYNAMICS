// SC5 Dynamics Dubai — site interactivity

// WhatsApp number, digits only with country code, no + / spaces / dashes.
// Currently set to +1 910 847 4747 — update here if the number ever changes,
// and every WhatsApp button/link on the site updates automatically.
const WHATSAPP_NUMBER = '19108474747';
const WHATSAPP_DISPLAY = '+1 910 847 4747';

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Wire up every WhatsApp button/link from the single number above
  document.querySelectorAll('.whatsapp-link').forEach((el) => {
    const message = el.dataset.waText || "Hi! I'd like to know more about training with SC5 Dynamics Dubai.";
    el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
  document.querySelectorAll('.js-whatsapp-display').forEach((el) => {
    el.textContent = WHATSAPP_DISPLAY;
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav after clicking a link
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal animation
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // Contact form -> mailto (replace YOUR_EMAIL_HERE once the Dubai inbox is set up,
  // or swap this handler for a form service like Formspree / Getform)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const name = data.get('name');
      const email = data.get('email');
      const interest = data.get('interest');
      const message = data.get('message');

      const subject = encodeURIComponent(`SC5 Dynamics Dubai inquiry — ${interest}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:SC5DynamicsBasketball@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
