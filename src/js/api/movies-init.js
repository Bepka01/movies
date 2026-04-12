import { printFilm } from '../saveFilm';
import { getToken } from '../utils/helpers';

export async function getAllFilms() {
  const token = getToken();

  const response = await fetch(`${import.meta.env.VITE_API_URL}/movies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(`Ошибка получения фильмов: ${response.status}`);
  }

  return result.data;
}

export async function init() {
  try {
    const films = await getAllFilms();
    films.forEach((film) => printFilm(film));
  } catch (error) {
    console.error('Не удалось инициализировать фильмы:', error.message);
  }
}
