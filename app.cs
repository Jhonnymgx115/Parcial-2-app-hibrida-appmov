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
