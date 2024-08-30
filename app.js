// Elementos del DOM
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.navbar-menu a');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');
const logoutBtn = document.getElementById('logoutButton');
const loginNavItem = document.querySelector('a[href="#login"]');

// Datos de usuario predefinidos con historiales y estadísticas
const predefinedUsers = [
    {
        username: 'user1',
        password: 'pass1',
        email: 'user1@example.com',
        fullName: 'Usuario Uno',
        activityHistory: [
            { date: '2024-08-25', activity: 'Correr', duration: 30 },
            { date: '2024-08-26', activity: 'Yoga', duration: 45 },
            { date: '2024-08-27', activity: 'Natación', duration: 60 },
        ],
        weeklyStats: {
            totalActivities: 3,
            totalDuration: 135,
            favoriteActivity: 'Natación'
        }
    },
    {
        username: 'user2',
        password: 'pass2',
        email: 'user2@example.com',
        fullName: 'Usuario Dos',
        activityHistory: [
            { date: '2024-08-25', activity: 'Ciclismo', duration: 60 },
            { date: '2024-08-26', activity: 'Pesas', duration: 45 },
            { date: '2024-08-27', activity: 'Pilates', duration: 30 },
        ],
        weeklyStats: {
            totalActivities: 3,
            totalDuration: 135,
            favoriteActivity: 'Ciclismo'
        }
    },
    {
        username: 'user3',
        password: 'pass3',
        email: 'user3@example.com',
        fullName: 'Usuario Tres',
        activityHistory: [
            { date: '2024-08-25', activity: 'Escalada', duration: 90 },
            { date: '2024-08-26', activity: 'Boxeo', duration: 60 },
            { date: '2024-08-27', activity: 'Meditación', duration: 20 },
        ],
        weeklyStats: {
            totalActivities: 3,
            totalDuration: 170,
            favoriteActivity: 'Escalada'
        }
    }
];

// Inicializar localStorage con usuarios predefinidos si no existen
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(predefinedUsers));
}

// Función para cambiar entre vistas
function showView(viewId) {
    views.forEach(view => view.style.display = 'none');
    document.getElementById(viewId).style.display = 'block';
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`a[href="#${viewId}"]`)?.classList.add('active');
}

// Navegación
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = e.target.getAttribute('href').slice(1);
        showView(viewId);
    });
});
