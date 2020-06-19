async function getData(url) {
  let res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  res = await res.json();

  return res;
}

export async function getUserData(username) {
  const url = `https://api.github.com/users/${username}`;

  let user = await getData(url);

  if (user.message === 'Not Found') {
    throw new Error('Invalid username');
  }

  user.repos = await getData(`${user.repos_url}?per_page=6&sort=pushed`);

  user.followers_info = await getData(`${user.followers_url}?per_page=8`);

  return user;
}
