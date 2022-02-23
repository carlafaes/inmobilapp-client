import React from 'react';
import { Grid } from '@material-ui/core';
import ProCard from '../componentes/ProCard';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import { Container, TextField } from '@mui/material';
import '../styles/Score.css'

export const ListCard = (props) => {
	if (props.properties.length === 0) {
		return <h1 className='no_found_score'>Not Found</h1>;
	}

	return (
		<Container fixed>
			<Grid justifyContent='center' container spacing={3}>
				<Box
					boxSizing={'border-box'}
					m={1}
					spacing={2}
					display='flex'
					flexWrap='wrap'
					alignItems='center'
					height={'100%'}
					width={'100%'}
				>
					<Card>
						<Grid container spacing={3} direction='row' justifyContent='center'>
							{props.properties.map((property) => {
								return <ProCard key={property.id} property={property} />;
							})}
						</Grid>
					</Card>
				</Box>
			</Grid>
		</Container>
	);
};
