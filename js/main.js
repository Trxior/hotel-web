const menuBtn = document.getElementById('menu-btn'),
    nav = document.querySelector('.header__navigation');

menuBtn.addEventListener('click', () => {
    if (window.getComputedStyle(nav).display === "none") {
        nav.style = 'display: block';
    } else {
        nav.style = 'display: none';
    }
});
