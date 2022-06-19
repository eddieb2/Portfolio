import React, { useContext } from 'react';
import { Switch } from '@material-ui/core';
import { UserContext } from '../context/UserContext';

const WelcomePage = () => {
	const { darkMode, handleChange } = useContext(
		UserContext
	);

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
<<<<<<< HEAD
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
=======
				</div> */}
				<div className='first no-clicking'>
					w
					<div className='reflection no-clicking'>
						w
					</div>
				</div>
				<div className='second no-clicking'>
					e
					<div className='reflection no-clicking'>
						e
					</div>
				</div>
				<div className='third no-clicking'>
					l
					<div className='reflection no-clicking'>
						l
					</div>
				</div>
				<div className='fourth no-clicking'>
					c
					<div className='reflection no-clicking'>
						c
					</div>
				</div>
				<div className='fifth no-clicking'>
					o
					<div className='reflection no-clicking'>
						o
					</div>
				</div>
				<div className='sixth no-clicking'>
					m
					<div className='reflection no-clicking'>
						m
					</div>
				</div>
				<div className='seventh no-clicking'>
					e
					<div className='reflection no-clicking'>
						e
					</div>
				</div>
				<div
					className='door'
					onClick={handleEntry}
				>
>>>>>>> 6b54b11e195e2f36d02d64d9314932680e0bc795
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
