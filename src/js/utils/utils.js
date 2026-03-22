function toLoginWindow() {
  window.location.href = "/auth.html";
}

function redirectToMainWindow() {
  window.location.href = "/index.html";
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

const modalWindow = document.querySelector("#modalOverlay");
export {
  modalWindow,
  toLoginWindow,
  redirectToMainWindow,
  setUserName,
  getUserName,
  removeUserName,
};
