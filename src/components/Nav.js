import React, { useContext } from 'react';

const Nav = () => {
	// const { darkMode, handleChange } = useContext(UserContext);

	return (
		<>
			<nav>
				<div className='link-wrapper'>
					<a href='#'>About</a>
					<a href='#'>Education</a>
					<a href='#'>Projects</a>
					<a href='#'>Contact</a>
				</div>
				<div className='icon-wrapper'>
					<i
						className='fab fa-linkedin'
						onClick={() => {
							window.location.href = window.open(
								'https://www.linkedin.com/in/edward-blanciak-7a78b189/'
							);
						}}
					></i>
					<i
						className='fab fa-github-square'
						onClick={() => {
							window.open('https://github.com/eddieb2');
						}}
					></i>
				</div>
			</nav>
		</>
	);
};
export default Nav;
