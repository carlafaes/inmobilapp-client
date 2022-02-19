import React, { useEffect, useState } from 'react';
import propertyService from '../services/property';
import Landing from '../componentes/Landingprueba';
import Navbar from '../componentes/Navbar';
import '../styles/Loading.css';
import Load from '../Img/LOAD5gif.gif';
import '../styles/Loading.css';
import LOAD5 from '../Img/LOAD5gif.gif';
import Footer from '../componentes/Footer';
import NavFilterProperty from '../componentes/Nav-filter';
import ProCard from '../componentes/ProCard';
import { useSelector, useDispatch } from 'react-redux';
import { loadAllProperties } from '../redux/actions/actions-propierties';
import { Grid, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function Home() {
	const dispatch = useDispatch();
	// const [properties, setProperties] = useState([]);

	const properties = useSelector((state) => state.propertys);

	useEffect(() => {
		propertyService.getAll().then((result) => {
			dispatch(loadAllProperties(result));
		});
	}, []);

	if (properties.length === 0) {
		return (
			<div className='loading_style'>
				<div className='contenedor_home'>
					<img className='home_load' src={Load} />
				</div>
			</div>
		);
	}
	console.log(properties, 'properties');
	return (
		<div>
			<div>
				<Landing />
			</div>
			<div>
				<Navbar />
				<NavFilterProperty />
			</div>
			{/* <div>
				<ProCard properties={properties} />
			</div> */}

			{properties.map((property, classes) => {
				return (
					property.state === 'available' && (
						<Card className='classes.item'>
							<Grid
								container
								direction='row'
								justifyContent='center'
								alignItems='baseline'
								border='3px solid red'
							>
								<ProCard key={property.id} property={property} />
							</Grid>
						</Card>
					)
				);
				/* <div key={propery.id}>
					<h1>{propery.state}</h1>
					<p>{propery.location.city}</p>
					<p>{propery.rentalPrice}</p>
				</div> */
			})}

			<div>
				<Footer />
			</div>
		</div>
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
})(Home);
