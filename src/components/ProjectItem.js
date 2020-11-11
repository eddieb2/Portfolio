import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		boxShadow: '10px 10px 10px 0 black',
		border: '3px solid #9ba2c1',
		[theme.breakpoints.up(2000)]: {
			maxWidth: 500,
		},
		[theme.breakpoints.down(1400)]: {
			margin: '2%',
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: '5%',
		},
		[theme.breakpoints.down(450)]: {
			maxWidth: 300,
		},
	},
	media: {
		// height: '100%',
		// width: '100%',
		paddingTop: '56.25%', // 16:9
		cursor: 'pointer',
		margin: '5px',
		border: '2px solid #9ba2c1',
		boxShadow: '3px 5px 8px 0px gray',
		borderRadius: '5px',
	},
	avatar: {
		backgroundColor: 'black',
	},
	para: {
		fontSize: '1.2rem',
	},
	cardHeader: {
		backgroundColor: '#526089',
		marginBottom: '4%',
		borderBottom: '2px solid #526089',
		borderBottomRightRadius: '5px',
		borderBottomLeftRadius: '5px',
		boxShadow: '5px 2px 10px 0 gray',
	},
}));

// SECTION Main Component
const ProjectItem = ({
	item: {
		name,
		tools,
		desc,
		photo,
		video,
		deployURL,
		date,
		githubLink,
	},
}) => {
	const classes = useStyles();
	const theme = useTheme();

	const matches = useMediaQuery(
		theme.breakpoints.down('450')
	);

	return (
		<Card className={classes.root}>
			<CardHeader
				className={classes.cardHeader}
				avatar={
					<Avatar className={classes.avatar}>
						<i
							style={{
								color: 'turquoise',
								fontSize: '2rem',
							}}
							class='fab fa-react'
						></i>
					</Avatar>
				}
				action={
					<>
						<IconButton aria-label='links'>
							<i
								style={{
									color: 'white',
									fontSize: '2.4rem',
								}}
								onClick={() =>
									window.open(githubLink)
								}
								class='fab fa-github-alt'
							></i>
						</IconButton>
						<IconButton aria-label='links'>
							<i
								style={{
									color: 'white',
									fontSize: '2.2rem',
								}}
								onClick={() =>
									window.open(deployURL)
								}
								class='fab fa-chrome'
							></i>
						</IconButton>
					</>
				}
				titleTypographyProps={
					matches
						? { variant: 'h5' }
						: { variant: 'h4' }
				}
				title={name}
				subheader={date}
			/>

			<div>
				<CardMedia
					className={classes.media}
					image={photo}
					title={name}
					onClick={() => window.open(deployURL)}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='h2'
						style={{
							textDecoration: 'underline',
						}}
					>
						Description:
					</Typography>
					<Typography
						variant='body1'
						color='textPrimary'
						component='p'
						className={classes.para}
					>
						{desc}
					</Typography>
				</CardContent>
				<CardContent>
					{/* SECTION: Front End */}
					<Grid
						container
						alignContent='space-around'
						spacing={4}
					>
						<Grid item xs>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{
									textDecoration:
										'underline',
								}}
							>
								Front-end
							</Typography>
							{tools.frontend ? (
								tools.frontend.map((i) => (
									<Typography
										component='li'
										variant='body1'
									>
										{i}
									</Typography>
								))
							) : (
								<Typography>
									NO FE
								</Typography>
							)}
						</Grid>

						{/* SECTION: Back End */}
						<Grid item xs>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{
									textDecoration:
										'underline',
								}}
							>
								Back-end
							</Typography>
							{tools.backend ? (
								tools.backend.map((i) => (
									<Typography
										component='li'
										variant='body1'
									>
										{i}
									</Typography>
								))
							) : (
								<Typography>
									No back-end was used in
									the project.
								</Typography>
							)}
						</Grid>
						{/* SECTION: Database  */}
						<Grid item xs>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{
									textDecoration:
										'underline',
								}}
							>
								Database
							</Typography>
							{tools.database ? (
								<Typography component='li'>
									{tools.database}
								</Typography>
							) : (
								<Typography>
									No database was used in
									the project.
								</Typography>
							)}
						</Grid>
					</Grid>
				</CardContent>
			</div>
		</Card>
	);
};

export default ProjectItem;
