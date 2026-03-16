import { printFilm } from "./printFilm";

function saveFilm(film) {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.push(film);
  localStorage.ssetItem("movies", JSON.stringify(movies));
}

function rednerSavedFilm() {
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

export { saveFilm, rednerSavedFilm, deleteFilm };
