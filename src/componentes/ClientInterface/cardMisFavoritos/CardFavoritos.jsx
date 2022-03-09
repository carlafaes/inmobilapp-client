import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AiFillDollarCircle } from 'react-icons/ai'
import { GiHomeGarage } from 'react-icons/gi'
import { HiLocationMarker } from 'react-icons/hi'
import { IoMdBed } from 'react-icons/io'
import { MdDelete, MdOutlineSquareFoot } from 'react-icons/md'
import { PutFavorites } from '../../../redux/actions/actionClient'
import { getUserForLocalStorage } from '../../../utils/user'
export const CardFavoritos = ({ description, details, images, location, rentalPrice, state, typeProperty, id }) => {

    const { area, rooms, garage } = details
    const { city, neighborhood } = location
    const [input,setInput]=useState({
        delFavPropertyID:''
    })
    const [token,setToken]=useState()
    const dispatch = useDispatch();
    useEffect(() => {
        const info = getUserForLocalStorage();
        setToken(info.token)
        setInput({...input,delFavPropertyID:id})
    }, []);
    
    ;
    const borrarFavoritos = async () => {
        
        await dispatch(PutFavorites(input, token))
    }
    return (
        <>
            <div className="container_card cursor">
                <div className="img">
                    <img className='container_img' src={images} alt="imagen" width="320px" />
                </div>
                <div className='seccion1'>
                    <h6><HiLocationMarker className='emoticon' />{neighborhood},{city}</h6>
                    <div className='buton'>
                        <button className='btn_card btn_p'>{typeProperty}</button>
                        <button className='btn_card btn_p'>{
                            state === 'available' ? 'Disponible' : state === 'unavailable' ? 'No disponible' : 'Reservado'
                        }</button>
                        <button className='buttonFa' onClick={borrarFavoritos}><MdDelete className='emoticon cursor' /></button>
                    </div>
                    <p>{description}</p>
                </div>
                <div className='seccion2'>
                    <h6><MdOutlineSquareFoot className='emoticon' /> {area} m²</h6>
                    <h6><IoMdBed className='emoticon' />{rooms} dorms</h6>
                    {
                        garage && <h6><GiHomeGarage className='emoticon' />{garage}1 garajes</h6>
                    }
                    <h6><AiFillDollarCircle className='emoticon' /> {rentalPrice} USD</h6>
                </div>
            </div>
            <br />
        </>
    )
}
