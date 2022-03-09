import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { GiHomeGarage } from 'react-icons/gi'
import { HiLocationMarker } from 'react-icons/hi'
import { IoMdBed } from 'react-icons/io'
import { MdOutlineSquareFoot } from 'react-icons/md'

export const CardFavoritos = ({ description, details, images, location, rentalPrice, state, typeProperty }) => {

    const { area, rooms, garage } = details
    const { city, neighborhood } = location
    return (
        <>
            <div className="container_card cursor">
                <img className='container_img' src={images} alt="imagen" width="320px" />
                <div className='seccion1'>
                    <h6><HiLocationMarker className='emoticon' />{neighborhood},{city}</h6>
                    <div className='buton'>
                        <button className='btn_card btn_p'>{typeProperty}</button>
                        <button className='btn_card btn_p'>{state}</button>
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
