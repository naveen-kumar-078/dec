// Data Models
const mockData = {
    user: {
        name: "Alex Driver",
        currency: "$"
    },
    vehicles: [
        {
            id: 1,
            make: "Tesla",
            model: "Model 3",
            year: 2023,
            mileage: 12500,
            image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
            status: "Good",
            fuelType: "Electric"
        },
        {
            id: 2,
            make: "BMW",
            model: "M4 Competition",
            year: 2022,
            mileage: 8500,
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            status: "Service Soon",
            fuelType: "Petrol"
        }
    ],
    expenses: [
        { id: 101, type: "Fuel", amount: 45.50, date: "2023-10-12", vehicleId: 2, note: "Full tank premium" },
        { id: 102, type: "Service", amount: 120.00, date: "2023-09-28", vehicleId: 1, note: "Tire rotation" },
        { id: 103, type: "Insurance", amount: 890.00, date: "2023-08-15", vehicleId: 2, note: "Annual premium" },
        { id: 104, type: "Parking", amount: 15.00, date: "2023-10-14", vehicleId: 1, note: "Downtown parking" }
    ],
    maintenance: [
        { id: 201, item: "Oil Change", dueMileage: 10000, nextDue: "2023-12-01", vehicleId: 2 },
        { id: 202, item: "Brake Fluid", dueMileage: 20000, nextDue: "2024-03-15", vehicleId: 1 }
    ],
    notifications: [
        { id: 1, title: "Maintenance Due", message: "Oil change needed for BMW M4 in 200km.", type: "alert", time: "2 hours ago", read: false },
        { id: 2, title: "Insurance Payment", message: "Successfully processed $890.00 for Tesla Model 3.", type: "success", time: "1 day ago", read: false },
        { id: 3, title: "New Feature", message: "Tax export is now available in Trip Logger.", type: "info", time: "2 days ago", read: true },
        { id: 4, title: "Tire Rotation", message: "Reminder: Tire rotation due next week.", type: "alert", time: "3 days ago", read: true }
    ]
};

// State Management
const appState = {
    currentView: 'dashboard',
    theme: 'dark'
};

// DOM Elements
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.getElementById('pageTitle');
const themeToggle = document.getElementById('themeToggle');
const vehiclesList = document.getElementById('vehiclesList');
const activityList = document.querySelector('.activity-list');
const dashboardChartCanvas = document.getElementById('dashboardChart');
const modalOverlay = document.getElementById('modalOverlay');
const addVehicleBtn = document.getElementById('btnAddVehicle');
const genericForm = document.getElementById('genericForm');
const modalTitle = document.getElementById('modalTitle');
const modalSubmitBtn = document.getElementById('modalSubmitBtn');

// Notification Elements
const notificationBtn = document.getElementById('notificationBtn');
const notificationDropdown = document.getElementById('notificationDropdown');
const notificationList = document.getElementById('notificationList');
const notificationBadge = document.getElementById('notificationBadge');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderDashboard();
    renderVehicles();
    renderNotifications();
    setupEventListeners();
    initChart();
    init3DTilt();
});

// 3D Tilt Effect
function init3DTilt() {
    const cards = document.querySelectorAll('.stat-card, .card, .vehicle-card');

    cards.forEach(card => {
        // Add glare element if not exists
        if (!card.querySelector('.card-glare')) {
            const glare = document.createElement('div');
            glare.classList.add('card-glare');
            card.appendChild(glare);
        }

        const glare = card.querySelector('.card-glare');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate tilt (limit to +/- 10 degrees)
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            // Apply transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.classList.add('card-3d-hover');

            // Move Glare
            if (glare) {
                glare.style.left = `${x - 100}px`;
                glare.style.top = `${y - 100}px`;
                glare.style.opacity = '1';
            }
        });

        card.addEventListener('mouseleave', () => {
            // Reset
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.classList.remove('card-3d-hover');

            if (glare) {
                glare.style.opacity = '0';
            }
        });
    });
}


// Navigation Logic
function switchView(viewName) {
    views.forEach(view => {
        if (view.id === viewName) {
            view.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => view.classList.add('active'), 10);
        } else {
            view.classList.remove('active');
            setTimeout(() => view.classList.add('hidden'), 300);
        }
    });

    navItems.forEach(item => {
        if (item.dataset.view === viewName) {
            item.classList.add('active');
            pageTitle.textContent = item.querySelector('span:last-child').textContent;
        } else {
            item.classList.remove('active');
        }
    });

    appState.currentView = viewName;
}

// Rendering Functions
function renderNotifications() {
    // Update Badge
    const unreadCount = mockData.notifications.filter(n => !n.read).length;
    notificationBadge.textContent = unreadCount;
    notificationBadge.style.display = unreadCount > 0 ? 'flex' : 'none';

    // Render List
    notificationList.innerHTML = mockData.notifications.map(notif => `
        <li class="notification-item ${notif.read ? '' : 'unread'}">
            <div class="notif-icon ${notif.type}">
                <span class="material-icons-round">
                    ${notif.type === 'alert' ? 'warning' : notif.type === 'success' ? 'check_circle' : 'info'}
                </span>
            </div>
            <div class="notif-content">
                <h4>${notif.title}</h4>
                <p>${notif.message}</p>
                <span class="notif-time">${notif.time}</span>
            </div>
        </li>
    `).join('');
}

function renderDashboard() {
    // Render Recent Activity
    activityList.innerHTML = mockData.expenses.slice(0, 4).map(exp => {
        const vehicle = mockData.vehicles.find(v => v.id === exp.vehicleId);
        const icon = getIconForExpenseType(exp.type);
        return `
            <li class="activity-item">
                <div class="activity-icon">
                    <span class="material-icons-round">${icon}</span>
                </div>
                <div class="activity-content">
                    <h4>${exp.type} - ${vehicle ? vehicle.model : 'Car'}</h4>
                    <p>${exp.note || 'No notes'}</p>
                </div>
                <div class="activity-time">
                    <span>${mockData.user.currency}${exp.amount.toFixed(2)}</span>
                    <br>
                    <span style="font-size:0.7em">${exp.date}</span>
                </div>
            </li>
        `;
    }).join('');
}

function renderVehicles() {
    vehiclesList.innerHTML = mockData.vehicles.map(v => `
        <div class="vehicle-card group">
            <img src="${v.image}" alt="${v.make}" class="vehicle-image">
            <div class="vehicle-details">
                <div class="vehicle-title">
                    <span>${v.year} ${v.make} ${v.model}</span>
                    <span class="material-icons-round" style="color:var(--text-secondary)">more_vert</span>
                </div>
                <div class="vehicle-specs">
                    <span class="spec-chip">
                        <span class="material-icons-round" style="font-size:14px">speed</span>
                        ${v.mileage.toLocaleString()} km
                    </span>
                    <span class="spec-chip">
                        <span class="material-icons-round" style="font-size:14px">local_gas_station</span>
                        ${v.fuelType}
                    </span>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center">
                     <span style="font-size:0.8rem;color:var(--text-muted)">
                        Status: <span style="color:${v.status === 'Good' ? 'var(--accent-green)' : 'var(--accent-orange)'}">${v.status}</span>
                     </span>
                     <button class="btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem">Details</button>
                </div>
            </div>
        </div>
    `).join('') + `
        <!-- Add New Card Style -->
        <div class="vehicle-card" style="display:flex;align-items:center;justify-content:center;min-height:300px;border:2px dashed var(--border-color);cursor:pointer;background:transparent" onclick="openAddVehicleModal()">
            <div style="text-align:center;color:var(--text-secondary)">
                <span class="material-icons-round" style="font-size:48px;opacity:0.5">add_circle_outline</span>
                <p style="margin-top:1rem">Add Another Vehicle</p>
            </div>
        </div>
    `;
    // Re-bind 3D effects for new elements
    setTimeout(init3DTilt, 100);
}

function getIconForExpenseType(type) {
    const map = {
        'Fuel': 'local_gas_station',
        'Service': 'build',
        'Insurance': 'verified_user',
        'Parking': 'local_parking'
    };
    return map[type] || 'attach_money';
}

// Charts
function initChart() {
    const ctx = dashboardChartCanvas.getContext('2d');

    // Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(56, 189, 248, 0.5)'); // Blue
    gradient.addColorStop(1, 'rgba(56, 189, 248, 0.0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Expenses',
                data: [120, 190, 150, 250, 180, 220],
                borderColor: '#38bdf8',
                backgroundColor: gradient,
                borderWidth: 2,
                pointBackgroundColor: '#0f172a',
                pointBorderColor: '#38bdf8',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(148, 163, 184, 0.1)' },
                    ticks: { color: '#94a3b8' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    navItems.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
        });
    });

    // Notifications
    notificationBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closing
        notificationDropdown.classList.toggle('hidden');
    });

    // Close Dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!notificationDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
            notificationDropdown.classList.add('hidden');
        }
    });

    // Mark all as read
    document.querySelector('.mark-read').addEventListener('click', () => {
        mockData.notifications.forEach(n => n.read = true);
        renderNotifications();
    });

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('.material-icons-round');
        if (document.body.classList.contains('light-theme')) {
            icon.textContent = 'dark_mode';
        } else {
            icon.textContent = 'light_mode';
        }
    });

    // Modals
    addVehicleBtn.addEventListener('click', openAddVehicleModal);

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
}

// Modal Helpers
function openAddVehicleModal() {
    modalTitle.textContent = "Add New Vehicle";
    genericForm.innerHTML = `
        <div class="form-group">
            <label>Vehicle Make</label>
            <input type="text" placeholder="e.g. Toyota">
        </div>
        <div class="form-group">
            <label>Model</label>
            <input type="text" placeholder="e.g. Camry">
        </div>
        <div class="form-group">
            <label>Year</label>
            <input type="number" placeholder="2024">
        </div>
        <div class="form-group">
            <label>Current Mileage (km)</label>
            <input type="number" placeholder="0">
        </div>
    `;
    modalOverlay.classList.add('active');
}

function initTheme() {
    // Default to dark
    document.body.classList.remove('light-theme');
}
