
const themeToggle = document.getElementById('themeToggle');

// Check saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeToggle) {
    themeToggle.checked = true;
  }
}

if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
}

const counterBtn = document.getElementById('counterBtn');
const counterValue = document.getElementById('counterValue');
let count = 0;

// ONLY runs if counterBtn exists on the current page!
if (counterBtn && counterValue) {
  counterBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
    counterValue.classList.remove('soft-update');
    void counterValue.offsetWidth;
    counterValue.classList.add('soft-update');
  });
}

const backToTopBtn = document.getElementById('backToTopBtn');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}