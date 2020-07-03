import React from 'react';
import styled from 'styled-components';
import {
  Avatar as primeAvatar,
  Box,
  Button,
  Text,
  Heading,
  Link,
  Flex,
} from '@primer/components';
import {
  LinkIcon,
  LocationIcon,
  OrganizationIcon,
} from '@primer/styled-octicons';

const Avatar = styled(primeAvatar)`
  border-radius: 100px;
`;

const octiconsProps = {
  mr: 1,
  verticalAlign: 'middle',
  color: '#6a737d',
};

export default ({
  data: { avatar_url, name, bio, company, location, blog },
}) => (
  <>
    <Flex alignItems='center' justifyContent='center' my={5}>
      <Avatar size={120} mr={[3, null, null, 'none']} src={avatar_url} />
      <Box>
        <Heading display='inline-block' fontSize={[3, null, null, 4]}>
          {name}
        </Heading>

        <Box as='ul' pl={0} my='0' sx={{ listStyle: 'none' }}>
          {company && (
            <Box as='li'>
              <OrganizationIcon {...octiconsProps} />
              <Text fontSize='1'>{company}</Text>
            </Box>
          )}
          {location && (
            <Box as='li'>
              <LocationIcon {...octiconsProps} />
              <Text fontSize='1'>{location}</Text>
            </Box>
          )}
          {blog && (
            <Box as='li'>
              <LinkIcon {...octiconsProps} />
              <Link color='gray.9' hoverColor='blue.5' fontSize='1' href={blog}>
                {blog}
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Flex>

    {bio && (
      <Text as='p' textAlign='center' fontSize={[1, null, null, 1]} mt='0'>
        {bio}
      </Text>
    )}
    <Button as='a' href='#'>
      Follow
    </Button>
  </>
);
