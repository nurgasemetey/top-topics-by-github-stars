async function getData(url, token) {
  let res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${token}`
    },
  });

  let data = await res.json();

  return data;
}

export async function getUserData(token) {
  const url = `https://api.github.com/user`;

  let user = await getData(url, token);

  if (user.message === 'Not Found') {
    throw new Error('Invalid username');
  }

  return user;
}
