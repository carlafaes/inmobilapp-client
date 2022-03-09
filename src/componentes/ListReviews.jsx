import React from 'react';
import CardReviews from './CardReviews';
import {
	Card,
	withStyles,
	Typography,
	CardActionArea,
	Grid,
} from '@material-ui/core';

const Listreviews = ({ reviews, classes }) => {
	return (
		<div>
			<Typography className={classes.title}>
				Que opinan nuestros clientes
			</Typography>

			<CardActionArea className={classes.media}>
				<Grid sx={12} container spacing={1} className={classes.contenedor2}>
					{reviews.map((review) => {
						return <CardReviews key={review.id} review={review} />;
					})}
				</Grid>
			</CardActionArea>
		</div>
	);
};

export default withStyles({
	contenedor2: {
		padding: '0px',
		margin: '2px',
		fontSize: 24,
		color: '#6c6c6c',
		marginTop: '0px',
		margin: '0px',
	},
	media: {
		borderRadius: '10px',
		padding: '0px',
		margin: '0px',
		fontSize: 24,
		color: '#6c6c6c',
		marginTop: '0px',
	},
	contenedor: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		padding: '0px',
		margin: '0px',
		fontSize: 24,
		color: '#6c6c6c',
		marginTop: '0px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
})(Listreviews);
