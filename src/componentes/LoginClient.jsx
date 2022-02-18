
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Modal } from "@material-ui/core";
import { Link } from 'react-router-dom';
// import { closeModal } from "../../redux/actions/ActionsClient";


export const LoginClient = () => {

    // const {openModal}=useSelector((state)=>state)
    // const dispatch =useDispatch()
    const [openModal, setOpenModal] = useState(false)

    const handle = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        // dispatch(closeModal())
        setOpenModal(false)
    }

    return (
        <>
            <button onClick={handle}> abrir</button>
            <Dialog onClose={handleCloseModal} open={openModal}>
                <div className="auth_main">
                    <div className="auth_box-container">
                        <div className="login">
                            <h3 className="auth_title">Login</h3>
                            <i onClick={handleCloseModal} className="fa-solid fa-xmark emoticon pointer"></i>
                        </div>
                        <form >
                            <input type="text"
                                placeholder="Email"
                                autocomplete="off"
                                className="auth_input" />

                            <input type="password"
                                placeholder="Password"
                                className="auth_input" />

                            <button className='btn-primary btn'>Login</button>
                            <Link to='/' className='link'>
                                Create new account
                            </Link>
                        </form>
                    </div>
                </div>
            </Dialog>


        </>
    )
}

