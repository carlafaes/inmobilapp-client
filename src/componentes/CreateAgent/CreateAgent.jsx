import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import agentService from "../../services/agent";
import styles from "./CreateAgent.module.css"



//Agregar password, agregar boton cancelar y que la edad no sea negativa
export default function CreateAgent() {
    const [newAgent, setNewAgent] = useState('');
    const [formErrors, setFormErrors] = useState({});

    return (
    <Formik
    initialValues={{
        dni: "",
        name: "",
        address: "",
        phone: "",
        age: "",
    }}

    validate={(v)=>{
        const err = {};
        if(!v.dni){
            err.dni = "Debes introducir un DNI";
        }else if(!/^\d+$/.test(v.dni)){
            err.dni = "Solo se aceptan números en este campo";
        }

        if(!v.name){
            err.name = "Debes introducir un nombre";
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(v.name)){
            err.name = 'Solo se aceptan letras y espacios en este campo'
        }

        if(!v.address){
            err.address = "Debes introducir una dirección";
        }

        if(!v.phone){
            err.phone = "Debes introducir un nombre";
        }else if(!/^\d+$/.test(v.phone)){
            err.phone = "Solo se aceptan números en este campo";
        }

        if(!v.age){
            err.age = "Debes introducir una edad";
        }else if(!/^\d+$/.test(v.age)){
            err.age = "Solo se aceptan números en este campo";
        }else if(v.age.length >= 3){
            err.age = "la edad debe tener como máximo dos dígitos";
        }else if(v.age < 18){
            err.age = "la edad mínima es de 18 años";
        }

        setFormErrors(err)
        return err;
    }}

    onSubmit={(values, {resetForm})=>{
        resetForm();
        values.adminID = "621455aec2ddf2bec60c76a1";
        values.permissions = {
            crudProperty: true
        }
        console.log(values);
        agentService.createAgent(values);
        setNewAgent('sent');
        setTimeout(() => setNewAgent(''),5000);
    }}
    >
        {({errors})=>(
          <Form>
              <div className={styles.container}>
                  <section className={styles.section}>
                        <h2>Información requerida</h2>
                        <label className={styles.label} htmlFor="dni">DNI</label>
                        <div>
                            <Field className={styles.field} id="dni" name="dni" type="text" />
                            <ErrorMessage name="dni" component={() => <p className={styles.wrong}>{errors.dni}</p>} />
                        </div>
                        <label className={styles.label} htmlFor="name">Nombre</label>
                        <div>
                            <Field className={styles.field} id="name" name="name" type="text" />
                            <ErrorMessage name="name" component={() => <p className={styles.wrong}>{errors.name}</p>}/>
                        </div>
                        <label className={styles.label} htmlFor="address">Dirección</label>
                        <div>
                            <Field className={styles.field} id="address" name="address" type="text" />
                            <ErrorMessage name="address" component={() => <p className={styles.wrong}>{errors.address}</p>}/>
                        </div>
                        <label className={styles.label} htmlFor="phone">Telefono</label>
                        <div>
                            <Field className={styles.field} id="phone" name="phone" type="text" />
                            <ErrorMessage name="phone" component={() => <p className={styles.wrong}>{errors.phone}</p>} />
                        </div>
                        <label className={styles.label} htmlFor="age">Edad</label>
                        <div>
                            <Field className={styles.field} id="age" name="age" type="text" />
                            <ErrorMessage name="age" component={() => <p className={styles.wrong}>{errors.age}</p>} />
                        </div>
                        <button className={styles.button} type="submit">Crear</button>
                        {newAgent && <p className={styles.success}>Angente creado correctamente</p>}
                  </section>
              </div>
          </Form>  
        )}
    </Formik>
    )
}