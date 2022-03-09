import React from 'react';
import './Modal-send.css';
import check from '../../../Img/gif/check-gif.gif'

export default function Modal({send}){

    return(
        <div className='modal-container'>
            <div className='modal_alert'>
                <div>
                    <img src={check} alt='check-ok' className='check-ok' />
                </div>
                <h2 className='text-check-ok'>Correo enviado exitosamente</h2>
            <div className='btn-div'>
                <button className='btn_modal_ok' onClick={() => send(false)}>
                    cerrar
                </button>
            </div>
            </div>
        </div>
    )
}
