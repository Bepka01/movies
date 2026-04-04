import { getJwtToken, logout } from '../js/utils/auth-storage';
import { toLoginWindow } from '../js/utils/navigaion';

export function checkAuthorization() {
  const userName = getJwtToken();
  if (!userName) {
    if (
      window.location.pathname.includes('index.html') ||
      window.location.pathname === '/'
    ) {
      toLoginWindow();
    }
    return false;
  }
  return true;
}

export function exitToAuth() {
  logout();
  toLoginWindow();
}
