const menuBtn = document.getElementById('menu-btn'),
    nav = document.querySelector('.header__navigation');

menuBtn.addEventListener('click', () => {
    if (window.getComputedStyle(nav).display === "none") {
        nav.style = 'display: block';
    } else {
        nav.style = 'display: none';
    }
});

$(document).ready(function () {
    $(".gallery__owl-carousel").owlCarousel({
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        nav: true,
        dots: false,
        loop: true,
        margin: 50,
        responsive: {
            0: {
                margin: 25,
                items: 1
            },
            768: {
                items: 2
            }
        }
    })
});

$(document).ready(function () {
    $(".timestamp__owl-carousel").owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        items: 1
    })
});
