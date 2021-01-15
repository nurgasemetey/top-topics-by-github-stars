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
  topTopic: { key, topTopics, year, month, numberOfStars },
}) => (
  <Flex
    as='li'
    p={2}
    width={[1, 1 / 2, null, 1 / 3]}
  >
    <BorderBox
      p='3'
      width='100%'
    >
      <CalendarIcon mr={2} />

      <Text pl='3' fontWeight='bold'>
        {year}  {month}
      </Text>
      <StarIcon ml='3'size='small' aria-label='Star' />  {numberOfStars}
      <div style={{marginTop:20}} >

        {
          topTopics.map(topTopic => (
            <ul><Text>{topTopic.value}</Text></ul>
          ))
        }
      </div>
    </BorderBox>
  </Flex>
);

export default ({ data: { topTopics, login } }) => (
  <>
    <Heading as='h3' fontSize={4} textAlign='center' color='primary' my='3'>
      Your Top Topics By Month
    </Heading>
    <Flex as='ol' flexWrap='wrap' p='0' m='0'>
      {topTopics.map((topTopic) => (
        <TopTopic key={topTopic.key} topTopic={topTopic} />
      ))}
    </Flex>
  </>
);
