import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
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
				Resume coming soon!
				<Link
					style={{
						color: '#526089',
						textDecoration: 'underline',
					}}
					to='/projects'
				></Link>
			</h1>
		</div>
	);
};

export default Resume;
