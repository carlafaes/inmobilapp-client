import React from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

export const BotonClose=({closeMenu})=>{
    return(
        <button className="button" onClick={closeMenu} >
            <BsFillArrowUpCircleFill className='emoticon cursor'/>
          </button>
    )
}