import { printFilm } from "./printFilm.js";
import { toLoginWindow } from "./utils/contants.js";
import { checkAuthorization, exitToAuth } from "./auth.js";
import {
  closeModal,
  closeModalBtn,
  modal,
  showModalWindow,
  btnCancel,
} from "./modal.js";
import { rednerSavedFilm, deleteFilm } from "./saveFilm.js";

document.addEventListener("DOMContentLoaded", rednerSavedFilm);

document.addEventListener("DOMContentLoaded", () => {
  if (!checkAuthorization()) return;

  const btnAdd = document.querySelector(".header__btn-add");
  const btnClose = document.querySelector(".header__btn-close");
  const btnAddFilm = document.querySelector(".modal-agree");
  const addedFilm = document.querySelector(".input__film");

  btnClose.addEventListener("click", exitToAuth);

  btnAdd.addEventListener("click", () => {
    document.querySelector("#modalOverlay").classList.add("active");
  });

  btnCancel.addEventListener("click", closeModal);
  closeModalBtn.addEventListener("click", closeModal);
  btnAddFilm.addEventListener("click", () => printFilm(null, false));
  addedFilm.addEventListener("keydown", (e) => {
    if (e.key === "Enter") printFilm();
    if (e.key === "Escape") {
      document.querySelector("#modalOverlay")?.classList.remove("active");
    }
  });
});
