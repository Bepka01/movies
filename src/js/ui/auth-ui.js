import {
  redirectToMainWindow,
  setUserName,
  getUserName,
} from "../utils/contants.js";

const inputLogin = document.querySelector(".authorization__login");
const inputPassword = document.querySelector(".authorization__password");
const authBtn = document.querySelector(".btn__auth");

authBtn.addEventListener("click", () => {
  if (!inputLogin.value.trim() || inputPassword.value.length < 6) {
    alert("Заполните форму корректно");
    return;
  }
  setUserName(inputLogin.value);
  inputLogin.value = "";
  inputPassword.value = "";

  redirectToMainWindow();
});
document.addEventListener("DOMContentLoaded", () => {
  if (getUserName()) {
    redirectToMainWindow();
  }
});
