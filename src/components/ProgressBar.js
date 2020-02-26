import React from 'react';

const ProgressBar = () => (
  <div className='columns is-centered'>
    <div className='column is-two-thirds'>
      <progress className='progress is-primary' max='100' />
    </div>
  </div>
);

export default ProgressBar;
