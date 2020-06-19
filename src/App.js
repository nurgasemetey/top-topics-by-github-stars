import React, { useState, useEffect } from 'react';
import { getUserData } from './api/github';
import Header from './components/Header';
import Search from './components/Search';
import UserInfo from './components/UserInfo';
import Modal from './components/Modal';
import ProgressBar from './components/ProgressBar';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [modal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleUsername = username => setUsername(username);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const tmpUser = await getUserData(username);
        setUser(tmpUser);
      } catch (err) {
        if (err.message === 'Invalid username') {
          setUser(null);
          setLoading(false);
          setModal(true);
        }
      }
      setLoading(false);
    }

    if (username.length) loadData();
  }, [username]);

  return (
    <div className="App">
      <Header />
      <Search handleUsername={handleUsername} />
      {isLoading ? <ProgressBar /> : user && <UserInfo user={user} />}
      <Modal show={modal} toggleModal={toggleModal} />
    </div>
  );
};

export default App;
