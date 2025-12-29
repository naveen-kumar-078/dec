// Game Data
const games = [
    // --- TRENDING ---
    {
        id: 1,
        title: "Elden Ring",
        price: 59.99,
        originalPrice: 74.99,
        rating: 4.8,
        category: "trending",
        image: "elden_cover.png",
        trailer: "ELDEN RING - Official Gameplay Reveal - YouTube - Brave 2025-12-16 18-42-40.mp4",
        desc: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        hue: "0deg",
        tags: ["trending", "pc", "console", "rpg"],
        badge: { text: "-20%", class: "badge-discount" },
        platforms: ["fa-brands fa-windows", "fa-brands fa-xbox", "fa-brands fa-playstation"],
        owned: true, horas: 120, installed: false
    },
    {
        id: 2,
        title: "Baldur's Gate 3",
        price: 59.99,
        originalPrice: null,
        rating: 4.9,
        category: "trending",
        image: "512px-Baldur's_Gate_3_cover_art.jpg", // Placeholder
        trailer: "Baldur's Gate 3 Official Launch Trailer - YouTube - Brave 2025-12-18 18-41-42.mp4",
        desc: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
        hue: "45deg",
        tags: ["trending", "rpg", "strategy"],
        badge: { text: "Best Seller", class: "badge-best-seller" },
        platforms: ["fa-brands fa-windows", "fa-brands fa-playstation"],
        owned: false
    },
    {
        id: 3,
        title: "Cyberpunk 2077",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.5,
        category: "trending",
        image: "cyber_cover.png",
        trailer: "Cyberpunk 2077 — Official E3 2018 Trailer - YouTube - Brave 2025-12-16 18-43-34.mp4",
        desc: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.",
        hue: "0deg",
        tags: ["trending", "pc", "sci-fi"],
        badge: { text: "-33%", class: "badge-discount" },
        platforms: ["fa-brands fa-windows", "fa-brands fa-xbox", "fa-brands fa-playstation"],
        owned: true, horas: 45, installed: true
    },

    // --- CONSOLE ---
    {
        id: 4,
        title: "Spider-Man: Miles Morales",
        price: 49.99,
        originalPrice: null,
        rating: 4.7,
        category: "console",
        image: "standard_incredible.webp", // Placeholder
        trailer: "Marvel’s Spider-Man_ Miles Morales - Launch Trailer _ PS4, PS5 - YouTube - Brave 2025-12-18 18-43-52.mp4",
        desc: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        hue: "180deg",
        tags: ["console", "action", "adventure"],
        badge: { text: "PS Exclusive", class: "badge-exclusive" },
        platforms: ["fa-brands fa-playstation"],
        owned: false
    },
    {
        id: 5,
        title: "Halo Infinite",
        price: 0.00,
        originalPrice: null,
        rating: 4.4,
        category: "console",
        image: "HD-wallpaper-halo-infinite-117-haloinfinite-masterchieff-thumbnail (1).jpg", // Placeholder
        trailer: "Grunt makes fun of Master Chief's real name in Halo Infinite - YouTube - Brave 2025-12-18 18-27-05.mp4",
        desc: "When all hope is lost and humanity's fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he's ever faced.",
        hue: "90deg",
        tags: ["console", "fps", "sci-fi"],
        badge: { text: "Xbox Exclusive", class: "badge-exclusive" },
        platforms: ["fa-brands fa-xbox"],
        owned: false
    },
    {
        id: 6,
        title: "Zelda: Tears of the Kingdom",
        price: 69.99,
        originalPrice: null,
        rating: 4.9,
        category: "console",
        image: "zelda-tears-of-the-kingdom-button-2k-1663127818777.jpg", // Placeholder
        trailer: "The Legend of Zelda_ Tears of the Kingdom – Terzo trailer ufficiale (Nintendo Switch) - YouTube - Brave 2025-12-18 19-08-30.mp4",
        hue: "60deg",
        tags: ["console", "adventure", "open-world"],
        badge: { text: "Switch Exclusive", class: "badge-exclusive" },
        platforms: ["fa-solid fa-gamepad"],
        owned: false
    },

    // --- VR READY ---
    {
        id: 7,
        title: "Half-Life: Alyx",
        price: 59.99,
        originalPrice: null,
        rating: 4.9,
        category: "vr",
        image: "wp5901646.jpg", // Reuse for futuristic
        trailer: "Half-Life_ Alyx Announcement Trailer - YouTube - Brave 2025-12-18 19-10-23.mp4",
        desc: "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine.",
        hue: "270deg",
        tags: ["vr", "fps", "story"],
        badge: { text: "VR Exclusive", class: "badge-vr" },
        platforms: ["fa-brands fa-steam"],
        owned: false
    },
    {
        id: 8,
        title: "Beat Saber",
        price: 29.99,
        originalPrice: null,
        rating: 4.8,
        category: "vr",
        image: "3412706.jpg", // Reuse for energy
        trailer: "BEAT SABER TUTORIAL GONE WRONG - YouTube - Brave 2025-12-18 18-22-31.mp4",
        desc: "Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you.",
        hue: "300deg",
        tags: ["vr", "music", "fitness"],
        badge: { text: "#1 VR Game", class: "badge-best-seller" },
        platforms: ["fa-brands fa-steam", "fa-brands fa-playstation"],
        owned: false
    },
    {
        id: 9,
        title: "Resident Evil 4 VR",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.6,
        category: "vr",
        image: "250px-Resident_Evil_4_remake_cover_art.jpg", // Reuse for horror
        trailer: "Resident Evil 4 - 3rd Trailer - YouTube - Brave 2025-12-18 18-13-47.mp4",
        desc: "Explore the world of Resident Evil 4, entirely remastered for VR. Step into the shoes of special agent Leon S. Kennedy on his mission to rescue the U.S. President’s daughter.",
        hue: "120deg",
        tags: ["vr", "horror", "action"],
        badge: { text: "-25%", class: "badge-discount" },
        platforms: ["fa-solid fa-headset"],
        owned: false
    }
];

// State
let cart = [];
let isLoggedIn = false;
let user = {
    username: "GamerTag",
    email: "user@example.com",
    avatar: "https://ui-avatars.com/api/?name=User&background=00f2ea&color=000"
};

// DOM Elements
const gameModal = document.getElementById('game-modal');
const checkoutModal = document.getElementById('checkout-modal');

// =======================
// NAVIGATION
// =======================
window.navigateTo = (pageId) => {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });

    // Show target view
    const target = document.getElementById(`view-${pageId}`);
    if (target) {
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);
    }

    // Update Nav
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));

    // Manual mapping for nav highlights
    const navItems = document.querySelectorAll('.nav-links li');
    if (pageId === 'store' && navItems[0]) navItems[0].classList.add('active');
    if (pageId === 'library' && navItems[1]) navItems[1].classList.add('active');
    if (pageId === 'community' && navItems[2]) navItems[2].classList.add('active');

    // Initialize Page Content
    if (pageId === 'library') renderLibrary();
    if (pageId === 'community') renderCommunity();
    if (pageId === 'cart') renderCart();
    if (pageId === 'profile') renderProfile();
};

// =======================
// STORE LOGIC
// =======================
function renderGames() {
    // 1. Render Trending
    const trendingGames = games.filter(g => g.category === 'trending');
    renderGrid('trending-grid', trendingGames);

    // 2. Render Console
    const consoleGames = games.filter(g => g.category === 'console');
    renderGrid('console-grid', consoleGames);

    // 3. Render VR
    const vrGames = games.filter(g => g.category === 'vr');
    renderGrid('vr-grid', vrGames);
}

function renderGrid(elementId, list) {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    grid.innerHTML = list.map(game => `
        <div class="game-card" onclick="openGameDetails(${game.id})">
            ${game.badge ? `<span class="card-badge ${game.badge.class}">${game.badge.text}</span>` : ''}
            <div class="game-media-container">
                <img src="${game.image}" alt="${game.title}" class="game-image" style="filter: hue-rotate(${game.hue});">
                <video src="${game.trailer}" class="game-video" muted loop playsinline></video>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="platform-icons">
                    ${game.platforms ? game.platforms.map(p => `<i class="${p}"></i>`).join(' ') : ''}
                </div>
                <div class="game-meta" style="margin-top: 5px;">
                    <div class="rating">
                        <i class="fa-solid fa-star" style="color: gold;"></i> ${game.rating}
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                    <div class="price-block">
                        <span class="game-price" style="font-size:18px;">${game.price === 0 ? 'Free' : '$' + game.price}</span>
                        ${game.originalPrice ? `<span style="text-decoration: line-through; color: #666; font-size: 12px; margin-left: 5px;">$${game.originalPrice}</span>` : ''}
                    </div>
                </div>
                <button class="btn btn-primary card-hover-action" onclick="event.stopPropagation(); addToCart(${game.id})">
                    <i class="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    // Attach hover effects
    attachVideoHover(grid);
}

function attachVideoHover(container) {
    container.querySelectorAll('.game-card').forEach(card => {
        const video = card.querySelector('video');
        card.addEventListener('mouseenter', () => {
            if (video) video.play().catch(e => { });
        });
        card.addEventListener('mouseleave', () => {
            if (video) video.pause();
        });
    });
}

window.filterGames = (category) => {
    if (category === 'pc' || category === 'trending') {
        const el = document.getElementById('trending-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    if (category === 'console') {
        const el = document.getElementById('console-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    if (category === 'vr') {
        const el = document.getElementById('vr-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
};

// =======================
// LIBRARY LOGIC
// =======================
function renderLibrary(filter = 'all') {
    const libraryGrid = document.getElementById('library-grid');
    const emptyState = document.getElementById('library-empty');
    if (!libraryGrid) return;

    const ownedGames = games.filter(g => g.owned);
    let displayGames = ownedGames;

    if (filter === 'installed') displayGames = ownedGames.filter(g => g.installed);
    if (filter === 'recent') displayGames = ownedGames.slice(0, 2);

    if (ownedGames.length === 0) {
        libraryGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    } else {
        libraryGrid.style.display = 'grid';
        emptyState.style.display = 'none';
    }

    libraryGrid.innerHTML = displayGames.map(game => `
        <div class="game-card">
            <div class="game-media-container">
                <img src="${game.image}" class="game-image" style="filter: hue-rotate(${game.hue});">
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-meta">
                    <span>${game.horas || 0} hrs played</span>
                    <span>Last played: Today</span>
                </div>
                ${game.installed
            ? `<button class="btn btn-primary full-width" style="margin-top:10px;"><i class="fa-solid fa-play"></i> Play</button>`
            : `<button class="btn btn-outline full-width" style="margin-top:10px;" onclick="installGame(this)"><i class="fa-solid fa-download"></i> Download</button>`
        }
            </div>
        </div>
    `).join('');
}

window.filterLibraryTab = (tab) => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    renderLibrary(tab);
};

window.installGame = (btn) => {
    const card = btn.closest('.game-info');
    btn.innerHTML = 'Downloading...';
    const progress = document.createElement('div');
    progress.className = 'progress-bar';
    progress.innerHTML = '<div class="progress-fill"></div>';
    card.replaceChild(progress, btn);

    setTimeout(() => {
        progress.querySelector('.progress-fill').style.width = '100%';
        setTimeout(() => {
            renderLibrary();
        }, 600);
    }, 1500);
};

// =======================
// COMMUNITY LOGIC
// =======================
function renderCommunity() {
    const newsData = [
        { title: "Cyberpunk 2077 Update 2.1 Released", date: "2 hours ago", img: "cyber_cover.png" },
        { title: "Elden Ring DLC Shadow of the Erdtree Teaser", date: "1 day ago", img: "elden_cover.png" },
        { title: "Apex Legends: New Legend Revealed", date: "3 days ago", img: "apex.jpg" }
    ];

    const newsFeed = document.getElementById('news-feed');
    if (newsFeed) {
        newsFeed.innerHTML = newsData.map(news => `
            <div class="news-card">
                <img src="${news.img}" alt="">
                <div class="news-content">
                    <h4>${news.title}</h4>
                    <p>${news.date} • by PlayZone Team</p>
                    <button class="btn-sm btn-outline" style="font-size:12px; padding:5px 10px; border:1px solid #333; background:transparent; color:#888;">Read More</button>
                </div>
            </div>
        `).join('');
    }

    const playerCount = document.getElementById('player-count');
    if (playerCount) playerCount.innerText = (12450 + Math.floor(Math.random() * 500)).toLocaleString();

    const galleryContainer = document.getElementById('community-gallery');
    if (galleryContainer && galleryContainer.children.length === 0) {
        galleryContainer.innerHTML = games.slice(0, 3).map(g => `
            <div class="gallery-item">
                <img src="${g.image}" style="filter: hue-rotate(${g.hue});">
            </div>
        `).join('');
    }
}

// =======================
// CART LOGIC
// =======================
window.addToCart = (id) => {
    const game = games.find(g => g.id === id);
    if (game && !cart.find(i => i.id === id)) {
        cart.push(game);
        updateCartCount();
        alert(`${game.title} added to cart!`);
    } else {
        alert("Item already in cart!");
    }
    if (gameModal.classList.contains('open')) closeModal('game-modal');
};

function updateCartCount() {
    document.querySelectorAll('.cart-count').forEach(el => el.innerText = cart.length);
    const navCount = document.getElementById('nav-cart-count');
    if (navCount) navCount.innerText = cart.length;
}

window.addToWishlist = (id) => {
    alert("Added to wishlist!");
};

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-state"><h3>Your cart is empty</h3></div>`;
        subtotalEl.innerText = "$0.00";
        taxEl.innerText = "$0.00";
        totalEl.innerText = "$0.00";
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-details">
                <h4>${item.title}</h4>
                <span style="color:var(--text-muted)">${item.category.toUpperCase()}</span>
            </div>
            <div class="cart-price">
                ${item.price === 0 ? 'Free' : '$' + item.price}
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fa-solid fa-times"></i></button>
        </div>
    `).join('');

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    subtotalEl.innerText = '$' + subtotal.toFixed(2);
    taxEl.innerText = '$' + tax.toFixed(2);
    totalEl.innerText = '$' + total.toFixed(2);

    const recentGrid = document.getElementById('recent-purchases-grid');
    if (recentGrid) {
        recentGrid.innerHTML = games.filter(g => g.owned).slice(0, 3).map(g => `
            <div class="game-card" style="height: 200px; position: relative; overflow: hidden; border-radius: 8px;">
                 <img src="${g.image}" style="width:100%; height:100%; object-fit:cover; opacity:0.5;">
                 <div style="position:absolute; bottom:10px; left:10px; font-weight:bold;">${g.title}</div>
            </div>
        `).join('');
    }
}

window.removeFromCart = (index) => {
    if (confirm("Remove this item?")) {
        cart.splice(index, 1);
        updateCartCount();
        renderCart();
    }
};

window.processCheckout = () => {
    if (cart.length === 0) return;
    const btn = document.querySelector('#view-cart .btn-primary');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Processing...';
    setTimeout(() => {
        cart.forEach(item => {
            const game = games.find(g => g.id === item.id);
            if (game) game.owned = true;
        });
        cart = [];
        updateCartCount();
        btn.innerHTML = orig;
        alert("Purchase successful! Games added to library.");
        navigateTo('library');
    }, 1500);
};

// =======================
// PROFILE LOGIC
// =======================
function renderProfile() {
    const authContainer = document.getElementById('auth-container');
    const dashboard = document.getElementById('profile-dashboard');

    if (isLoggedIn) {
        authContainer.style.display = 'none';
        dashboard.style.display = 'block';
        document.getElementById('stat-games').innerText = games.filter(g => g.owned).length;
    } else {
        authContainer.style.display = 'flex';
        dashboard.style.display = 'none';
    }
}

window.switchAuthTab = (tab) => {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    if (tab === 'login') {
        tabs[0].classList.add('active');
        forms[0].classList.add('active');
    } else {
        tabs[1].classList.add('active');
        forms[1].classList.add('active');
    }
};

window.handleLogin = (e) => {
    e.preventDefault();
    isLoggedIn = true;
    renderProfile();
    document.querySelector('.nav-user .user-avatar').innerHTML = `<img src="${user.avatar}" style="width:100%; border-radius:50%;">`;
};

window.handleSignup = (e) => {
    e.preventDefault();
    isLoggedIn = true;
    renderProfile();
};

window.handleLogout = () => {
    isLoggedIn = false;
    renderProfile();
    document.querySelector('.nav-user .user-avatar').innerHTML = `<i class="fa-solid fa-user"></i>`;
};

window.handleProfileUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
};

window.togglePassword = (el) => {
    const input = el.previousElementSibling;
    if (input.type === "password") {
        input.type = "text";
        el.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = "password";
        el.classList.replace('fa-eye-slash', 'fa-eye');
    }
};

// =======================
// LEGACY / MODAL
// =======================
window.openGameDetails = (id) => {
    const game = games.find(g => g.id === id);
    if (!game) return;

    document.getElementById('modal-title').innerText = game.title;
    document.getElementById('modal-desc').innerText = game.desc;
    document.getElementById('modal-price').innerText = game.price === 0 ? 'Free' : '$' + game.price;
    document.getElementById('modal-rating').innerText = game.rating;
    document.getElementById('modal-banner').style.backgroundImage = `url('${game.image}')`;
    document.getElementById('modal-banner').style.filter = `hue-rotate(${game.hue})`;

    // Update Buy Button
    const btnBox = document.querySelector('.modal-actions');
    const oldBtn = btnBox.querySelector('.btn-primary');
    if (oldBtn) oldBtn.remove();

    const btn = document.createElement('button');
    btn.className = 'btn btn-primary btn-lg';

    if (game.owned) {
        btn.innerText = 'Play Now';
        btn.onclick = () => { alert("Launching game..."); };
    } else {
        btn.innerText = 'Add to Cart';
        btn.onclick = () => addToCart(game.id);
    }
    btnBox.appendChild(btn);

    gameModal.classList.add('open');
};

window.closeModal = (modalId) => {
    document.getElementById(modalId).classList.remove('open');
};

window.openAbout = () => {
    const about = document.getElementById('about-modal');
    if (about) about.classList.add('open');
};

// =======================
// 3D Background
// =======================
const initThreeJS = () => {
    const canvas = document.querySelector('#bg-canvas');
    if (!canvas) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00f2ea,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xbc13fe,
        transparent: true,
        opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });

    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        particlesMesh.rotation.y = -mouseX * 0.5;
        particlesMesh.rotation.x = -mouseY * 0.5;
        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Initialize
renderGames();
initThreeJS();
