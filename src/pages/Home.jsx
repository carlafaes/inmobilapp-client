import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import adminService from '../services/admin';
import Landing from './Landingprueba';
import Navbar from './Navbar';
import NavFilterProperty from './Nav-filter';
=======
import propertyService from '../services/property';
import Landing from '../componentes/Landingprueba';
import Navbar from '../componentes/Navbar';
import '../styles/Loading.css';
import Load from '../Img/LOAD5gif.gif';
import Footer from '../componentes/Footer';
>>>>>>> 9b13a84329d7102a83ba2963ee671b59c59d61f4

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

<<<<<<< HEAD
  return (
    <div>
      <div>
        <Landing />
      </div>
      <div>
        <Navbar />
        <NavFilterProperty/>
      </div>
      <h1>Hello world!</h1>
      {admins.map((admin) => (
        <div key={admin.name}>
          <h1>{admin.name}</h1>
          <p>{admin.password}</p>
          <p>{admin.email}</p>
        </div>
      ))}

    </div>
  );
=======
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
				<Footer />
			</div>
		</div>
	);
>>>>>>> 9b13a84329d7102a83ba2963ee671b59c59d61f4
}

export default Home;
