import { redirectToMain } from "../auth.js";

const inputLogin = document.querySelector(".authorization__login");
const inputPassword = document.querySelector(".authorization__password");
const authBtn = document.querySelector(".btn__auth");

function validFormInput() {
  if (inputLogin.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("Заполните форму");
    return false;
  }
  if (inputPassword.value.length < 6) {
    alert("Пароль должен содержать минимум 6 символов");
  } else {
    alert(`${inputLogin.value}, Добро пожаловать!`);

    localStorage.setItem("userName", inputLogin.value);

    inputLogin.value = "";
    inputPassword.value = "";
    window.location.href = "index.html";
  }
}

authBtn.addEventListener("click", validFormInput);

document.addEventListener("DOMContentLoaded", redirectToMain);
