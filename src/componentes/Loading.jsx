import React from "react";
import Load from '../Img/LOAD5gif.gif'



export default function Loading() {
    return (
        <div>
            <div className='contenedor_home'>
					<img className='home_load' src={Load} />
				</div>
        </div>
    )
}