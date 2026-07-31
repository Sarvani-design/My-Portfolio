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
  // Curated order is its own explicit ranking (data-curated), independent of
  // where a card happens to sit in the HTML — new cards get inserted at the
  // top of the DOM (so "Newest first" looks right without JS), which used to
  // make "Curated order" silently identical to "Newest first". Sorting by
  // data-curated here keeps the two modes genuinely different.
  const curatedOrder = cards.slice().sort((a, b) => (+a.dataset.curated || 0) - (+b.dataset.curated || 0));
  const pills = document.querySelectorAll('.filter-pill');
  const sortPills = document.querySelectorAll('.sort-pill');

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

  sortPills.forEach(pill => {
    pill.addEventListener('click', () => {
      sortPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      newestFirst = pill.dataset.sort === 'newest';
      applySort();
    });
  });

  applySort();
})();
