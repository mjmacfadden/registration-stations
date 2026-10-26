// Shared Tailwind theme & Light/Dark view controller for Titan School of Business.
// Keeps the navy/gold palette consistent and persists theme preference across all stations.

// Immediate execution to prevent flash of wrong theme
(function () {
    try {
        const savedTheme = localStorage.getItem('tsb-theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.add('light-theme');
        }
    } catch (e) {
        // localStorage blocked or restricted
    }
})();

// Tailwind Config
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    navy: {
                        800: '#1e293b',
                        900: '#0f172a',
                        950: '#020617',
                    },
                    gold: {
                        400: '#fbbf24',
                        500: '#f59e0b',
                        600: '#d97706',
                    }
                }
            }
        }
    };
}

// Global Theme Toggle Function
window.toggleTheme = function () {
    const isCurrentlyLight = document.body.classList.contains('light-theme') || 
                             document.documentElement.classList.contains('light-theme');
    const newTheme = isCurrentlyLight ? 'dark' : 'light';

    if (newTheme === 'light') {
        document.documentElement.classList.add('light-theme');
        document.body.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
        document.body.classList.remove('light-theme');
    }

    try {
        localStorage.setItem('tsb-theme', newTheme);
    } catch (e) {}

    updateThemeUI(newTheme);
};

function updateThemeUI(theme) {
    const isLight = (theme === 'light');

    // Update all toggle buttons across the page
    document.querySelectorAll('.theme-toggle-label, #theme-toggle-label').forEach(el => {
        el.textContent = isLight ? 'Dark View' : 'Light View';
    });

    document.querySelectorAll('.theme-toggle-icon, #theme-toggle-icon').forEach(icon => {
        icon.setAttribute('data-lucide', isLight ? 'moon' : 'sun');
    });

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

// Auto-initialize theme on DOM load
document.addEventListener('DOMContentLoaded', function () {
    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem('tsb-theme') || 'dark';
    } catch (e) {}

    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
        document.body.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
        document.body.classList.remove('light-theme');
    }

    // Auto-inject theme toggle into header nav if not explicitly present
    ensureThemeButtonExists(savedTheme);

    updateThemeUI(savedTheme);
});

// Ensure a theme button is always available in the top menu
function ensureThemeButtonExists(currentTheme) {
    if (document.getElementById('theme-toggle-btn')) return;

    const isLight = (currentTheme === 'light');
    const btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.onclick = window.toggleTheme;
    btn.className = "px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-slate-100 transition flex items-center gap-1.5 text-xs font-medium shrink-0";
    btn.title = "Switch between Dark and Light View";
    btn.innerHTML = `
        <i data-lucide="${isLight ? 'moon' : 'sun'}" id="theme-toggle-icon" class="w-3.5 h-3.5 text-amber-400"></i>
        <span id="theme-toggle-label">${isLight ? 'Dark View' : 'Light View'}</span>
    `;

    // Try finding the navigation bar or header container
    const nav = document.querySelector('header nav');
    if (nav) {
        nav.prepend(btn);
        return;
    }

    const headerContainer = document.querySelector('header > div');
    if (headerContainer) {
        // Append before the last child or alongside widgets
        headerContainer.appendChild(btn);
    }
}
