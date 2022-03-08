import React from 'react';
import PropTypes from 'prop-types';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {
	Card,
	Box,
	Container,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Grid,
	withStyles,
	IconButton,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const customIcons = {
	1: {
		icon: <SentimentVeryDissatisfiedIcon />,
		label: 'Very Dissatisfied',
	},
	2: {
		icon: <SentimentDissatisfiedIcon />,
		label: 'Dissatisfied',
	},
	3: {
		icon: <SentimentSatisfiedIcon />,
		label: 'Neutral',
	},
	4: {
		icon: <SentimentSatisfiedAltIcon />,
		label: 'Satisfied',
	},
	5: {
		icon: <SentimentVerySatisfiedIcon />,
		label: 'Very Satisfied',
	},
};

const CardReviews = ({ review, classes }) => {
	function IconContainer(props) {
		const { value, ...other } = props;
		return <span {...other}>{customIcons[value].icon}</span>;
	}

	IconContainer.propTypes = {
		value: PropTypes.number.isRequired,
	};
	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<div className={classes.root}>
				<Typography variant='h5' component='h2' className={classes.title}>
					{review.user}:
				</Typography>
				<CardMedia className={classes.media}>
					{review.content} <br />
					<Typography variant='h3' component='h6' className={classes.title2}>
						Puntaje:
					</Typography>
					<Rating name='read-only' value={review.score} readOnly />
					<Rating
						className={classes.ratingc}
						name='read-only'
						value={review.score}
						IconContainerComponent={IconContainer}
						highlightSelectedOnly
						readOnly
					/>
				</CardMedia>
			</div>
		</Grid>

		//
	);
};

export default withStyles({
	ratingc: {
		marginLeft: '73px',
		color: '#FAA222',
		boder: '1px solid #red',
	},
	rating: {
		display: 'flex',
		direction: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title2: {
		font: 'bold',
		fontSize: '20px',
		color: '#6c6c6c',
	},
	rootg: {
		padding: '0px',
		margin: '0px',
		fontSize: 24,
		color: '#6c6c6c',
		marginTop: '0px',
	},
	score: {
		color: '#FAA222',
	},
	contenedor: {},
	media: {
		color: '#6c6c6c',
	},
	title: {
		padding: '0px',
		margin: '0px',
		fontSize: 24,
		color: 'black',
		marginTop: '0px',
	},
	root: {
		backgroundColor: '#f5f5f5',
		padding: '2px',
		margin: '2px',
		color: '#6c6c6c',
		marginTop: '7px',
	},

	'&:hover': {
		backgroundColor: '#6c6c6c',
	},
})(CardReviews);
