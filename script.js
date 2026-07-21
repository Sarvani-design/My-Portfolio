// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Work grid — filter by build method + sort by newest
(() => {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.project-card'));
  const curatedOrder = cards.slice(); // original hand-picked DOM order
  const pills = document.querySelectorAll('.filter-pill');
  const sortBtn = document.getElementById('sortToggle');
  const sortLabel = sortBtn ? sortBtn.querySelector('.sort-toggle-label') : null;

  let activeFilter = 'all';
  let newestFirst = true;

  function applyFilter() {
    cards.forEach(card => {
      const matches = activeFilter === 'all' || card.dataset.build === activeFilter;
      card.hidden = !matches;
    });
  }

  function applySort() {
    const ordered = newestFirst
      ? cards.slice().sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date))
      : curatedOrder;
    ordered.forEach(card => grid.appendChild(card));
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.dataset.filter;
      applyFilter();
    });
  });

  if (sortBtn) {
    sortBtn.addEventListener('click', () => {
      newestFirst = !newestFirst;
      sortBtn.classList.toggle('active', newestFirst);
      sortBtn.setAttribute('aria-pressed', String(newestFirst));
      if (sortLabel) sortLabel.textContent = newestFirst ? 'Newest first' : 'Curated order';
      applySort();
    });
  }

  applySort();
})();
