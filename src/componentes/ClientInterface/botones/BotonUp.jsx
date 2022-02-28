import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export const BotonUp = ({ openMenu }) => {
    return (
        <button className="button" onClick={openMenu}>
            <BsFillArrowDownCircleFill className='emoticon cursor' />
        </button>
    )
}