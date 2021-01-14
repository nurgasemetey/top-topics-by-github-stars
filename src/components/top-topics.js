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
import { StarIcon, RepoIcon, CalendarIcon } from '@primer/styled-octicons';

const TopTopic = ({
  topTopic: { key, topTopics },
}) => (
  <Flex
    // alignItems="center" 
    // justifyContent="center" 
    // flexDirection="column" 
    // justifyContent='space-evenly'
    as='li'
    p={2}
    width={[1, 1 / 2, null, 1 / 3]}
  >
    <BorderBox
      p='3'
      width='100%'
    >
      <CalendarIcon mr={2} />

      {/* <Heading pl='5' fontSize={3} mb={1}>
        {key}
      </Heading> */}

      <Text pl='3' fontWeight='bold'>
        {key}
      </Text>
      <div style={{marginTop:20}} >

        {
          topTopics.map(topTopic => (
            <ul><Text>{topTopic.value}</Text></ul>
          ))
        }
      </div>
      {/* <Text as='p' color='gray.6' fontSize='0' mt='2' mb='3'>
        {key}
      </Text> */}
      {/* <RepoIcon mr={2} />
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
      </Box> */}
    </BorderBox>
  </Flex>
);

export default ({ data: { topTopics, login } }) => (
  <>
    <Heading as='h3' fontSize={4} textAlign='center' color='primary' my='3'>
      Top Topics
    </Heading>
    <Flex as='ol' flexWrap='wrap' p='0' m='0'>
      {topTopics.map((topTopic) => (
        <TopTopic key={topTopic.key} topTopic={topTopic} />
      ))}
    </Flex>
    {/* {repos.length > 6 && (
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
    )} */}
  </>
);
