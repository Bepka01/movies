import '../scss/main.scss';

import { printFilm, sendFilm } from './printFilm.js';
import { checkAuthorization, exitToAuth } from './auth.js';
import { closeModal, closeModalBtn, btnCancel } from './modal.js';
import { rednerSavedFilm } from './saveFilm.js';

import { toLoginWindow } from './utils/navigaion.js';

document.addEventListener('DOMContentLoaded', () => {
  const modalWindow = document.querySelector('#modalOverlay');
  rednerSavedFilm();

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

  btnAddFilm.addEventListener('click', sendFilm);
  addedFilm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') printFilm();
    if (e.key === 'Escape') {
      modalWindow.classList.remove('active');
    }
  });
});
