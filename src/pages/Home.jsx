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
import { ListCard } from '../componentes/ListCard';

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
			<Landing />
			<Navbar />
			<NavFilterProperty />
			<ListCard properties={properties} />
			<Footer />
		</div>
	);
}

export default Home;
