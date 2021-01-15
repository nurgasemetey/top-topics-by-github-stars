import React from 'react';
import styled from 'styled-components';
import { ProgressBar as primeProgressBar, Text, Flex,Box } from '@primer/components';

const ProgressBar = styled(primeProgressBar)`
  @keyframes moveIndeterminate {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: moveIndeterminate;
  animation-timing-function: linear;
  background-size: 150%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    to right,
    ${(props) => props.bg || '#0366d6'} 30%,
    #ededed 30%
  );
`;

export default ({starsFetched}) => (
  <Flex
    flexDirection={['column']}
    alignItems='center'
    justifyContent='center'
  >
    <Text mr={3}>{starsFetched} stars fetched</Text>
    <ProgressBar barSize='large' width={['80vw', null, 'small']} mx='auto' />
  </Flex>
  
);
