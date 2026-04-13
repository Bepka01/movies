import '../scss/main.scss';
import { sendFilm } from './api/movies.js';
import { checkAuthorization, exitToAuth } from './auth.js';
import { closeModal, closeModalBtn, btnCancel } from './modal.js';
import { initAllFilms, printFilm } from './film.js';
import { getNameHeader } from './utils/auth-storage.js';
import { toLoginWindow } from './utils/navigaion.js';

document.addEventListener('DOMContentLoaded', () => {
  initAllFilms();
  const modalWindow = document.querySelector('#modalOverlay');

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
