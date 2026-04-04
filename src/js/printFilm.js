import { closeModal } from './modal.js';
import { deleteFilm, createMovieCheckbox } from './saveFilm.js';
import { STORAGE_KEYS } from './utils/constants.js';

import { v4 as uuidv4 } from 'uuid';

export async function sendFilm() {
  const addedFilm = document.querySelector('.input__film');
  const token = localStorage.getItem(STORAGE_KEYS.token);

  try {
    const response = await fetch('http://localhost:1337/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          title: addedFilm.value,
          isWatched: false,
        },
      }),
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.massage || alert(`ошибка: ${response.status}`));
    }
    printFilm(data);
    addedFilm.value = '';
    return data;
  } catch (error) {
    alert(error.message);
  }
}

export function printFilm(data) {
  const ulMovieList = document.querySelector('.movie-list');
  const filmTitle = data.data.title;

  const liFilm = document.createElement('li');
  liFilm.classList.add('movie-item');

  const nameFilm = document.createElement('span');
  nameFilm.classList.add('movie-title');
  nameFilm.textContent = filmTitle;

  const { checkbox, checkboxId } = createMovieCheckbox(filmTitle);

  const label = document.createElement('label');
  label.classList.add('movie-label');
  label.textContent = 'Просмотрено';
  label.htmlFor = checkboxId;

  const btnDelete = document.createElement('button');
  btnDelete.classList.add('movie__btn');
  btnDelete.textContent = 'Удалить фильм';

  btnDelete.addEventListener('click', () => {
    liFilm.remove();
    deleteFilm(filmTitle);
  });

  liFilm.appendChild(nameFilm);
  liFilm.appendChild(checkbox);
  liFilm.appendChild(label);
  liFilm.appendChild(btnDelete);

  ulMovieList.prepend(liFilm);

  closeModal();
}
