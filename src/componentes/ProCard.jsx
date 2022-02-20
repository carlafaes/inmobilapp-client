import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	CardMedia,
	Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function ProCard(props, classes) {
	console.log(props.property.location?.city, 'props');
	return (
		<Card className={props.classes.item}>
			<CardMedia image={props.property.image} />
			<CardContent>
				<Typography component='p' variant='h5'>
					{props.property.state}
					<p>{props.property.location?.city}</p>
				</Typography>
			</CardContent>
			<p>{props.property.rentalPrice}</p>
		</Card>
	);
}

export default withStyles({
	item: {
		display: 'flex',
		margin: '10px',
		width: '300px',
		height: '300px',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
		borderRadius: '10px',
		boxShadow: '0px 0px 10px #000000',
		flexGrow: 4,
	},

	'&:hover': {
		boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
	},

	media: {
		minWidth: '200px',
		height: '200px',
		backgroundColor: '#f5f5f5',
		borderRadius: '1px',
		margin: '10px',
		boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
		item: {
			margin: '10px',
			border: '1px solid red',
			margin: '10px',
			width: '300px',
			height: '300px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#f5f5f5',
			borderRadius: '1px',

			boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',

			'&:hover': {
				boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
			},
		},

		media: {
			minWidth: '200px',
			height: '200px',
			backgroundColor: '#f5f5f5',
			borderRadius: '1px',
			margin: '10px',
			boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
		},
	},
})(ProCard);
