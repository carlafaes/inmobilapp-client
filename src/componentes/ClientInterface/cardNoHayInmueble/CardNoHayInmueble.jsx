import React from 'react';
import {ImHome} from 'react-icons/im'
import './CardNoHayInmueble.css'
export const CardNoHayInmueble=()=>{
    return(
        <div className='cardNohay'>
            <h1><ImHome className='emoticon'/> No hay inmuebles que mostrar</h1>
        </div>
    )
}