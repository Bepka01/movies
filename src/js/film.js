import { changeStatusIsWatched, getAllFilms, removeMovie } from './api/movies';

function updateWatchedUI(filmElement, isWatched) {
  const checkbox = filmElement.querySelector('.movie-checkbox');
  if (!checkbox) return;
  checkbox.checked = isWatched;
}

function printFilm(data) {
  const ulMovieList = document.querySelector('.movie-list');
  const { title: filmTitle, uuid: filmUuid } = data;

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
      const updateCheckBox = await changeStatusIsWatched(filmUuid, newStatus);
      updateWatchedUI(liFilm, updateCheckBox.data.isWatched);
    } catch (error) {
      console.error('Ошибка обновления статуса:', error);
      event.target.checked = !newStatus;
    }
  });

  const btnDelete = document.createElement('button');
  btnDelete.classList.add('movie__btn');
  btnDelete.textContent = 'Удалить фильм';

  btnDelete.addEventListener('click', async () => {
    liFilm.remove();
    removeMovie(filmUuid);
  });

  liFilm.appendChild(nameFilm);
  liFilm.appendChild(checkbox);
  liFilm.appendChild(label);
  liFilm.appendChild(btnDelete);

  ulMovieList.prepend(liFilm);
}

function createMovieCheckbox(film) {
  const checkbox = document.createElement('input');
  const checkboxId = `movie-${film}`;

  checkbox.type = 'checkbox';
  checkbox.classList.add('movie-checkbox');
  checkbox.id = checkboxId;

  checkbox.addEventListener('change', () => {});
  return { checkbox, checkboxId };
}

async function initAllFilms() {
  try {
    const films = await getAllFilms();
    films.forEach((film) => printFilm(film));
  } catch (error) {
    console.error('Не удалось инициализировать фильмы:', error.message);
  }
}

export { createMovieCheckbox, printFilm, initAllFilms };
