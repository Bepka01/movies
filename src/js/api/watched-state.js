import { getToken } from '../utils/helpers';

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
