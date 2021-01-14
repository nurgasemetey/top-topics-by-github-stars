import React, { useState, useEffect } from 'react';
import { getUserData, getUserStarred } from './api/github';
import Header from './components/header';
import Search from './components/search';
import Overview from './components/overview';
import Modal from './components/modal';
import ProgressBar from './components/progress-bar';
import { Box, BaseStyles } from '@primer/components';

import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import myData from './starred_repos.json';
import _ from 'lodash';
import moment from 'moment';
// Global.Auth
let TOKEN = '8b9f96a9cf836b77096abee02dd837a42f2c7f97'

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authMiddleware(TOKEN).concat(httpLink),
});

const firstQuery = gql`
query($page_index:Int!){
  viewer {
    starredRepositories(first: $page_index) {
      edges {
        cursor
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


const nextQueries = gql`
query($page_index:Int!, $page_cursor:String!){
  viewer {
    starredRepositories(first: $page_index, after: $page_cursor) {
      edges {
        cursor
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
        let result = await client
          .query({
            query: firstQuery,
            variables: {
              "page_index": 100
            }
          });
          const firstStarredRepositories = myData;
        // const firstStarredRepositories = result.data.viewer.starredRepositories.edges;
        // if (firstStarredRepositories.length === 100) {
        //   let cursor = firstStarredRepositories[99].cursor;
        //   while (true) {
        //     let result = await client
        //       .query({
        //         query: nextQueries,
        //         variables: {
        //           "page_index": 100,
        //           "page_cursor": cursor
        //         }
        //       });
        //     const starredRepositories = result.data.viewer.starredRepositories.edges;
        //     firstStarredRepositories.push(...starredRepositories);
        //     console.log(starredRepositories.length);
        //     if(starredRepositories.length === 0){
        //       break;
        //     }
        //     else{
        //       cursor = starredRepositories[starredRepositories.length-1].cursor;
        //     } 
        //   }
        // }
        var groupedByMonth = _.groupBy(firstStarredRepositories, item => {
          const starredAtTime = moment(item.starredAt);
          const value=  `${starredAtTime.year()}-${starredAtTime.month()}`;
          return value;
        });
      
        console.log(groupedByMonth);

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
