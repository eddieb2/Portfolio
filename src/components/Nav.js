import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const dropDownHandler = (event) => {
    const list = document.querySelectorAll('a');
    const clickMe = document.querySelector('.click-me');
    const greeting = document.querySelector('.greeting');
    const codeIcons = document.querySelectorAll('.codeIcons');

    // Adds and removes the visible class to the anchor elements
    list.forEach((item) => {
      item.classList.toggle('visible');
    });

    // Applies the animation to the icons in the nav
    codeIcons.forEach((item) => {
      item.classList.toggle('icon-animation-part-1');
      item.classList.toggle('icon-animation-part-2');
    });

    // Hides the "Click Me" text by the hamburger icon
    clickMe.classList.toggle('hidden');
  };

  return (
    <>
      <div className="drop-down-icon" onClick={dropDownHandler}>
        <i className="fas fa-bars fa-5x"></i>
        <div className="click-me">Click Me</div>
      </div>
      <nav>
        <div className="greeting">
          <i className="fab fa-html5 codeIcons icon-animation-part-1"></i>
          <i className="fab fa-css3-alt codeIcons icon-animation-part-1"></i>
          <i className="fab fa-js codeIcons icon-animation-part-1"></i>
          <i className="fab fa-react codeIcons icon-animation-part-1"></i>
        </div>
        <Link to="/">
          {location.pathname === '/' ? (
            <span>
              <i className="fas fa-square"></i>
            </span>
          ) : (
            <span>
              <i className="far fa-square"></i>
            </span>
          )}
          home
        </Link>
        <Link to="/about">
          {location.pathname === '/about' ? (
            <span>
              <i className="fas fa-square"></i>
            </span>
          ) : (
            <span>
              <i className="far fa-square"></i>
            </span>
          )}
          about
        </Link>
        <Link to="/projects">
          {location.pathname === '/projects' ? (
            <span>
              <i className="fas fa-square"></i>
            </span>
          ) : (
            <span>
              <i className="far fa-square"></i>
            </span>
          )}
          projects
        </Link>
        <Link to="/resume">
          {location.pathname === '/resume' ? (
            <span>
              <i className="fas fa-square"></i>
            </span>
          ) : (
            <span>
              <i className="far fa-square"></i>
            </span>
          )}
          resume
        </Link>
        <Link to="/contact">
          {location.pathname === '/contact' ? (
            <span>
              <i className="fas fa-square"></i>
            </span>
          ) : (
            <span>
              <i className="far fa-square"></i>
            </span>
          )}
          contact
        </Link>
      </nav>
    </>
  );
};
export default Nav;
