//inicio del css

:root {
    --primary-color: #718355;
    --secondary-color: #E9F5DB;
    --text-color: #333333;
    --background-color: #FFFFFF;
    --accent-color: #A9C088;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
}

.navbar {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-brand {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
}

.logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.navbar-menu a {
    color: var(--secondary-color);
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease;
}

.navbar-menu a:hover,
.navbar-menu a.active {
    background-color: var(--accent-color);
    border-radius: 4px;
}

main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.view {
    display: none;
}

.view.active {
    display: block;
}
.hero {
    text-align: center;
    margin-bottom: 2rem;
}

.hero h1 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.hero p {
    font-size: 1.2rem;
    color: var(--accent-color);
}

.content-image {
    text-align: center;
    margin-bottom: 2rem;
}

.content-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form {
    background-color: var(--secondary-color);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

.form h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.form input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid var(--accent-color);
    border-radius: 4px;
    font-size: 1rem;
}

.form button {
    width: 100%;
    padding: 0.8rem;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.form button:hover {
    background-color: var(--accent-color);
}
.forgot-password {
    display: block;
    text-align: center;
    margin-top: 1rem;
    color: var(--primary-color);
    text-decoration: none;
}

.account-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
}

.account-buttons button {
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.google-btn {
    background-color: #4285F4;
    color: white;
}

.facebook-btn {
    background-color: #3b5998;
    color: white;
}

.register-btn,
.login-btn {
    display: block;
    width: 100%;
    padding: 0.8rem;
    background-color: var(--accent-color);
    color: var(--text-color);
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    text-decoration: none;
}

.register-btn:hover,
.login-btn:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

.training-history,
.todo-list,
.recommendations,
.activity-history,
.user-stats {
    background-color: var(--secondary-color);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

.training-history h2,
.todo-list h2,
.recommendations h2,
.activity-history h2,
.user-stats h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.user-info {
    text-align: center;
    margin-bottom: 2rem;
}

.profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
}

footer {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
}

@media (max-width: 600px) {
    .navbar {
        flex-direction: column;
    }

    .navbar-menu {
        margin-top: 1rem;
    }

    .account-buttons {
        flex-direction: column;
    }
}
