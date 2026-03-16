import { printFilm } from "./printFilm.js";

function saveFilm(film) {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.push(film);
  localStorage.setItem("movies", JSON.stringify(movies));
}

function rednerSavedFilms() {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.forEach((film) => {
    printFilm(film);
  });
}
function deleteFilm(filmName) {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies = movies.filter((film) => film !== filmName);
  localStorage.setItem("movies", JSON.stringify(movies));
}

export { saveFilm, rednerSavedFilms, deleteFilm };
