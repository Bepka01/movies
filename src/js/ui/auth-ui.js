import '../../scss/auth.scss';
import {
  redirectToMainWindow,
  getJwtToken,
  toRegistrationWindow,
  STORAGE_KEYS,
} from '../utils/utils.js';

const inputLogin = document.querySelector('.authorization__login');
const inputPassword = document.querySelector('.authorization__password');
const authBtn = document.querySelector('.btn__auth');

const btnReg = document.querySelector('.btn__reg');

btnReg.addEventListener('click', function () {
  toRegistrationWindow();
});

authBtn.addEventListener('click', async () => {
  if (!inputLogin.value.trim() || inputPassword.value.length < 4) {
    alert('Заполните форму корректно');
  }
  const dataLogin = await login();

  if (!dataLogin?.token) {
    alert('Ошибка');
    return;
  }
  localStorage.setItem(STORAGE_KEYS.token, dataLogin.token);
  localStorage.setItem(STORAGE_KEYS.username, dataLogin.name);
  redirectToMainWindow();
});

document.addEventListener('DOMContentLoaded', () => {
  if (getJwtToken()) {
    redirectToMainWindow();
  }
});

async function login() {
  try {
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: inputPassword.value,
        email: inputLogin.value,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || `Ошибка: ${response.status}`);
    }
    return data;
  } catch (error) {
    alert('error.massage');
  }
}
