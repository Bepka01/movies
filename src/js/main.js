import '../scss/main.scss';
import { sendFilm } from './api/movies.js';
import { checkAuthorization, exitToAuth } from './auth.js';
import { closeModal, closeModalBtn, btnCancel } from './modal.js';
import { initAllFilms, printFilm } from './film.js';
import { getNameHeader } from './utils/auth-storage.js';
import { toLoginWindow } from './utils/navigaion.js';
import { FILTERS } from './utils/constants.js';

document.addEventListener('DOMContentLoaded', () => {
  initAllFilms();
  const modalWindow = document.querySelector('#modalOverlay');

  if (!checkAuthorization()) {
    toLoginWindow();
    return;
  }

  const btnAll = document.querySelector('.btn-all');
  const btnWatched = document.querySelector('.btn-watched');
  const btnUnwatched = document.querySelector('.btn-unwatched');
  const userName = document.querySelector('.user__name');
  const btnAdd = document.querySelector('.header__btn-add');
  const btnClose = document.querySelector('.header__btn-close');
  const btnAddFilm = document.querySelector('.modal-agree');
  const addedFilm = document.querySelector('.input__film');

  btnAll.addEventListener('click', () => {
    initAllFilms();
  });

  btnWatched.addEventListener('click', () => {
    initAllFilms(FILTERS.WATCHED);
  });

  btnUnwatched.addEventListener('click', () => {
    initAllFilms(FILTERS.UNWATCHED);
  });

  btnClose.addEventListener('click', exitToAuth);

  btnAdd.addEventListener('click', () => {
    modalWindow.classList.add('active');
  });

  userName.innerHTML = getNameHeader();

  btnCancel.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);

  async function sendFilmHandler() {
    const dataTitleFilm = await sendFilm(addedFilm.value);

    printFilm(dataTitleFilm.data);
    closeModal();
    addedFilm.value = '';
  }

  btnAddFilm.addEventListener('click', () => {
    sendFilmHandler();
  });

  addedFilm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendFilmHandler();
    }
    if (e.key === 'Escape') {
      modalWindow.classList.remove('active');
    }
  });
});
