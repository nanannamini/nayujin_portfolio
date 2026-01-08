// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const header = document.querySelector('.header');
let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function updateTheme() {
    if (isDarkMode) {
        document.body.style.colorScheme = 'dark';
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        if (header) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
        }
        if (themeToggle) themeToggle.textContent = '☾';
    } else {
        document.body.style.colorScheme = 'light';
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        if (header) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.borderBottomColor = 'rgba(0, 0, 0, 0.05)';
        }
        if (themeToggle) themeToggle.textContent = '☀';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        updateTheme();
    });
}

updateTheme();

// Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.menu-close');
const menuOverlay = document.querySelector('.menu-overlay');

if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (menuClose && menuOverlay) {
    menuClose.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay && menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
