import { inputLoginSign, inputMailSign, inputPassSign } from '../sign-up';

export async function register() {
  try {
    const response = await fetch(
      'http://localhost:1337/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: inputLoginSign.value,
          password: inputPassSign.value,
          email: inputMailSign.value,
        }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.massage || alert(`ошибка: ${response.status}`));
    }
    return data;
  } catch (error) {
    alert(error.massage);
  }
}
