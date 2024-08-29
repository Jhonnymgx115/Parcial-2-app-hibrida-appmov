// Elementos del DOM
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.navbar-menu a');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');
const logoutBtn = document.getElementById('logoutButton');

// Datos de usuario predefinidos
const predefinedUsers = [
    { username: 'user1', password: 'pass1', email: 'user1@example.com', fullName: 'Usuario Uno' },
    { username: 'user2', password: 'pass2', email: 'user2@example.com', fullName: 'Usuario Dos' },
    { username: 'user3', password: 'pass3', email: 'user3@example.com', fullName: 'Usuario Tres' }
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

// Mostrar formulario de registro
showRegisterBtn.addEventListener('click', () => showView('register'));

// Mostrar formulario de login
showLoginBtn.addEventListener('click', () => showView('login'));

// Manejo de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        showView('home');
        updateDashboard();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

// Manejo de registro
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const password = e.target.elements[2].value;
    const confirmPassword = e.target.elements[3].value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));
    const newUser = {
        username: email,
        password: password,
        email: email,
        fullName: fullName
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    showView('home');
    updateDashboard();
});

// Manejo de logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    showView('login');
});

// Actualizar dashboard
function updateDashboard() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.fullName;
        document.getElementById('userEmail').textContent = currentUser.email;
        
        // Aquí puedes agregar la lógica para actualizar el historial de actividades,
        // la lista de tareas pendientes y las recomendaciones
        updateActivityList();
        updateTodoList();
        updateRecommendations();
    }
}

// Funciones para actualizar las secciones del dashboard
function updateActivityList() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = ''; // Limpiar la lista actual
    // Aquí puedes agregar la lógica para obtener y mostrar el historial de actividades
    const activities = ['Correr 5km', 'Yoga 30min', 'Pesas 45min'];
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activityList.appendChild(li);
    });
}

function updateTodoList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Limpiar la lista actual
    // Aquí puedes agregar la lógica para obtener y mostrar las tareas pendientes
    const todos = ['Hacer 50 flexiones', 'Nadar 20 minutos', 'Estiramientos 15 minutos'];
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo;
        todoList.appendChild(li);
    });
}

function updateRecommendations() {
    const recommendationList = document.getElementById('recommendationList');
    recommendationList.innerHTML = ''; // Limpiar la lista actual
    // Aquí puedes agregar la lógica para generar y mostrar recomendaciones
    const recommendations = ['Aumenta tu ingesta de agua', 'Intenta una nueva rutina de cardio', 'Agrega más proteínas a tu dieta'];
    recommendations.forEach(recommendation => {
        const li = document.createElement('li');
        li.textContent = recommendation;
        recommendationList.appendChild(li);
    });
}

// Inicializar la aplicación
function initApp() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        showView('home');
        updateDashboard();
    } else {
        showView('login');
    }
}

// Ejecutar la inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', initApp);