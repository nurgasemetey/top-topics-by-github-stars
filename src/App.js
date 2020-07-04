import React, { useState, useEffect } from 'react';
import { getUserData } from './api/github';
import Header from './components/header';
import Search from './components/search';
import Overview from './components/overview';
import Modal from './components/Modal';
import ProgressBar from './components/progress-bar';
import { Box, BaseStyles } from '@primer/components';

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
    <BaseStyles>
      <Header />
      <Search handleUsername={handleUsername} />
      <Box width={[1, null, 'medium', 'large']} mx='auto'>
	{isLoading ? <ProgressBar /> : user && <Overview data={user} />}
      </Box> 
      <Modal show={modal} toggleModal={toggleModal} />
    </BaseStyles>
  );
};

export default App;
