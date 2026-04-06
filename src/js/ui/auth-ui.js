import '../../scss/auth.scss';
import { toMainWindow, toRegistrationWindow } from '../utils/navigaion.js';

import { getJwtToken, signIn } from '../utils/auth-storage.js';
import { login } from '../api/auth.js';

export const inputLogin = document.querySelector('.authorization__login');
export const inputPassword = document.querySelector('.authorization__password');
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
  signIn(dataLogin);
  toMainWindow();
});

document.addEventListener('DOMContentLoaded', () => {
  if (getJwtToken()) {
    toMainWindow();
  }
});
