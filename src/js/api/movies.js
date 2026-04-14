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
          title,
          isWatched: false,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Ошибка: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllFilms(filter) {
  const token = getToken();

  let url = `${import.meta.env.VITE_API_URL}/movies`;

  if (filter === 'watched') {
    url += '?filters[isWatched][$eq]=true';
  }

  if (filter === 'unwatched') {
    url += '?filters[isWatched][$eq]=false';
  }
  try {
    const response = await fetch(url, {
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
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function changeStatusIsWatched(movieUuid, isWatched) {
  const token = getToken();

  try {
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
            isWatched,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Ошибка обновления статуса: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function removeMovie(movieUuid) {
  const token = getToken();

  try {
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

    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
}
