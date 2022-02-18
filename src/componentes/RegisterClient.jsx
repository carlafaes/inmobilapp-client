import React from 'react'
import Navbar from './Navbar'

export const RegisterClient = () => {
    return (
        <>
        <Navbar/>
            <div className="auth_main">
                <div className="auth_box-container">
                    <h3 className="auth_title">Register</h3>
                    <form >
                        <input type="text"
                            placeholder="Names"
                            className='auth_input' />

                        <input type='Number'
                            placeholder='DNI'
                            className='auth_input' />

                        <input type="text"
                            placeholder="address"
                            className='auth_input' />


                        <input type="text"
                            placeholder='Email'
                            className='auth_input' />

                        <input type="password"
                            placeholder='Password'
                            className='auth_input' />

                        <input type="password"
                            placeholder='Confirm Password'
                            className='auth_input' />

                        <button className="btn btn-primary">Register</button>

                    </form>
                </div>
            </div>
        </>

    )
}
