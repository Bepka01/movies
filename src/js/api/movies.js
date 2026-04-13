import { getToken } from '../utils/helpers';

export async function sendFilm(title) {
  const token = getToken();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          title: title,
          isWatched: false,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.massage || alert(`ошибка: ${response.status}`));
    }

    return data;
  } catch (error) {
    alert(error.message);
  }
}

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
