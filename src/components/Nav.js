import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const dropDownHandler = (event) => {
    const list = document.querySelectorAll('a');
    const clickMe = document.querySelector('.click-me');
    const greeting = document.querySelector('.greeting');
    const codeIcons = document.querySelectorAll('.codeIcons');

    list.forEach((item) => {
      item.classList.toggle('visible');
    });

    codeIcons.forEach((item) => {
      item.classList.toggle('hidden');
    });
    clickMe.classList.toggle('hidden');
    greeting.classList.toggle('hidden');
    console.log(codeIcons);
  };

  return (
    <>
      <div className="drop-down-icon" onClick={dropDownHandler}>
        <i className="fas fa-bars fa-5x"></i>
        <div className="click-me">Click Me</div>
      </div>
      <nav>
        <div className="greeting">
          <i className="fab fa-html5 codeIcons"></i>
          <i className="fab fa-css3-alt codeIcons"></i>
          <i className="fab fa-js codeIcons"></i>
          <i className="fab fa-react codeIcons"></i>
        </div>
        <Link to="/">
          <span>
            <i className="fas fa-square"></i>
          </span>
          {/* <span>
            <i class="far fa-square"></i>
          </span> */}
          home
        </Link>
        <Link to="/about">
          <span>
            <i className="far fa-square"></i>
          </span>
          about
        </Link>
        <Link to="/projects">
          <span>
            <i className="far fa-square"></i>
          </span>
          projects
        </Link>
        <Link to="/resume">
          <span>
            <i className="far fa-square"></i>
          </span>
          resume
        </Link>
        <Link to="/contact">
          <span>
            <i className="far fa-square"></i>
          </span>
          contact
        </Link>
      </nav>
    </>
  );
};
export default Nav;
