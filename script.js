// ═══════════════════════════════════════════
//  JAYKE CLASH STORE — script.js
//  Single source of truth. No duplicate code.
// ═══════════════════════════════════════════

'use strict';

// ─── ACCOUNTS DATA ──────────────────────────────────────────
const accounts = [
  
  {
    id: 1,
    title: 'Townhall 14',
    th: 'EXP 140',
    thTag: 'th14',
    image: 'images/Th14 - Exp140.jpg',
    badge: 'hot',
    badgeText: '🔥 Semi Premium',
    price: '₱2,700',
    priceUsd: '$50',
    heroes: 'BK80 / AQ80 / GW60 / RC70',
    trophies: '3,800',
    warStars: '1,200',
    gems: '1,693',
    wallLevel: 'Level 15 Mix',
    troops: ['Super Witch Max', 'Electro Titan Max', 'Minion Prince ✦', 'Inferno Dragon Max', 'Dragon Max'],
    extras: 'Semi-premium account. Battle Pass active. Skin on Barbarian King. Excellent war record.',
    emoji: '🔥'
  },
  {
    id: 2,
    title: 'Townhall 16',
    th: 'EXP 213',
    thTag: 'th16',
    image: 'images/Th16 - Exp213.jpg',
    badge: 'available',
    badgeText: '✓ Available',
    price: '₱2,300',
    priceUsd: '$42',
    heroes: 'BK70 / AQ70 / GW45 / RC30',
    trophies: '3,200',
    warStars: '850',
    gems: '309',
    wallLevel: 'Level 14 Mix',
    troops: ['Electro Titan Max', 'Super Witch Max', 'Dragon Rider', 'Super Dragon', 'Valkyrie Max'],
    extras: 'Active for 4+ years. Clan with good perks. Supercell ID ready to transfer.',
    emoji: '🐉'
  },
  {
    id: 3,
    title: 'Townhall 17',
    th: 'EXP 236',
    thTag: 'th17',
    image: 'images/Th17 - Exp236.jpg',
    badge: 'available',
    badgeText: '✓ Available',
    price: '₱4,500',
    priceUsd: '$80',
    heroes: 'BK65 / AQ65 / GW40',
    trophies: '2,900',
    warStars: '600',
    gems: '203',
    wallLevel: 'Level 13–14',
    troops: ['Dragon Max', 'Super Dragon', 'Witch Max', 'Bowler Max', 'Miners Max'],
    extras: 'Perfect mid-level TH17. Budget-friendly. Good for players stepping up.',
    emoji: '🏹'
  },
  {
    id: 4,
    title: 'Townhall 18',
    th: 'EXP 237',
    thTag: 'th18',
    image: 'images/Th18 - Exp237.jpg',
    badge: 'available',
    badgeText: '✓ Available',
    price: '₱4,500',
    priceUsd: '$80',
    heroes: 'BK70 / AQ70 / GW50 / RC45',
    trophies: '2,900',
    warStars: '600',
    gems: '203',
    wallLevel: 'Level 13–14',
    troops: ['Dragon Max', 'Super Dragon', 'Witch Max', 'Bowler Max', 'Miners Max'],
    extras: 'Top-tier TH18 account. Great for competitive players.',
    emoji: '👑'
  },
  {
    id: 5,
    title: 'Townhall 18',
    th: 'EXP 251',
    thTag: 'th18',
    image: 'images/Th18 - Exp251.jpg',
    badge: 'hot',
    badgeText: '🔥 Hot Pick',
    price: '₱4,500',
    priceUsd: '$80',
    heroes: 'BK75 / AQ75 / GW55 / RC50',
    trophies: '3,200',
    warStars: '750',
    gems: '450',
    wallLevel: 'Level 14–15',
    troops: ['Dragon Max', 'Super Dragon', 'Witch Max', 'Bowler Max', 'Miners Max'],
    extras: 'Highly active account. Great war stats. Skins included.',
    emoji: '👑'
  },
 
];

// ─── HELPERS ─────────────────────────────────────────────────

const thBarClass = {
  th12: 'th-th12',
  th13: 'th-th13',
  th14: 'th-th14',
  th15: 'th-th15',
  th16: 'th-th16',
  th17: 'th-th17',
  th18: 'th-th18'
};

const tagClass = {
  th12: 'tag-th12',
  th13: 'tag-th13',
  th14: 'tag-th14',
  th15: 'tag-th15',
  th16: 'tag-th16',
  th17: 'tag-th17',
  th18: 'tag-th18'
};

function buildCards(filter = 'all') {
  const grid = document.getElementById('accountsGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? accounts
    : accounts.filter(a => a.thTag === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted);">No accounts found for this filter.</div>';
    return;
  }

  grid.innerHTML = filtered.map(a => {
    const barClass = thBarClass[a.thTag] || '';
    const tClass   = tagClass[a.thTag]   || 'tag-th18';

    return `
    <div class="account-card reveal" data-id="${a.id}">
      <div class="card-th-bar ${barClass}"></div>
      <span class="card-badge badge-${a.badge}">${a.badgeText}</span>
      <div class="card-image">
        <img src="${a.image}" alt="${a.title}" loading="lazy"
          onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\'card-image-placeholder\'>${a.emoji}</div>'">
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <div class="card-title">${a.title}</div>
          <div class="card-th-tag ${tClass}">${a.th}</div>
        </div>
        <div class="card-stats">
          <div class="stat-item">
            <div class="stat-item-label">Heroes</div>
            <div class="stat-item-val">${a.heroes.split('/')[0].trim()}</div>
          </div>
          <div class="stat-item">
            <div class="stat-item-label">Trophies</div>
            <div class="stat-item-val">${a.trophies}</div>
          </div>
          <div class="stat-item">
            <div class="stat-item-label">War Stars</div>
            <div class="stat-item-val">${a.warStars}</div>
          </div>
          <div class="stat-item">
            <div class="stat-item-label">Gems</div>
            <div class="stat-item-val">${a.gems}</div>
          </div>
        </div>
        <div class="card-price">
          <div>
            <div class="price-label">Price</div>
            <div class="price-amount">${a.price} <span style="font-size:13px;color:var(--text-muted);font-family:'Inter',sans-serif;font-weight:400;">${a.priceUsd}</span></div>
          </div>
          <span style="font-size:11px;color:var(--green);font-weight:700;text-transform:uppercase;letter-spacing:1px;">Negotiable</span>
        </div>
        <button class="btn-info" onclick="openModal(${a.id})">🔍 View Details</button>
      </div>
    </div>
    `;
  }).join('');

  setTimeout(initReveal, 50);
}
// ─── MODAL ───────────────────────────────────────────────────

function openModal(id) {
  const a = accounts.find(x => x.id === id);
  if (!a) return;

  const tClass = tagClass[a.thTag] || 'tag-th18';
  const troops = a.troops.map(t =>
    `<span class="troop-tag ${(t.includes('✦') || t.includes('Max')) ? 'maxed' : ''}">${t}</span>`
  ).join('');

  const whatsappMsg = encodeURIComponent(`Hi! I'm interested in the ${a.title} (${a.th}) at ${a.price}. Can I get more details?`);
document.getElementById('modalContent').innerHTML = `
    <div class="modal-content-inner">
   <div class="modal-header">
        <div>
          <div class="card-th-tag ${tClass}" style="margin-bottom:10px;">${a.th}</div>
          <div class="modal-title">${a.title}</div>
        </div>
        <div class="modal-price-tag">
        </div>
      </div>

      <div class="modal-section-label">Account Stats</div>
      <div class="modal-grid">
        <div class="modal-stat"><div class="modal-stat-label">Heroes</div><div class="modal-stat-val" style="font-size:13px;font-family:'Inter',sans-serif;">${a.heroes}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">Trophies</div><div class="modal-stat-val">${a.trophies}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">War Stars</div><div class="modal-stat-val">${a.warStars}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">Gems</div><div class="modal-stat-val">${a.gems}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">Wall Level</div><div class="modal-stat-val">${a.wallLevel}</div></div>
        <div class="modal-stat"><div class="modal-stat-label">Experience</div><div class="modal-stat-val"><span>${a.th}</span></div></div>
      </div>

      <div class="modal-section-label">Max / Notable Troops</div>
      <div class="modal-troops">${troops}</div>

 

  
<div class="modal-section-label">Additional Info</div>
      <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:16px;">${a.extras}</p>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:var(--gold-glow);border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:24px;">
        <div>
          <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:4px;">Price</div>
          <div class="modal-price-amount">${a.price} <span style="font-size:14px;color:var(--text-muted);font-weight:500;">${a.priceUsd}</span></div>
        </div>
        <div class="modal-price-note" style="font-size:14px;">Negotiable ✓</div>
      </div>

      <div class="modal-section-label">Contact to Buy</div>
  
      <div class="modal-contact-btns">
        <a href="https://wa.me/639099724815?text=${whatsappMsg}" target="_blank" rel="noopener" class="btn-whatsapp">💬 WhatsApp</a>
        <a href="https://web.facebook.com/profile.php?id=61589532622051" target="_blank" rel="noopener" class="btn-facebook">📘 Facebook</a>
      </div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ─── FILTER BUTTONS ──────────────────────────────────────────

function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildCards(btn.dataset.filter);
    });
  });
}


// ─── SCROLL REVEAL ───────────────────────────────────────────

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}

// ─── NAV SCROLL CLASS ────────────────────────────────────────

function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }
}

// ─── BACK TO TOP ─────────────────────────────────────────────

function initBackToTop() {
  const btn = document.querySelector('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── PAGE TRANSITIONS ────────────────────────────────────────

function initPageTransitions() {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    if (link.hasAttribute('target')) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => { window.location.href = href; }, 300);
    });
  });
}

// ─── PARTICLES (subtle background dots) ──────────────────────

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 60 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,197,24,${p.alpha})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });

    animId = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { cancelAnimationFrame(animId); init(); draw(); }, { passive: true });
}

// ─── COUNTER ANIMATION ───────────────────────────────────────

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || '');
      if (current < target) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

// ─── COPY TO CLIPBOARD ───────────────────────────────────────

function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`✓ ${label} copied!`, 'success');
  }).catch(() => {
    showToast('Could not copy. Please copy manually.', '');
  });
}

function showToast(message, type) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span> ${message}`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ─── KEYBOARD EVENTS ─────────────────────────────────────────

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModalDirect();
});

// ─── INIT ────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Page load
  requestAnimationFrame(() => {
    document.body.classList.add('loaded');
  });

  initNav();
  initPageTransitions();
  initReveal();
  initBackToTop();
  initParticles();

  // List page
  if (document.getElementById('accountsGrid')) {
    buildCards('all');
    initFilters();
  }

  // Counter animation trigger
  const counterSection = document.querySelector('[data-count]');
  if (counterSection) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    obs.observe(counterSection);
  }
});