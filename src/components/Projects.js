import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-around',
		marginTop: '2%',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
		[theme.breakpoints.down(1156)]: {
			flexWrap: 'wrap',
		},
	},
}));

const Projects = () => {
	const classes = useStyles();
	const [proj, setProj] = useState([
		{
			id: 1,
			name: 'GitHub Finder',
			date: 'November 2020',
			githubLink:
				'https://github.com/eddieb2/github-finder',
			tools: {
				frontend: [
					'React.js',
					'Axios',
					'React Router',
					'GitHub API',
					'Context API',
					'CSS3',
					'HTML5',
				],
			},
			desc:
				'This project utilizes the GitHub API inorder to search for users. This SPA uses Context API for state management, axios to fetch data, and react router for single page application routing. ',
			photo: require('../img/2020-11-10 14_25_46-GitHub Finder.png'),
			video: '',
			deployURL:
				'https://eblanciak-github-finder.netlify.app/',
		},
		{
			id: 2,
			name: 'Contact Keeper',
			date: 'November 2020',
			githubLink:
				'https://github.com/eddieb2/contact-keeper',
			tools: {
				frontend: [
					'React.js',
					'HTML5',
					'CSS3',
					'Axios',
					'React Router',
					'React Transition Group',
					'Context API',
				],
				backend: [
					'Express',
					'Bcryptjs',
					'Config',
					'Express-validator',
					'Mongoose',
					'Jsonwebtoken',
				],
				database: 'MongoDB',
			},
			desc:
				'This application is a full stack MERN contact manager. This application uses react router for SPA routing, fetch API for HTTP requests, Context API for state management, and JWT for authentication.',
			photo: require('../img/2020-11-10 14_43_22-Projects.js - Portfolio - Visual Studio Code.png'),
			video: '',
			deployURL:
				'https://agile-escarpment-82222.herokuapp.com/',
		},
		{
			id: 3,
			name: 'IT Logger',
			date: 'November 2020',
			githubLink:
				'https://github.com/eddieb2/it-logger',
			tools: {
				frontend: [
					'React.js',
					'HTML5',
					'CSS3',
					'Materialize',
					'Axios',
					'React Router',
					'Redux',
					'React-hook-form',
				],
				backend: [
					'Express',
					'Bcryptjs',
					'Config',
					'Express-validator',
					'Mongoose',
					'Jsonwebtoken',
				],
				database: 'MongoDB',
			},
			desc:
				'This application is a full stack MERN IT logger. This application utilizes Redux for state management and Materialize for the UI.',

			photo: require('../img/2020-11-10 14_47_10-It Logger.png'),
			video: '',
			deployURL:
				'https://aqueous-cliffs-16544.herokuapp.com/',
		},
	]);

	return (
		<div className={classes.root}>
			{proj.map((item) => (
				<ProjectItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default Projects;
