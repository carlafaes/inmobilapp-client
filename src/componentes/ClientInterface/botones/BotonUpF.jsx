import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export const BotonUpF = ({ openMenuF }) => {
    return (
        <button className="button" onClick={openMenuF}>
            <BsFillArrowDownCircleFill className='emoticon cursor' />
        </button>
    )
}