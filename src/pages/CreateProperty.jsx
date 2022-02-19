import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postProperties } from "../redux/actions/actions-propierties";

export default function CreateProperty() {

    const dispatch = useDispatch()
    //Estado del input para el form

    const [input, setInput] = useState({
        typeProperty: '',
        ubication: {},
        state: '',
        images: [],
        rentalPrice: '',
        description: '',
        details: {},
        date: '',
        agentID: ''
    })

    //Estado de errores y validador

    const [errors, setErrors] = useState({})

    function validate(input){
        let errors = {};
        if(!input.type){
            errors.type = 'Se requiere un tipo de inmueble!'
        } else if(!input.image){
            errors.image = 'Se requiere una direccion de imagen!'
        } else if(true){
            
        }
        return errors;
    }

    //Estado del boton para controlar el form

    const [button, setButton] = useState({})

    useEffect(() => {
        input.typeProperty &&
        input.agentID &&
        Object.entries(input.ubication).length &&
        input.state &&
        input.images.length &&
        input.rentalPrice &&
        input.description &&
        Object.entries(input.details).length &&
        input.date
         ? 
        setButton(false) :
        setButton(true)
    },[input])

    //Handlers

    const handleChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]:  e.target.value 
        })
        console.log(input)
        setErrors(validate({
            ...input,
            [e.target.name]:  e.target.value 
        }))
    }

    const [inputUbication, setInputUbication] = useState({})
    const [inputDetails, setInputDetails] = useState({})
    
    const handleUbication = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            ubication: inputUbication
        })
    }
    const handleDetails = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            details: inputDetails
        })
    }
    const handleChangeUbication = (e) => {
        e.preventDefault()
        
        setInputUbication({
            ...inputUbication,
            [e.target.name]:  e.target.value
        })
        handleUbication(e)
    }
    const handleChangeDetails = (e) => {
        e.preventDefault()
        setInputDetails({
            ...inputDetails,
            [e.target.name]:  e.target.value
        })
        handleDetails(e)
    }
    

    const handlerSelectType = (e) => {
        setInput({
            ...input,
            typeProperty:  e.target.value
        })
        
    }

    const handlerSelectState = (e) => {
        setInput({
            ...input,
            state:  e.target.value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        dispatch(postProperties(input))
        alert('Inmueble creado!')

    }

    ///

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Type of Property:</label>
            <select onChange={(e) => handlerSelectType(e)}>
                <option value="casa">casa</option>
                <option value="apartamento">apartamento</option>
                <option value="local">local</option>
                <option value="finca">finca</option>
            </select><br />
            <label>Ubication:</label><br />
            <div>
                <label>City:</label>
                <input type="text"
                value= {inputUbication.city}
                name="city"
                onChange={(e) => handleChangeUbication(e)} />
                <label>Neighbourhood:</label>
                <input type="text"
                value= {inputUbication.neighbourhooh}
                name="neighbourhooh"
                onChange={(e) => handleChangeUbication(e)} />
                <label>Adress:</label>
                <input type="text"
                value= {inputUbication.adress}
                name="adress"
                onChange={(e) => handleChangeUbication(e)}
                />
                
                
            </div>
            <label>State:</label>
            <select onChange={(e) => handlerSelectState(e)}>
                <option value="available">available</option>
                <option value="unavailable">unavailable</option>
                <option value="reserved">reserved</option>
            </select><br />
            <div>
            <label>Images:</label>
                <input type="text"
                value= {input.images}
                name="images"
                onChange={(e) => handleChange(e)} />
            </div>
            <div>
            <label>Price:</label>
                <input type="text"
                value= {input.rentalPrice}
                name="rentalPrice"
                onChange={(e) => handleChange(e)} />
            </div>
            <div>
            <label>Description:</label>
                <input type="text"
                value= {input.description}
                name="description"
                onChange={(e) => handleChange(e)} />
            </div>
            <label>Details:</label>
            <div>
                <label>Area:</label>
                <input type="text"
                value= {inputDetails.area}
                name="area" 
                onChange={(e) => handleChangeDetails(e)}/>
                <label>Rooms:</label>
                <input type="text"
                value= {inputDetails.rooms}
                name="rooms"
                onChange={(e) => handleChangeDetails(e)} />
                <label>Baths:</label>
                <input type="text"
                value= {inputDetails.baths}
                name="baths"
                onChange={(e) => handleChangeDetails(e)} />
                <label>Garage</label>
                <input type="boolean"
                value= {inputDetails.garage}
                name="garage" 
                onChange={(e) => handleChangeDetails(e)}/>
            </div>
            <div>
            <label>Date:</label>
                <input type="date"
                value= {input.date}
                name="date"
                onChange={handleChange} />
            </div>
            <div>
            <label>Agente ID:</label>
                <input type="text"
                value= {input.agentID}
                name="agentID"
                onChange={handleChange} />
            </div>
            
            <button disabled={button} type="submit">Create Property</button>
        </form>
    )

}