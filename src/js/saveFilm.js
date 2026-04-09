import { v4 as uuidv4 } from 'uuid';
import { printFilm } from './printFilm';

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

  checkbox.addEventListener('change', () => {
    // localStorage.setItem(checkboxId, checkbox.checked);
  });
  return { checkbox, checkboxId };
}
export { saveFilm, rednerSavedFilm, deleteFilm, createMovieCheckbox };
