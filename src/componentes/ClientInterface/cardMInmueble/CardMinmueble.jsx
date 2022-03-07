import React, { useEffect, useState } from 'react'
import services from '../../../services/client';
import { HiLocationMarker } from 'react-icons/hi'
import { MdOutlineSquareFoot } from 'react-icons/md'
import { IoMdBed } from 'react-icons/io'
import { GiHomeGarage } from 'react-icons/gi'
import { HiArrowCircleRight } from 'react-icons/hi'
import './CardMinmueble.css'
import { useNavigate } from 'react-router-dom';
import { makeStyles, Modal } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    height: '450px',
    width: '600px',
    borderRadius: '5px',
    backgroundColor: 'white',
    border: '2px solid #FAA222',
    boxShadow: theme.shadows[5],
    padding: '16px 32px 24px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'

  }, titleLogin: {
    fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    color: '#FAA222',
    textShadow: '#f2d6ad 1px 1px'
  }
}))

export const CardMinmueble = () => {
  const classes = useStyles();
  const body = (
    <div className={classes.modal}>
      <div align='center'>
        <h2 className={classes.titleLogin}>Datos a editar</h2>
      </div>
    </div>
  )
  const [info, setInfo] = useState('');
  const [location, setLocation] = useState('');
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState(null);
  const [typeProperty, setTypeProperty] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [idProperties, setIdProperties] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);

    const GetInfo = async () => {
      const info = await services.getClientInfo(user.id);
      setInfo(info)
      const { propertyID } = info
      const { location, images, typeProperty, description, details, id } = propertyID
      setLocation(location)
      setImg(images)
      setTypeProperty(typeProperty)
      setDescription(description)
      setDetails(details)
      setIdProperties(id)
    }
    GetInfo()
  }, [])

  const openCloseModal = () => {
    setModal(!modal)
  }
  const handleId = () => {
    navigate(`/property/${idProperties}`)
  }
  return (

    <div className="container_card cursor">
      <img className='container_img' src={img} alt="imagen" width="320px" />
      <div className='seccion1'>
        <h6><HiLocationMarker className='emoticon' />{location.neighborhood},{location.city}</h6>
        <div className='botonesEx'>
          <button className='btn_card btn_p'>{typeProperty}</button>
          <button className='btn_card btn_p'>Pagar Factura</button>
          <button className='btn_card btn_p' onClick={() => { openCloseModal() }}>Realizar reseña</button>
        </div>
        <p>{description}</p>
      </div>
      <div className='seccion2'>
        <h6><MdOutlineSquareFoot className='emoticon' /> {details.area} m²</h6>
        <h6><IoMdBed className='emoticon' />{details.rooms} dorms</h6>
        <h6><GiHomeGarage className='emoticon' />{details.garage}garajes</h6>
        <button className='btn_card btn_p p' onClick={handleId} >Mas detalles <HiArrowCircleRight className='emoticon' /> </button>
      </div>
      <div className='seccion3'>
        <h6>Fechas de facturas pagadas: </h6>
        <ul>
          {
            info.paymentIssued?.map(e => (<li key={e._id}>{e.date}</li>))
          }
        </ul>
      </div>
      <Modal open={modal} onClose={openCloseModal}>
        {body}
      </Modal>
    </div>
  )

}
