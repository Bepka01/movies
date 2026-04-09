import { STORAGE_KEYS } from '../utils/constants';

export async function changeStatusIsWatched(movieUuid, isWatched) {
  const token = localStorage.getItem(STORAGE_KEYS.token);

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
  const data = await response.json();
  return data;
}
