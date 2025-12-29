const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const burger = document.getElementById('burger');
const mobile = document.getElementById('mobileNav');

if (burger && mobile) {
  burger.addEventListener('click', () => {
    mobile.classList.toggle('show');
    mobile.setAttribute('aria-hidden', mobile.classList.contains('show') ? 'false' : 'true');
  });

  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.remove('show');
      mobile.setAttribute('aria-hidden', 'true');
    });
  });
}

const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbTitle = document.getElementById('lbTitle');

document.querySelectorAll('.shot').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-src');
    const title = btn.getAttribute('data-title') || 'Pantalla';

    if (lbTitle) lbTitle.textContent = title;

    if (lbImg) {
      lbImg.src = src || '';
      lbImg.onerror = () => {
        lbImg.removeAttribute('src');
        lbImg.alt = 'Sube una imagen a /assets/screens';
      };
    }

    if (lb) {
      lb.classList.add('show');
      lb.setAttribute('aria-hidden', 'false');
    }
  });
});

if (lb) {
  lb.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.dataset && t.dataset.close) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb.classList.contains('show')) closeLightbox();
  });
}

function closeLightbox() {
  if (!lb) return;
  lb.classList.remove('show');
  lb.setAttribute('aria-hidden', 'true');
  if (lbImg) lbImg.removeAttribute('src');
}
