import React from 'react';

const WelcomePage = () => {
  const handleEntry = () => {
    const welcomePage = document.querySelector('.enter-site');
    welcomePage.classList.toggle('access-site');
  };

  return (
    <>
      <div className="enter-site">
        <div className="description">
          <h1>minimalism</h1>
          <h1>theme</h1>
        </div>
        <div className="first">w</div>
        <div className="second">e</div>
        <div className="third">l</div>
        <div className="fourth">c</div>
        <div className="fifth">o</div>
        <div className="sixth">m</div>
        <div className="seventh">e</div>
        <div className="door" onClick={handleEntry}>
          <i className="fas fa-door-open"></i>
          <h1>click me</h1>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
