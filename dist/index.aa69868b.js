// Elementos del DOM
const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".navbar-menu a");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegisterBtn = document.getElementById("showRegister");
const showLoginBtn = document.getElementById("showLogin");
const logoutBtn = document.getElementById("logoutButton");
const navbarMenu = document.getElementById("navbarMenu");
// Datos de usuario predefinidos
const predefinedUsers = [
    {
        username: "user1",
        password: "Pass1234!",
        email: "user1@example.com",
        fullName: "Usuario Uno"
    },
    {
        username: "user2",
        password: "Pass5678@",
        email: "user2@example.com",
        fullName: "Usuario Dos"
    },
    {
        username: "user3",
        password: "Pass9012#",
        email: "user3@example.com",
        fullName: "Usuario Tres"
    }
];
// Actividades predefinidas
const predefinedActivities = [
    {
        id: 1,
        name: "Correr 5km",
        completed: false,
        date: null
    },
    {
        id: 2,
        name: "Yoga 30min",
        completed: false,
        date: null
    },
    {
        id: 3,
        name: "Pesas 45min",
        completed: false,
        date: null
    },
    {
        id: 4,
        name: "Nadar 20min",
        completed: false,
        date: null
    },
    {
        id: 5,
        name: "Estiramientos 15min",
        completed: false,
        date: null
    }
];
// Recomendaciones predefinidas
const predefinedRecommendations = [
    "Aumenta tu ingesta de agua diaria",
    "Intenta una nueva rutina de cardio esta semana",
    "Agrega m\xe1s prote\xednas a tu dieta",
    "Realiza estiramientos despu\xe9s de cada entrenamiento",
    "Descansa adecuadamente entre sesiones de entrenamiento"
];
// Inicializar localStorage
function initializeLocalStorage() {
    if (!localStorage.getItem("users")) localStorage.setItem("users", JSON.stringify(predefinedUsers));
    if (!localStorage.getItem("activities")) localStorage.setItem("activities", JSON.stringify(predefinedActivities));
    if (!localStorage.getItem("recommendations")) localStorage.setItem("recommendations", JSON.stringify(predefinedRecommendations));
}
// Función para cambiar entre vistas
function showView(viewId) {
    views.forEach((view)=>view.style.display = "none");
    document.getElementById(viewId).style.display = "block";
    navLinks.forEach((link)=>link.classList.remove("active"));
    document.querySelector(`a[href="#${viewId}"]`)?.classList.add("active");
}
// Ocultar/mostrar elementos de navegación basado en el estado de la sesión
function updateNavVisibility() {
    const isLoggedIn = localStorage.getItem("currentUser");
    navbarMenu.style.display = isLoggedIn ? "block" : "none";
}
// Validación de contraseña
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}
// Navegación
navLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        const viewId = e.target.getAttribute("href").slice(1);
        showView(viewId);
    });
});
// Mostrar formulario de registro
showRegisterBtn.addEventListener("click", ()=>showView("register"));
// Mostrar formulario de login
showLoginBtn.addEventListener("click", ()=>showView("login"));
// Manejo de login
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((u)=>u.username === username && u.password === password);
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        showView("home");
        updateDashboard();
        updateNavVisibility();
    } else alert("Usuario o contrase\xf1a incorrectos");
});
// Manejo de registro
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fullName = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const password = e.target.elements[2].value;
    const confirmPassword = e.target.elements[3].value;
    if (password !== confirmPassword) {
        alert("Las contrase\xf1as no coinciden");
        return;
    }
    if (!validatePassword(password)) {
        alert("La contrase\xf1a debe tener al menos 8 caracteres, incluir may\xfasculas, min\xfasculas, n\xfameros y caracteres especiales.");
        return;
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const newUser = {
        username: email,
        password: password,
        email: email,
        fullName: fullName
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    showView("home");
    updateDashboard();
    updateNavVisibility();
});
// Manejo de logout
logoutBtn.addEventListener("click", ()=>{
    localStorage.removeItem("currentUser");
    showView("login");
    updateNavVisibility();
});
// Actualizar dashboard
function updateDashboard() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("userName").textContent = currentUser.fullName;
        document.getElementById("userEmail").textContent = currentUser.email;
        updateActivityList();
        updateTodoList();
        updateRecommendations();
        updateWeeklyStats();
    }
}
// Funciones para actualizar las secciones del dashboard
function updateActivityList() {
    const activityList = document.getElementById("activityList");
    activityList.innerHTML = "";
    const activities = JSON.parse(localStorage.getItem("activities"));
    activities.forEach((activity)=>{
        if (activity.completed) {
            const li = document.createElement("li");
            li.textContent = `${activity.name} - Completada el ${new Date(activity.date).toLocaleDateString()}`;
            activityList.appendChild(li);
        }
    });
}
function updateTodoList() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    const activities = JSON.parse(localStorage.getItem("activities"));
    const incompletedActivities = activities.filter((activity)=>!activity.completed);
    if (incompletedActivities.length === 0) showCongratulationsMessage();
    else incompletedActivities.forEach((activity)=>{
        const li = document.createElement("li");
        li.textContent = activity.name;
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Completar";
        completeBtn.onclick = ()=>completeActivity(activity.id);
        li.appendChild(completeBtn);
        todoList.appendChild(li);
    });
}
function completeActivity(activityId) {
    const activities = JSON.parse(localStorage.getItem("activities"));
    const updatedActivities = activities.map((activity)=>activity.id === activityId ? {
            ...activity,
            completed: true,
            date: new Date().toISOString()
        } : activity);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
    updateActivityList();
    updateTodoList();
    updateWeeklyStats();
}
function updateRecommendations() {
    const recommendationList = document.getElementById("recommendationList");
    recommendationList.innerHTML = "";
    const recommendations = JSON.parse(localStorage.getItem("recommendations"));
    recommendations.forEach((recommendation)=>{
        const li = document.createElement("li");
        li.textContent = recommendation;
        recommendationList.appendChild(li);
    });
}
function updateWeeklyStats() {
    const weeklyStats = document.getElementById("weeklyStats");
    weeklyStats.innerHTML = "";
    const activities = JSON.parse(localStorage.getItem("activities"));
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 604800000);
    for(let i = 6; i >= 0; i--){
        const date = new Date(today.getTime() - i * 86400000);
        const completedToday = activities.filter((activity)=>activity.completed && new Date(activity.date).toDateString() === date.toDateString()).length;
        const li = document.createElement("li");
        li.textContent = `${date.toLocaleDateString()}: ${completedToday} actividades completadas`;
        weeklyStats.appendChild(li);
    }
}
function showCongratulationsMessage() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "<p>\xa1Felicidades! Has completado todas tus actividades.</p>";
    const loadNewActivitiesBtn = document.createElement("button");
    loadNewActivitiesBtn.textContent = "Cargar nuevas actividades";
    loadNewActivitiesBtn.onclick = loadNewActivities;
    todoList.appendChild(loadNewActivitiesBtn);
}
function loadNewActivities() {
    const activities = JSON.parse(localStorage.getItem("activities"));
    const newActivities = activities.map((activity)=>({
            ...activity,
            completed: false,
            date: null
        }));
    localStorage.setItem("activities", JSON.stringify(newActivities));
    updateTodoList();
    updateActivityList();
    updateWeeklyStats();
}
// New function to add an activity
function addActivity() {
    const activityName = prompt("Ingrese el nombre de la nueva actividad:");
    if (activityName) {
        const activities = JSON.parse(localStorage.getItem("activities"));
        const newActivity = {
            id: activities.length + 1,
            name: activityName,
            completed: false,
            date: null
        };
        activities.push(newActivity);
        localStorage.setItem("activities", JSON.stringify(activities));
        updateTodoList();
    }
}
// New function to clear activity history
function clearActivityHistory() {
    if (confirm("\xbfEst\xe1s seguro de que quieres eliminar todo el historial de actividades?")) {
        const activities = JSON.parse(localStorage.getItem("activities"));
        const updatedActivities = activities.filter((activity)=>!activity.completed);
        localStorage.setItem("activities", JSON.stringify(updatedActivities));
        updateActivityList();
        updateWeeklyStats();
    }
}
// Modified updateActivityList function to include delete buttons
function updateActivityList() {
    const activityList = document.getElementById("activityList");
    const fullActivityList = document.getElementById("fullActivityList");
    activityList.innerHTML = "";
    fullActivityList.innerHTML = "";
    const activities = JSON.parse(localStorage.getItem("activities"));
    activities.forEach((activity)=>{
        if (activity.completed) {
            const li = document.createElement("li");
            li.textContent = `${activity.name} - Completada el ${new Date(activity.date).toLocaleDateString()}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.onclick = ()=>deleteActivity(activity.id);
            li.appendChild(deleteBtn);
            activityList.appendChild(li);
            fullActivityList.appendChild(li.cloneNode(true));
        }
    });
}
// New function to delete a single activity
function deleteActivity(activityId) {
    if (confirm("\xbfEst\xe1s seguro de que quieres eliminar esta actividad?")) {
        const activities = JSON.parse(localStorage.getItem("activities"));
        const updatedActivities = activities.filter((activity)=>activity.id !== activityId);
        localStorage.setItem("activities", JSON.stringify(updatedActivities));
        updateActivityList();
        updateWeeklyStats();
    }
}
// Modified updateDashboard function
function updateDashboard() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("userName").textContent = currentUser.fullName;
        document.getElementById("userEmail").textContent = currentUser.email;
        updateActivityList();
        updateTodoList();
        updateRecommendations();
        updateWeeklyStats();
        // Add event listeners for new buttons
        document.getElementById("addActivityBtn").addEventListener("click", addActivity);
        document.getElementById("clearHistoryBtn").addEventListener("click", clearActivityHistory);
    }
}
// Inicializar la aplicación
function initApp() {
    initializeLocalStorage();
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        showView("home");
        updateDashboard();
    } else showView("login");
    updateNavVisibility();
}
// Ejecutar la inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", initApp);

//# sourceMappingURL=index.aa69868b.js.map
