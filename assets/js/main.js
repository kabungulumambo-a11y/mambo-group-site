// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Année du pied de page
const annee = document.getElementById('annee');
if (annee) annee.textContent = new Date().getFullYear();

// Ombre de l'en-tête au défilement
const header = document.querySelector('.site-header');
const ombre = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
ombre();
window.addEventListener('scroll', ombre, { passive: true });

// Apparition des blocs au défilement
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const blocs = document.querySelectorAll(
    '.section .label, .section h2, .section .intro, .value, .card, .brand-card, .news-card, .contact-list li, .section-head .link-arrow'
  );
  const observer = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        const bloc = entree.target;
        bloc.classList.add('is-visible');
        observer.unobserve(bloc);
        // Une fois apparu, le bloc retrouve ses effets de survol normaux
        bloc.addEventListener('transitionend', () => {
          bloc.classList.remove('reveal', 'is-visible');
          bloc.style.transitionDelay = '';
        }, { once: true });
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  blocs.forEach((bloc) => {
    const freres = Array.from(bloc.parentElement.children);
    bloc.style.transitionDelay = `${Math.min(freres.indexOf(bloc), 5) * 80}ms`;
    bloc.classList.add('reveal');
    observer.observe(bloc);
  });
}
