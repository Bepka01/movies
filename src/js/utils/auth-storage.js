import { STORAGE_KEYS } from './constants';

function removeUserName() {
  localStorage.removeItem(STORAGE_KEYS.username);
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.token);
  localStorage.removeItem(STORAGE_KEYS.username);
  localStorage.removeItem(STORAGE_KEYS.email);
}

function getNameHeader() {
  return localStorage.getItem(STORAGE_KEYS.username);
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
  console.log(data);
}

function signIn(data) {
  localStorage.setItem(STORAGE_KEYS.token, data.token);
  localStorage.setItem(STORAGE_KEYS.username, data.name);
}

export {
  removeUserName,
  logout,
  setUserName,
  getJwtToken,
  signUpData,
  signIn,
  getNameHeader,
};
