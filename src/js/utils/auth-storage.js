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

export { removeUserName, logout, setUserName, getJwtToken };
