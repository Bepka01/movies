const modal = document.querySelector("#modalOverlay");
const closeModalBtn = document.querySelector(".modal-close");
const btnCancel = document.querySelector(".modal-cancel");
const btnAddFilm = document.querySelector(".modal-agree");
const modalInput = document.querySelector(".input__film");
export { modal, closeModalBtn, btnCancel, btnAddFilm, modalInput };

export function showModalWindow() {
  modal.classList.add("active");
}

export function closeModal() {
  modal.classList.remove("active");
}
