import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleUsername }) => {
  const inputText = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const username = inputText.current.value;
    if (!username.length) return;
    inputText.current.value = '';
    inputText.current.blur();
    handleUsername(username);
  };

  return (
    <section className='section'>
      <form onSubmit={handleSubmit}>
        <div className='field has-addons has-addons-centered'>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='Username'
              ref={inputText}
              required
            />
          </div>
          <div className='control'>
            <button className='button is-primary'>Analyze</button>
          </div>
        </div>
      </form>
    </section>
  );
};

Search.propTypes = {
  handleUsername: PropTypes.func.isRequired
};

export default Search;
