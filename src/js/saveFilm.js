import { v4 as uuidv4 } from 'uuid';
import { closeModal } from './modal';
import { changeStatusIsWatched } from './api/watched-state';

function updateWatchedUI(filmElement, isWatched) {
  const checkbox = filmElement.querySelector('.movie-checkbox');
  if (isWatched) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}

function printFilm(data) {
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

function saveFilm(film) {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  movies.push(film);
  localStorage.setItem('movies', JSON.stringify(movies));
}

function rednerSavedFilm() {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  movies.forEach((film) => {
    printFilm(film);
  });
}
function deleteFilm(filmName) {
  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  movies = movies.filter((film) => film !== filmName);
  localStorage.setItem('movies', JSON.stringify(movies));
}

function createMovieCheckbox(film) {
  const checkbox = document.createElement('input');
  const checkboxId = `movie-${film}`;
  checkbox.type = 'checkbox';
  checkbox.classList.add('movie-checkbox');
  checkbox.id = checkboxId;
  checkbox.classList.add('movie-checkbox');

  const savedState = localStorage.getItem(checkboxId);
  if (savedState === 'true') {
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', () => {});
  return { checkbox, checkboxId };
}

export {
  saveFilm,
  rednerSavedFilm,
  deleteFilm,
  createMovieCheckbox,
  printFilm,
};
