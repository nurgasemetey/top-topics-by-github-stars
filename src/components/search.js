import React, { useRef } from 'react';
import { TextInput, Flex } from '@primer/components';
import { Search } from '@primer/octicons-react';

export default ({ handleUsername }) => {
  const inputText = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = inputText.current.value;
    if (!username.length) return;
    inputText.current.value = '';
    inputText.current.blur();
    handleUsername(username);
  };

  return (
    <Flex justifyContent='center' mb={5}>
      <form onSubmit={handleSubmit}>
        <TextInput
          width={['80vw', null, 'small']}
          icon={Search}
          placeholder='Username'
          ref={inputText}
        />
      </form>
    </Flex>
  );
};
