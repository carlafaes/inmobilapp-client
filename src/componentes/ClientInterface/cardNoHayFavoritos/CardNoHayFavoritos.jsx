import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export const CardNoHayFavoritos = () => {
  return (
    <div className='cardNohay'>
        <h1><AiFillStar className='emoticon'/> No hay favoritos</h1>
    </div>
  )
}
