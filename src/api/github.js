async function getData(url, token) {
  let res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${token}`
    },
  });
  if(!res.ok) {
    throw new Error('error');
  }
  let data = await res.json();

  return data;
}

export async function getUserData() {
  const url = `https://api.github.com/user`;
  const token = localStorage.getItem('token');
  let user = await getData(url, token);
  return user;
}
