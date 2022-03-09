import React from 'react';
import brayan from '../Img/perfiles/brayan.jpeg'
import dairo from '../Img/perfiles/dairo.jpeg'
import david from '../Img/perfiles/david.jpeg'
import hevert from '../Img/perfiles/hevert.jpeg'
import jonathan from '../Img/perfiles/jonathan.jpeg'
import carla from '../Img/perfiles/carla.jpg'
import fede from '../Img/perfiles/federico.jpeg'
import dev from '../Img/perfiles/67.png'
import llave from '../Img/perfiles/icono-de-llave.png'
import '../styles/QuienesSomos.css'
import Navbar from './Navbar'

export default function QuienesSomos() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='container_quienes'>
        <h1 className='title_cuestion'>¿Quienes estan detras de InmobilApp?</h1>
        <div className='parrafo1'>
          <img src={dev} alt="developer" className='img_dev' />
          <p className='style_p'>InmobilApp esta conformada por el trabajo en conjunto de un equipo de estudiantes
            Full Stack Web Developers, durante el cursado de la etapa de proyecto final en Henry.  </p>
        </div>
        <div className='parrafo2'>
          <img src={llave} alt="llave-icon" className='img_dev' />
          <p className='style_p'>Creamos InmobilApp para ofrecer a la empresa inmobiliaria,
            una herramienta útil para una correcta,sencilla, y efectiva administración de su empresa.
            Permitiendo de esta manera, brindar un servicio de calidad tanto a sus agentes, como a sus clientes.</p>
        </div>
        <h2 className='title_cuestion'>Desarrolladores de InmobilApp</h2>
        <div className='container_perfiles'>
          <div className='perfil_unit'>
            <img className='imagen_perfil' src={brayan} alt="brayan" />
            <div className='container_nombreYLinks'>
              <h2 className='name_title'>Brayan Baquero<br /></h2>
              <a href="https://www.linkedin.com/in/babaquero07/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="brayan_link" height="20" width="30" /></a>

              <a href="https://github.com/babaquero07" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/babaquero07" height="20" width="30" /></a>
            </div>
          </div>
          <div className='perfil_unit'>
            <img className='imagen_perfil' src={david} alt="david" />
            <div className='container_nombreYLinks'>
              <h2 className='name_title'>David De la Hoz </h2>
              <a href="https://www.linkedin.com/in/david-de-la-hoz/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="david_link" height="20" width="30" /></a>

              <a href="https://github.com/Daviddlh1" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/Daviddlh1" height="20" width="30" /></a>
            </div>
          </div>
          <div className='perfil_unit'>
            <img className='imagen_perfil' src={carla} alt="carla" />
            <div className='container_nombreYLinks'>
              <h2 className='name_title'>Carla Faes</h2>
              <a href="https://www.linkedin.com/in/carla-faes/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="www.linkedin.com/in/carla-faes-678454216" height="20" width="30" /></a>

              <a href="https://github.com/carlafaes" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/carlafaes" height="20" width="30" /></a>
            </div>
          </div>
          <div className='perfil_unit'>
            <img className='imagen_perfil' src={jonathan} alt="jonathan" />
            <div className='container_nombreYLinks'>
              <h2 className='name_title'>Jonathan Osorio</h2>
              <a href="https://www.linkedin.com/in/jonathan-osorio-046043207/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="jonathan_link" height="20" width="30" /></a>

              <a href="https://github.com/jonathan4342" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/jonathan4342" height="20" width="30" /></a>
            </div>

          </div>
          <div className='perfil_unit'>
            <img className='imagen_perfil' src={hevert} alt="hevert" />
            <div className='container_nombreYLinks'>
              <h2 className='name_title'>Hevert David Gelis Diaz</h2>
              <a href="https://www.linkedin.com/in/hever-gdesing/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="hever_link" height="20" width="30" /></a>

              <a href="https://github.com/HEVERHD" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/HEVERHD" height="20" width="30" /></a>
            </div>

          </div>
          <div className='perfil_unit'>
            <img className='imagen_perfil' src={dairo} alt="dairo" />
            <div className='container_nombreYLinks'>
              <h2 className='name_title'>Dairo Garcia Naranjo</h2>
              <a href="https://www.linkedin.com/in/dairo-garc%C3%ADa-naranjo/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="dairo_link" height="20" width="30" /></a>

              <a href="https://github.com/Dairo01001" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="dairo_link" height="20" width="30" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}