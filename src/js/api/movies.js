import { STORAGE_KEYS } from '../utils/constants';
import { printFilm } from '../saveFilm';

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
