const modal = document.querySelector("#modalOverlay");
const closeModalBtn = document.querySelector(".modal-close");
const btnCancel = document.querySelector(".modal-cancel");
const btnAddFilm = document.querySelector(".modal-agree");
const modalInput = document.querySelector(".input__film");
function showModalWindow() {
  modal.classList.toggle("active");
}

function closeModal() {
  modal.classList.remove("active");
}

closeModalBtn.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);
export {
  modal,
  closeModalBtn,
  btnCancel,
  showModalWindow,
  closeModal,
  btnAddFilm,
  modalInput,
};
