import React, { useEffect, useState } from 'react';
import propertyService from '../services/property';
import Landing from '../componentes/Landingprueba';
import Navbar from '../componentes/Navbar';
import '../styles/Loading.css'
import Load from '../Img/LOAD5gif.gif'
import '../styles/Loading.css';
import LOAD5 from '../Img/LOAD5gif.gif';
import Footer from '../componentes/Footer';
import NavFilterProperty from '../componentes/Nav-filter'
import ReactPaginate from 'react-paginate';
import '../styles/Pagination.css'


function Home() {
	const [properties, setProperties] = useState([]);
	const [pageNumber, setPageNumber]= useState(1);

	const dwellingPerPage= 5;
	const pagesVisited= pageNumber * dwellingPerPage;
	const pageCount= Math.ceil(properties.length / dwellingPerPage);
	const changePage = ({selected})=>{
		setPageNumber(selected)
	}
	
	
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

	return (
		<div>
			<div>
				<Landing />
			</div>
			<div>
				<Navbar />
        <NavFilterProperty/>
			</div>
			
			{properties.slice(pagesVisited, pagesVisited + dwellingPerPage).map((propery) => (
				<div key={propery.id}>
					<h1>{propery.state}</h1>
					{/* <p>{propery.location.city}</p> */}
					<p>{propery.rentalPrice}</p>
				</div>
			))}
			<div>
				<ReactPaginate
				previousLabel={'⋘'}
				nextLabel={'⋙'}
				breakLabel={'...'}
				pageCount={pageCount} //cantidad de paginas total
				marginPagesDisplayed={2}//num de paginas que se muestran antes y despues del breakLabel
				onPageChange={changePage}
				containerClassName={"paginationBttns"}
       			 previousLinkClassName={"previousBttn"}
        		nextLinkClassName={"nextBttn"}
        		disabledClassName={"paginationDisabled"}
        		activeClassName={"paginationActive"}
				/>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
