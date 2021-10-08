'use strict';

const navButton = document.querySelector('.nav__button');
const menu = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
const page = document.querySelector('.page-body');
const mainContent = document.querySelector('.main');
const form = document.querySelector('.find-product__form');
const userName = form.querySelector('#name');
const userPhone = form.querySelector('#phone');

let isStorageSupport = true;
let storageName = '';
let storagePhone = '';

navButton.classList.remove('visually-hidden');
menu.classList.add('menu--js');
mainContent.classList.remove('main--no-js');

navButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('menu--js');
  navButton.classList.toggle('nav__button--closed');
  navButton.classList.toggle('nav__button--opened');
  nav.classList.toggle('nav--menu-open');
  page.classList.toggle('page-body--menu-open');
});

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
    center: [59.93873506417266, 30.323117499999945],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });

  myMap.behaviors.disable('scrollZoom');

  if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
    myMap.behaviors.disable('drug');
  }
});

try {
  storageName = localStorage.getItem('name');
  storagePhone = localStorage.getItem('phone');
} catch (err) {
  isStorageSupport = false;
}

userName.addEventListener('focus', function (evt) {
  evt.preventDefault();

  if (storageName || storagePhone) {
    userName.value = storageName;
    userPhone.value = storagePhone;
  }
});

userPhone.addEventListener('focus', function (evt) {
  evt.preventDefault();

  if (storageName || storagePhone) {
    userName.value = storageName;
    userPhone.value = storagePhone;
  }
});

form.addEventListener('submit', function (evt) {
  if (!userName.value || !userPhone.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', userName.value);
      localStorage.setItem('phone', userPhone.value);
    }
  }
});
