import React, { useEffect, useState } from 'react';
import adminService from '../services/admin';
import Landing from '../componentes/Landingprueba';
import Navbar from '../componentes/Navbar';
import '../styles/Loading.css'
import Load from '../Img/LOAD5gif.gif'

function Home() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    adminService.getAll().then((returnedAdmins) => {
      setAdmins(returnedAdmins);
    });
  }, []);

  if (admins.length === 0) {
    return <div className='loading_style'>
        <div className='contenedor_home'>
        <img className='home_load' src={Load} />
        </div>
          </div>
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
      {admins.map((admin) => (
        <div key={admin.name}>
          <h1>{admin.name}</h1>
          <p>{admin.password}</p>
          <p>{admin.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
