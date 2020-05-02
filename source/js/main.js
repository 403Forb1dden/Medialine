'use strict';

var selectButton = document.querySelector('.form__select-button');
var selectList = document.querySelector('.form__select-list');

selectButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (selectButton.classList.contains('form__select-button--active')) {
    selectButton.classList.remove('form__select-button--active');
    selectList.classList.remove('form__select-list--opened');
  } else {
    selectButton.classList.add('form__select-button--active');
    selectList.classList.add('form__select-list--opened');
  }
});
