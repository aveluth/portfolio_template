// Dark Mode Toggle
const body = document.body;

function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

// Dark Mode Button Click Event
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.addEventListener('click', toggleTheme);

