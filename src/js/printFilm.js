import { btnAddFilm, closeModal, modalInput } from "./modal.js";
const listFilm = document.querySelector(".movie-list");

console.log(btnAddFilm);
function printFilm() {
  const film = document.createElement("li");
  film.textContent = modalInput.value;
  listFilm.appendChild(film);
  closeModal();
}
btnAddFilm.addEventListener("click", printFilm);
export { printFilm };
