import '../scss/main.scss';
import { sendFilm } from './api/movies.js';
import { checkAuthorization, exitToAuth } from './auth.js';
import { closeModal, closeModalBtn, btnCancel } from './modal.js';
import { rednerSavedFilm, init } from './saveFilm.js';
import { getNameHeader } from './utils/auth-storage.js';
import { toLoginWindow } from './utils/navigaion.js';

document.addEventListener('DOMContentLoaded', () => {
  init();
  const modalWindow = document.querySelector('#modalOverlay');
  rednerSavedFilm();

  if (!checkAuthorization()) {
    toLoginWindow();
    return;
  }
  const userName = document.querySelector('.user__name');
  const btnAdd = document.querySelector('.header__btn-add');
  const btnClose = document.querySelector('.header__btn-close');
  const btnAddFilm = document.querySelector('.modal-agree');
  const addedFilm = document.querySelector('.input__film');

  btnClose.addEventListener('click', exitToAuth);

  btnAdd.addEventListener('click', () => {
    modalWindow.classList.add('active');
  });

  userName.innerHTML = getNameHeader();

  btnCancel.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);

  btnAddFilm.addEventListener('click', sendFilm);
  addedFilm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendFilm();
    if (e.key === 'Escape') {
      modalWindow.classList.remove('active');
    }
  });
});
