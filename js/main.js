// Build project cards from window.PROJECTS
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = (window.PROJECTS || []).map((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const tags = (p.tags || []).map(t => `<span class="project-tag">${esc(t)}</span>`).join('');
    const status = p.placeholder ? '' :
      `<div class="project-status ${p.status === 'wip' ? 'wip' : ''}">● ${p.status === 'wip' ? 'IN PROGRESS' : 'LIVE'}</div>`;
    const links = (p.links || []).map(l => l.url
      ? `<a href="${esc(l.url)}" target="_blank" rel="noopener" class="project-link">⌥ ${esc(l.label)}</a>`
      : `<span class="project-link disabled">⌥ ${esc(l.label)}</span>`).join('');
    return `
      <div class="project-card reveal${p.placeholder ? ' placeholder' : ''}">
        <div class="project-num">${num}</div>
        <div class="project-tags">${tags}</div>
        ${status}
        <div class="project-title">${esc(p.title)}</div>
        <div class="project-desc">${esc(p.desc)}</div>
        ${links ? `<div class="project-links">${links}</div>` : ''}
      </div>`;
  }).join('');
}

// Dialog
function openContact() {
  document.getElementById('contactOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeContact() {
  document.getElementById('contactOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
function handleOverlayClick(e) {
  if (e.target === document.getElementById('contactOverlay')) closeContact();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeContact();
});

// Scroll reveal
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
setupReveal();
