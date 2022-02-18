
import React from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
export const LoginClient = () => {

    return (
        <>
            <Navbar />
            <div className="auth_main">
                <div className="auth_box-container">
                    <div className="login">
                        <h3 className="auth_title">Login</h3>
                    </div>
                    <form >
                        <input type="text"
                            placeholder="Email"
                            autocomplete="off"
                            className="auth_input" />

                        <input type="password"
                            placeholder="Password"
                            className="auth_input" />

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

