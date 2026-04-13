export async function register({ email, password }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/local/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
          email: email,
        }),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Ошибка регистрации: ${response.status}`);
    }
    return data;
  } catch (error) {
    alert(error.message);
  }
}
