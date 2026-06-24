/* ============================================================
   AMAZON CLONE – script.js
   Handles: Products data, Cart, Search, Filters, Sort,
            Carousel, Dark Mode, Modal, Toast, LocalStorage
   ============================================================ */

'use strict';

/* ============================================================
   PRODUCT DATA  (25 products across 7 categories)
   ============================================================ */
const PRODUCTS = [
  /* ── ELECTRONICS ── */
  {
    id: 1,
    title: 'Apple iPhone 15 Pro Max (256GB) – Natural Titanium',
    category: 'electronics',
    img: 'https://images.unsplash.com/photo-1592286927505-1def25115481?w=600&q=80&auto=format&fit=crop',
    rating: 4.7,
    reviews: 12840,
    price: 134900,
    originalPrice: 159900,
    prime: true,
    badge: 'Best Seller',
    description: 'iPhone 15 Pro Max with A17 Pro chip, 48MP main camera, ProMotion OLED display (120 Hz), and titanium build. USB-C with USB 3.0 speeds.',
    brand: 'Apple',
    inStock: true,
  },
  {
    id: 2,
    title: 'Samsung 65" 4K QLED Smart TV (2024) – QN65Q80D',
    category: 'electronics',
    img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80&auto=format&fit=crop',
    rating: 4.5,
    reviews: 7320,
    price: 82999,
    originalPrice: 149999,
    prime: true,
    badge: 'Deal',
    description: 'Quantum Dot technology, Neural Quantum Processor 4K, Object Tracking Sound+, 60W output, Game Mode Pro, 4 HDMI 2.1 ports.',
    brand: 'Samsung',
    inStock: true,
  },
  {
    id: 3,
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    category: 'electronics',
    img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80&auto=format&fit=crop',
    rating: 4.8,
    reviews: 24510,
    price: 22990,
    originalPrice: 34990,
    prime: true,
    badge: 'Best Seller',
    description: 'Industry-leading noise cancellation with 8 microphones, 30-hour battery, speak-to-chat auto-pause, and premium audio with LDAC support.',
    brand: 'Sony',
    inStock: true,
  },
  {
    id: 4,
    title: 'Dell XPS 15 Laptop (13th Gen Intel Core i7, 32GB RAM, 1TB SSD)',
    category: 'electronics',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80&auto=format&fit=crop',
    rating: 4.4,
    reviews: 5670,
    price: 139990,
    originalPrice: 179990,
    prime: false,
    badge: 'New',
    description: 'OLED 3.5K display, RTX 4060 graphics, 86Wh battery, Thunderbolt 4, Windows 11 Pro. The ultimate productivity powerhouse.',
    brand: 'Dell',
    inStock: true,
  },
  {
    id: 5,
    title: 'Canon EOS R50 Mirrorless Camera with 18-45mm Lens',
    category: 'electronics',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80&auto=format&fit=crop',
    rating: 4.6,
    reviews: 3210,
    price: 66995,
    originalPrice: 79995,
    prime: true,
    badge: null,
    description: '24.2MP APS-C CMOS sensor, Dual Pixel CMOS AF II, 4K video, in-body stabilisation, Wi-Fi, Bluetooth. Perfect for content creators.',
    brand: 'Canon',
    inStock: true,
  },
  {
    id: 6,
    title: 'boAt Rockerz 450 Bluetooth Headphones',
    category: 'electronics',
    img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80&auto=format&fit=crop',
    rating: 4.1,
    reviews: 89200,
    price: 1299,
    originalPrice: 3990,
    prime: true,
    badge: 'Deal',
    description: 'Super Extra Bass, 15-hour playback, 40mm drivers, padded ear cups, foldable design, voice assistant support.',
    brand: 'boAt',
    inStock: true,
  },

  /* ── FASHION ── */
  {
    id: 7,
    title: 'Levi\'s Men\'s 511 Slim Fit Stretch Jeans',
    category: 'fashion',
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80&auto=format&fit=crop',
    rating: 4.3,
    reviews: 16780,
    price: 2299,
    originalPrice: 4299,
    prime: true,
    badge: null,
    description: 'Slim fit through seat, thighs and leg opening. 1% stretch for all-day comfort. Available in classic dark indigo.',
    brand: 'Levi\'s',
    inStock: true,
  },
  {
    id: 8,
    title: 'Nike Air Max 270 Men\'s Shoes – Black/White',
    category: 'fashion',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop',
    rating: 4.5,
    reviews: 8940,
    price: 9995,
    originalPrice: 13995,
    prime: true,
    badge: 'Deal',
    description: 'Nike\'s biggest heel Air unit ever. Lightweight mesh upper, foam midsole, rubber waffle outsole. All-day comfort and style.',
    brand: 'Nike',
    inStock: true,
  },
  {
    id: 9,
    title: 'Allen Solly Women\'s A-Line Midi Dress – Floral Print',
    category: 'fashion',
    img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop',
    rating: 4.0,
    reviews: 2340,
    price: 1299,
    originalPrice: 2499,
    prime: false,
    badge: 'New',
    description: 'Viscose crepe fabric, midi length, V-neckline, short sleeves, regular fit. Machine washable. Perfect for office and casual wear.',
    brand: 'Allen Solly',
    inStock: true,
  },
  {
    id: 10,
    title: 'Fossil Men\'s Chronograph Stainless Steel Watch',
    category: 'fashion',
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80&auto=format&fit=crop',
    rating: 4.6,
    reviews: 4520,
    price: 8995,
    originalPrice: 12995,
    prime: true,
    badge: null,
    description: 'Machine chronograph, stainless steel case and bracelet, mineral crystal glass, water resistant to 50m. Classic American design.',
    brand: 'Fossil',
    inStock: true,
  },

  /* ── HOME & KITCHEN ── */
  {
    id: 11,
    title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker (6 Quart)',
    category: 'home',
    img: 'https://images.unsplash.com/photo-1585442318774-878c0750ec47?w=600&q=80&auto=format&fit=crop',
    rating: 4.7,
    reviews: 31200,
    price: 6999,
    originalPrice: 9999,
    prime: true,
    badge: 'Best Seller',
    description: 'Pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and food warmer in one. 14 smart programs.',
    brand: 'Instant Pot',
    inStock: true,
  },
  {
    id: 12,
    title: 'Dyson V15 Detect Cordless Vacuum Cleaner',
    category: 'home',
    img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80&auto=format&fit=crop',
    rating: 4.8,
    reviews: 9870,
    price: 52900,
    originalPrice: 64900,
    prime: true,
    badge: null,
    description: 'Laser detects invisible dust. HEPA filtration. Acoustic piezo sensor counts particles. Up to 60 min fade-free power. LCD display.',
    brand: 'Dyson',
    inStock: true,
  },
  {
    id: 13,
    title: 'IKEA POÄNG Armchair – Birch Veneer with Cushion',
    category: 'home',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80&auto=format&fit=crop',
    rating: 4.3,
    reviews: 6720,
    price: 12990,
    originalPrice: 15990,
    prime: false,
    badge: null,
    description: 'Durable bent birch frame, layer-glued for strength, replaceable cushion cover. Comfortable ergonomic design for relaxation.',
    brand: 'IKEA',
    inStock: true,
  },
  {
    id: 14,
    title: 'Philips 1.8L Digital Electric Kettle – HD9366/06',
    category: 'home',
    img: 'https://images.unsplash.com/photo-1594213239519-1be3e3d59a73?w=600&q=80&auto=format&fit=crop',
    rating: 4.4,
    reviews: 11450,
    price: 1895,
    originalPrice: 2995,
    prime: true,
    badge: 'Deal',
    description: '1800W rapid boiling, auto shut-off, dry boil protection, stainless steel interior, concealed heating element, 360° cordless base.',
    brand: 'Philips',
    inStock: true,
  },

  /* ── BOOKS ── */
  {
    id: 15,
    title: 'Atomic Habits – James Clear (Paperback)',
    category: 'books',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80&auto=format&fit=crop',
    rating: 4.8,
    reviews: 198000,
    price: 349,
    originalPrice: 799,
    prime: true,
    badge: 'Best Seller',
    description: 'The world\'s most popular book on building good habits. 1 million+ copies sold. An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
    brand: 'Penguin',
    inStock: true,
  },
  {
    id: 16,
    title: 'Rich Dad Poor Dad – Robert T. Kiyosaki (Paperback)',
    category: 'books',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&auto=format&fit=crop',
    rating: 4.6,
    reviews: 87400,
    price: 299,
    originalPrice: 495,
    prime: true,
    badge: null,
    description: 'The No. 1 Personal Finance book of all time. What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
    brand: 'Plata Publishing',
    inStock: true,
  },
  {
    id: 17,
    title: 'The Psychology of Money – Morgan Housel',
    category: 'books',
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80&auto=format&fit=crop',
    rating: 4.7,
    reviews: 54320,
    price: 289,
    originalPrice: 499,
    prime: true,
    badge: 'Deal',
    description: 'Timeless lessons on wealth, greed, and happiness. 19 short stories exploring the strange ways people think about money.',
    brand: 'Jaico Publishing',
    inStock: true,
  },
  {
    id: 18,
    title: 'Harry Potter Complete Collection (Books 1–7, Box Set)',
    category: 'books',
    img: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&q=80&auto=format&fit=crop',
    rating: 4.9,
    reviews: 24100,
    price: 2899,
    originalPrice: 5599,
    prime: false,
    badge: 'Best Seller',
    description: 'The complete magical saga by J.K. Rowling. Beautifully designed box set. Gift-perfect for Potterheads of all ages.',
    brand: 'Bloomsbury',
    inStock: true,
  },

  /* ── APPLIANCES ── */
  {
    id: 19,
    title: 'LG 1.5 Ton 5 Star AI Dual Inverter AC (2024)',
    category: 'appliances',
    img: 'https://images.unsplash.com/photo-1631545806609-c2fd0ff67e75?w=600&q=80&auto=format&fit=crop',
    rating: 4.5,
    reviews: 8910,
    price: 41990,
    originalPrice: 59990,
    prime: false,
    badge: 'Deal',
    description: 'AI-ThinQ control via app, 4-way swing, auto clean, dust filter, PM 1.0 filter, Wi-Fi enabled. 5-star energy rating for lower bills.',
    brand: 'LG',
    inStock: true,
  },
  {
    id: 20,
    title: 'Samsung 253L 3-Star Double Door Refrigerator',
    category: 'appliances',
    img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80&auto=format&fit=crop',
    rating: 4.3,
    reviews: 5640,
    price: 24990,
    originalPrice: 33990,
    prime: false,
    badge: null,
    description: 'Digital Inverter Technology, All-Around Cooling, Stabilizer Free Operation (100V–300V), Deodorizer, 10-year compressor warranty.',
    brand: 'Samsung',
    inStock: true,
  },

  /* ── SPORTS ── */
  {
    id: 21,
    title: 'Yonex Arcsaber 71 Badminton Racket (G4, 3U)',
    category: 'sports',
    img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80&auto=format&fit=crop',
    rating: 4.5,
    reviews: 3210,
    price: 3499,
    originalPrice: 4999,
    prime: true,
    badge: null,
    description: 'Extra slim shaft, New Built-in T-Joint, Aero + Box frame. Powerful smashes with great control. Recommended string tension 20–28 lbs.',
    brand: 'Yonex',
    inStock: true,
  },
  {
    id: 22,
    title: 'Nivia Storm Football – Size 5 (FIFA Quality Pro)',
    category: 'sports',
    img: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?w=600&q=80&auto=format&fit=crop',
    rating: 4.2,
    reviews: 7890,
    price: 899,
    originalPrice: 1499,
    prime: true,
    badge: 'Deal',
    description: 'PU material, 32-panel construction, 4-ply nylon wound, butyl bladder, machine-stitched. Perfect for training and match play.',
    brand: 'Nivia',
    inStock: true,
  },

  /* ── BEAUTY ── */
  {
    id: 23,
    title: 'Maybelline New York Fit Me Matte Poreless Foundation',
    category: 'beauty',
    img: 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=600&q=80&auto=format&fit=crop',
    rating: 4.3,
    reviews: 43200,
    price: 449,
    originalPrice: 699,
    prime: true,
    badge: 'Best Seller',
    description: 'Oil-free formula, controls shine, minimises pores, 12-hour staying power. Available in 30+ shades for all skin tones.',
    brand: 'Maybelline',
    inStock: true,
  },

  /* ── TOYS ── */
  {
    id: 24,
    title: 'LEGO Technic Formula 1 Race Car (1580 Pieces)',
    category: 'toys',
    img: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=600&q=80&auto=format&fit=crop',
    rating: 4.8,
    reviews: 14500,
    price: 12999,
    originalPrice: 17999,
    prime: true,
    badge: 'New',
    description: 'Authentic F1 car replica with articulated front and rear suspension, steering, detailed V6 engine, removable bodywork panels.',
    brand: 'LEGO',
    inStock: true,
  },
  {
    id: 25,
    title: 'Funskool Doctor Set – Educational Toy for Kids 3+',
    category: 'toys',
    img: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=600&q=80&auto=format&fit=crop',
    rating: 4.1,
    reviews: 6780,
    price: 599,
    originalPrice: 899,
    prime: false,
    badge: null,
    description: 'Includes stethoscope, syringe, thermometer, blood pressure kit, and 8 more tools. Safe non-toxic plastic, develops role-play skills.',
    brand: 'Funskool',
    inStock: true,
  },
];

/* ============================================================
   UTILITY: Format Indian Rupees
   ============================================================ */
function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

/* ============================================================
   UTILITY: Generate Star HTML
   ============================================================ */
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* ============================================================
   UTILITY: Discount %
   ============================================================ */
function discountPct(orig, curr) {
  return Math.round(((orig - curr) / orig) * 100);
}

/* ============================================================
   CART  (localStorage-backed)
   ============================================================ */
function getCart() {
  try { return JSON.parse(localStorage.getItem('amazonCart')) || []; }
  catch (e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('amazonCart', JSON.stringify(cart));
}
function addToCart(productId) {
  const cart = getCart();
  const idx  = cart.findIndex(i => i.id === productId);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    const p = PRODUCTS.find(p => p.id === productId);
    if (p) cart.push({ id: p.id, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
}
function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  updateCartCount();
}
function updateQty(productId, delta) {
  const cart = getCart();
  const idx  = cart.findIndex(i => i.id === productId);
  if (idx > -1) {
    cart[idx].qty = Math.max(1, cart[idx].qty + delta);
    saveCart(cart);
    updateCartCount();
  }
}
function updateCartCount() {
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = total;
    // Trigger CSS animation by re-adding class
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = '';
  });
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let toastTimer;
function showToast(msg, type = 'default') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show' + (type !== 'default' ? ' ' + type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = 'toast'; }, 3000);
}

/* ============================================================
   DARK MODE
   ============================================================ */
function applyDarkMode(dark) {
  document.body.classList.toggle('dark', dark);
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = dark ? '☀️' : '🌙';
}
function initDarkMode() {
  const saved = localStorage.getItem('darkMode') === 'true';
  applyDarkMode(saved);
  const btn = document.getElementById('darkToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem('darkMode', isDark);
      btn.textContent = isDark ? '☀️' : '🌙';
    });
  }
}

/* ============================================================
   PRODUCT CARD  (used by all pages)
   ============================================================ */
function buildProductCard(p, delay = 0) {
  const disc = discountPct(p.originalPrice, p.price);
  const card = document.createElement('article');
  card.className = 'product-card';
  card.style.animationDelay = `${delay}ms`;
  card.dataset.id = p.id;

  const badgeHTML = p.badge
    ? `<span class="badge badge-${p.badge === 'Deal' ? 'deal' : 'new'}">${p.badge}</span>`
    : '';
  const primeHTML = p.prime
    ? `<span class="badge badge-prime">PRIME</span>`
    : '';

  card.innerHTML = `
    <div class="card-badges">${badgeHTML}${primeHTML}</div>
    <button class="card-wish" data-id="${p.id}" aria-label="Add to wishlist" title="Add to Wishlist">♡</button>
    <div class="card-img-wrap">
      <img class="card-img" src="${p.img}" alt="${p.title}" loading="lazy" />
    </div>
    <div class="card-body">
      <span class="card-category">${p.category}</span>
      <h3 class="card-title">${p.title}</h3>
      <div class="card-rating">
        <span class="stars" title="${p.rating} out of 5">${starsHTML(p.rating)}</span>
        <span class="review-count">(${p.reviews.toLocaleString('en-IN')})</span>
      </div>
      <div class="card-prices">
        <span class="price-current">${formatPrice(p.price)}</span>
        <span class="price-original">${formatPrice(p.originalPrice)}</span>
        <span class="price-discount">${disc}% off</span>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn-add-cart btn-primary" data-id="${p.id}">🛒 Add to Cart</button>
    </div>
  `;

  // Card click → open modal
  card.addEventListener('click', e => {
    if (e.target.closest('.btn-add-cart') || e.target.closest('.card-wish')) return;
    openModal(p.id);
  });

  // Add to cart
  card.querySelector('.btn-add-cart').addEventListener('click', e => {
    e.stopPropagation();
    addToCart(p.id);
    showToast(`✅ "${p.title.substring(0, 30)}…" added to cart`);
  });

  // Wishlist
  card.querySelector('.card-wish').addEventListener('click', e => {
    e.stopPropagation();
    const btn = e.currentTarget;
    btn.classList.toggle('wished');
    btn.textContent = btn.classList.contains('wished') ? '❤️' : '♡';
    showToast(btn.classList.contains('wished') ? '❤️ Added to Wishlist' : 'Removed from Wishlist');
  });

  return card;
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const overlay = document.getElementById('modalOverlay');
  const disc    = discountPct(p.originalPrice, p.price);

  document.getElementById('modalImg').innerHTML    = `<img src="${p.img}" alt="${p.title}" class="modal-img-tag" />`;
  document.getElementById('modalTitle').textContent  = p.title;
  document.getElementById('modalBadge').innerHTML    = p.badge
    ? `<span class="badge badge-${p.badge === 'Deal' ? 'deal' : 'new'}">${p.badge}</span>`
    : (p.prime ? '<span class="badge badge-prime">PRIME</span>' : '');
  document.getElementById('modalRating').innerHTML   =
    `<span class="stars">${starsHTML(p.rating)}</span>
     <span>${p.rating}</span>
     <span class="review-count">(${p.reviews.toLocaleString('en-IN')} ratings)</span>`;
  document.getElementById('modalPrices').innerHTML   =
    `<span class="modal-price-current">${formatPrice(p.price)}</span>
     <span class="modal-price-original">${formatPrice(p.originalPrice)}</span>
     <span class="modal-price-discount">${disc}% off</span>`;
  document.getElementById('modalDesc').textContent   = p.description;
  document.getElementById('modalMeta').innerHTML     =
    `<div class="modal-meta-row"><strong>Brand:</strong> ${p.brand}</div>
     <div class="modal-meta-row"><strong>Category:</strong> ${p.category}</div>
     <div class="modal-meta-row"><strong>Availability:</strong> ${p.inStock ? '✔ In Stock' : '✖ Out of Stock'}</div>
     ${p.prime ? '<div class="modal-meta-row">🟦 <strong>Prime</strong> — FREE delivery available</div>' : ''}`;

  const addBtn = document.getElementById('modalAddCart');
  addBtn.onclick = () => {
    addToCart(p.id);
    showToast(`✅ "${p.title.substring(0, 30)}…" added to cart`);
    closeModal();
  };

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function initModal() {
  const overlay   = document.getElementById('modalOverlay');
  const closeBtn  = document.getElementById('modalClose');
  if (!overlay) return;

  closeBtn?.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ============================================================
   CAROUSEL (index.html)
   ============================================================ */
function initCarousel() {
  const track  = document.getElementById('carouselTrack');
  const dotsEl = document.getElementById('carouselDots');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  let current  = 0;
  let autoTimer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 4500);
  }

  document.getElementById('prevBtn')?.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  document.getElementById('nextBtn')?.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  // Pause on hover
  track.parentElement.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.parentElement.addEventListener('mouseleave', startAuto);

  // Touch / swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { goTo(dx < 0 ? current + 1 : current - 1); startAuto(); }
  }, { passive: true });

  startAuto();
}

/* ============================================================
   INDEX PAGE – Product grid with filter + search
   ============================================================ */
function initIndexPage() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  let activeCategory = 'all';
  let searchQuery    = '';

  function render() {
    let list = PRODUCTS.filter(p => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory;
      const qMatch   = !searchQuery ||
        p.title.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery) ||
        p.brand.toLowerCase().includes(searchQuery);
      return catMatch && qMatch;
    });

    grid.innerHTML = '';
    if (list.length === 0) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px">No products found.</p>';
      return;
    }
    list.forEach((p, i) => grid.appendChild(buildProductCard(p, i * 40)));
  }

  // Category filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeCategory = btn.dataset.cat;
      render();
    });
  });

  // Live search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value.toLowerCase().trim();
      render();
    });
  }

  // Search button / category
  document.getElementById('searchBtn')?.addEventListener('click', () => {
    const q   = document.getElementById('searchInput').value.toLowerCase().trim();
    const cat = document.getElementById('searchCategory').value;
    if (cat !== 'all') { activeCategory = cat; }
    searchQuery = q;
    render();
  });

  render();
}

/* ============================================================
   PRODUCTS PAGE – Full listing with sidebar filters + sort
   ============================================================ */
function initProductsPage() {
  const grid = document.getElementById('productGrid');
  if (!grid || !document.querySelector('.products-layout')) return;

  // Read URL params for pre-filtering
  const params     = new URLSearchParams(window.location.search);
  const urlCat     = params.get('cat') || 'all';
  const urlFilter  = params.get('filter') || '';

  let filters = {
    category : urlCat,
    rating   : 0,
    priceMin : 0,
    priceMax : Infinity,
    prime    : false,
    search   : '',
  };
  let sortMode    = 'default';
  let displayCount= 12;

  // Pre-select sidebar radio
  const catRadio = document.querySelector(`input[name="cat"][value="${urlCat}"]`);
  if (catRadio) catRadio.checked = true;

  function applyFilters() {
    let list = PRODUCTS.filter(p => {
      if (filters.category !== 'all' && p.category !== filters.category) return false;
      if (p.rating < filters.rating) return false;
      if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
      if (filters.prime && !p.prime) return false;
      if (filters.search && !p.title.toLowerCase().includes(filters.search) &&
          !p.brand.toLowerCase().includes(filters.search) &&
          !p.category.toLowerCase().includes(filters.search)) return false;
      if (urlFilter === 'deals' && !p.badge) return false;
      return true;
    });

    // Sort
    switch (sortMode) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
      case 'alpha':      list.sort((a, b) => a.title.localeCompare(b.title)); break;
    }

    // Results count
    const rc = document.getElementById('resultsCount');
    if (rc) rc.textContent = `${list.length} result${list.length !== 1 ? 's' : ''}`;

    // Render
    const paged = list.slice(0, displayCount);
    grid.innerHTML = '';
    if (paged.length === 0) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:60px">No products match your filters. <button onclick="document.getElementById(\'resetFilters\').click()" style="color:var(--text-link);background:none;border:none;cursor:pointer;font-size:14px">Reset filters</button></p>';
    } else {
      paged.forEach((p, i) => grid.appendChild(buildProductCard(p, i * 30)));
    }

    // Load more
    const lmw = document.getElementById('loadMoreWrap');
    if (lmw) lmw.style.display = list.length > displayCount ? 'block' : 'none';
  }

  // Sidebar category
  document.querySelectorAll('input[name="cat"]').forEach(radio => {
    radio.addEventListener('change', e => {
      filters.category = e.target.value;
      displayCount = 12;
      applyFilters();
    });
  });

  // Rating filter
  document.querySelectorAll('input[name="rating"]').forEach(radio => {
    radio.addEventListener('change', e => {
      filters.rating = parseFloat(e.target.value);
      displayCount = 12;
      applyFilters();
    });
  });

  // Price filter
  document.querySelectorAll('input[name="price"]').forEach(radio => {
    radio.addEventListener('change', e => {
      const v = e.target.value;
      if (v === 'all') { filters.priceMin = 0; filters.priceMax = Infinity; }
      else {
        const [lo, hi] = v.split('-').map(Number);
        filters.priceMin = lo;
        filters.priceMax = hi;
      }
      displayCount = 12;
      applyFilters();
    });
  });

  // Prime filter
  document.getElementById('primeFilter')?.addEventListener('change', e => {
    filters.prime = e.target.checked;
    displayCount = 12;
    applyFilters();
  });

  // Sort
  document.getElementById('sortSelect')?.addEventListener('change', e => {
    sortMode = e.target.value;
    applyFilters();
  });

  // Search bar
  const si = document.getElementById('searchInput');
  if (si) {
    si.addEventListener('input', e => {
      filters.search = e.target.value.toLowerCase().trim();
      displayCount = 12;
      applyFilters();
    });
  }
  document.getElementById('searchBtn')?.addEventListener('click', () => {
    filters.search = (si?.value || '').toLowerCase().trim();
    displayCount = 12;
    applyFilters();
  });

  // Load more
  document.getElementById('loadMoreBtn')?.addEventListener('click', () => {
    displayCount += 8;
    applyFilters();
  });

  // Reset
  document.getElementById('resetFilters')?.addEventListener('click', () => {
    filters = { category:'all', rating:0, priceMin:0, priceMax:Infinity, prime:false, search:'' };
    sortMode = 'default';
    displayCount = 12;
    document.querySelectorAll('input[name="cat"]')[0].checked = true;
    document.querySelectorAll('input[name="rating"]')[0].checked = true;
    document.querySelectorAll('input[name="price"]')[0].checked = true;
    const pf = document.getElementById('primeFilter');
    if (pf) pf.checked = false;
    if (si) si.value = '';
    const ss = document.getElementById('sortSelect');
    if (ss) ss.value = 'default';
    applyFilters();
  });

  // View toggle (grid / list)
  document.getElementById('gridViewBtn')?.addEventListener('click', () => {
    grid.classList.remove('list-view');
    document.getElementById('gridViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
  });
  document.getElementById('listViewBtn')?.addEventListener('click', () => {
    grid.classList.add('list-view');
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('gridViewBtn').classList.remove('active');
  });

  applyFilters();
}

/* ============================================================
   CART PAGE
   ============================================================ */
function renderCartPage() {
  const container = document.getElementById('cartItemsContainer');
  const emptyEl   = document.getElementById('cartEmpty');
  const summaryEl = document.getElementById('summaryBox');
  if (!container) return;

  const cart = getCart();
  container.innerHTML = '';

  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    if (summaryEl) summaryEl.style.opacity = '0.4';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';
  if (summaryEl) summaryEl.style.opacity = '1';

  let subtotal = 0;
  let savings  = 0;

  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return;

    const lineTotal = p.price * item.qty;
    const lineSaved = (p.originalPrice - p.price) * item.qty;
    subtotal += lineTotal;
    savings  += lineSaved;

    const el = document.createElement('div');
    el.className = 'cart-item';
    el.dataset.id = p.id;
    el.innerHTML = `
      <div class="cart-item-img"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
      <div class="cart-item-info">
        <span class="cart-item-title">${p.title}</span>
        <span class="cart-item-availability">In Stock</span>
        ${p.prime ? '<span class="cart-item-prime">🟦 Eligible for Prime</span>' : ''}
        <div class="cart-item-actions">
          <div class="qty-controls">
            <button class="qty-btn minus" data-id="${p.id}" aria-label="Decrease quantity">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn plus" data-id="${p.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="cart-item-remove" data-id="${p.id}">Delete</button>
          <span style="color:var(--surface-border)">|</span>
          <button class="cart-item-remove" style="color:var(--text-link)" onclick="showToast('Saved for later!')">Save for later</button>
        </div>
      </div>
      <div class="cart-item-price-col">
        <div class="cart-item-price">${formatPrice(lineTotal)}</div>
        ${item.qty > 1 ? `<div class="cart-item-original">${formatPrice(p.price)} each</div>` : ''}
      </div>
    `;

    // Qty controls
    el.querySelector('.minus').addEventListener('click', () => {
      if (item.qty <= 1) { removeFromCart(p.id); renderCartPage(); }
      else { updateQty(p.id, -1); renderCartPage(); }
    });
    el.querySelector('.plus').addEventListener('click', () => {
      updateQty(p.id, 1);
      renderCartPage();
    });

    // Remove
    el.querySelectorAll('.cart-item-remove').forEach(btn => {
      if (btn.textContent === 'Delete') {
        btn.addEventListener('click', () => {
          el.style.opacity = '0';
          el.style.transition = 'opacity 0.3s';
          setTimeout(() => { removeFromCart(p.id); renderCartPage(); }, 300);
        });
      }
    });

    container.appendChild(el);
  });

  // Summary
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);
  const delivery  = subtotal > 499 ? 0 : 40;
  const total     = subtotal + delivery;

  const sc = document.getElementById('summaryItemCount');
  const st = document.getElementById('summaryTotal');
  if (sc) sc.textContent = itemCount;
  if (st) st.textContent = formatPrice(subtotal);

  const breakdown = document.getElementById('summaryBreakdown');
  if (breakdown) {
    breakdown.innerHTML = `
      <div class="summary-row"><span>Items (${itemCount}):</span><span>${formatPrice(subtotal)}</span></div>
      <div class="summary-row"><span>Delivery:</span><span style="color:#067d62">${delivery === 0 ? 'FREE' : formatPrice(delivery)}</span></div>
      <div class="summary-row"><span>Savings:</span><span style="color:#cc0c39">−${formatPrice(savings)}</span></div>
      <div class="summary-row total-row"><span>Order Total:</span><span>${formatPrice(total)}</span></div>
    `;
  }

  // Recommendations
  const recGrid = document.getElementById('recGrid');
  if (recGrid) {
    const cartIds = cart.map(i => i.id);
    const recs = PRODUCTS.filter(p => !cartIds.includes(p.id)).slice(0, 5);
    recGrid.innerHTML = '';
    recs.forEach((p, i) => recGrid.appendChild(buildProductCard(p, i * 40)));
  }
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   NAVBAR SCROLL SHADOW
   ============================================================ */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20
      ? '0 4px 16px rgba(0,0,0,.5)'
      : '0 2px 8px rgba(0,0,0,.4)';
  }, { passive: true });
}

/* ============================================================
   PAGE DETECTION & INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Universal inits
  initDarkMode();
  updateCartCount();
  initModal();
  initBackToTop();
  initNavScroll();

  const body = document.body;

  if (body.classList.contains('home-page')) {
    initCarousel();
    initIndexPage();
  }

  if (body.classList.contains('products-page')) {
    initProductsPage();
  }

  if (body.classList.contains('cart-page')) {
    renderCartPage();
  }

  // ── Enter key search → navigate to products page
  document.getElementById('searchInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = e.target.value.trim();
      const cat = document.getElementById('searchCategory')?.value || 'all';
      if (q) {
        window.location.href = `products.html?q=${encodeURIComponent(q)}&cat=${cat}`;
      }
    }
  });

  // ── Navbar search button → navigate
  document.getElementById('searchBtn')?.addEventListener('click', () => {
    const q   = document.getElementById('searchInput')?.value.trim() || '';
    const cat = document.getElementById('searchCategory')?.value || 'all';
    if (body.classList.contains('products-page')) return; // handled by initProductsPage
    if (q) window.location.href = `products.html?q=${encodeURIComponent(q)}&cat=${cat}`;
  });

  // ── On products page, also handle URL ?q= param
  if (body.classList.contains('products-page')) {
    const params = new URLSearchParams(window.location.search);
    const urlQ   = params.get('q');
    if (urlQ) {
      const si = document.getElementById('searchInput');
      if (si) {
        si.value = urlQ;
        si.dispatchEvent(new Event('input'));
      }
    }
  }
});