import { STORAGE_KEYS } from './constants';

export function getToken() {
  const token = localStorage.getItem(STORAGE_KEYS.token);

  if (!token) {
    throw new Error('Токен не найден');
  }
  return token;
}
