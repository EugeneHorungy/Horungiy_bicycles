'use strict';
var navButton = document.querySelector(".nav__button");
var menu = document.querySelector(".nav__list");
var nav = document.querySelector(".nav");
var page = document.querySelector(".page-body");

// navButton.classList.remove("visually-hidden");
menu.classList.add("nav__list--js");

navButton.addEventListener('click', () => {
  menu.classList.toggle("nav__list--js");
  navButton.classList.toggle("nav__button--closed");
  navButton.classList.toggle("nav__button--opened");
  nav.classList.toggle("nav--menu-open");
  page.classList.toggle("page--menu-open");
});

console.log('bhbcbcnjcn');
console.log('88888888888');
