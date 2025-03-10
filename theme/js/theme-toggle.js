// Theme toggle functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || getSystemTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    const button = document.querySelector('.theme-toggle');
    
    // Add button animation class
    button.classList.add(newTheme === 'dark' ? 'spinning-to-dark' : 'spinning-to-light');
    
    // Set the new theme
    setTheme(newTheme);
    
    // Remove animation class after animation completes
    setTimeout(() => {
        button.classList.remove('spinning-to-dark', 'spinning-to-light');
    }, 500);
}

function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Use saved preference if it exists
        setTheme(savedTheme);
    } else {
        // Otherwise use system preference
        setTheme(getSystemTheme());
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            // Only update theme if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}); 