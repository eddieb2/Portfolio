import React from 'react';

const Enter = () => {
  const handleEntry = () => {
    const div = document.querySelector('.enter-site');
    div.classList.toggle('access-site');
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
        <button onClick={handleEntry}>
          <i className="fas fa-door-open"></i>
        </button>
      </div>
    </>
  );
};

export default Enter;
