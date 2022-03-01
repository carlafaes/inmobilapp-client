import React, { useEffect, useState } from 'react'
import services from '../../../services/client';
import {HiLocationMarker} from 'react-icons/hi'
import {MdOutlineSquareFoot} from 'react-icons/md'
import {IoMdBed} from 'react-icons/io'
import {GiHomeGarage} from 'react-icons/gi'
import {HiArrowCircleRight} from 'react-icons/hi'
import './CardMinmueble.css'


export const CardMinmueble = () => {
  const [info,setInfo]=useState('');
  const [location,setLocation]=useState('');
  const [img,setImg]=useState(null);
  const [typeProperty,setTypeProperty]=useState('');
  const [description,setDescription]=useState('');
  const [details,setDetails]=useState('');

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    
    const GetInfo=async()=>{
      const info= await services.getClientInfo(user.id);
      setInfo(info)
      const {propertyID}=info
      const{location,images,typeProperty,description,details}=propertyID
      setLocation(location)
      setImg(images)
      setTypeProperty(typeProperty)
      setDescription(description)
      setDetails(details)
    }
    GetInfo()
  },[])
  

  return (
        
        <div className="container_card cursor">
        <img className='container_img' src={img} alt="imagen" width="320px" />
        <div className='seccion1'>
        <h6><HiLocationMarker className='emoticon'/>{location.neighborhood},{location.city}</h6>
        <button className='btn_card btn_p'>{typeProperty}</button>
        <p>{description}</p>
        </div>
        <div className='seccion2'>
        <h6><MdOutlineSquareFoot className='emoticon'/> {details.area} m²</h6>
        <h6><IoMdBed className='emoticon'/>{details.rooms} dorms</h6>
        <h6><GiHomeGarage className='emoticon'/>{details.garage}garajes</h6>
        <button className='btn_card btn_p p' >Mas detalles <HiArrowCircleRight className='emoticon'/> </button>
        </div>
        <div className='seccion3'>
          <h6>Fechas de facturas pagadas: </h6>
          <ul>
            {
              info.paymentIssued?.map(e=>(<li key={e._id}>{e.date}</li>))
            }
          </ul>
        </div>
    </div>
  )
  
}
