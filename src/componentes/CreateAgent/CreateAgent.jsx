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
        password:"",
        confirm_password:"",
        phone: "",
        age: "",
    }}

    validate={(v)=>{
        const err = {};
        if(!v.dni){
            err.dni = "Debes introducir un DNI";
        }else if(!/^\d+$/.test(v.dni)){
            err.dni = "Solo se aceptan números en este campo";
        }else if(v.dni.length !== 10) {
            err.dni = "El DNI debe ser de 10 digitos";
        }

        if(!v.name){
            err.name = "Debes introducir un nombre";
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(v.name)){
            err.name = "Solo se aceptan letras y espacios en este campo";
        }

        if(!v.password) {
            err.password = "Debes introducir una contraseña";
        }

        if(!v.confirm_password){
            err.confirm_password = "Debes confirmar tu contraseña";
        }else if(!(v.confirm_password === v.password)){
            err.confirm_password = "Ambos campos de contraseña deben coinsidir";
        }

        if(!v.address){
            err.address = "Debes introducir una dirección";
        }

        if(!v.phone){
            err.phone = "Debes introducir un nombre";
        }else if(!/^\d+$/.test(v.phone)){
            err.phone = "Solo se aceptan números en este campo";
        }else if(v.phone.length !== 10){
            err.phone = "El telefono debe tener 10 digitos"
        }

        if(!v.age){
            err.age = "Debes introducir una edad";
        }else if(!/^\d+$/.test(v.age)){
            err.age = "Solo se aceptan números en este campo";
        }else if(v.age.length >= 3){
            err.age = "La edad debe tener como máximo dos dígitos";
        }else if(v.age < 18){
            err.age = "La edad mínima es de 18 años";
        }else if(v.age >= 99){
            err.age = "La edad máxima son 99 años"
        }

        console.log(err)
        setFormErrors(err)
        return err;
    }}

    onSubmit={(values, {resetForm})=>{
        resetForm();
        values.adminID = "6218312f2a77823be06b1672";
        values.permissions = {
            crudProperty: true
        }
        let {confirm_password, ...rest} = values;
        console.log(rest);
        console.log(rest);
        agentService.createAgent(rest);
        setNewAgent('sent');
        setTimeout(() => setNewAgent(''),5000);
    }}
    >
        {({errors})=>(
          <Form>
              <div className={styles.container}>
                  <section className={styles.section}>
                        <h1>Registro de agente</h1>
                        <section className={styles.prueba}>
                            <div className={styles.input_container}>
                                <Field className={styles.field} id="dni" name="dni" type="text" />
                                <label className={styles.label} htmlFor="dni"><span className={styles.label_text}>DNI *</span></label>
                                {/* <ErrorMessage name="dni" component={() => <p className={styles.wrong}>{errors.dni}</p>} /> */}
                            </div>
                            <div className={styles.input_container}>
                                <Field className={styles.field} id="name" name="name" type="text" />
                                <label className={styles.label} htmlFor="name"><span className={styles.label_text}>Nombre *</span></label>
                                {/* <ErrorMessage name="name" component={() => <p className={styles.wrong}>{errors.name}</p>}/> */}
                            </div>
                            <div className={styles.input_container}>
                                <Field className={styles.age_input} id="age" name="age" type="text" />
                                <label className={styles.age} htmlFor="age"> <span>Edad *</span></label>
                                {/* <ErrorMessage name="age" component={() => <p className={styles.wrong}>{errors.age}</p>} /> */}
                            </div>
                        </section>
                        <section className={styles.prueba}>
                            <div className={styles.input_container}>
                                <Field className={styles.field} id="password" name="password" type="password" />
                                <label className={styles.label} htmlFor="password">Contraseña</label>
                                {/* <ErrorMessage name="password" component={() => <p className={styles.wrong}>{errors.name}</p>}/> */}
                            </div>
                            <div className={styles.input_container}>
                                <Field className={styles.field} id="confirm_password" name="confirm_password" type="password" />
                                <label className={styles.label} htmlFor="confirm_password">Confirmar contraseña</label>
                                {/* <ErrorMessage name="confirm_password" component={() => <p className={styles.wrong}>{errors.confirm_password}</p>}/> */}
                            </div>
                        </section>
                        <section className={styles.prueba}>
                            <div className={styles.input_container}>
                                <Field className={styles.field} id="address" name="address" type="text" />
                                <label className={styles.label} htmlFor="address">Dirección</label>
                                {/* <ErrorMessage name="address" component={() => <p className={styles.wrong}>{errors.address}</p>}/> */}
                            </div>
                            <div className={styles.input_container}>
                                <Field className={styles.field} id="phone" name="phone" type="text" />
                                <label className={styles.label} htmlFor="phone">Telefono</label>
                                {/* <ErrorMessage name="phone" component={() => <p className={styles.wrong}>{errors.phone}</p>} /> */}
                            </div>
                        </section>
                        <button className={styles.button} type="submit">Registrar</button>
                        {newAgent && <p className={styles.success}>Angente creado correctamente</p>}
                  </section>
              </div>
          </Form>  
        )}
    </Formik>
    )
}