import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { gsap } from 'gsap';

const Home = () => {
	const location = useLocation();

	useEffect(() => {}, [location]);

	return (
		<div className='home-wrapper'>
			<div className='inner-home-wrapper'>
				<h1>Website Under Repair...</h1>
				<div className='heart'></div>
			</div>
			{/* <div>Under Construction</div> */}
		</div>
	);
};

export default Home;
