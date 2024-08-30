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
