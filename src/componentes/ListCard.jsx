import React from 'react';
import { Grid } from '@material-ui/core';
import ProCard from '../componentes/ProCard';

export const ListCard = (props) => {
	return (
		<>
			<Grid container spacing={36}>
				{props.properties.map((property) => {
					return <ProCard key={property.id} property={property} />;
				})}
			</Grid>
		</>
	);
};
