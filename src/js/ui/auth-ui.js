import '../../scss/auth.scss';
import {
  redirectToMainWindow,
  getJwtToken,
  toRegistrationWindow,
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
  localStorage.setItem('jwtToken', dataLogin.token);
  localStorage.setItem('userid', dataLogin.name);
  redirectToMainWindow();
});
document.addEventListener('DOMContentLoaded', () => {
  if (getJwtToken()) {
    redirectToMainWindow();
  }
});

async function login() {
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
  return data;
}
