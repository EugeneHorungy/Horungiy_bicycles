'use strict';

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
