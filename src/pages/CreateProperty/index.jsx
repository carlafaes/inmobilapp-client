import React, {useState} from "react";
import Navbar from "../../componentes/Navbar";
import "./index.css";




export default function CreateProperty() {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({});

    return(
        <div className="create-property">
            <Navbar className= 'create-property__navbar'/>
            <form className="create-property__form">
                <section className="create-property__left-section">
                    <h2>Ubicación</h2>
                    <label className="create-property__form__label">Tipo de inmueble</label>
                    <select name="" id="">
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="local">Local</option>
                        <option value="finca">Finca</option>
                    </select>
                    <label className="create-property__form__label">Ciudad</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p>error</p>
                    </div>
                    <label className="create-property__form__label">Barrio</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p>error</p>
                    </div>
                    <label className="create-property__form__label">Dirección</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p>error</p>
                    </div>
                    <h2>Detalles</h2>
                    <label className="create-property__form__label">Area</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p></p>
                    </div>
                    <label className="create-property__form__label">Habitaciones</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p></p>
                    </div>
                    <label className="create-property__form__label">Baños</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p></p>
                    </div>
                    <label className="create-property__form__label">Garage</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p></p>
                    </div>
                </section>
                <section className="create-property__right-section">
                    <h2>Detalles</h2>
                    <label className="create-property__form__label">Imagenes</label>
                    <div className="create-property__image-container">
                        <input className="create-property__input" type="text" />
                        <button>Agregar</button>
                    </div>
                    <label className="create-property__form__label">Precio</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p></p>
                    </div>
                    <label className="create-property__form__label">Descrption</label>
                    <div>
                        <input className="create-property__input" type="text" />
                        <p></p>
                    </div>
                    <button className="create-property__right-section--button">Enviar</button>
                </section>
            </form>
        </div>
    )
}