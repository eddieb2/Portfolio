import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
	root: {
		// flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Nav = () => {
	// const { darkMode, handleChange } = useContext(UserContext);
	const classes = useStyles();
	const { history } = useHistory();

	return (
		<div className={classes.root}>
			<AppBar
				position='static'
				style={{ backgroundColor: '#526089' }}
			>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						className={classes.title}
					></Typography>
					<Button
						component={Link}
						to='/'
						color='inherit'
						style={{ fontSize: '2rem' }}
					>
						About
					</Button>
					<Button
						component={Link}
						to='/projects'
						color='inherit'
						style={{ fontSize: '2rem' }}
					>
						Projects
					</Button>
					<Button
						component={Link}
						to='/resume'
						color='inherit'
						style={{ fontSize: '2rem' }}
					>
						Resume
					</Button>
				</Toolbar>
			</AppBar>
		</div>
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
