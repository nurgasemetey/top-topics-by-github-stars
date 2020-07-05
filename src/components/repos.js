import React from 'react';
import {
  Box,
  BorderBox,
  Button,
  Flex,
  Heading,
  Link,
  Text,
} from '@primer/components';
import { StarIcon, RepoIcon, RepoForkedIcon } from '@primer/styled-octicons';

const Repo = ({
  repo: { name, html_url, description, stargazers_count, forks, language },
}) => (
  <Flex as='li' p={2} width={[1, 1 / 2, null, 1 / 3]}>
    <BorderBox p='3' width='100%'>
      <RepoIcon mr={2} />
      <Link fontWeight='bold' fontSize='1' href={html_url}>
        {name}
      </Link>
      <Text as='p' color='gray.6' fontSize='0' mt='2' mb='3'>
        {description}
      </Text>
      <Box as='span' color='gray.6'>
        <Text fontSize={0} mr={3}>
          {language}
        </Text>
        <Link href={`${html_url}/stargazers`} fontSize={0} muted>
          <StarIcon size='small' aria-label='Star' /> {stargazers_count}
        </Link>
        <Link href={`${html_url}/network/members`} fontSize={0} ml={3} muted>
          <RepoForkedIcon size='small' aria-label='Fork' /> {forks}
        </Link>
      </Box>
    </BorderBox>
  </Flex>
);

export default ({ data: { repos, login } }) => (
  <>
    <Heading as='h3' fontSize={4} textAlign='center' color='primary' my='3'>
      Repositories
    </Heading>
    <Flex as='ol' flexWrap='wrap' p='0' m='0'>
      {repos.slice(0, 6).map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </Flex>
    {repos.length > 6 && (
      <Box sx={{ textAlign: 'center' }}>
        <Button
          sx={{ fontWeight: 'normal' }}
          as='a'
          textAlign='center'
          variant='large'
          href={`https://github.com/${login}?tab=repositories`}
        >
          View all
        </Button>
      </Box>
    )}
  </>
);
