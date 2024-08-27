function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).ready(function () {
    $('select').niceSelect();
});

const images = [
    '../images/header/header-bg1.jpg',
    '../images/header/header-bg2.jpg',
    '../images/header/header-bg3.jpg',
    '../images/header/header-bg4.jpg',
    '../images/header/header-bg5.jpg',
    '../images/header/header-bg6.jpg'
];

let currentIndex = 0;

function changeBackground() {
    const heroArea = document.querySelector('.hero_area');
    heroArea.classList.add('fade-out');
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroArea.style.setProperty('--bg-image', `url(${images[currentIndex]})`);
        heroArea.classList.remove('fade-out');
        heroArea.classList.add('fade-in');
        setTimeout(() => {
            heroArea.classList.remove('fade-in');
        }, 800);
    }, 800);
}

setInterval(changeBackground, 5000);

document.addEventListener('DOMContentLoaded', () => {
    const heroArea = document.querySelector('.hero_area');
    heroArea.style.setProperty('--bg-image', `url(${images[currentIndex]})`);
});
