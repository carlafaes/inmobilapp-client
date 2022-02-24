import React,{useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import styles from './CreateProperty.module.css';
import propertyServices from '../../services/property';


export default function CreatePropertyForm(){
    const [newProperty, setNewProperty] = useState('');
    const [formErrors, setFormErrors] = useState({})
    const[images, setNewImage] = useState([]);
    return (
        <Formik className={styles.formik}
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
            setFormErrors(err)
            return err;
        }}
        onSubmit={(values, {resetForm})=> {
            resetForm();
            if(!formErrors.type && !formErrors.city && !formErrors.neighborhood && !formErrors.address && !formErrors.price && !formErrors.description && !formErrors.area && !formErrors.rooms && !formErrors.baths && !formErrors.garage){
                const property = { 
                    typeProperty: values.type,
                    location: {
                      city: values.city,
                      neighborhood: values.neighborhood,
                      address: values.address
                    },
                    images: ["url", "url1"],
                    rentalPrice: values.price,
                    description: values.description,
                    details: {
                      area: values.area,
                      rooms: values.rooms,
                      baths: values.baths,
                      garage: values.garage === 'false'? false : true,
                    },
                    agentID: "621271c06ec04903d5c20e0f" 
                }
                propertyServices.createProperty(property);
                console.log(property);
                setNewProperty('sent');
            }
            setTimeout(() => setNewProperty(''), 5000);
            console.log('formulario enviado')
        }}
        >
            {({errors})=>(
                <Form className={styles.form}>
                    <div className={styles.container}>

                        <section className={styles.section}>    
                            <h2>Ubicación</h2>
                            <div>
                                <label className={styles.label} htmlFor="type">Tipo de propiedad</label>
                                <Field className={styles.field} name="type" as="select">
                                    <option name="type" value="tipo" selected={true} >Tipo</option>
                                    <option name="type" value="casa">Casa</option>
                                    <option name="type" value="apartamento">Apartamento</option>
                                    <option name="type" value="local">Local</option>
                                </Field>
                                <ErrorMessage name='type' component={() => <p className={styles.wrong}>{errors.type}</p>}/>
                            </div>
                            <label className={styles.label} htmlFor="city">Ciudad</label>
                            <div>
                                <Field className={styles.field} name="city" type="text"/>
                                <ErrorMessage name='city' component={() => <p className={styles.wrong}>{errors.city}</p>}/>
                            </div>
                            <label htmlFor="neighborhood">Barrio</label>
                            <div>
                                <Field className={styles.field} name="neighborhood" type="text"/>
                                <ErrorMessage name='neighborhood' component={() => <p className={styles.wrong}>{errors.neighborhood}</p>}/>
                            </div>
                            <label className={styles.label} htmlFor="address">Dirección</label>
                            <div>
                                <Field className={styles.field}  name="address" type="text"/>
                                <ErrorMessage name='address' component={() => <p className={styles.wrong}>{errors.address}</p>}/>
                            </div>
                        </section>
                        <section className={styles.section}>
                            <h2>Detalles</h2>
                            <label className={styles.label} htmlFor="file">Imagenes</label>
                            <div>
                                <input type="file" name='images' accept="image/*"/>
                            </div>
                            <label className={styles.label} htmlFor="price">Precio</label>
                            <div>
                                <Field className={styles.field} name="price" type="text"/>
                                <ErrorMessage name='price' component={() => <p className={styles.wrong}>{errors.price}</p>}/>
                            </div>
                            <label className={styles.label} htmlFor="description">Descripción</label>
                            <div className={styles.input_container}>
                                <Field className={styles.field_text_area} name="description" as="textarea"/>
                                <ErrorMessage name='description' component={() => <p className={styles.wrong}>{errors.description}</p>}/>
                            </div>
                        </section>
                        <section className={styles.section}>
                            <h2>Detalles</h2>
                            <label className={styles.label} htmlFor="">Area</label>
                            <div>
                                <Field className={styles.field} name='area' type='text'/>
                                <ErrorMessage name='area' component={() => <p className={styles.wrong}>{errors.area}</p>}/>
                            </div>
                            <label className={styles.label} htmlFor="">Habitaciones</label>
                            <div>
                                <Field className={styles.field} name='rooms' type='text'/>
                                <ErrorMessage name='rooms' component={() => <p className={styles.wrong}>{errors.rooms}</p>}/>
                            </div>
                            <label className={styles.label} htmlFor="">Baños</label>
                            <div>
                                <Field className={styles.field} name='baths' type='text'/>
                                <ErrorMessage name='baths' component={() => <p className={styles.wrong}>{errors.baths}</p>}/>
                            </div>
                            <label className={styles.label} htmlFor="">Garage</label>
                            <div>
                                <Field className={styles.field} name='garage' as="select">
                                    <option >Garage</option>
                                    <option name="garage" value={true} >Si</option>
                                    <option name="garage" value={false} >No</option>
                                </Field>
                                <ErrorMessage name='garage' component={() => <p className={styles.wrong}>{errors.garage}</p>}/>
                            </div>
                            <input className={styles.button} type="submit" />
                            {newProperty && (<p className={styles.success}>Formulario enviado</p>)}
                        </section>
                    </div>
                </Form>
            )}
        </Formik>
    )
}