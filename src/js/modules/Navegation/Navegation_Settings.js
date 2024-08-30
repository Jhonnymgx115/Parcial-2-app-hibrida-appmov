// Elementos del DOM
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.navbar-menu a');
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');
const navbarMenu = document.getElementById('navbarMenu');

// Navegación
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = e.target.getAttribute('href').slice(1);
        showView(viewId);
    });
});

// Mostrar formulario de registro
showRegisterBtn.addEventListener('click', () => showView('register'));

// Mostrar formulario de login
showLoginBtn.addEventListener('click', () => showView('login'));



// Ocultar/mostrar elementos de navegación basado en el estado de la sesión
export function updateNavVisibility() {
    const isLoggedIn = localStorage.getItem('currentUser');
    navbarMenu.style.display = isLoggedIn ? 'block' : 'none';
}



// Función para cambiar entre vistas
export function showView(viewId) {
    views.forEach(view => view.style.display = 'none');
    document.getElementById(viewId).style.display = 'block';
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`a[href="#${viewId}"]`)?.classList.add('active');
}