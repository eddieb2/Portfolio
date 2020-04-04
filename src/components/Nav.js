import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const dropDownHandler = (event) => {
    const list = document.querySelectorAll('a');
    list.forEach((item) => {
      item.classList.toggle('visible');
    });
  };

  return (
    <>
      <div className="drop-down-icon" onClick={dropDownHandler}>
        <i className="fas fa-bars fa-5x"></i>
      </div>
      <nav>
        <Link to="/">
          <span>H </span>ome
        </Link>
        <Link to="/about">
          <span>A </span>bout
        </Link>
        <Link to="/projects">
          <span>P </span>rojects
        </Link>
        <Link to="/resume">
          <span>R </span>esume
        </Link>
        <Link to="/contact">
          <span>C </span>ontact
        </Link>
      </nav>
    </>
  );
};
export default Nav;
