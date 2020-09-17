import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Home = () => {
	const location = useLocation();

	useEffect(() => {}, [location]);

	return <div className='home-page-wrapper'>{/* <p>Work in progress</p> */}</div>;
};

export default Home;
