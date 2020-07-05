import React from 'react';
import { Dialog, Box, Text } from '@primer/components';
import { InfoIcon } from '@primer/styled-octicons';

export default ({ show, toggleModal }) => (
  <Dialog isOpen={show} onDismiss={toggleModal}>
    <Dialog.Header alignItems='center'>
      <InfoIcon mr={2} />
      <Text>Invalid username</Text>
    </Dialog.Header>
    <Box p={3}>
      <Text>Please try another one</Text>
    </Box>
  </Dialog>
);
