import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import {
	Button,
	CardActions,
	CardHeader,
	Avatar,
	IconButton,
} from '@material-ui/core';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@material-ui/icons/Star';

const labels = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
};

function ProCard(props, classes) {
	const [value, setValue] = React.useState(2);
	const [hover, setHover] = React.useState(-1);
	return (
		<Grid>
			<Box boxSizing={'border-box'} m={1} spacing={10}>
				<Card className={props.classes.item}>
					<CardActionArea>
						<div className={props.classes.textoencima}>
							{props.property.state === 'available'
								? 'DISPONIBLE'
								: props.property.state === 'unavailable'
								? 'NO DISPONIBLE'
								: 'RESERVADO'}
						</div>
						<CardMedia
							component='img'
							height='190'
							image='https://source.unsplash.com/random'
						/>
						<CardContent>
							<Typography component='p' variant='h6' component='div'>
								<>{props.property.location?.city}</>
								<p className={props.classes.price}>
									${props.property.rentalPrice}
								</p>
							</Typography>
						</CardContent>
						<div className={props.classes.rating}>
							<Box
								sx={{
									width: 200,
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Rating
									className={props.classes.rating}
									name='hover-feedback'
									value={value}
									precision={0.5}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
									emptyIcon={
										<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
									}
								/>
								{value !== null && (
									<Box sx={{ ml: 2 }}>
										{labels[hover !== -1 ? hover : value]}
									</Box>
								)}
							</Box>
						</div>
					</CardActionArea>

					<CardActions>
						<Button
							className={props.classes.button}
							size='small'
							color='primary'
							href={`/property/${props.property.id}`}
							size='small'
							color='primary'
						>
							Mas detalles
						</Button>
					</CardActions>
				</Card>
			</Box>
		</Grid>
	);
}

export default withStyles({
	root: {
		maxWidth: 345,
	},
	textoencima: {
		position: 'absolute',
		top: '10px',
		left: '10px',
		color: 'white',
		fontSize: '20px',
		fontWeight: 'bold',
		backgroundColor: '#FAA222',
		padding: '5px',
	},
	contenedor: {
		position: 'relative',
		display: 'inline-block',
		textAlign: 'center',
	},

	button: {
		fontSize: '1rem',
		fontWeight: 'bold',
		textTransform: 'none',
		color: '#fff',
		backgroundColor: '#ECA242',

		'&:hover': {
			backgroundColor: '#535353',
			color: '#fff',
		},
	},
	price: {
		fontSize: '1.5rem',
		fontWeight: 'bold',
		color: '#FAA222',
	},
	rating: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '1px',
	},
	item: {
		display: 'flex',
		marginTop: '5em',
		marginLeft: '1em',
		marginRight: '1em',
		marginBottom: '5em',
		width: '300px',
		height: '400px',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	'&:hover': {
		boxShadow: '#f2D6AD',
	},

	media: {
		minWidth: '200px',
		height: '200px',
		borderRadius: '1px',
		margin: '10px',
		item: {
			margin: '10px',
			border: '1px solid red',
			margin: '10px',
			width: '300px',
			height: '500px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#f5f5f5',
			borderRadius: '1px',

			'&:hover': {},
		},

		media: {
			minWidth: '200px',
			height: '200px',
			backgroundColor: '#f5f5f5',
			borderRadius: '1px',
			margin: '10px',
		},
	},
})(ProCard);
