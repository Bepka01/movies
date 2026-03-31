function toLoginWindow() {
  window.location.href = '/auth.html';
}

function redirectToMainWindow() {
  window.location.href = '/index.html';
}

function removeUserName() {
  localStorage.removeItem('userName');
}

function logout() {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
}

function setUserName(username) {
  localStorage.setItem('userName', username);
}

function getJwtToken() {
  return localStorage.getItem('jwtToken');
}

function toRegistrationWindow() {
  window.location.href = '/sign-up.html';
}

const modalWindow = document.querySelector('#modalOverlay');
export {
  modalWindow,
  toLoginWindow,
  redirectToMainWindow,
  setUserName,
  getJwtToken,
  removeUserName,
  toRegistrationWindow,
  logout,
};
