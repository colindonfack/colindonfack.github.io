
// Small progressive enhancement for publications & active menu
document.addEventListener('DOMContentLoaded', async () => {
  // Highlight active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === 'index.html' && href === '/') || href.endsWith(path)) a.classList.add('active');
  });

  // Render publications if container exists
  const pubContainer = document.querySelector('#pub-list');
  if (pubContainer){
    try{
      const resp = await fetch('publications.json', {cache:'no-store'});
      const data = await resp.json();
      pubContainer.innerHTML = data.map(renderPub).join('');
    }catch(e){
      pubContainer.innerHTML = '<p class="meta">Add your publications to <code>publications.json</code>.</p>';
    }
  }

  // Dynamic year
  const year = new Date().getFullYear();
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = year;
});

function renderPub(p){
  const tags = (p.tags||[]).map(t=>`<span class="badge">${t}</span>`).join(' ');
  const links = (p.links||[]).map(l=>`<a class="btn" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join(' ');
  return `
    <div class="item">
      <h3>${p.title}</h3>
      <div class="meta">${p.authors} · <em>${p.venue || ''}</em> ${p.year? '· '+p.year : ''}</div>
      <p>${p.abstract || ''}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">${tags} ${links}</div>
    </div>
  `;
}
