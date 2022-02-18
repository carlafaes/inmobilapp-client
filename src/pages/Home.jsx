import React, { useEffect, useState } from 'react';
import propertyService from '../services/property';
import Landing from '../componentes/Landingprueba';
import Navbar from '../componentes/Navbar';
import '../styles/Loading.css';
import Load from '../Img/LOAD5gif.gif';
import Footer from '../componentes/Footer';
import ReactPaginate from 'react-paginate';

function Home() {
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		propertyService.getAll().then((result) => {
			setProperties(result);
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

	const handlePageClick= (data)=>{
		console.log(data.selected)
	}

	return (
		<div>
			<div>
				<Landing />
			</div>
			<div>
				<Navbar />
			</div>
			<h1>Hello world!</h1>
			{properties.map((propery) => (
				<div key={propery.id}>
					<h1>{propery.state}</h1>
					<p>{propery.ubication.city}</p>
					<p>{propery.rentalPrice}</p>
				</div>
			))}
			<div>
				<ReactPaginate
				previousLabel={'previous'}
				nextLabel={'next'}
				breakLabel={'...'}
				pageCount={15} //cantidad de paginas total
				marginPagesDisplayed={3}//num de paginas que se muestran antes y despues del breakLabel
				onPageChange={handlePageClick}
				/>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
