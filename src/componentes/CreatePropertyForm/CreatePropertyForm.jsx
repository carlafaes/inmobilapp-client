import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


export default function CreatePropertyForm(){
    return (
        <div>
            <form action="">
                <div>
                    <h2>Ubicación</h2>
                    <label htmlFor="">Ciudad</label>
                    <div>
                        <input type="text"/>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                    </div>
                    <p>necesitas ingresar una ciudad valida</p>
                </div>
                <div>
                    <label htmlFor="">Tipo de propiedad</label>
                    <select name="tipo" id="">
                        <option value="tipo">Tipo</option>
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="local">Local</option>
                    </select>
                </div>
            </form>
        </div>
    )
}