import { STORAGE_KEYS } from '../utils/constants';
import { printFilm } from '../printFilm';

export async function getAllFilms() {
  const token = localStorage.getItem(STORAGE_KEYS.token);

  if (!token) {
    throw new Error('Токен не найден');
  }
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/movies`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения фильмов: ${response.status}`);
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error('Не удалось получить фильмы:', error);
    throw error;
  }
}

export async function init() {
  try {
    const films = await getAllFilms();
    console.log(films);
    films.forEach((film) => printFilm(film));
  } catch (error) {
    console.error(error);
  }
}
