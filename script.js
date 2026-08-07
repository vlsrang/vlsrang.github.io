// Dynamic-range scroll meter
const meter = document.getElementById('rangeMeter');
function updateMeter(){
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const height = h.scrollHeight - h.clientHeight;
  const pct = height > 0 ? (scrolled / height) * 100 : 0;
  meter.style.width = pct + '%';
}
document.addEventListener('scroll', updateMeter, { passive: true });
updateMeter();

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// Obfuscated email reveal / copy
const emailBtn = document.getElementById('emailBtn');
const emailLabel = document.getElementById('emailLabel');
if (emailBtn){
  emailBtn.addEventListener('click', async () => {
    const address = `${emailBtn.dataset.user}@${emailBtn.dataset.domain}`;
    if (emailLabel.textContent === 'Reveal email'){
      emailLabel.textContent = address;
      return;
    }
    try{
      await navigator.clipboard.writeText(address);
      emailLabel.textContent = 'Copied ✓';
      setTimeout(() => { emailLabel.textContent = address; }, 1400);
    }catch(e){
      window.location.href = `mailto:${address}`;
    }
  });
}
