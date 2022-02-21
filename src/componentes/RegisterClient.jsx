import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { PostClient } from '../redux/actions/actionRegisterClient'
import Navbar from './Navbar'
import 'react-toastify/dist/ReactToastify.css';

export const RegisterClient = () => {

    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const notify = () => toast.success("Successful registration!",{
        icon: "🚀",
        theme: "dark"
    });
    const alertPassword=()=> toast.error("Passwords do not match ",{
        theme: "dark"
    })
    const alertAge=()=> toast.error("You must be of legal age",{
        theme: "dark"
    })
    const alertPhone=()=> toast.error("number greater than 10 digits",{
        theme: "dark"
    })
    const alertAgeDigits=()=> toast.error("must not have more than 3 digits",{
        theme: "dark"
    })

    const handleRegister = (data) => {
        const {phone,password,password2,age,dni,name,address}=data
        if(phone.length<10){
            return alertPhone()
        }
        else if(age<18){
            return alertAge()
        }
        else if(age.length>2){
            return alertAgeDigits()
        }
        else if(password!=password2) {
            return alertPassword()
        }
        data={
            phone,
            password,
            age,
            dni,
            name,
            address
        }
        dispatch(PostClient(data))
        console.log(data)
        notify()
    }
    return (
        <>
            <Navbar />
            <div className="auth_main">
                <div className="auth_box-container">
                    <h3 className="auth_title">Register</h3>
                    <form onSubmit={handleSubmit(handleRegister)} >
                        <input type="text"
                            placeholder="Names"
                            className='auth_input'
                            autoComplete='off'
                            {...register('name', {
                                required: true
                            })}
                        />

                        <input type='Number'
                            placeholder='DNI'
                            className='auth_input'
                            {...register('dni', {
                                required: true
                            })}
                        />

                        <input type="text"
                            placeholder="address"
                            className='auth_input'
                            autoComplete='off'
                            {...register('address', {
                                required: true
                            })}
                        />


                        <input type="Number"
                            placeholder='Phone'
                            className='auth_input'
                            autoComplete='off'
                            {...register('phone', {
                                required: true
                            })}
                        />


                        <input type='Number'
                            placeholder='Age'
                            className='auth_input'
                            {...register('age', {
                                required: true
                            })}
                        />

                        <input type="password"
                            placeholder='Password'
                            className='auth_input'
                            {...register('password', {
                                required: true
                            })}
                        />

                        <input type="password"
                            placeholder='Confirm Password'
                            className='auth_input'
                            {...register('password2',{
                                required: true
                            })}
                        />

                        <button className="btn btn-primary" >Register</button>
                        <ToastContainer />
                        {
                            Object.keys(errors).length >= 1 && <div>Todos los campos son requeridos</div>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
