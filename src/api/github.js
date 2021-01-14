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

async function getRepos(url, per_page = 7) {
  let repos = await getData(`${url}?sort=pushed&per_page${per_page}`);

  return repos;
}

export async function getUserData(username, token) {
  const url = `https://api.github.com/users/${username}`;

  let user = await getData(url, token);

  if (user.message === 'Not Found') {
    throw new Error('Invalid username');
  }

  return user;
}
