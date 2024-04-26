const navbarEl = document.getElementById('links')

document.getElementById('menu-icon').addEventListener('click', function () {
    if (navbarEl.style.display === 'flex') {
        navbarEl.style.display = 'none';

    }

    else {
        navbarEl.style.display = 'flex';
    }
})
