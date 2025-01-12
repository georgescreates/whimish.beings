const headerForm = document.getElementById('header-form');
const restrictionModeArea = document.getElementById('restriction-mode-area');
const restrictionModeBtn = document.getElementById('restriction-mode-btn');
const restrictionModeMenu = document.getElementById('restriction-mode-menu');
const restrictionModeText = document.getElementById('restriction-mode-text');

let searchFormAreas = document.querySelectorAll('.search-form-area');
let timeoutId;

searchFormAreas.forEach(currentArea => {
    currentArea.addEventListener('mouseenter', (e) => {
        clearTimeout(timeoutId);

        // First hide all dropdowns
        searchFormAreas.forEach(area => {
            if (area !== currentArea) {
                area.querySelector('.search-area-dropdown-menu').classList.add('hidden');
            }
        });

        currentArea.querySelector('.search-area-dropdown-menu').classList.remove('hidden');
    });

    currentArea.addEventListener('mouseleave', (e) => {
        timeoutId = setTimeout(() => {
            currentArea.querySelector('.search-area-dropdown-menu').classList.add('hidden');
        }, 100);
    });
});

document.addEventListener('click', (event) => {
    searchFormAreas.forEach(area => {
        if (!area.contains(event.target)) {
            area.querySelector('.search-area-dropdown-menu').classList.add('hidden');
        }
    });
 });

let restrictionRadios = document.querySelectorAll('.restriction-radio');
let restrictionModeSelectedText = document.querySelectorAll('.restriction-mode-selection-text');
restrictionRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const selectedMode = e.target.closest('label').querySelector('.restriction-mode-selection-text').textContent;
        restrictionModeText.textContent = selectedMode;
    })
});