import React from 'react';
import { Flex, Heading, Label, Box } from '@primer/components';
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
    <Box p={3}>
      <a href="https://twitter.com/nurgasemetey"
        rel="noopener noreferrer"
        target="_blank">
        <Label variant="medium" bg="#3CBDEF" m={1}>
          Built By @nurgasemetey
        </Label>
      </a>
    </Box>
  </Flex>
);
