async function getData(url) {
  let res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  let data = await res.json();

  return data;
}

async function getRepos(url, per_page = 7) {
  let repos = await getData(`${url}?sort=pushed&per_page${per_page}`);

  return repos;
}

export async function getUserData(username) {
  const url = `https://api.github.com/users/${username}`;

  let user = await getData(url);

  if (user.message === 'Not Found') {
    throw new Error('Invalid username');
  }

  user.repos = await getRepos(user.repos_url);

  return user;
}
