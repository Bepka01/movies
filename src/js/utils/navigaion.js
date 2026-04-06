import { PAGES } from './constants';

function toLoginWindow() {
  window.location.href = `/${PAGES.login}`;
}

function toMainWindow() {
  window.location.href = `/${PAGES.main}`;
}

function toRegistrationWindow() {
  window.location.href = `/${PAGES.registration}`;
}

export { toLoginWindow, toMainWindow, toRegistrationWindow };
