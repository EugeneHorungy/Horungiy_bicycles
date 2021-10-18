'use strict';

// import IMask from 'imask';
// const imask = require('imask');
// import IMask from 'imask';

const navButton = document.querySelector('.nav__button');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('a');
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

const switchMenu = () => {
  menu.classList.toggle('menu--js');
  navButton.classList.toggle('nav__button--closed');
  navButton.classList.toggle('nav__button--opened');
  nav.classList.toggle('nav--menu-open');
  page.classList.toggle('page-body--menu-open');
};

const scrollToAnchor = (blockId) => {
  document.querySelector(`${blockId}`).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

navButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  switchMenu();
});

Array.from(menuLinks).forEach((link) => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();

    const blockId = link.getAttribute('href');
    const maxWidthMobileMenu = window.matchMedia('(max-width: 1023px)');

    scrollToAnchor(blockId);

    if (maxWidthMobileMenu.matches) {
      switchMenu();
      scrollToAnchor(blockId);
    }
  });
});

try {
  storageName = localStorage.getItem('name');
  storagePhone = localStorage.getItem('phone');
} catch (err) {
  isStorageSupport = false;
}

userName.addEventListener('focus', function (evt) {
  evt.preventDefault();

  // if (storageName || storagePhone) {
  //   userName.value = storageName;
  //   userPhone.value = storagePhone;
  // }
  if (storageName) {
    userName.value = storageName;
  }
});

userPhone.addEventListener('focus', function (evt) {
  evt.preventDefault();

  // if (storageName || storagePhone) {
  //   userName.value = storageName;
  //   userPhone.value = storagePhone;
  // }
  if (storagePhone) {
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

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

IMask(userPhone, maskOptions);

