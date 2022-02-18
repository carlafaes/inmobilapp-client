
import React from "react";
// import {useSelector,useDispatch } from 'react-redux';
import { Modal } from "@material-ui/core";
import {Link} from 'react-router-dom';
// import { closeModal } from "../../redux/actions/ActionsClient";


export const LoginClient = () => {

    // const {openModal}=useSelector((state)=>state)
    // const dispatch =useDispatch()

    const handleCloseModal=()=>{
        // dispatch(closeModal())
    }
    
    return (
        <>
        <Modal
        // isOpen={openModal}
        closeModal={handleCloseModal}>
            <div className="auth_main">
                <div className="auth_box-container">
                    <div className="login">
                    <h3 className="auth_title">Login</h3>
                    <i onClick={handleCloseModal}className="fa-solid fa-xmark emoticon pointer"></i>
                    </div>
                    <form >
                        <input type="text"
                        placeholder="Email"
                        autocomplete="off"
                        className="auth_input"/>

                        <input type="password"
                        placeholder="Password"
                        className="auth_input"/>

                        <button className='btn btn-primary btn-block'>Login</button>
                        <Link to='/' className='link'>
                            Create new account
                        </Link>
                    </form>
                </div>
            </div>
            <h2>hola mundo</h2>
        </Modal>
        </>
    )
}

