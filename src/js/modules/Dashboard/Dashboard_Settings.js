


// Actualizar dashboard
export function updateDashboardInitial() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.fullName;
        document.getElementById('userEmail').textContent = currentUser.email;

        updateActivityListInitial();
        updateTodoList();
        updateRecommendations();
        updateWeeklyStats();
    }
}

// Funciones para actualizar las secciones del dashboard
export function updateActivityList() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';
    const activities = JSON.parse(localStorage.getItem('activities'));
    activities.forEach(activity => {
        if (activity.completed) {
            const li = document.createElement('li');
            li.textContent = `${activity.name} - Completada el ${new Date(activity.date).toLocaleDateString()}`;
            activityList.appendChild(li);
        }
    });
}

export function updateTodoList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    const activities = JSON.parse(localStorage.getItem('activities'));
    const incompletedActivities = activities.filter(activity => !activity.completed);

    if (incompletedActivities.length === 0) {
        showCongratulationsMessage();
    } else {
        incompletedActivities.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = activity.name;
            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Completar';
            completeBtn.onclick = () => completeActivity(activity.id);
            li.appendChild(completeBtn);
            todoList.appendChild(li);
        });
    }
}

export function completeActivity(activityId) {
    const activities = JSON.parse(localStorage.getItem('activities'));
    const updatedActivities = activities.map(activity =>
        activity.id === activityId ? {...activity, completed: true, date: new Date().toISOString()} : activity
    );
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
    updateActivityList();
    updateTodoList();
    updateWeeklyStats();
}

export function updateRecommendations() {
    const recommendationList = document.getElementById('recommendationList');
    recommendationList.innerHTML = '';
    const recommendations = JSON.parse(localStorage.getItem('recommendations'));
    recommendations.forEach(recommendation => {
        const li = document.createElement('li');
        li.textContent = recommendation;
        recommendationList.appendChild(li);
    });
}

export function updateWeeklyStats() {
    const weeklyStats = document.getElementById('weeklyStats');
    weeklyStats.innerHTML = '';
    const activities = JSON.parse(localStorage.getItem('activities'));
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
        const completedToday = activities.filter(activity =>
            activity.completed &&
            new Date(activity.date).toDateString() === date.toDateString()
        ).length;

        const li = document.createElement('li');
        li.textContent = `${date.toLocaleDateString()}: ${completedToday} actividades completadas`;
        weeklyStats.appendChild(li);
    }
}

export function showCongratulationsMessage() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '<p>¡Felicidades! Has completado todas tus actividades.</p>';
    const loadNewActivitiesBtn = document.createElement('button');
    loadNewActivitiesBtn.textContent = 'Cargar nuevas actividades';
    loadNewActivitiesBtn.onclick = loadNewActivities;
    todoList.appendChild(loadNewActivitiesBtn);
}

export function loadNewActivities() {
    const activities = JSON.parse(localStorage.getItem('activities'));
    const newActivities = activities.map(activity => ({...activity, completed: false, date: null}));
    localStorage.setItem('activities', JSON.stringify(newActivities));
    updateTodoList();
    updateActivityList();
    updateWeeklyStats();
}


// New function to add an activity
export function addActivity() {
    const activityName = prompt("Ingrese el nombre de la nueva actividad:");
    if (activityName) {
        const activities = JSON.parse(localStorage.getItem('activities'));
        const newActivity = {
            id: activities.length + 1,
            name: activityName,
            completed: false,
            date: null
        };
        activities.push(newActivity);
        localStorage.setItem('activities', JSON.stringify(activities));
        updateTodoList();
    }
}

// New function to clear activity history
export function clearActivityHistory() {
    if (confirm("¿Estás seguro de que quieres eliminar todo el historial de actividades?")) {
        const activities = JSON.parse(localStorage.getItem('activities'));
        const updatedActivities = activities.filter(activity => !activity.completed);
        localStorage.setItem('activities', JSON.stringify(updatedActivities));
        updateActivityList();
        updateWeeklyStats();
    }
}

// Modified updateActivityList function to include delete buttons
export function updateActivityListInitial() {
    const activityList = document.getElementById('activityList');
    const fullActivityList = document.getElementById('fullActivityList');
    activityList.innerHTML = '';
    fullActivityList.innerHTML = '';
    const activities = JSON.parse(localStorage.getItem('activities'));
    activities.forEach(activity => {
        if (activity.completed) {
            const li = document.createElement('li');
            li.textContent = `${activity.name} - Completada el ${new Date(activity.date).toLocaleDateString()}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.onclick = () => deleteActivity(activity.id);

            li.appendChild(deleteBtn);
            activityList.appendChild(li);
            fullActivityList.appendChild(li.cloneNode(true));
        }
    });
}

// New function to delete a single activity
export function deleteActivity(activityId) {
    if (confirm("¿Estás seguro de que quieres eliminar esta actividad?")) {
        const activities = JSON.parse(localStorage.getItem('activities'));
        const updatedActivities = activities.filter(activity => activity.id !== activityId);
        localStorage.setItem('activities', JSON.stringify(updatedActivities));
        updateActivityListInitial();
        updateWeeklyStats();
    }
}

// Modified updateDashboard function
export function updateDashboard() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.fullName;
        document.getElementById('userEmail').textContent = currentUser.email;

        updateActivityListInitial();
        updateTodoList();
        updateRecommendations();
        updateWeeklyStats();

        // Add event listeners for new buttons
        document.getElementById('addActivityBtn').addEventListener('click', addActivity);
        document.getElementById('clearHistoryBtn').addEventListener('click', clearActivityHistory);
    }
}
