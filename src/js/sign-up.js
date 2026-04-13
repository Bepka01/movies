import { toMainWindow } from './utils/navigaion';
import { signUpData } from './utils/auth-storage';
import { register } from './api/registr';

const btnSign = document.querySelector('.btn-register');

function checkPass() {
  const inputPassSign = document.querySelector('.field-password');
  if (inputPassSign.value.length <= 4) {
    alert('Заполните поле пароля');
    return false;
  }
  return true;
}

function checkMail() {
  const inputMailSign = document.querySelector('.field-email');
  if (inputMailSign.value.length <= 4) {
    alert('Заполните поле email');
    return false;
  }
  return true;
}

btnSign.addEventListener('click', async function (e) {
  const inputPassSign = document.querySelector('.field-password');
  const inputMailSign = document.querySelector('.field-email');
  e.preventDefault();
  if (!checkPass() || !checkMail()) {
    return;
  }
  const data = await register({
    email: inputMailSign.value,
    password: inputPassSign.value,
  });

  signUpData(data);
  toMainWindow();
});
