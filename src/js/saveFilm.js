import { v4 as uuidv4 } from 'uuid';
import { closeModal } from './modal';

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

  const savedState = localStorage.getItem(checkboxId);
  if (savedState === 'true') {
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', () => {});
  return { checkbox, checkboxId };
}

function printFilm(data) {
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
export {
  saveFilm,
  rednerSavedFilm,
  deleteFilm,
  createMovieCheckbox,
  printFilm,
};
