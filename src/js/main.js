import '../scss/main.scss';

import './test.js';
import { printFilm } from './printFilm.js';
import { checkAuthorization, exitToAuth } from './auth.js';
import { closeModal, closeModalBtn, btnCancel } from './modal.js';
import { rednerSavedFilms } from './saveFilm.js';

import { modalWindow, toLoginWindow } from './utils/utils.js';

document.addEventListener('DOMContentLoaded', () => {
  rednerSavedFilms();

  if (!checkAuthorization()) {
    toLoginWindow();
    return;
  }

  const btnAdd = document.querySelector('.header__btn-add');
  const btnClose = document.querySelector('.header__btn-close');
  const btnAddFilm = document.querySelector('.modal-agree');
  const addedFilm = document.querySelector('.input__film');

  btnClose.addEventListener('click', exitToAuth);

  btnAdd.addEventListener('click', () => {
    modalWindow.classList.add('active');
  });

  btnCancel.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);
  btnAddFilm.addEventListener('click', () => printFilm(null, false));
  addedFilm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') printFilm();
    if (e.key === 'Escape') {
      modalWindow.classList.remove('active');
    }
  });
});
