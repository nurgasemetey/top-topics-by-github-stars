import React, { useState, useEffect } from 'react';
import { getUserData, getUserStarred } from './api/github';
import Header from './components/header';
import Overview from './components/overview';
import Modal from './components/modal';
import ProgressBar from './components/progress-bar';
import { Box, BaseStyles } from '@primer/components';

import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import _ from 'lodash';
import moment from 'moment';
var count = require('count-array-values')

// Global.Auth
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
  const [modal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // const handleUsername = (username) => setUsername(username);

  const toggleModal = () => setModal(!modal);

  const saveToken = (token) => {
    localStorage.setItem('token', token);
    setModal(false);
    loadData();
  }


  const loadData = async () => {
    setLoading(true);
      try {
        const httpLink = new HttpLink({
          uri: 'https://api.github.com/graphql',
        });
        
        const authMiddleware = () =>
          new ApolloLink((operation, forward) => {
            // add the authorization to the headers
            const token = localStorage.getItem('token');
            if (token) {
              operation.setContext({
                headers: {
                  authorization: `Bearer ${token}`,
                },
              });
            }
        
            return forward(operation);
          });
        
        const client = new ApolloClient({
          cache: new InMemoryCache(),
          link: authMiddleware().concat(httpLink),
        });
        
        const tmpUser = await getUserData();
        // const firstStarredRepositories = myData;
        let result = await client
          .query({
            query: firstQuery,
            variables: {
              "page_index": 100
            }
          });
        const firstStarredRepositories = result.data.viewer.starredRepositories.edges;
        if (firstStarredRepositories.length === 100) {
          let cursor = firstStarredRepositories[99].cursor;
          while (true) {
            let result = await client
              .query({
                query: nextQueries,
                variables: {
                  "page_index": 100,
                  "page_cursor": cursor
                }
              });
            const starredRepositories = result.data.viewer.starredRepositories.edges;
            firstStarredRepositories.push(...starredRepositories);
            console.log(starredRepositories.length);
            if(starredRepositories.length === 0){
              break;
            }
            else{
              cursor = starredRepositories[starredRepositories.length-1].cursor;
            } 
          }
        }
        const cleaned = firstStarredRepositories.map((item)=> {
          const topicItems = item.node.repositoryTopics.edges;
          const topicList = topicItems.map((topicItem)=> topicItem.node.topic.name);
          return {
            starredAt: item.starredAt,
            topics: topicList
          };
        })
        const groupedByMonth = _.groupBy(cleaned, item => {
          const starredAtTime = moment(item.starredAt);
          const value=  `${starredAtTime.year()}-${starredAtTime.format("MM")}`;
          return value;
        });
        let topYearMonthTopics = [];
        Object.keys(groupedByMonth).forEach(function (key) {
          // do something with obj[key]
          let allTopics = [];
          for (let item of groupedByMonth[key]) allTopics.push(...item.topics);
          const stats = count(allTopics);
          let topTopics = _.take(stats, 3);
          const yearMonth = key.split('-');
          if(topTopics.length > 0) {
            topYearMonthTopics.push({
              key: key,
              topTopics: topTopics,
              month: moment(yearMonth[1], 'M').format('MMMM'),
              year:yearMonth[0]
            })
          }
          
       });
        tmpUser.topTopics = topYearMonthTopics;
        setUser(tmpUser);
      } catch (err) {
        console.log(err);
        setUser(null);
        setLoading(false);
        setModal(true);
      }
      setLoading(false);
  }

  useEffect(() => {
    async function load() {
      await loadData();
    }
    load();
    // if (TOKEN.length) loadData();
  }, []);

  return (
    <BaseStyles>
      <Header />
      {/* <Search handleUsername={handleUsername} /> */}
      <Box width={[1, null, 'medium', 'large']} mx='auto'>
        {isLoading ? <ProgressBar /> : user && <Overview data={user} />}
      </Box>
      <Modal show={modal} toggleModal={toggleModal} saveToken={saveToken}/>
    </BaseStyles>
  );
};

export default App;
