import {showView, updateNavVisibility}      from "../Navegation/Navegation_Settings";
import { updateDashboard }             from "../Dashboard/Dashboard_Settings";

// Elementos del DOM
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logoutBtn = document.getElementById('logoutButton');

export function ManageSession(){


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

        if (!validatePassword(password)) {
            alert('La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales.');
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
        updateNavVisibility();
    });

// Manejo de Logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        showView('login');
        updateNavVisibility();
    });

// Manejo de Login
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
            updateNavVisibility();
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });




}



// Validación de contraseña
export function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}
