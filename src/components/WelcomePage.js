import React, { useContext } from 'react';
import { Switch } from '@material-ui/core';
import { UserContext } from '../context/UserContext';

const WelcomePage = () => {
	const { darkMode, handleChange } = useContext(UserContext);

	const handleEntry = () => {
		// Triggers animation to reveal home page
		const welcomePage = document.querySelector('.enter-site');
		welcomePage.classList.toggle('access-site');
	};

	return (
		<div className='welcome-page light-mode'>
			<div className='enter-site'>
				<div className='toggle-wrapper'>
					<div
						className='welcome-page-mode-toggle'
						data-attr='icon'
					>
						<i class='fas fa-sun fa-3x'></i>
						<Switch
							color='primary'
							checked={darkMode.checkedB}
							onChange={handleChange}
							name='checkedB'
							inputProps={{
								'aria-label': 'primary checkbox',
							}}
						/>
					</div>
				</div>
				<h1 className='first no-clicking'>
					w<h1 className='reflection no-clicking'>w</h1>
				</h1>
				<h1 className='second no-clicking'>
					e<h1 className='reflection no-clicking'>e</h1>
				</h1>
				<h1 className='third no-clicking'>
					l<h1 className='reflection no-clicking'>l</h1>
				</h1>
				<h1 className='fourth no-clicking'>
					c<h1 className='reflection no-clicking'>c</h1>
				</h1>
				<h1 className='fifth no-clicking'>
					o<h1 className='reflection no-clicking'>o</h1>
				</h1>
				<h1 className='sixth no-clicking'>
					m<h1 className='reflection no-clicking'>m</h1>
				</h1>
				<h1 className='seventh no-clicking'>
					e<h1 className='reflection no-clicking'>e</h1>
				</h1>
				<div className='door' onClick={handleEntry}>
					<i className='fas fa-door-open top-door '></i>
					<br></br>
					<i className='fas fa-door-open reflection-door'></i>
					{/* <h1>click me</h1> */}
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
