import { STORAGE_KEYS } from '../utils/constants';
import { printFilm } from '../film';

export async function sendFilm() {
  const addedFilm = document.querySelector('.input__film');
  const token = localStorage.getItem(STORAGE_KEYS.token);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          title: addedFilm.value,
          isWatched: false,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.massage || alert(`ошибка: ${response.status}`));
    }

    printFilm(data.data);
    addedFilm.value = '';
    return data;
  } catch (error) {
    alert(error.message);
  }
}

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

export async function changeStatusIsWatched(movieUuid, isWatched) {
  const token = getToken();

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/movies/${movieUuid}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          isWatched: isWatched,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Ошибка получения фильмов: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function removeMovie(movieUuid) {
  const token = getToken();
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/movies/${movieUuid}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Ошибка удаления фильма: ${response.status}`);
  }
  return response;
}
