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

