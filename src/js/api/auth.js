import { inputLogin, inputPassword } from '../ui/auth-ui';

export async function login() {
  try {
    const response = await fetch('http://localhost:1337/api/login', {
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
    alert('error.massage');
  }
}
