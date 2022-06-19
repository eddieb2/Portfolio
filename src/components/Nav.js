import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	navLinks: {
		fontSize: '2rem',
		[theme.breakpoints.down(350)]: {
			fontSize: '1.6rem',
		},
	},
}));

const Nav = () => {
	// const { darkMode, handleChange } = useContext(UserContext);
	const classes = useStyles();

	return (
		<>
			<nav>
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
							window.location.href = window.open(
								'https://www.linkedin.com/in/edward-blanciak-7a78b189/'
							);
						}}
					></i>
					<i
						class='fab fa-github-square'
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

// <>
// 	<nav style={{ fontSize: '2.6' }}>
// 		<div className='link-wrapper'>
// 			<a href='#'>About</a>
// 			<a href='#'>Education</a>
// 			<a href='#'>Projects</a>
// 			<a href='#'>Contact</a>
// 		</div>
// 		<div className='icon-wrapper'>
// 			<i
// 				className='fab fa-linkedin'
// 				onClick={() => {
// 					window.location.href = window.open(
// 						'https://www.linkedin.com/in/edward-blanciak-7a78b189/'
// 					);
// 				}}
// 			></i>
// 			<i
// 				className='fab fa-github-square'
// 				onClick={() => {
// 					window.open(
// 						'https://github.com/eddieb2'
// 					);
// 				}}
// 			></i>
// 		</div>
// 	</nav>
// </>
