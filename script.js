const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Demo-only form: replace this handler with Formspree, Netlify Forms, or your own backend to collect submissions.
document.getElementById('visit-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'Thanks! The demo form works in your browser, but it is not connected to an inbox yet.';
  note.setAttribute('role', 'status');
});
