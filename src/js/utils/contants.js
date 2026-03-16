function toLoginWindow() {
  window.location.href = "auth.html";
}

function toMainWindow() {
  window.location.href = "index.html";
}

function redirectToMainWindow() {
  window.location.href = "index.html";
}

function removeUserName() {
  localStorage.removeItem("userName");
}

function setUserName(username) {
  localStorage.setItem("userName", username);
}

function getUserName() {
  return localStorage.getItem("userName");
}
export {
  toMainWindow,
  toLoginWindow,
  redirectToMainWindow,
  setUserName,
  getUserName,
  removeUserName,
};
