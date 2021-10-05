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
  page.classList.toggle("page-body--menu-open");
});

ymaps.ready(function () {
  new ymaps.Map('map', {
    center: [59.93873506417266,30.323117499999945],
    zoom: 17
}, {
    searchControlProvider: 'yandex#search'
})
  // const myMap = new ymaps.Map('map', {
  //     center: [59.93873506417266,30.323117499999945],
  //     zoom: 17
  // }, {
  //     searchControlProvider: 'yandex#search'
  // }),

  // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  // ),

  // myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //     hintContent: 'Мишка',
  // }, {
  //     iconLayout: 'default#image',
  //     iconImageHref: 'img/logo/mishka-marker.svg',
  //     iconImageSize: [67, 100],
  //     iconImageOffset: [-21, -83]
  // });

  // myMap.geoObjects
  //     .add(myPlacemark)
});
