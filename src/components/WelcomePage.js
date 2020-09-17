import React, { useContext } from 'react';
import { Switch } from '@material-ui/core';
import { UserContext } from '../context/UserContext';

const WelcomePage = () => {
	const { darkMode, handleChange } = useContext(UserContext);

	const handleEntry = () => {
		const welcomePage = document.querySelector('.enter-site');
		welcomePage.classList.toggle('access-site');
	};

	return (
		<>
			<div className='enter-site'>
				<div className='toggle-wrapper'>
					<div className='welcome-page-mode-toggle'>
						<i class='fas fa-sun fa-3x'></i>
						<Switch
							checked={darkMode.checkedB}
							onChange={handleChange}
							color='primary'
							name='checkedB'
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
					</div>
				</div>
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
