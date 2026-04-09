import { createMovieCheckbox } from './saveFilm';
import { closeModal } from './modal';
import { changeStatusIsWatched } from './api/watched-state';

import { deleteFilm } from './saveFilm';

function updateWatchedUI(filmElement, isWatched) {
  const checkbox = filmElement.querySelector('.movie-checkbox');
  if (isWatched) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}

export function printFilm(data) {
  const ulMovieList = document.querySelector('.movie-list');
  const filmTitle = data.title;
  const filmUuid = data.uuid;

  const liFilm = document.createElement('li');
  liFilm.classList.add('movie-item');
  liFilm.dataset.uuid = filmUuid;
  const isWatched = data.isWatched || false;

  const nameFilm = document.createElement('span');
  nameFilm.classList.add('movie-title');
  nameFilm.textContent = filmTitle;

  const { checkbox, checkboxId } = createMovieCheckbox(filmTitle);

  checkbox.checked = isWatched;

  const label = document.createElement('label');
  label.classList.add('movie-label');
  label.textContent = 'Просмотрено';
  label.htmlFor = checkboxId;

  checkbox.addEventListener('change', async (event) => {
    const newStatus = event.target.checked;

    try {
      await changeStatusIsWatched(filmUuid, newStatus);
      updateWatchedUI(liFilm, newStatus);
    } catch (error) {
      console.error('Ошибка обновления статуса:', error);
      event.target.checked = !newStatus;
    }
  });

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
