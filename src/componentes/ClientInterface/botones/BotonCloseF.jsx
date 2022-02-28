import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export const BotonCloseF = ({ closeMenuF }) => {
    return (
        <button className="button" onClick={closeMenuF} >
            <BsFillArrowUpCircleFill className='emoticon cursor' />
        </button>
    )
}