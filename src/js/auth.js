export function checkAuthorization() {
  const currUser = localStorage.getItem("userName");
  if (!currUser) {
    window.location.href = "auth.html";
    return false;
  }
}

export function redirectToMain() {
  const currUser = localStorage.getItem("userName");
  if (currUser) {
    window.location.href = "index.html";
  }
}
