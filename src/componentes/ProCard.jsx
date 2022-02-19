import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Grid,
	CardMedia,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function ProCard(props) {
	console.log(props.property.location?.city, 'props');
	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card className={props.classes.item}>
				<CardMedia image={props.property.image} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h6'>
						<h1>{props.property.state}</h1>
					</Typography>
				</CardContent>
				<p>{props.property.location?.city}</p>
				<p>{props.property.rentalPrice}</p>
			</Card>
		</Grid>
	);
}

export default withStyles({
	item: {
		minWidth: '350px',
		margin: '1em',
		boxSizing: 'border-box',
	},
	media: {
		minWidth: '200px',
	},
})(ProCard);
