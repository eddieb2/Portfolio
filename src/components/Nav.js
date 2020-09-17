import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
// import { Switch } from '@material-ui/core';
import { UserContext } from '../context/UserContext';

const Nav = () => {
	// const location = useLocation();
	// const { darkMode, handleChange } = useContext(UserContext);

	// const dropDownHandler = (event) => {
	// 	const list = document.querySelectorAll('a');
	// 	// const clickMe = document.querySelector('.click-me');
	// 	const codeIcons = document.querySelectorAll('.codeIcons');

	// 	// Adds and removes the visible class to the anchor elements
	// 	list.forEach((item) => {
	// 		item.classList.toggle('visible');
	// 	});

	// 	// Applies the animation to the icons in the nav
	// 	codeIcons.forEach((item) => {
	// 		item.classList.toggle('icon-animation-part-1');
	// 		item.classList.toggle('icon-animation-part-2');
	// 	});

	// 	// Hides the "Click Me" text by the hamburger icon
	// 	// clickMe.classList.toggle('hidden');
	// };

	return (
		<>
			<nav>
				{/* <h1>eddie blanciak</h1> */}
				{/* <h2>full-stack web dev</h2> */}
				<div className='link-wrapper'>
					<a href='#'>About</a>
					<a href='#'>Projects</a>
					<a href='#'>Resume</a>
					<a href='#'>Contact</a>
				</div>
				<div className='icon-wrapper'>
					<i
						class='fab fa-linkedin'
						onClick={() => {
							window.location.href =
								// 'https://www.linkedin.com/in/edward-blanciak-7a78b189/';
								window.open(
									'https://www.linkedin.com/in/edward-blanciak-7a78b189/'
								);
						}}
					></i>
					<i
						class='fab fa-github-square'
						onClick={() => {
							// window.location.href = 'https://github.com/eddieb2';
							window.open('https://github.com/eddieb2');
						}}
					></i>
				</div>
			</nav>
		</>
	);
};
export default Nav;
