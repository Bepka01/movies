import { STORAGE_KEYS } from './constants';

function removeUserName() {
  localStorage.removeItem(STORAGE_KEYS.username);
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.token);
  localStorage.removeItem(STORAGE_KEYS.username);
  localStorage.removeItem(STORAGE_KEYS.email);
}

function setUserName(username) {
  localStorage.setItem(STORAGE_KEYS.username, username);
}

function getJwtToken() {
  return localStorage.getItem(STORAGE_KEYS.token);
}

function signUpData(data) {
  localStorage.setItem(STORAGE_KEYS.token, data.jwt);
  localStorage.setItem(STORAGE_KEYS.username, data.user.username);
}

function signIn(data) {
  localStorage.setItem(STORAGE_KEYS.token, data.token);
  localStorage.setItem(STORAGE_KEYS.username, data.name);
}

function dataMoviesLs(data) {
  localStorage.setItem(data.data.title, 'film');
  localStorage.setItem('isWatched', String(data.data.isWatched));
}

export {
  removeUserName,
  logout,
  setUserName,
  getJwtToken,
  signUpData,
  signIn,
  dataMoviesLs,
};
