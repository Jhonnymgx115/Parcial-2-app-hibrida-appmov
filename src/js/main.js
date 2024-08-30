import { initializeLocalStorage } from '/src/js/modules/Localstorage/LocalStorage_Settings';
import { updateDashboard } from '/src/js/modules/Dashboard/Dashboard_Settings';
import { updateNavVisibility, showView  } from '/src/js/modules/Navegation/Navegation_Settings';
import { ManageSession , validatePassword } from '/src/js/modules/Session/Sesion_Manager';



// Inicializar la aplicación
function initApp() {
    initializeLocalStorage();
    ManageSession();
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        showView('home');
        updateDashboard();
    } else {
        showView('login');
    }
    updateNavVisibility();
}

// Ejecutar la inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', initApp);