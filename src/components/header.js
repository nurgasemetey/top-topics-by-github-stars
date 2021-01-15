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
    <a href="https://github.com/nurgasemetey/top-topics-by-github-stars/"
      rel="noopener noreferrer"
      target="_blank">
      <MarkGithubIcon size='44' mr={[null, 3]} />
    </a>
    <Heading
      color='black'
      as='h1'
      fontSize={4}
      textAlign='center'
      mt={[2, 0]}
    >
      Your Top Topics By Your Star History  on Github
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
