import React from 'react';
import { Flex, Heading } from '@primer/components';
import { MarkGithubIcon } from '@primer/styled-octicons';

export default () => (
  <Flex
    flexDirection={['column', 'row']}
    alignItems='center'
    justifyContent='center'
    height={['150px', '180px']}
  >
    <MarkGithubIcon size='44' mr={[null, 3]} />
    <Heading
      color='black'
      as='h1'
      fontSize={[4, 6, null, 7]}
      textAlign='center'
      mt={[2, 0]}
    >
      Your Top Topics on Github
    </Heading>
  </Flex>
);
