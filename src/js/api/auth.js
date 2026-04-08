import { inputLogin, inputPassword } from '../ui/auth-ui';

export async function login() {
  console.log(import.meta.env.VITE_API_URL);
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: inputPassword.value,
        email: inputLogin.value,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || `Ошибка: ${response.status}`);
    }
    return data;
  } catch (error) {
    alert(error.message);
  }
}
