import { closeModal } from './modal.js';
import { deleteFilm, saveFilm, createMovieCheckbox } from './saveFilm.js';

import { v4 as uuidv4 } from 'uuid';

export function printFilm(filmInput = null) {
  const ulMovieList = document.querySelector('.movie-list');
  const addedFilm = document.querySelector('.input__film');

  const film = filmInput || addedFilm.value;

  if (!film.trim()) {
    alert('Напишите название фильма');
    return;
  }

  if (!filmInput) {
    saveFilm(film);
  }

  const liFilm = document.createElement('li');
  liFilm.classList.add('movie-item');

  const nameFilm = document.createElement('span');
  nameFilm.classList.add('movie-title');
  nameFilm.textContent = film;

  const btnDelete = document.createElement('button');
  btnDelete.classList.add('movie__btn');
  btnDelete.textContent = 'Удалить фильм';
  btnDelete.addEventListener('click', () => {
    liFilm.remove();
    deleteFilm(film);
  });

  const { checkbox, checkboxId } = createMovieCheckbox(film);

  const label = document.createElement('label');
  label.classList.add('movie-label');
  label.textContent = 'Просмотрено';
  label.htmlFor = checkboxId;

  liFilm.appendChild(nameFilm);
  liFilm.appendChild(checkbox);
  liFilm.appendChild(label);
  liFilm.appendChild(btnDelete);

  ulMovieList.prepend(liFilm);
  addedFilm.value = '';

  closeModal();
}
