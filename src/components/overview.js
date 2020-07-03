import React from 'react';
import User from './user';
import Counter from './counter';
import Repos from './repos';
import { Box, Link, Text, Heading } from '@primer/components';

export default ({
  data: {
    login,
    name,
    company,
    blog,
    bio,
    location,
    avatar_url,
    followers,
    following,
    public_repos,
    public_gists,
    repos,
  },
}) => (
  <Box p={3} id='overview'>
    <Link href='#overview' muted>
      <Heading
        color='black'
        textAlign='center'
        lineHeight='condensed'
        my={3}
        fontSize={[6, null, null, 7]}
      >
        Overview for <Text color='blue.5'>{login}</Text>
      </Heading>
    </Link>
    <User data={{ avatar_url, name, bio, company, location, blog }} />
    <Counter
      data={{ login, followers, following, public_repos, public_gists }}
    />
    <Repos data={{ repos, login }} />
  </Box>
);
