import React,{useState} from 'react';
import Mail from './Mail';
import './newsletter.css';

export default function Popup(props){
    return(props.trigger && props.toggle) ? (
            <div className='popup'>
            <div className='popup-inner'>
                <Mail/>
                <button className='close-btn'
                onClick={()=> props.setToggle(false)}
                >
                ❌
                </button>
            </div>
        </div>
        ) : '';
}