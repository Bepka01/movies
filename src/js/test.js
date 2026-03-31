const getMovies = async () => {
  const token = localStorage.getItem('jwt');
  const res = await fetch('/api/movies', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
