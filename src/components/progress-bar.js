import React from 'react';
import styled from 'styled-components';
import { ProgressBar as primeProgressBar } from '@primer/components';

const ProgressBar = styled(primeProgressBar)`
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

export default () => (
  <ProgressBar barSize='large' width={['80vw', null, 'inherit']} mx='auto' />
);
