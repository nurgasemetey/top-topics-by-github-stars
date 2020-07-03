import React, { useRef } from 'react';
import { TextInput, Flex, ButtonPrimary } from '@primer/components';

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
          placeholder='Username'
          variant={[null, 'large']}
          ref={inputText}
        />
        <ButtonPrimary
          sx={{ fontWeight: 'normal' }}
          variant={['small', 'large']}
        >
          Analyze
        </ButtonPrimary>
      </form>
    </Flex>
  );
};
