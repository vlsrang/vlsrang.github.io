const root = document.documentElement;
const nav = document.getElementById('nav');
const links = Array.from(document.querySelectorAll('.nav-links a'));
const targets = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
const toggle = document.getElementById('theme-toggle');
const themeColor = document.getElementById('theme-color');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function storedTheme(){
  try {
    const value = localStorage.getItem('theme');
    return value === 'light' || value === 'dark' ? value : null;
  } catch (error) {
    return null;
  }
}

function applyTheme(theme){
  root.setAttribute('data-theme', theme);
  themeColor.setAttribute('content', theme === 'dark' ? '#161617' : '#ffffff');
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

function markScrolled(){
  nav.classList.toggle('is-scrolled', window.scrollY > 8);
}

function markCurrent(id){
  links.forEach((link) => {
    if (link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
toggle.hidden = false;

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch (error) {
    return;
  }
});

systemDark.addEventListener('change', (event) => {
  if (!storedTheme()) applyTheme(event.matches ? 'dark' : 'light');
});

document.addEventListener('scroll', markScrolled, { passive: true });
markScrolled();

if ('IntersectionObserver' in window){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) markCurrent(entry.target.id);
    });
  }, { rootMargin: '-35% 0px -60% 0px' });

  targets.forEach((target) => observer.observe(target));
}
