import { STORAGE_KEYS } from './utils/constants';

const inputLoginSign = document.querySelector('.field-login');
const inputPassSign = document.querySelector('.field-password');
const inputMailSign = document.querySelector('.field-email');
const btnSign = document.querySelector('.btn-register');

function checkLogin() {
  if (inputLoginSign.value.length <= 4) {
    alert('Заполните поле логин');
    return false;
  }
  return true;
}

function checkPass() {
  if (inputPassSign.value.length <= 4) {
    alert('Заполните поле пароля');
    return false;
  }
  return true;
}

function checkMail() {
  if (inputMailSign.value.length <= 4) {
    alert('Заполните поле email');
    return false;
  }
  return true;
}

btnSign.addEventListener('click', async function (e) {
  e.preventDefault();
  if (!checkLogin() || !checkPass() || !checkMail()) {
    return;
  }
  const data = await register();
  localStorage.setItem(STORAGE_KEYS.token, data.jwt);
  localStorage.setItem(STORAGE_KEYS.username, data.user.username);
  localStorage.setItem(STORAGE_KEYS.email, data.user.email);

  window.location.href = 'main.html';
});

async function register() {
  try {
    const response = await fetch(
      'http://localhost:1337/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: inputLoginSign.value,
          password: inputPassSign.value,
          email: inputMailSign.value,
        }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.massage || alert(`ошибка: ${response.status}`));
    }
    return data;
  } catch (error) {
    alert(error.massage);
  }
}
