import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import UserInfo from './components/UserInfo';
import Modal from './components/Modal';
import ProgressBar from './components/ProgressBar';
import './App.css';

const App = () => {
  const [url, setUrl] = useState('');
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleUsername = username =>
    setUrl(`https://api.github.com/users/${username}`);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    const fetchUserData = async () => {
      const fetchRepos = async repos_url => {
        let res = await fetch(repos_url);
        let repos = await res.json();

        return repos;
      };

      const fetchFollowers = async followers_url => {
        let res = await fetch(followers_url);
        let followers = await res.json();

        return followers.reverse();
      };

      setLoading(true);

      let res = await fetch(url);
      let user = await res.json();

      if (user.message === 'Not Found') {
        setLoading(false);
        if (user) setUser(null)
        setModal(true);
        setUrl('');
        return;
      }

      user.repos = await fetchRepos(`${user.repos_url}?per_page=6&sort=pushed`);
      user.followers_info = await fetchFollowers(
        `${user.followers_url}?per_page=8`
      );

      user.created_at = new Date(user.created_at);

      setUser(user);
      setLoading(false);
    };

    if (url.length) fetchUserData();
  }, [url]);

  return (
    <div className='App'>
      <Header />
      <Search handleUsername={handleUsername} />
      {isLoading ? <ProgressBar /> : user && <UserInfo user={user} />}
      <Modal show={modal} toggleModal={toggleModal} />
    </div>
  );
};

export default App;
