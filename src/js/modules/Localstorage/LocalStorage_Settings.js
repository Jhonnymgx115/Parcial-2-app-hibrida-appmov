
// Datos de usuario predefinidos
const predefinedUsers = [
    { username: 'user1', password: 'Pass1234!', email: 'user1@example.com', fullName: 'Usuario Uno' },
    { username: 'user2', password: 'Pass5678@', email: 'user2@example.com', fullName: 'Usuario Dos' },
    { username: 'user3', password: 'Pass9012#', email: 'user3@example.com', fullName: 'Usuario Tres' }
];

// Actividades predefinidas
const predefinedActivities = [
    { id: 1, name: 'Correr 5km', completed: false, date: null },
    { id: 2, name: 'Yoga 30min', completed: false, date: null },
    { id: 3, name: 'Pesas 45min', completed: false, date: null },
    { id: 4, name: 'Nadar 20min', completed: false, date: null },
    { id: 5, name: 'Estiramientos 15min', completed: false, date: null }
];

// Recomendaciones predefinidas
const predefinedRecommendations = [
    'Aumenta tu ingesta de agua diaria',
    'Intenta una nueva rutina de cardio esta semana',
    'Agrega más proteínas a tu dieta',
    'Realiza estiramientos después de cada entrenamiento',
    'Descansa adecuadamente entre sesiones de entrenamiento'
];

// Inicializar localStorage
export function initializeLocalStorage() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(predefinedUsers));
    }
    if (!localStorage.getItem('activities')) {
        localStorage.setItem('activities', JSON.stringify(predefinedActivities));
    }
    if (!localStorage.getItem('recommendations')) {
        localStorage.setItem('recommendations', JSON.stringify(predefinedRecommendations));
    }
}