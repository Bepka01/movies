import { STORAGE_KEYS } from '../utils/constants';
import { printFilm } from '../printFilm';
import { dataMoviesLs } from '../utils/auth-storage';

export async function sendFilm() {
  const addedFilm = document.querySelector('.input__film');
  const token = localStorage.getItem(STORAGE_KEYS.token);

  try {
    const response = await fetch('http://localhost:1337/api/movies', {
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
    console.log(data);
    if (!response.ok) {
      throw new Error(data.massage || alert(`ошибка: ${response.status}`));
    }

    dataMoviesLs(data);
    printFilm(data);
    addedFilm.value = '';
    return data;
  } catch (error) {
    alert(error.message);
  }
}
