import React, { useState, useEffect } from 'react';
import { getUserData, getUserStarred } from './api/github';
import Header from './components/header';
import Search from './components/search';
import Overview from './components/overview';
import Modal from './components/modal';
import ProgressBar from './components/progress-bar';
import { Box, BaseStyles } from '@primer/components';
// Apollo
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";

// Global.Auth
let TOKEN = '2b46981edd1fef0c84eaad54e7f86650f58e2446'

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

// Global.Apollo
const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
    }

    return forward(operation);
  });
// export const useAppApolloClient = () => {
//   const authToken = '2b46981edd1fef0c84eaad54e7f86650f58e2446';
//   return new ApolloClient({
//     link: authMiddleware(authToken).concat(httpLink),
//   });
// };
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authMiddleware('2b46981edd1fef0c84eaad54e7f86650f58e2446').concat(httpLink),
});
const GetRepositoryInfoQuery = gql`
{
  viewer {
    starredRepositories(first: 100) {
      edges {
        starredAt
        node {
          name
          description,
          repositoryTopics(first: 100) {
            edges {
              node {
                id
                topic {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [modal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleUsername = (username) => setUsername(username);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const tmpUser = await getUserData(username);
        // const stars = await getUserStarred(username);

        const result = await client
          .query({
            query: GetRepositoryInfoQuery
          });
        setUser(tmpUser);
      } catch (err) {
        console.log(err)
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
