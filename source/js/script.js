'use strict';
const navButton = document.querySelector(".nav__button");
const menu = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
const page = document.querySelector(".page-body");

// navButton.classList.remove("visually-hidden");
menu.classList.add("nav__list--js");

navButton.addEventListener('click', () => {
  menu.classList.toggle("nav__list--js");
  navButton.classList.toggle("nav__button--closed");
  navButton.classList.toggle("nav__button--opened");
  nav.classList.toggle("nav--menu-open");
  page.classList.toggle("page--menu-open");
});
