import { toLoginWindow, getUserName, removeUserName } from "./utils/utils.js";

export function checkAuthorization() {
  const userName = getUserName();
  if (!userName) {
    if (
      window.location.pathname.includes("index.html") ||
      window.location.pathname === "/"
    ) {
      toLoginWindow();
    }
    return false;
  }
  return true;
}

export function exitToAuth() {
  removeUserName();
  toLoginWindow();
}
