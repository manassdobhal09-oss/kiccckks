/* KICKS — Luxury Sneaker Studio & Manas Dobhal AI Experience. Vanilla JS. */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const U = id => `https://images.unsplash.com/photo-${id}?w=700&q=75`;
const IMG = [
  '1542291026-7eec264c27ff',
  '1491553895911-0055eca6402d',
  '1549298916-b41d501d3772',
  '1460353581641-37baddab0fa2',
  '1595950653106-6c9ebd614d3a',
  '1606107557195-0e29a4b5b4aa',
  '1600185365926-3a2ce3cdb9eb',
  '1552346154-21d32810aba3',
  '1514989940723-e8e51635b782',
  '1539185441755-769473a23570',
  '1587563871167-1ee9c731aefb',
  '1608231387042-66d1773070a5'
].map(U);

const CATS = ['Running', 'Lifestyle', 'Basketball', 'Skate', 'Training', 'Limited Edition'];
const ALL = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
const C = { Black: '#111', White: '#f2f2f2', Red: '#d62828', Blue: '#2563eb', Lime: '#c6ff00', Grey: '#8a8a8a' };

// Extended sneaker specs for comparison & styling
const P = [
  [1, 'Nike', 'Air Pulse 270', 'Running', 149, 189, 4.8, 98, ['Red', 'Black'], ['Trending'], [36, 46], 'Air Max Ultra', '310g', 'Breathable Mesh'],
  [2, 'Adidas', 'Cloud Runner X', 'Running', 129, 0, 4.6, 80, ['White', 'Blue'], ['New'], [45], 'Boost Light', '285g', 'Primeknit'],
  [3, 'New Balance', 'Retro Court 85', 'Lifestyle', 110, 140, 4.7, 90, ['Grey', 'White'], [], [], 'EVA Classic', '340g', 'Suede & Leather'],
  [4, 'Puma', 'Street Drift', 'Lifestyle', 95, 0, 4.4, 60, ['Black', 'Lime'], ['New'], [38], 'ProFoam', '320g', 'Synthetic Nubuck'],
  [5, 'Nike', 'Hoop Force High', 'Basketball', 165, 0, 4.9, 95, ['Black', 'Red'], ['Trending'], [41, 42], 'Zoom Air Pods', '410g', 'Full-grain Leather'],
  [6, 'Adidas', 'Court Legend Mid', 'Basketball', 139, 170, 4.5, 70, ['White', 'Blue'], [], [36], 'Bounce Pro', '390g', 'Reinforced Canvas'],
  [7, 'Converse', 'Deck Pro Low', 'Skate', 75, 89, 4.6, 85, ['Black', 'White'], [], [], 'Vulcanized Gum', '350g', 'Heavy Canvas'],
  [8, 'Puma', 'Grind Vulc', 'Skate', 85, 0, 4.3, 50, ['Red', 'Grey'], ['New'], [44], 'Cushion Drop-in', '360g', 'Reinforced Suede'],
  [9, 'Asics', 'Gel Train Pro', 'Training', 120, 150, 4.7, 75, ['Blue', 'Black'], [], [46], 'Rearfoot GEL', '305g', 'Jacquard Mesh'],
  [10, 'Nike', 'Flex Gym 3', 'Training', 99, 0, 4.5, 66, ['Grey', 'Lime'], [], [], 'Dual-density Foam', '270g', 'Engineered Knit'],
  [11, 'Adidas', 'Vault Edition 01', 'Limited Edition', 249, 0, 4.9, 99, ['Lime', 'Black'], ['Limited Edition', 'New'], [37, 43], 'Lightstrike Pro', '290g', 'Carbon Fiber Plate'],
  [12, 'New Balance', 'Archive 990 Rare', 'Limited Edition', 279, 320, 4.8, 92, ['Grey', 'Red'], ['Limited Edition'], [40], 'ENCAP Heritage', '380g', 'Pigskin Suede'],
  [13, 'Nike', 'Tempo Glide', 'Running', 135, 0, 4.6, 72, ['Blue', 'White'], ['New'], [39], 'React Foam', '295g', 'Flyknit'],
  [14, 'Asics', 'Gel Stride 2', 'Running', 115, 145, 4.5, 64, ['Black', 'Lime'], [], [], 'FlyteFoam GEL', '310g', 'Mesh'],
  [15, 'Adidas', 'Terrace Classic', 'Lifestyle', 100, 0, 4.7, 88, ['White', 'Black'], ['Trending'], [43], 'OrthoLite Insole', '330g', 'Soft Leather'],
  [16, 'Converse', 'High Top Icon', 'Lifestyle', 70, 85, 4.8, 93, ['Red', 'Black'], [], [36], 'SmartFOAM', '360g', 'Vintage Canvas'],
  [17, 'Puma', 'Court Rider', 'Basketball', 125, 0, 4.4, 58, ['Blue', 'Red'], ['New'], [], 'Rider Foam', '395g', 'Mesh & Leather'],
  [18, 'Nike', 'Skate Dunk Low', 'Skate', 105, 0, 4.6, 77, ['Grey', 'Lime'], ['Trending'], [45], 'Zoom Insole', '375g', 'Premium Suede'],
  [19, 'New Balance', 'Power Lift Pro', 'Training', 130, 160, 4.5, 61, ['Black', 'Grey'], [], [41], 'Stable TPU Heel', '420g', 'Ballistic Mesh'],
  [20, 'Adidas', 'Neon Drop 02', 'Limited Edition', 229, 0, 4.9, 97, ['Lime', 'White'], ['Limited Edition', 'New'], [38], 'Futurecraft 4D', '315g', '3D Printed Lattice']
].map((a, i) => ({
  id: a[0], brand: a[1], name: a[2], category: a[3], price: a[4], was: a[5], rating: a[6], pop: a[7],
  colors: a[8], badges: a[9], oos: a[10], cushion: a[11], weight: a[12], upper: a[13],
  sizes: ALL, imgs: [IMG[i % 12], IMG[(i + 3) % 12], IMG[(i + 6) % 12]], added: i,
  desc: `${a[2]} by ${a[1]}: equipped with ${a[11]}, weighing ${a[12]} with ${a[13]}. Curated by Manas Dobhal for peak comfort and street elegance.`
}));

/* ---------- Storage Helper ---------- */
const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

let cart = load('kicks_cart', []);
let wish = load('kicks_wishlist', []);
let orders = load('kicks_orders', []);
let compareList = load('kicks_compare', []);
let soundEnabled = load('kicks_sound', true);
let currentCur = load('kicks_currency', 'USD');
let userReviews = load('kicks_user_reviews', []);

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(wish)) wish = [];
if (!Array.isArray(orders)) orders = [];
if (!Array.isArray(compareList)) compareList = [];
if (!Array.isArray(userReviews)) userReviews = [];

cart = cart.filter(i => i && P.some(p => p.id === i.id) && i.qty > 0);
let coupon = null;

/* ---------- Safe DOM builder ---------- */
function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else if (v === true) e.setAttribute(k, '');
    else if (v !== false && v != null) e.setAttribute(k, v);
  }
  kids.flat().forEach(c => c != null && e.append(c.nodeType ? c : document.createTextNode(c)));
  return e;
}

const pid = id => P.find(p => p.id === id);
const img = (p, ci = 0, cls = '') => {
  const i = h('img', { src: p.imgs[ci % p.imgs.length], alt: p.name, loading: 'lazy', class: cls });
  i.onerror = () => i.remove();
  return i;
};

function toast(msg) {
  const t = h('div', { class: 'toast' }, msg);
  $('#toasts').append(t);
  setTimeout(() => t.remove(), 2800);
}

/* ==========================================================
   FEATURE 4: GLOBAL MULTI-CURRENCY CONVERTER
   ========================================================== */
const CURRENCIES = {
  USD: { rate: 1.0, sym: '$', name: 'US Dollar' },
  INR: { rate: 83.5, sym: '₹', name: 'Indian Rupee' },
  EUR: { rate: 0.92, sym: '€', name: 'Euro' },
  GBP: { rate: 0.79, sym: '£', name: 'British Pound' },
  AED: { rate: 3.67, sym: 'د.إ ', name: 'UAE Dirham' },
  JPY: { rate: 155.0, sym: '¥', name: 'Japanese Yen' }
};

function money(amountUSD) {
  const info = CURRENCIES[currentCur] || CURRENCIES.USD;
  const converted = amountUSD * info.rate;
  if (currentCur === 'JPY') {
    return `${info.sym}${Math.round(converted).toLocaleString()}`;
  }
  return `${info.sym}${converted.toFixed(2).replace(/\.00$/, '')}`;
}

function setCurrency(newCur) {
  if (!CURRENCIES[newCur]) return;
  currentCur = newCur;
  save('kicks_currency', newCur);
  $('#curSelect').value = newCur;
  renderProducts();
  if ($('#cartDrawer').classList.contains('open')) renderCart();
  if ($('#wishDrawer').classList.contains('open')) renderWish();
  updateCompareBar();
  $('.hero-price-val').textContent = money(149);
  $('#perkFreeShip').textContent = `on demo orders over ${money(150)}`;
  toast(`Currency changed to ${newCur} (${CURRENCIES[newCur].name})`);
  playAudio('pop');
}
$('#curSelect').value = currentCur;
$('#curSelect').onchange = e => setCurrency(e.target.value);

/* ==========================================================
   FEATURE 7: NATIVE SYNTHESIZED WEB AUDIO SOUND FX
   ========================================================== */
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playAudio(type = 'click') {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'pop') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'chime') {
      // Harmonic dual tone for Add to Bag
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc.type = 'sine';
      osc2.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc2.frequency.setValueAtTime(830.61, now); // G#5

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      gain2.gain.setValueAtTime(0.12, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } else if (type === 'fanfare') {
      // 4-note victory arpeggio: C5, E5, G5, C6
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.type = 'triangle';
        const start = now + idx * 0.09;
        o.frequency.setValueAtTime(freq, start);
        g.gain.setValueAtTime(0.18, start);
        g.gain.exponentialRampToValueAtTime(0.001, start + 0.28);
        o.start(start);
        o.stop(start + 0.28);
      });
    }
  } catch {}
}

function updateSoundIcon() {
  $('#soundSvgOn').style.display = soundEnabled ? 'block' : 'none';
  $('#soundSvgOff').style.display = soundEnabled ? 'none' : 'block';
}
updateSoundIcon();

$('#soundBtn').onclick = () => {
  soundEnabled = !soundEnabled;
  save('kicks_sound', soundEnabled);
  updateSoundIcon();
  toast(soundEnabled ? 'Sound FX Enabled 🔊' : 'Sound Muted 🔇');
  if (soundEnabled) playAudio('chime');
};

/* ==========================================================
   "HI, I AM DIMPLE" 3.5s CINEMATIC LUXURY SPLASH SCREEN
   ========================================================== */
let splashTimer = null;
let splashInterval = null;

function runSplash() {
  const splash = $('#dimpleSplash');
  if (!splash) return;
  splash.style.display = 'flex';
  splash.classList.remove('fade-out');

  const fill = $('#splashBarFill');
  const percentText = $('#splashPercent');
  const statusText = $('#splashStatus');

  let progress = 0;
  fill.style.width = '0%';
  percentText.textContent = '0%';
  statusText.textContent = 'Curating exclusive drops...';

  const statuses = [
    { at: 20, text: 'Calibrating high-performance cushioning...' },
    { at: 55, text: 'Manas Dobhal AI Stylist syncing live trends...' },
    { at: 85, text: 'Unlocking VIP sneaker archive...' },
    { at: 100, text: 'Welcome to KICKS Studio.' }
  ];

  clearInterval(splashInterval);
  clearTimeout(splashTimer);

  const startTime = Date.now();
  const totalDuration = 3400; // 3.4 seconds

  splashInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    progress = Math.min(100, Math.round((elapsed / totalDuration) * 100));
    fill.style.width = `${progress}%`;
    percentText.textContent = `${progress}%`;

    const match = statuses.find(s => progress <= s.at);
    if (match) statusText.textContent = match.text;

    if (progress >= 100) {
      clearInterval(splashInterval);
      playAudio('chime');
      splashTimer = setTimeout(closeSplash, 400);
    }
  }, 40);
}

function closeSplash() {
  clearInterval(splashInterval);
  clearTimeout(splashTimer);
  const splash = $('#dimpleSplash');
  if (!splash) return;
  splash.classList.add('fade-out');
  setTimeout(() => {
    splash.style.display = 'none';
  }, 700);
}

$('#skipSplash').onclick = () => {
  playAudio('click');
  closeSplash();
};
$('#replaySplashBtn').onclick = () => {
  playAudio('pop');
  runSplash();
};
$('#footReplaySplash').onclick = e => {
  e.preventDefault();
  runSplash();
  scrollTo({ top: 0, behavior: 'smooth' });
};

// Auto-run splash on page load
runSplash();

/* ---------- Overlays & Focus Management ---------- */
let openEl = null, lastFocus = null;
function openOv(el) {
  closeOv(true);
  lastFocus = document.activeElement;
  openEl = el;
  el.classList.add('open');
  $('#backdrop').classList.add('on');
  document.body.style.overflow = 'hidden';
  setTimeout(() => (el.querySelector('input,button:not([disabled])') || el).focus(), 50);
  playAudio('click');
}
function closeOv(silent) {
  if (!openEl) return;
  openEl.classList.remove('open');
  openEl = null;
  $('#backdrop').classList.remove('on');
  document.body.style.overflow = '';
  if (!silent && lastFocus) lastFocus.focus();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeOv();
    $('#links').classList.remove('open');
    $('#dimpleChatDrawer').classList.remove('open');
  }
  if (e.key === 'Tab' && openEl) {
    const f = $$('button:not([disabled]),input,select,a[href],textarea', openEl).filter(x => x.offsetParent !== null);
    if (!f.length) return;
    const a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  }
});
$('#backdrop').onclick = () => {
  closeOv();
  $('#dimpleChatDrawer').classList.remove('open');
};
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeOv(); });
$('#quizModal').addEventListener('click', e => { if (e.target.id === 'quizModal') closeOv(); });
$('#compareModal').addEventListener('click', e => { if (e.target.id === 'compareModal') closeOv(); });
$('#scratchModal').addEventListener('click', e => { if (e.target.id === 'scratchModal') closeOv(); });
$('#alertModal').addEventListener('click', e => { if (e.target.id === 'alertModal') closeOv(); });
$('#reviewModal').addEventListener('click', e => { if (e.target.id === 'reviewModal') closeOv(); });

const closeBtn = () => h('button', { class: 'xclose', 'aria-label': 'Close', onclick: () => closeOv() }, '✕');

/* ==========================================================
   FEATURE 3: SNEAKER COMPARISON MATRIX
   ========================================================== */
function toggleCompare(id) {
  if (compareList.includes(id)) {
    compareList = compareList.filter(x => x !== id);
    toast('Removed from comparison');
  } else {
    if (compareList.length >= 3) {
      toast('You can compare maximum 3 sneakers.');
      return;
    }
    compareList.push(id);
    toast('Added to comparison bar');
    playAudio('pop');
  }
  save('kicks_compare', compareList);
  updateCompareBar();
  renderProducts();
}

function updateCompareBar() {
  const bar = $('#compareBar');
  const countEl = $('#compareCount');
  const thumbsEl = $('#compareThumbs');

  if (!compareList.length) {
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  countEl.textContent = compareList.length;

  thumbsEl.replaceChildren(...compareList.map(id => {
    const p = pid(id);
    const im = h('img', { src: p.imgs[0], alt: p.name, class: 'comp-thumb', title: p.name });
    im.onclick = () => toggleCompare(id);
    return im;
  }));
}

function showCompareModal() {
  if (!compareList.length) return;
  const shoes = compareList.map(pid);
  const box = $('#compareModalBox');

  const table = h('div', { class: 'compare-grid' },
    // Label column
    h('div', { class: 'comp-col labels-col' },
      h('div', { class: 'comp-spec-row', style: 'height:140px' }, 'Preview'),
      h('div', { class: 'comp-spec-row' }, 'Brand'),
      h('div', { class: 'comp-spec-row' }, 'Category'),
      h('div', { class: 'comp-spec-row' }, 'Price'),
      h('div', { class: 'comp-spec-row' }, 'Rating'),
      h('div', { class: 'comp-spec-row' }, 'Cushioning'),
      h('div', { class: 'comp-spec-row' }, 'Weight'),
      h('div', { class: 'comp-spec-row' }, 'Upper Material'),
      h('div', { class: 'comp-spec-row' }, 'Action')
    ),
    // Shoe columns
    shoes.map(p => h('div', { class: 'comp-col' },
      h('div', { style: 'height:140px;display:flex;align-items:center;justify-content:center' },
        img(p, 0, 'comp-thumb', { style: 'width:120px;height:120px;border-radius:12px' })
      ),
      h('div', { class: 'comp-spec-row' }, h('b', {}, p.brand)),
      h('div', { class: 'comp-spec-row' }, p.category),
      h('div', { class: 'comp-spec-row' }, h('b', { style: 'color:var(--lime)' }, money(p.price))),
      h('div', { class: 'comp-spec-row' }, `★ ${p.rating}`),
      h('div', { class: 'comp-spec-row' }, p.cushion || 'Standard EVA'),
      h('div', { class: 'comp-spec-row' }, p.weight || '310g'),
      h('div', { class: 'comp-spec-row' }, p.upper || 'Engineered Mesh'),
      h('div', { class: 'comp-spec-row' },
        h('button', { class: 'btn primary', onclick: () => { closeOv(); quickView(p.id); } }, 'Select Size')
      )
    ))
  );

  box.replaceChildren(
    closeBtn(),
    h('h2', {}, 'Sneaker Side-by-Side Comparison'),
    h('p', { class: 'note' }, 'Compare cushioning, materials and specifications to pick your ideal pair.'),
    table
  );
  openOv($('#compareModal'));
}

$('#openCompareBtn').onclick = showCompareModal;
$('#clearCompareBtn').onclick = () => {
  compareList = [];
  save('kicks_compare', compareList);
  updateCompareBar();
  renderProducts();
  toast('Comparison cleared');
};

/* ---------- Products: Filter / Sort / Render ---------- */
const F = { q: '', cat: '', brand: '', min: '', max: '', size: '', color: '', sort: 'pop', special: '' };
const sel = (id, label, opts) => {
  const s = $(id);
  s.replaceChildren(h('option', { value: '' }, label), ...opts.map(o => h('option', { value: o }, o)));
};
sel('#fCat', 'All categories', CATS);
sel('#fBrand', 'All brands', [...new Set(P.map(p => p.brand))]);
sel('#fSize', 'Any size', ALL.map(String));
sel('#fColor', 'Any colour', Object.keys(C));

function filtered() {
  let r = P.filter(p =>
    (!F.q || (p.name + ' ' + p.brand).toLowerCase().includes(F.q.toLowerCase())) &&
    (!F.cat || p.category === F.cat) &&
    (!F.brand || p.brand === F.brand) &&
    (!F.min || p.price >= +F.min) &&
    (!F.max || p.price <= +F.max) &&
    (!F.size || (p.sizes.includes(+F.size) && !p.oos.includes(+F.size))) &&
    (!F.color || p.colors.includes(F.color)) &&
    (F.special !== 'sale' || p.was) &&
    (F.special !== 'new' || p.badges.includes('New'))
  );
  const s = {
    lo: (a, b) => a.price - b.price,
    hi: (a, b) => b.price - a.price,
    new: (a, b) => b.added - a.added,
    pop: (a, b) => b.pop - a.pop
  }[F.sort];
  return r.sort(s);
}

function card(p, i) {
  let ci = 0;
  const pimg = h('div', { class: 'pimg', onclick: () => quickView(p.id) }, p.brand, img(p));
  const disc = p.was ? Math.round((1 - p.price / p.was) * 100) : 0;
  const dots = h('div', { class: 'dots' }, p.colors.map((c, k) =>
    h('button', {
      class: 'dot' + (k ? '' : ' sel'),
      style: `background:${C[c]}`,
      'aria-label': c,
      onclick: () => {
        ci = k;
        $$('.dot', dots).forEach((d, j) => d.classList.toggle('sel', j === k));
        pimg.querySelector('img')?.remove();
        pimg.append(img(p, k));
        playAudio('click');
      }
    })
  ));
  const heart = h('button', {
    class: 'heart' + (wish.includes(p.id) ? ' on' : ''),
    'data-heart': p.id,
    'aria-label': 'Toggle wishlist',
    onclick: () => toggleWish(p.id)
  }, svgHeart());

  const compBtn = h('button', {
    class: 'card-comp-btn' + (compareList.includes(p.id) ? ' active' : ''),
    'aria-label': 'Compare sneaker',
    onclick: () => toggleCompare(p.id)
  }, compareList.includes(p.id) ? '✓ Compared' : '+ Compare');

  return h('article', { class: 'card', style: `animation-delay:${Math.min(i, 8) * 50}ms` },
    h('div', { style: 'position:relative' },
      pimg,
      h('div', { class: 'card-actions-top' }, compBtn),
      heart,
      h('div', { class: 'badges' },
        disc ? h('span', { class: 'bd sale' }, `-${disc}%`) : null,
        p.badges.map(b => h('span', { class: 'bd' }, b))
      )
    ),
    h('div', { class: 'pbody' },
      h('span', { class: 'brand' }, p.brand),
      h('h3', { class: 'pname' }, p.name),
      h('div', { class: 'price' }, money(p.price), p.was ? h('s', {}, money(p.was)) : null),
      h('span', { class: 'brand' }, `★ ${p.rating} · EU ${p.sizes[0]}–${p.sizes.at(-1)}`),
      dots,
      h('div', { class: 'pbtns' },
        h('button', { class: 'btn ghost', onclick: () => quickView(p.id) }, '360° View'),
        h('button', { class: 'btn primary', onclick: () => quickView(p.id) }, 'Add to cart')
      )
    )
  );
}

function svgHeart() {
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  s.setAttribute('viewBox', '0 0 24 24');
  const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  p.setAttribute('d', 'M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z');
  s.append(p);
  return s;
}

function renderProducts() {
  const r = filtered(), g = $('#products');
  g.replaceChildren(...r.map(card));
  $('#count').textContent = `${r.length} of ${P.length} curated sneakers`;
  $('#empty').hidden = r.length > 0;
}

const bind = (id, key, ev = 'input') => $(id).addEventListener(ev, e => {
  F[key] = e.target.value;
  renderProducts();
});
bind('#fCat', 'cat', 'change');
bind('#fBrand', 'brand', 'change');
bind('#fMin', 'min');
bind('#fMax', 'max');
bind('#fSize', 'size', 'change');
bind('#fColor', 'color', 'change');
bind('#fSort', 'sort', 'change');
bind('#q', 'q');

function clearF() {
  Object.assign(F, { q: '', cat: '', brand: '', min: '', max: '', size: '', color: '', sort: 'pop', special: '' });
  $$('.filters select,.filters input').forEach(x => x.value = x.id === 'fSort' ? 'pop' : '');
  $('#q').value = '';
  renderProducts();
}
$('#clearF').onclick = $('#emptyClear').onclick = clearF;
$('#filterToggle').onclick = e => {
  const o = $('#filters').classList.toggle('open');
  e.target.setAttribute('aria-expanded', o);
};
function goCat(c) {
  clearF();
  F.cat = c;
  $('#fCat').value = c;
  renderProducts();
  $('#shop').scrollIntoView();
}
$$('[data-cat]').forEach(b => b.onclick = () => goCat(b.dataset.cat));
$$('[data-filter]').forEach(a => a.addEventListener('click', () => {
  clearF();
  F.special = a.dataset.filter;
  renderProducts();
}));
$('#cats').append(...CATS.map((c, i) => {
  const n = P.filter(p => p.category === c).length;
  return h('button', { class: 'cat', onclick: () => goCat(c) },
    img({ imgs: [IMG[(i * 2) % 12]], name: c }),
    h('div', {}, h('div', {}, h('h3', {}, c), h('small', {}, `${n} products`)), h('span', { class: 'arr' }, '→'))
  );
}));

/* ---------- Wishlist ---------- */
function toggleWish(id) {
  wish = wish.includes(id) ? wish.filter(x => x !== id) : [...wish, id];
  save('kicks_wishlist', wish);
  playAudio('chime');
  toast(wish.includes(id) ? 'Saved to wishlist 💚' : 'Removed from wishlist');
  $$(`[data-heart="${id}"]`).forEach(b => b.classList.toggle('on', wish.includes(id)));
  badge('#wishCount', wish.length);
  if ($('#wishDrawer').classList.contains('open')) renderWish();
}
function renderWish() {
  const d = $('#wishDrawer');
  d.replaceChildren(
    h('div', { class: 'dh' }, h('h3', {}, `Wishlist (${wish.length})`), closeBtn()),
    h('div', { class: 'db' }, wish.length
      ? wish.map(id => {
          const p = pid(id);
          return h('div', { class: 'item' },
            img(p, 0, 'th'),
            h('div', {},
              h('b', {}, p.name),
              h('span', {}, money(p.price)),
              h('div', { class: 'pbtns' },
                h('button', { class: 'btn primary', onclick: () => quickView(id) }, 'Choose size'),
                h('button', { class: 'btn ghost', onclick: () => toggleWish(id) }, 'Remove')
              )
            )
          );
        })
      : h('div', { class: 'empty' },
          h('h3', {}, 'Nothing saved yet.'),
          h('p', {}, 'Tap the heart on any sneaker to keep it here.')
        )
    )
  );
}
$('#wishBtn').onclick = () => { renderWish(); openOv($('#wishDrawer')); };

/* ---------- Recently Viewed ---------- */
let recent = load('kicks_recent', []);
if (!Array.isArray(recent)) recent = [];
function renderRecent() {
  const l = recent.map(pid).filter(Boolean);
  $('#recentSec').hidden = !l.length;
  $('#recent').replaceChildren(...l.map(card));
}

/* ---------- Size Guide ---------- */
function sizeGuide(id) {
  const rows = [
    [38, 5, 24], [39, 6, 24.5], [40, 6.5, 25.4],
    [41, 7.5, 26], [42, 8, 26.7], [43, 9, 27.5],
    [44, 9.5, 28.3], [45, 10.5, 29]
  ];
  $('#modalBox').replaceChildren(
    closeBtn(),
    h('h2', {}, 'Official Size Guide'),
    h('p', { class: 'note' }, 'Verified foot-length chart. For wider feet, consider going up half a size.'),
    h('table', { class: 'sg' },
      h('tr', {}, ['EU Size', 'UK Size', 'Foot Length (cm)'].map(x => h('th', {}, x))),
      rows.map(r => h('tr', {}, r.map(x => h('td', {}, x))))
    ),
    h('div', { style: 'display:flex;gap:10px;margin-top:16px;' },
      h('button', { class: 'btn primary', onclick: () => { closeOv(); openSizeQuiz(); } }, 'Launch 3-Step Fit Quiz'),
      h('button', { class: 'btn ghost', onclick: () => quickView(id) }, 'Back to Sneaker')
    )
  );
}

/* ==========================================================
   FEATURE 1: 360° SNEAKER VIEWER & INTERACTIVE ZOOM LOUPE
   ========================================================== */
function quickView(id) {
  const p = pid(id);
  recent = [id, ...recent.filter(x => x !== id)].slice(0, 4);
  save('kicks_recent', recent);
  renderRecent();

  let size = null, color = p.colors[0], qty = 1, currentAngleIdx = 0;

  const viewerWrap = h('div', { class: 'viewer-360-wrap' });
  const pimg = h('div', { class: 'pimg', style: 'cursor:crosshair' }, p.brand, img(p, 0));
  const loupe = h('div', { class: 'loupe-glass' });
  viewerWrap.append(pimg, loupe);

  // Loupe Zoom interaction
  pimg.addEventListener('mousemove', e => {
    const targetImg = pimg.querySelector('img');
    if (!targetImg) return;
    const rect = pimg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    loupe.classList.add('active');
    loupe.style.left = `${x - 60}px`;
    loupe.style.top = `${y - 60}px`;
    loupe.style.backgroundImage = `url('${targetImg.src}')`;
    loupe.style.backgroundSize = `${rect.width * 2.2}px ${rect.height * 2.2}px`;
    loupe.style.backgroundPosition = `-${x * 2.2 - 60}px -${y * 2.2 - 60}px`;
  });
  pimg.addEventListener('mouseleave', () => loupe.classList.remove('active'));

  // 360° Angle switcher buttons
  const angleNames = ['Profile', 'Perspective 3/4', 'Sole / Top'];
  const anglesBar = h('div', { class: 'angles-selector' },
    angleNames.map((ang, idx) => h('button', {
      class: 'angle-btn' + (idx === 0 ? ' active' : ''),
      onclick: e => {
        currentAngleIdx = idx;
        $$('.angle-btn', anglesBar).forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        pimg.querySelector('img')?.remove();
        pimg.append(img(p, currentAngleIdx));
        playAudio('click');
      }
    }, `360° ${ang}`))
  );

  const msg = h('p', { class: 'msg err' });
  const sizes = h('div', { class: 'sizes', role: 'group', 'aria-label': 'Size' },
    p.sizes.map(s => h('button', {
      class: 'sz',
      disabled: p.oos.includes(s),
      onclick: e => {
        size = s;
        msg.textContent = '';
        $$('.sz', sizes).forEach(b => b.classList.toggle('sel', b === e.currentTarget));
        playAudio('click');
      }
    }, s))
  );

  const sw = h('div', { class: 'dots' }, p.colors.map((c, k) =>
    h('button', {
      class: 'dot' + (k ? '' : ' sel'),
      style: `background:${C[c]}`,
      'aria-label': c,
      onclick: e => {
        color = c;
        $$('.dot', sw).forEach(d => d.classList.toggle('sel', d === e.currentTarget));
        pimg.querySelector('img')?.remove();
        pimg.append(img(p, k));
        playAudio('click');
      }
    })
  ));

  const qv = h('b', {}, 1);
  const stock = p.oos.length ? `Demo stock: ${p.oos.length} size(s) sold out` : 'Demo stock: all sizes available';
  const disc = p.was ? ` (save ${Math.round((1 - p.price / p.was) * 100)}%)` : '';

  $('#modalBox').replaceChildren(
    closeBtn(),
    h('div', { class: 'qv' },
      h('div', {}, viewerWrap, anglesBar),
      h('div', {},
        h('span', { class: 'brand' }, `${p.brand} · ${p.category}`),
        h('h2', { style: 'font-size:2rem;margin:0' }, p.name),
        h('div', { class: 'price' }, money(p.price), p.was ? h('s', {}, money(p.was)) : null, disc),
        h('p', {}, p.desc),
        h('div', { style: 'background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 14px;font-size:.85rem;display:flex;gap:16px;' },
          h('div', {}, h('b', {}, 'Cushioning: '), p.cushion || 'Air Max'),
          h('div', {}, h('b', {}, 'Weight: '), p.weight || '310g')
        ),
        h('b', {}, 'Colour'), sw,
        h('b', {}, 'Size (EU)'), sizes,
        h('div', { style: 'display:flex;gap:14px;align-items:center' },
          h('button', { class: 'link', onclick: () => sizeGuide(id) }, 'Official Size guide'),
          h('span', { style: 'color:var(--mute)' }, '·'),
          h('button', { class: 'link', onclick: () => { closeOv(); openSizeQuiz(); } }, 'Find My Size Quiz')
        ),
        h('div', { class: 'qty' },
          h('b', {}, 'Qty'),
          h('button', { 'aria-label': 'Less', onclick: () => { qty = Math.max(1, qty - 1); qv.textContent = qty; playAudio('click'); } }, '−'),
          qv,
          h('button', { 'aria-label': 'More', onclick: () => { qty = Math.min(10, qty + 1); qv.textContent = qty; playAudio('click'); } }, '+')
        ),
        h('div', { style: 'display:flex;justify-content:space-between;align-items:center' },
          h('span', { class: 'note' }, '● ' + stock),
          h('button', { class: 'link', style: 'color:var(--lime);font-weight:600', onclick: () => openAlertModal(p) }, '🔔 Price Drop / Restock Alert')
        ),
        msg,
        h('div', { class: 'pbtns' },
          h('button', {
            class: 'btn primary',
            onclick: () => {
              if (!size) { msg.textContent = 'Please select a size to continue.'; return; }
              addCart(p.id, size, color, qty);
              closeOv();
            }
          }, 'Add to cart'),
          h('button', { class: 'btn ghost', onclick: () => toggleWish(p.id) }, 'Wishlist'),
          h('button', { class: 'btn ghost', onclick: () => toggleCompare(p.id) }, compareList.includes(p.id) ? '✓ Compared' : '+ Compare')
        )
      )
    )
  );
  openOv($('#modal'));
}

/* ==========================================================
   FEATURE 6: SNEAKER PRICE DROP & RESTOCK ALERT MODAL
   ========================================================== */
function openAlertModal(p) {
  const box = $('#alertModalBox');
  const emailInput = h('input', { type: 'email', placeholder: 'yourname@example.com', required: true });
  const sizeSelect = h('select', {},
    h('option', { value: 'any' }, 'Any Size'),
    p.sizes.map(s => h('option', { value: s }, `Size EU ${s} ${p.oos.includes(s) ? '(Currently Sold Out)' : ''}`))
  );
  const targetPrice = h('input', { type: 'number', placeholder: `Target Price (Current: $${p.price})`, value: Math.round(p.price * 0.85) });

  const form = h('form', {
    class: 'form',
    onsubmit: e => {
      e.preventDefault();
      if (!emailInput.value.trim()) return;
      playAudio('chime');
      toast(`Alert registered! We'll notify ${emailInput.value} for ${p.name}.`);
      closeOv();
    }
  },
    h('label', { class: 'full' }, 'Your Email Address', emailInput),
    h('label', {}, 'Select Preferred Size', sizeSelect),
    h('label', {}, 'Target Price (USD)', targetPrice),
    h('button', { class: 'btn primary full', style: 'margin-top:10px' }, '🔔 Activate Alert')
  );

  box.replaceChildren(
    closeBtn(),
    h('h2', {}, 'Restock & Price Drop Radar'),
    h('p', { class: 'note' }, `Get instantly pinged when ${p.name} drops in price or sells back in stock.`),
    form
  );
  openOv($('#alertModal'));
}

/* ---------- Cart Operations ---------- */
const lineKey = i => `${i.id}|${i.size}|${i.color}`;
function addCart(id, size, color, qty) {
  if (!pid(id) || !ALL.includes(size) || qty < 1) return;
  const ex = cart.find(i => lineKey(i) === `${id}|${size}|${color}`);
  ex ? ex.qty = Math.min(10, ex.qty + qty) : cart.push({ id, size, color, qty });
  persistCart();
  playAudio('chime');
  toast('Added to your shopping bag 🛍️');
}
function persistCart() {
  save('kicks_cart', cart);
  badge('#cartCount', cart.reduce((a, i) => a + i.qty, 0));
  if ($('#cartDrawer').classList.contains('open')) renderCart();
}
function badge(sel, n) {
  const b = $(sel);
  b.textContent = n;
  b.classList.remove('pop');
  void b.offsetWidth;
  b.classList.add('pop');
}
function totals() {
  const sub = cart.reduce((a, i) => a + pid(i.id).price * i.qty, 0);
  const disc = coupon ? sub * coupon.rate : 0;
  const ship = !cart.length ? 0 : (sub - disc >= 150 ? 0 : 9);
  return { sub, disc, ship, total: sub - disc + ship };
}

function applyCoupon(code) {
  code = code.trim().toUpperCase();
  const m = $('#cMsg');
  const defs = {
    KICKS10: { rate: 0.10 },
    WELCOME15: { rate: 0.15, first: true },
    MANASVIP25: { rate: 0.25 },
    DIMPLEVIP25: { rate: 0.25 }
  };
  if (!code) { m.className = 'msg err'; m.textContent = 'Enter a coupon code.'; return; }
  if (coupon && coupon.code === code) { m.className = 'msg err'; m.textContent = 'This coupon is already applied.'; return; }
  const d = defs[code];
  if (!d) { m.className = 'msg err'; m.textContent = 'Invalid code. Try KICKS10, WELCOME15 or scratch the VIP voucher!'; return; }
  if (d.first && orders.length) { m.className = 'msg err'; m.textContent = 'WELCOME15 is for first demo orders only.'; return; }

  coupon = { code, rate: d.rate };
  playAudio('fanfare');
  renderCart();
  $('#cMsg').className = 'msg ok';
  $('#cMsg').textContent = `Code ${code} applied: ${d.rate * 100}% off your order!`;
}

function renderCart() {
  const t = totals();
  const d = $('#cartDrawer');
  const ci = h('input', { placeholder: 'Coupon code', 'aria-label': 'Coupon', value: coupon ? coupon.code : '' });

  d.replaceChildren(
    h('div', { class: 'dh' }, h('h3', {}, 'Your bag'), closeBtn()),
    h('div', { class: 'db' }, cart.length ? cart.map(i => {
      const p = pid(i.id);
      return h('div', { class: 'item' },
        img(p, p.colors.indexOf(i.color), 'th'),
        h('div', {},
          h('b', {}, p.name),
          h('span', { class: 'note' }, `EU ${i.size} · ${i.color}`),
          h('span', {}, money(p.price)),
          h('div', { class: 'qty' },
            h('button', { 'aria-label': 'Decrease', onclick: () => { i.qty--; if (i.qty < 1) cart = cart.filter(x => x !== i); persistCart(); playAudio('click'); } }, '−'),
            i.qty,
            h('button', { 'aria-label': 'Increase', onclick: () => { i.qty = Math.min(10, i.qty + 1); persistCart(); playAudio('click'); } }, '+')
          )
        ),
        h('button', { class: 'xbtn', 'aria-label': 'Remove', onclick: () => { cart = cart.filter(x => x !== i); persistCart(); toast('Removed from bag'); } }, '✕')
      );
    }) : h('div', { class: 'empty' },
      h('h3', {}, 'Your bag is empty.'),
      h('p', {}, 'Find a pair you love and step into your style.'),
      h('button', { class: 'btn primary', onclick: () => closeOv() }, 'Start shopping')
    )),
    cart.length ? h('div', { class: 'df' },
      h('span', { class: 'note' }, t.sub - t.disc >= 150 ? '🎉 You unlocked free worldwide shipping!' : `Add ${money(150 - (t.sub - t.disc))} more for free shipping`),
      h('div', { class: 'ship' }, h('i', { style: `width:${Math.min(100, ((t.sub - t.disc) / 150) * 100)}%` })),
      h('div', { class: 'coupon' }, ci, h('button', { class: 'btn ghost', onclick: () => applyCoupon(ci.value) }, 'Apply')),
      h('p', { class: 'msg', id: 'cMsg' }),
      h('div', { class: 'row' }, 'Subtotal', money(t.sub)),
      h('div', { class: 'row' }, `Discount${coupon ? ' (' + coupon.code + ')' : ''}`, '−' + money(t.disc)),
      h('div', { class: 'row' }, 'Shipping (free over $150)', t.ship ? money(t.ship) : 'Free'),
      h('div', { class: 'row tot' }, 'Total', money(t.total)),
      h('button', { class: 'btn primary', onclick: checkout }, 'Proceed to checkout'),
      h('button', { class: 'btn ghost', onclick: () => closeOv() }, 'Continue shopping')
    ) : null
  );
}
$('#cartBtn').onclick = () => { renderCart(); openOv($('#cartDrawer')); };

/* ---------- Checkout Simulation ---------- */
function checkout() {
  const t = totals(), f = {};
  const fld = (k, label, type = 'text', cls = '') => {
    const i = h('input', { type, id: 'f_' + k, required: true, autocomplete: 'off' });
    f[k] = i;
    const e = h('span', { class: 'err', id: 'e_' + k });
    return h('label', { class: cls }, label, i, e);
  };
  const pay = h('select', { id: 'f_pay' },
    h('option', { value: 'COD' }, 'Cash on Delivery (simulated)'),
    h('option', { value: 'Card' }, 'Instant Demo Card (no payment charged)')
  );
  const rules = {
    name: v => v.trim().length >= 2 || 'Enter your full name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Enter a valid email.',
    phone: v => /^[+\d][\d\s-]{6,14}$/.test(v.trim()) || 'Enter a valid phone number.',
    address: v => v.trim().length >= 5 || 'Enter your delivery address.',
    city: v => v.trim().length >= 2 || 'Enter your city.',
    postal: v => /^[A-Za-z0-9][A-Za-z0-9 -]{3,9}$/.test(v.trim()) || 'Enter a valid postal code.'
  };

  const form = h('form', {
    class: 'form',
    novalidate: true,
    onsubmit: e => {
      e.preventDefault();
      let ok = true;
      for (const k in rules) {
        const r = rules[k](f[k].value);
        $('#e_' + k).textContent = r === true ? '' : r;
        if (r !== true) ok = false;
      }
      if (!ok || !cart.length) return;

      const o = {
        id: 'KX-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase(),
        date: new Date().toISOString(),
        status: 'Processing (demo)',
        pay: pay.value,
        name: f.name.value.trim(),
        city: f.city.value.trim(),
        total: t.total,
        items: cart.map(i => ({ ...i, name: pid(i.id).name }))
      };
      orders.unshift(o);
      save('kicks_orders', orders);
      cart = [];
      coupon = null;
      persistCart();
      playAudio('fanfare');
      confirmation(o);
    }
  },
    fld('name', 'Full name', 'text', 'full'),
    fld('email', 'Email address', 'email'),
    fld('phone', 'Phone number', 'tel'),
    fld('address', 'Delivery street address', 'text', 'full'),
    fld('city', 'City'),
    fld('postal', 'Postal code'),
    h('label', { class: 'full' }, 'Payment method', pay),
    h('div', { class: 'full ord' },
      h('b', {}, 'Order summary'),
      cart.map(i => h('div', { class: 'row' }, `${pid(i.id).name} · EU ${i.size} · ${i.color} ×${i.qty}`, money(pid(i.id).price * i.qty))),
      h('div', { class: 'row' }, 'Discount', '−' + money(t.disc)),
      h('div', { class: 'row' }, 'Shipping', t.ship ? money(t.ship) : 'Free'),
      h('div', { class: 'row tot' }, 'Total', money(t.total))
    ),
    h('p', { class: 'note full' }, 'Checkout and payment are simulated for demonstration. No real money or card details are requested.'),
    h('button', { class: 'btn primary full' }, 'Confirm Demo Order')
  );

  $('#modalBox').replaceChildren(closeBtn(), h('h2', {}, 'Checkout'), form);
  openOv($('#modal'));
}

function confirmation(o) {
  $('#modalBox').replaceChildren(
    closeBtn(),
    h('div', { class: 'empty' },
      h('h2', {}, '🎉 Order confirmed!'),
      h('p', {}, `Thank you, ${o.name}! Your demo tracking code is`),
      h('h3', { style: 'font-size:2rem;color:var(--lime);margin:8px 0' }, o.id),
      h('p', { class: 'note' }, 'Your simulated order has been registered and is progressing to packaging.'),
      h('button', { class: 'btn primary', onclick: showOrders }, 'Track in Order History')
    )
  );
}

const STAGES = ['Order placed', 'Packed', 'Shipped', 'Delivered'];
const stage = o => Math.min(3, Math.floor((Date.now() - new Date(o.date)) / 60000));
function showOrders(e) {
  e && e.preventDefault();
  $('#modalBox').replaceChildren(
    closeBtn(),
    h('h2', {}, 'Simulated Order History'),
    h('p', { class: 'note' }, 'Orders stored locally. Stages advance automatically every 60 seconds.'),
    orders.length ? orders.map(o => h('div', { class: 'ord' },
      h('b', {}, o.id),
      h('div', {}, new Date(o.date).toLocaleString(), ' · ', STAGES[stage(o)] + ' (demo)'),
      h('div', { class: 'track' }, STAGES.map((x, k) => h('span', { class: k <= stage(o) ? 'on' : '', title: x }))),
      h('div', {}, o.items.map(i => `${i.name} (EU ${i.size}, ${i.color}) ×${i.qty}`).join(', ')),
      h('div', {}, `Total ${money(o.total)} · ${o.pay === 'COD' ? 'Cash on Delivery' : 'Demo card'}`)
    )) : h('div', { class: 'empty' },
      h('h3', {}, 'No orders yet.'),
      h('p', {}, 'Place a demo order and it will appear here.')
    )
  );
  openOv($('#modal'));
}
$('#ordersLink').onclick = showOrders;

/* ==========================================================
   FEATURE 2: "ASK MANAS DOBHAL" AI SNEAKER STYLIST
   ========================================================== */
const DIMPLE_BOT = {
  launcher: $('#dimpleLauncher'),
  drawer: $('#dimpleChatDrawer'),
  body: $('#dimpleMessages'),
  input: $('#dimpleInputText'),
  form: $('#dimpleInputForm'),
  chips: $('#dimpleChips')
};

const MANAS_GREETING = "Hey there! I am Manas Dobhal, your personal KICKS sneaker stylist 👟. Ask me anything: looking for daily comfort, gym trainers, rare limited drops, or finding your exact fit?";

function appendDimpleMsg(text, sender = 'dimple', products = []) {
  const bubble = h('div', { class: 'chat-bubble' }, h('p', {}, text));
  if (products.length) {
    products.forEach(p => {
      const prodCard = h('div', { class: 'chat-product-card' },
        img(p, 0),
        h('div', { class: 'chat-product-info' },
          h('b', {}, p.name),
          h('span', {}, `${p.brand} · ${money(p.price)}`)
        ),
        h('button', { class: 'btn primary', style: 'padding:6px 12px;font-size:.75rem', onclick: () => { DIMPLE_BOT.drawer.classList.remove('open'); quickView(p.id); } }, 'View')
      );
      bubble.append(prodCard);
    });
  }

  const msgRow = h('div', { class: `chat-msg ${sender}` },
    sender === 'dimple' ? h('div', { class: 'dimple-avatar-mini small' }, 'M') : null,
    bubble
  );
  DIMPLE_BOT.body.append(msgRow);
  DIMPLE_BOT.body.scrollTop = DIMPLE_BOT.body.scrollHeight;
}

function processDimpleQuery(q) {
  const lower = q.toLowerCase();
  playAudio('pop');

  if (lower.includes('under') || lower.includes('cheap') || lower.includes('budget') || lower.includes('120') || lower.includes('100')) {
    const picks = P.filter(p => p.price <= 120).slice(0, 3);
    appendDimpleMsg(`Here are my top-rated sneakers under $120 with unbeatable value:`, 'dimple', picks);
  } else if (lower.includes('run') || lower.includes('marathon') || lower.includes('jog')) {
    const picks = P.filter(p => p.category === 'Running').slice(0, 3);
    appendDimpleMsg(`For running and all-day steps, these feature our highest impact cushioning:`, 'dimple', picks);
  } else if (lower.includes('trend') || lower.includes('hype') || lower.includes('drip') || lower.includes('fire')) {
    const picks = P.filter(p => p.badges.includes('Trending') || p.pop >= 90).slice(0, 3);
    appendDimpleMsg(`These are blowing up on the streets right now:`, 'dimple', picks);
  } else if (lower.includes('limited') || lower.includes('rare') || lower.includes('drop')) {
    const picks = P.filter(p => p.category === 'Limited Edition').slice(0, 3);
    appendDimpleMsg(`Exclusive numbered pairs with ultra-rare materials:`, 'dimple', picks);
  } else if (lower.includes('fit') || lower.includes('size')) {
    appendDimpleMsg(`Need to calibrate your size? Tap below to open our interactive 3-step Fit Quiz!`);
    openSizeQuiz();
  } else if (lower.includes('discount') || lower.includes('coupon') || lower.includes('vip') || lower.includes('code')) {
    appendDimpleMsg(`✨ Secret Tip: Scratch our VIP pass in the header or use code MANASVIP25 in your bag for 25% off!`);
  } else {
    const matches = P.filter(p => (p.name + ' ' + p.brand + ' ' + p.category).toLowerCase().includes(lower)).slice(0, 3);
    if (matches.length) {
      appendDimpleMsg(`I found these matching pairs for you:`, 'dimple', matches);
    } else {
      const topPicks = P.filter(p => p.pop > 85).slice(0, 2);
      appendDimpleMsg(`I'm not fully sure on "${q}", but you will definitely love our signature bestsellers:`, 'dimple', topPicks);
    }
  }
}

DIMPLE_BOT.launcher.onclick = () => {
  DIMPLE_BOT.drawer.classList.add('open');
  $('#backdrop').classList.add('on');
  if (!DIMPLE_BOT.body.children.length) {
    appendDimpleMsg(MANAS_GREETING, 'dimple');
  }
  playAudio('click');
};
$('#closeDimpleChat').onclick = () => {
  DIMPLE_BOT.drawer.classList.remove('open');
  $('#backdrop').classList.remove('on');
};

DIMPLE_BOT.form.onsubmit = e => {
  e.preventDefault();
  const val = DIMPLE_BOT.input.value.trim();
  if (!val) return;
  appendDimpleMsg(val, 'user');
  DIMPLE_BOT.input.value = '';
  setTimeout(() => processDimpleQuery(val), 400);
};

DIMPLE_BOT.chips.addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  const tag = btn.dataset.q;
  if (tag === 'recommend-under-120') {
    appendDimpleMsg("Show me sneakers under $120", 'user');
    processDimpleQuery("under 120");
  } else if (tag === 'recommend-running') {
    appendDimpleMsg("Best shoes for running", 'user');
    processDimpleQuery("running");
  } else if (tag === 'recommend-trending') {
    appendDimpleMsg("What's trending right now?", 'user');
    processDimpleQuery("trending");
  } else if (tag === 'recommend-limited') {
    appendDimpleMsg("Show rare limited drops", 'user');
    processDimpleQuery("limited");
  } else if (tag === 'find-fit') {
    openSizeQuiz();
  }
});

/* ==========================================================
   FEATURE 9: INTERACTIVE "FIND MY PERFECT FIT" SIZE QUIZ
   ========================================================== */
function openSizeQuiz() {
  const box = $('#quizModalBox');
  let quizStep = 1;
  const answers = { width: 'standard', activity: 'walking', fitPref: 'true' };

  function renderStep() {
    if (quizStep === 1) {
      box.replaceChildren(
        closeBtn(),
        h('div', { class: 'quiz-step' },
          h('div', { class: 'quiz-stepper' }, h('span', { class: 'done' }), h('span', {}), h('span', {})),
          h('h2', {}, 'Step 1: What is your foot width?'),
          h('p', { class: 'note' }, 'Different brands cater to different foot silhouettes.'),
          h('div', { class: 'quiz-options' },
            h('button', { class: 'quiz-opt-btn' + (answers.width === 'narrow' ? ' sel' : ''), onclick: () => { answers.width = 'narrow'; quizStep = 2; renderStep(); playAudio('click'); } },
              h('b', {}, 'Narrow / Slim'), h('span', {}, 'Shoes often feel loose on your sides')
            ),
            h('button', { class: 'quiz-opt-btn' + (answers.width === 'standard' ? ' sel' : ''), onclick: () => { answers.width = 'standard'; quizStep = 2; renderStep(); playAudio('click'); } },
              h('b', {}, 'Standard / Regular'), h('span', {}, 'Most sneakers fit without side pressure')
            ),
            h('button', { class: 'quiz-opt-btn' + (answers.width === 'wide' ? ' sel' : ''), onclick: () => { answers.width = 'wide'; quizStep = 2; renderStep(); playAudio('click'); } },
              h('b', {}, 'Wide / High Arch'), h('span', {}, 'Need extra room in the forefoot toe box')
            )
          )
        )
      );
    } else if (quizStep === 2) {
      box.replaceChildren(
        closeBtn(),
        h('div', { class: 'quiz-step' },
          h('div', { class: 'quiz-stepper' }, h('span', { class: 'done' }), h('span', { class: 'done' }), h('span', {})),
          h('h2', {}, 'Step 2: Primary intended activity?'),
          h('p', { class: 'note' }, 'Impact dynamics alter sizing needs.'),
          h('div', { class: 'quiz-options' },
            h('button', { class: 'quiz-opt-btn', onclick: () => { answers.activity = 'walking'; quizStep = 3; renderStep(); playAudio('click'); } },
              h('b', {}, 'Daily Casual & Walking'), h('span', {}, 'Everyday commutes, work & leisure')
            ),
            h('button', { class: 'quiz-opt-btn', onclick: () => { answers.activity = 'running'; quizStep = 3; renderStep(); playAudio('click'); } },
              h('b', {}, 'Running & Road Mileage'), h('span', {}, 'Repetitive impact, foot swells slightly')
            ),
            h('button', { class: 'quiz-opt-btn', onclick: () => { answers.activity = 'gym'; quizStep = 3; renderStep(); playAudio('click'); } },
              h('b', {}, 'Gym, Cross-training & Court'), h('span', {}, 'Lateral stability and lock-down grip')
            ),
            h('button', { class: 'quiz-opt-btn', onclick: () => { answers.activity = 'skate'; quizStep = 3; renderStep(); playAudio('click'); } },
              h('b', {}, 'Street Skate & Flatboard'), h('span', {}, 'Direct board feel & durable vulcanized sole')
            )
          )
        )
      );
    } else if (quizStep === 3) {
      box.replaceChildren(
        closeBtn(),
        h('div', { class: 'quiz-step' },
          h('div', { class: 'quiz-stepper' }, h('span', { class: 'done' }), h('span', { class: 'done' }), h('span', { class: 'done' })),
          h('h2', {}, 'Step 3: Fit feel preference?'),
          h('p', { class: 'note' }, 'How snug do you like your kicks?'),
          h('div', { class: 'quiz-options' },
            h('button', { class: 'quiz-opt-btn', onclick: () => { answers.fitPref = 'snug'; showResult(); } },
              h('b', {}, 'Locked-In / Performance Snug'), h('span', {}, 'Minimal slip, race or court ready')
            ),
            h('button', { class: 'quiz-opt-btn', onclick: () => { answers.fitPref = 'standard'; showResult(); } },
              h('b', {}, 'True to Size / Natural'), h('span', {}, 'Half an inch toe room, all-day comfort')
            ),
            h('button', { class: 'quiz-opt-btn', onclick: () => { answers.fitPref = 'relaxed'; showResult(); } },
              h('b', {}, 'Relaxed / Roomy'), h('span', {}, 'Prefer thicker socks or airy freedom')
            )
          )
        )
      );
    }
  }

  function showResult() {
    playAudio('fanfare');
    let recommendedEU = 42;
    if (answers.width === 'wide' || answers.activity === 'running' || answers.fitPref === 'relaxed') {
      recommendedEU = 43;
    } else if (answers.width === 'narrow' || answers.fitPref === 'snug') {
      recommendedEU = 41;
    }

    const matchingShoes = P.filter(p => !p.oos.includes(recommendedEU)).slice(0, 3);

    box.replaceChildren(
      closeBtn(),
      h('div', { style: 'text-align:center;padding:10px 0;' },
        h('span', { style: 'font-size:2.8rem' }, '🎯'),
        h('h2', { style: 'margin:8px 0' }, `Your Tailored Fit: EU ${recommendedEU}`),
        h('p', { class: 'note' }, `Based on your ${answers.width} profile and ${answers.activity} usage, EU ${recommendedEU} (approx UK ${recommendedEU - 34}) offers ideal biomechanical lock-down without forefoot pinching.`),
        h('h3', { style: 'margin:24px 0 12px;text-align:left' }, `Curated in Size EU ${recommendedEU} for you:`),
        h('div', { class: 'products', style: 'margin-bottom:20px;' }, matchingShoes.map(card)),
        h('button', {
          class: 'btn primary',
          onclick: () => {
            closeOv();
            F.size = String(recommendedEU);
            $('#fSize').value = String(recommendedEU);
            renderProducts();
            $('#shop').scrollIntoView();
          }
        }, `Filter All Shoes in EU ${recommendedEU}`)
      )
    );
  }

  renderStep();
  openOv($('#quizModal'));
}

$('#navQuizBtn').onclick = e => { e.preventDefault(); openSizeQuiz(); };
$('#heroQuizBtn').onclick = openSizeQuiz;
$('#footQuizLink').onclick = e => { e.preventDefault(); openSizeQuiz(); };

/* ==========================================================
   FEATURE 10: GAMIFIED SCRATCH & WIN VIP CARD
   ========================================================== */
function initScratchCard() {
  const canvas = $('#scratchCanvas');
  const ctx = canvas.getContext('2d');
  const note = $('#scratchStatusNote');
  let isScratching = false;
  let scratched = false;

  // Draw metallic glitter silver overlay
  ctx.fillStyle = '#64748b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, '#94a3b8');
  grad.addColorStop(0.5, '#cbd5e1');
  grad.addColorStop(1, '#64748b');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 16px Space Grotesk, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('✨ RUB OR SCRATCH HERE ✨', canvas.width / 2, canvas.height / 2 - 10);
  ctx.font = '12px Inter, sans-serif';
  ctx.fillText('Reveal secret 25% VIP voucher code', canvas.width / 2, canvas.height / 2 + 16);

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  function scratch(e) {
    if (!isScratching || scratched) return;
    const pos = getPos(e);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 24, 0, Math.PI * 2);
    ctx.fill();

    checkProgress();
  }

  function checkProgress() {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;
    let transparent = 0;
    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) transparent++;
    }
    const ratio = transparent / (pixels.length / 16);

    if (ratio > 0.42 && !scratched) {
      scratched = true;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      note.textContent = '🎉 Unlocked! Code MANASVIP25 is ready to use!';
      playAudio('fanfare');
      fireConfetti();
    }
  }

  canvas.onmousedown = canvas.ontouchstart = e => {
    isScratching = true;
    scratch(e);
  };
  window.onmouseup = window.ontouchend = () => isScratching = false;
  canvas.onmousemove = canvas.ontouchmove = scratch;
}

function fireConfetti() {
  const canvas = $('#confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = Array.from({ length: 70 }, () => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: (Math.random() - 0.5) * 10,
    vy: (Math.random() - 0.5) * 10 - 2,
    color: ['#c6ff00', '#38ef7d', '#00f0ff', '#ffffff', '#ff007f'][Math.floor(Math.random() * 5)],
    size: Math.random() * 6 + 3,
    alpha: 1
  }));

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15;
      p.alpha -= 0.012;
      if (p.alpha > 0) {
        alive = true;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    });
    if (alive) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

$('#applyScratchVoucherBtn').onclick = () => {
  coupon = { code: 'MANASVIP25', rate: 0.25 };
  persistCart();
  toast('VIP 25% discount auto-applied to your shopping bag!');
  playAudio('fanfare');
  closeOv();
  $('#cartBtn').click();
};

function openScratchModal() {
  openOv($('#scratchModal'));
  setTimeout(initScratchCard, 80);
}
$('#vipScratchBtn').onclick = openScratchModal;
$('#heroVipBtn').onclick = openScratchModal;
$('#footVipLink').onclick = e => { e.preventDefault(); openScratchModal(); };
$('#closeScratchModal').onclick = closeOv;

/* ==========================================================
   FEATURE 5: CUSTOMER REVIEWS & "TRUE TO SIZE" SYSTEM
   ========================================================== */
function openWriteReviewModal() {
  const box = $('#reviewModalBox');
  let selectedStars = 5;
  let selectedFit = 'true';

  const starsWrap = h('div', { style: 'font-size:1.8rem;cursor:pointer;color:#f5a300;letter-spacing:4px;' }, '★★★★★');
  starsWrap.onclick = e => {
    const rect = starsWrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    selectedStars = Math.min(5, Math.max(1, Math.ceil((x / rect.width) * 5)));
    starsWrap.textContent = '★'.repeat(selectedStars) + '☆'.repeat(5 - selectedStars);
    playAudio('click');
  };

  const nameInp = h('input', { type: 'text', placeholder: 'Your Name (e.g. Manas D.)', required: true });
  const shoeSelect = h('select', {}, P.map(p => h('option', { value: p.name }, p.name)));
  const fitSelect = h('select', {},
    h('option', { value: 'small' }, 'Runs Slightly Small'),
    h('option', { value: 'true' }, 'True to Size (Recommended)'),
    h('option', { value: 'large' }, 'Runs Slightly Large')
  );
  const textInp = h('textarea', { placeholder: 'Tell the sneaker community about the comfort, cushioning and style...', rows: 4, required: true });

  const form = h('form', {
    class: 'form',
    onsubmit: e => {
      e.preventDefault();
      if (!nameInp.value.trim() || !textInp.value.trim()) return;

      const initials = nameInp.value.trim().split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase() || 'DK';
      const newReview = {
        name: nameInp.value.trim(),
        initials,
        stars: selectedStars,
        shoe: shoeSelect.value,
        fit: fitSelect.value,
        text: textInp.value.trim()
      };
      userReviews.unshift(newReview);
      save('kicks_user_reviews', userReviews);
      renderUserReviews();
      playAudio('fanfare');
      toast('Thank you! Your verified review has been published.');
      closeOv();
    }
  },
    h('label', { class: 'full' }, 'Rate your experience', starsWrap),
    h('label', {}, 'Full Name', nameInp),
    h('label', {}, 'Sneaker Model', shoeSelect),
    h('label', { class: 'full' }, 'Size & Fit Feedback', fitSelect),
    h('label', { class: 'full' }, 'Your Review', textInp),
    h('button', { class: 'btn primary full', style: 'margin-top:10px' }, 'Publish Verified Review')
  );

  box.replaceChildren(
    closeBtn(),
    h('h2', {}, 'Write a Community Review'),
    h('p', { class: 'note' }, 'Help fellow sneakerheads choose their dream pair.'),
    form
  );
  openOv($('#reviewModal'));
}
$('#openWriteReviewBtn').onclick = openWriteReviewModal;

function renderUserReviews() {
  if (!userReviews.length) return;
  const grid = $('#reviewsGrid');
  const items = userReviews.map(r => h('article', {},
    h('div', { class: 'stars' }, '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars)),
    h('p', {}, r.text),
    h('div', { style: 'display:flex;align-items:center;margin-top:auto;' },
      h('span', { class: 'av' }, r.initials),
      h('span', {}, `${r.name} on `),
      h('b', { style: 'margin-left:4px' }, r.shoe),
      h('span', { class: 'badge-ver' }, '✓ Verified Buyer')
    )
  ));
  grid.prepend(...items);
}
renderUserReviews();

/* ==========================================================
   FEATURE 8: LIVE SOCIAL PROOF ACTIVITY TICKER
   ========================================================== */
const RECENT_BUYERS = [
  { name: 'Aarav K.', city: 'Mumbai', shoe: 'Air Pulse 270', time: 'Just now' },
  { name: 'Chloe T.', city: 'London', shoe: 'Cloud Runner X', time: '2 mins ago' },
  { name: 'Kenji S.', city: 'Tokyo', shoe: 'Neon Drop 02', time: '4 mins ago' },
  { name: 'Sofia M.', city: 'Barcelona', shoe: 'Retro Court 85', time: '6 mins ago' },
  { name: 'Liam P.', city: 'New York', shoe: 'Vault Edition 01', time: '8 mins ago' }
];

let socialProofIndex = 0;
function showNextSocialProof() {
  const toastEl = $('#socialProofToast');
  if (!toastEl) return;
  const buyer = RECENT_BUYERS[socialProofIndex % RECENT_BUYERS.length];
  socialProofIndex++;

  $('#spUser').textContent = `${buyer.name} from ${buyer.city}`;
  $('#spAction').textContent = `just ordered ${buyer.shoe}`;
  $('#spTime').textContent = buyer.time;

  toastEl.hidden = false;
  setTimeout(() => {
    toastEl.hidden = true;
  }, 5000);
}

$('#closeSpToast').onclick = () => {
  $('#socialProofToast').hidden = true;
};
// Trigger ticker periodically
setTimeout(() => {
  showNextSocialProof();
  setInterval(showNextSocialProof, 16000);
}, 6000);

/* ---------- Newsletter (local demo) ---------- */
$('#newsForm').onsubmit = e => {
  e.preventDefault();
  const v = $('#newsEmail').value.trim(), m = $('#newsMsg');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
    m.textContent = 'Please enter a valid email address.';
    return;
  }
  const l = load('kicks_newsletter', []);
  if (!l.includes(v)) {
    l.push(v);
    save('kicks_newsletter', l);
  }
  playAudio('chime');
  m.textContent = 'Subscribed! You are on Manas Dobhal’s VIP early access list.';
  e.target.reset();
};

/* ---------- Theme, Nav, Scroll ---------- */
const setTheme = t => {
  document.documentElement.dataset.theme = t;
  save('kicks_theme', t);
};
setTheme(load('kicks_theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
$('#themeBtn').onclick = () => {
  const current = document.documentElement.dataset.theme;
  setTheme(current === 'dark' ? 'light' : 'dark');
  playAudio('click');
};
$('#searchBtn').onclick = () => {
  const o = $('#searchBox').classList.toggle('open');
  if (o) $('#q').focus();
  playAudio('click');
};
$('#q').addEventListener('input', () => $('#shop').scrollIntoView({ block: 'start' }));
$('#menuBtn').onclick = () => $('#links').classList.toggle('open');
$$('#links a').forEach(a => a.addEventListener('click', () => $('#links').classList.remove('open')));

const links = $$('#links a[href^="#"]');
addEventListener('scroll', () => {
  const y = scrollY, max = document.body.scrollHeight - innerHeight;
  $('#nav').classList.toggle('solid', y > 30);
  $('#progress').style.width = (y / max * 100) + '%';
  $('#toTop').classList.toggle('show', y > 600);
  let cur = 'home';
  ['home', 'collections', 'shop'].forEach(id => {
    const el = $('#' + id);
    if (el && el.getBoundingClientRect().top < innerHeight * 0.4) cur = id;
  });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur && !a.dataset.filter));
}, { passive: true });
$('#toTop').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.12 });
$$('.reveal').forEach(e => io.observe(e));

// Hero pointer parallax (desktop only)
if (matchMedia('(hover:hover) and (min-width:1025px)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  const hi = $('#heroImg img');
  $('.hero').addEventListener('mousemove', e => {
    if (hi) hi.style.transform = `rotate(-4deg) translate(${(e.clientX / innerWidth - 0.5) * 24}px,${(e.clientY / innerHeight - 0.5) * 18}px)`;
  });
}

// Demo countdown (resets on every visit: 3 days from load)
const end = Date.now() + 3 * 864e5;
function tick() {
  let s = Math.max(0, Math.floor((end - Date.now()) / 1000));
  const v = [['d', 86400], ['h', 3600], ['m', 60], ['s', 1]].map(([l, n]) => {
    const x = Math.floor(s / n);
    s %= n;
    return h('div', {}, String(x).padStart(2, '0'), h('small', {}, l));
  });
  $('#timer').replaceChildren(...v);
}
tick();
setInterval(tick, 1000);

$('#year').textContent = new Date().getFullYear();

/* ---------- Initial Render ---------- */
$('#products').replaceChildren(...Array.from({ length: 8 }, () => h('div', { class: 'skel' })));
setTimeout(renderProducts, 500);
renderRecent();
updateCompareBar();
badge('#wishCount', wish.length);
badge('#cartCount', cart.reduce((a, i) => a + i.qty, 0));
