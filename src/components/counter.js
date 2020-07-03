import React from 'react';
import { Flex, Box, Heading, Link, Text } from '@primer/components';

const Item = ({ title, count, href }) => (
  <Box>
    <Text as='p' fontSize={['10px', 0, 1]} m={0}>
      {title}
    </Text>
    <Link href={href}>
      <Heading as='p' textAlign='center' color='blue.5'>
        {count}
      </Heading>
    </Link>
  </Box>
);

export default ({
  data: { login, followers, following, public_repos, public_gists },
}) => (
  <Flex justifyContent='space-evenly' my={4}>
    <Item
      title='FOLLOWERS'
      count={followers}
      href={`https://github.com/${login}?tab=followers`}
    />
    <Item
      title='FOLLOWING'
      count={following}
      href={`https://github.com/${login}?tab=following`}
    />
    <Item
      title='PUBLIC REPOS'
      count={public_repos}
      href={`https://github.com/${login}?tab=repositories`}
    />
    <Item
      title='PUBLIC GISTS'
      count={public_gists}
      href={`https://gist.github.com/${login}`}
    />
  </Flex>
);
