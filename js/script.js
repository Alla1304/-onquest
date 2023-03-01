'use strict';

const menuBody = document.querySelector('.menu__body');

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

let favoritesCounter = 1;
let favoritesNumber = document.querySelector('.favorites__number');

favoritesNumber.textContent = favoritesCounter;

let basketCounter = 0;
let basketNumber = document.querySelector('.basket__number');

basketNumber.textContent = basketCounter;

let searchInput = document.querySelector('.search__input');
let searchButton = document.querySelector('.search__button');

searchButton.addEventListener("click", function (e) {
    searchInput.classList.toggle('_active');
});

new Swiper('.slider', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass) {
            return '0' + '<span class="' + currentClass + '"></span>';
        }

    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    }
});