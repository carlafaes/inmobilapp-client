import React,{useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './CreateProperty.moduleForm.css';

function handleSubmit(e){
    e.preventDefault()
}

export default function CreatePropertyForm(){
    const [newProperty, setNewProperty] = useState({sent: false});
    const[images, setNewImage] = useState([]);
    return (
        <Formik
        initialValues={{
            type: '',
            city: '',
            neighborhood: '',
            address: '',
            images: [],
            price: '',
            description: '',
            area: '',
            rooms: '',
            baths: '',
            garage: '',
        }}
        validate = {(v)=> {
            const err = {};
            if(!v.type){
                err.type = 'Debes elegir un tipo de inmueble';;
            }

            if(!v.city){
                err.city = 'Debes ingresar una ciudad';
            }

            if(!v.neighborhood){
                err.neighborhood = 'Debes ingresar un barrio';
            }

            if(!v.address){
                err.address = 'Debes ingresar una dirección';
            }

            if(!v.price){
                err.price = 'Debes ingresar un precio';
            }else if(!/^\d+$/.test(v.price)){
                err.price = 'Unciamente se aceptan números en este campo';
            }

            if(!v.description){
                err.description = 'Debes ingresar una descripción';
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(v.description)){
                err.description = 'Solo se aceptan letras, espacios y guiones en este campo';
            }

            if(!v.area){
                err.area = 'Debes ingresar un area';
            }else if(!/^\d+$/.test(v.area)){
                err.area = 'Unicamente se aceptan números en este campo';
            }

            if(!v.rooms){
                err.rooms = 'Debes ingresar un area';
            }else if(!/^\d+$/.test(v.rooms)){
                err.rooms = 'Unicamente se aceptan números en este campo';
            }

            if(!v.baths){
                err.baths = 'Debes ingresar un número de baños';
            }else if(!/^\d+$/.test(v.baths)){
                err.baths = 'Unicamente se aceptan números en este campo';
            }

            if(!v.garage){
                err.garage = 'Debes elegir una opción';
            }

            return err;
        }}
        onSubmit={(valores, {resetForm})=> {
            resetForm();
            valores.sent = true;
            setNewProperty(valores)
            setTimeout(() => setNewProperty({}), 5000);
            console.log(valores)
            console.log('formulario enviado')
        }}
        >
            {({errors})=>(
                <Form>
                    <section>
                        {console.log(errors)}
                        <h2>Ubicación</h2>
                        <div>
                            <label htmlFor="type">Tipo de propiedad</label>
                            <Field name="type" as="select">
                                <option name="type" value="tipo" selected={true} >Tipo</option>
                                <option name="type" value="casa">Casa</option>
                                <option name="type" value="apartamento">Apartamento</option>
                                <option name="type" value="local">Local</option>
                            </Field>
                            <ErrorMessage name='type' component={() => <p className={styles.wrong}>{errors.type}</p>}/>
                        </div>
                        <label htmlFor="city">Ciudad</label>
                        <div>
                            <Field name="city" type="text"/>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <ErrorMessage name='city' component={() => <p className={styles.wrong}>{errors.city}</p>}/>
                        </div>
                        <label htmlFor="neighborhood">Barrio</label>
                        <div>
                            <Field name="neighborhood" type="text"/>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <ErrorMessage name='neighborhood' component={() => <p className={styles.wrong}>{errors.neighborhood}</p>}/>
                        </div>
                        <label htmlFor="address">Dirección</label>
                        <div>
                            <Field name="address" type="text"/>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <ErrorMessage name='address' component={() => <p className={styles.wrong}>{errors.address}</p>}/>
                        </div>
                    </section>
                    <section>
                        <label htmlFor="file">Imagenes</label>
                        <div>
                            <input type="file" name='images' accept="image/*"/>
                        </div>
                        <label htmlFor="price">Precio</label>
                        <div>
                            <Field name="price" type="text"/>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <ErrorMessage name='price' component={() => <p className={styles.wrong}>{errors.price}</p>}/>
                        </div>
                        <label htmlFor="description">Descripción</label>
                        <div>
                            <Field name="description" type="text"/>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <ErrorMessage name='description' component={() => <p className={styles.wrong}>{errors.description}</p>}/>
                        </div>
                    </section>
                    <section>
                        <h2>Detalles</h2>
                        <label htmlFor="">Area</label>
                        <div>
                            <Field name='area' type='text'/>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <ErrorMessage name='area' component={() => <p className={styles.wrong}>{errors.area}</p>}/>
                        </div>
                        <label htmlFor="">Habitaciones</label>
                        <div>
                            <Field name='rooms' type='text'/>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <ErrorMessage name='rooms' component={() => <p className={styles.wrong}>{errors.rooms}</p>}/>
                        </div>
                        <label htmlFor="">Baños</label>
                        <div>
                            <Field name='baths' type='text'/>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <ErrorMessage name='baths' component={() => <p className={styles.wrong}>{errors.baths}</p>}/>
                        </div>
                        <label htmlFor="">Garage</label>
                        <div>
                            <Field name='garage' as="select">
                                <option >Garage</option>
                                <option name="garage" value='si' >Si</option>
                                <option name="garage" value='no' >No</option>
                            </Field>
                            <ErrorMessage name='garage' component={() => <p className={styles.wrong}>{errors.garage}</p>}/>
                        </div>
                    </section>
                <button type="submit" >Enviar</button>
                {newProperty.sent && (<p className='success'>Formulario enviado</p>)}
            </Form>
            )}
        </Formik>
    )
}