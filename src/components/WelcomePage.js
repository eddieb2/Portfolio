import React, { useState } from 'react';
import { Switch } from '@material-ui/core';

const WelcomePage = () => {
  const [darkMode, setDarkMode] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleEntry = () => {
    const welcomePage = document.querySelector('.enter-site');
    welcomePage.classList.toggle('access-site');
  };

  const handleChange = (event) => {
    setDarkMode({
      ...darkMode,
      [event.target.name]: event.target.checked,
    });

    const welcomePage = document.querySelector('.enter-site');
    welcomePage.classList.toggle('dark-mode');

    const navBar = document.querySelector('nav');
    navBar.classList.toggle('dark-mode-nav');
  };

  return (
    <>
      <div className='enter-site'>
        <Switch
          checked={darkMode.checkedB}
          onChange={handleChange}
          color='primary'
          name='checkedB'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <div className='first no-clicking'>
          w<div className='reflection no-clicking'>w</div>
        </div>
        <div className='second no-clicking'>
          e<div className='reflection no-clicking'>e</div>
        </div>
        <div className='third no-clicking'>
          l<div className='reflection no-clicking'>l</div>
        </div>
        <div className='fourth no-clicking'>
          c<div className='reflection no-clicking'>c</div>
        </div>
        <div className='fifth no-clicking'>
          o<div className='reflection no-clicking'>o</div>
        </div>
        <div className='sixth no-clicking'>
          m<div className='reflection no-clicking'>m</div>
        </div>
        <div className='seventh no-clicking'>
          e<div className='reflection no-clicking'>e</div>
        </div>
        <div className='door' onClick={handleEntry}>
          <i className='fas fa-door-open top-door '></i>
          <br></br>
          <i className='fas fa-door-open reflection-door'></i>
          {/* <h1>click me</h1> */}
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
