import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '20%',
			}}
		>
			<h1
				style={{
					textAlign: 'center',
					fontSize: '3.6rem',
					color: 'white',
				}}
			>
				Currently under construction!
				<br />
				Some of my projects are available{' '}
				<Link
					style={{
						color: '#526089',
						textDecoration: 'underline',
					}}
					to='/projects'
				>
					here!
				</Link>
			</h1>
		</div>
	);
};

export default Home;
