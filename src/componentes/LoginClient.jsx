import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Navbar from './Navbar';
import { useDispatch } from "react-redux";
import { LoginClientP } from "../redux/actions/actionClient";

export const LoginClient = () => {

    const dispatch=useDispatch();
    const { register, handleSubmit } = useForm();
    const [dni,setDni]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState(null);

    const handleLogin=(data)=>{
        console.log(data);
    }

    return (
        <>
            <Navbar />
            <div className="auth_main">
                <div className="auth_box-container">
                    <div className="login">
                        <h3 className="auth_title">Login</h3>
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <input type="Number"
                            placeholder="Dni"
                            autoComplete="off"
                            className="auth_input"
                            {...register('dni',{
                                required:true
                            })} />

                        <input type="password"
                            placeholder="Password"
                            className="auth_input" 
                            {...register('password',{
                                required:true
                            })} />

                        <div className='hola'>
                            <button className='btn-primary btn'>Login</button>
                            <Link to='/register' className='link'>
                                Create new account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

