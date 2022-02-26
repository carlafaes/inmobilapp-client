import React, { useEffect, useState } from 'react'
import services from '../../../services/client';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import './CardMinmueble.css'
export const CardMinmueble = () => {
  const [info,setInfo]=useState('');
  const [location,setLocation]=useState('');
  const [img,setImg]=useState(null);
  const [typeProperty,setTypeProperty]=useState('');
  const [description,setDescription]=useState('');
  const [details,setDetails]=useState('');

  useEffect(async()=>{
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    const info= await services.getclientInfo(user.id);
    setInfo(info)
    const {propertyID}=info
    const{location,images,typeProperty,description,details}=propertyID
    setLocation(location)
    setImg(images)
    setTypeProperty(typeProperty)
    setDescription(description)
    setDetails(details)
  },[])

  return (
    <div className="container">
          <img className='container_img' src={img} alt="imagen" width="150px" height="150px"/>
        <h6><i className="fa-solid fa-location-dot emoticon"></i>{location.neighborhood},{location.city}</h6>
        <button>{typeProperty}</button>
        <p>{description}</p>
        <h6><SquareFootIcon/>{details.area}m2</h6>
        <h6><i className="fa-solid fa-bed emoticon"></i>{details.rooms} dorms</h6>
        <h6><i className="fa-solid fa-car emoticon"></i>{details.garage} 1 estacionamiento</h6>
        <button>Mas detalles <i className="fa-solid fa-arrow-right emoticon"></i></button>
    </div>
  )
}
