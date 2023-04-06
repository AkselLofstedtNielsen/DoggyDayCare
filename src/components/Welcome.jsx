

import React, { useEffect, useState } from 'react';

const Welcome = (props) => {
  
  const handleStartClick = () => {
    props.setPage('catalog');
  };

  return (
    <div className='welcome-container'>
      <h1>Welcome to Doggy day care!</h1>
      <p>Click the button below to start browsing.</p>
      <button onClick={handleStartClick}>Start Browsing</button>
    </div>
  );
}

export default Welcome;
