import React, { useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import icono from '../../Img/icono.png';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import { ImHome } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import clientService from '../../services/client';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: 'rgba(212,212,212, 0.7)',
        position: 'relative',

    },
    icon: {
        color: '#faa222',
        fontSize: '2rem',

    },
    container: {
        display: 'flex',
        // flexDirection:'row',
        justifyContent: 'space-between',
        width: '100vw',


    },
    modal: {
        position: 'absolute',
        height: '450px',
        width: '600px',
        borderRadius: '5px',
        backgroundColor: 'white',
        border: '2px solid #FAA222',
        boxShadow: theme.shadows[5],
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'

    },
    button: {
        textAlign: 'center'
    },
    titleLogin: {
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        color: '#FAA222',
        textShadow: '#f2d6ad 1px 1px'
    },
}));

export const NavbarClient = ({ handleLogout }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [actualToken, setActualToken] = useState("");

    const alertPassword = () =>
        toast.error("Please enter your password");

    const sendInfo = async (e) => {
        e.preventDefault();

        if (userInfo.password.length === 0)
            return alertPassword()

        await clientService.updateInfo(userInfo, actualToken);
    };

    const body = (
        <div className={classes.modal}>
            <div align='center'>
                <h2 className={classes.titleLogin}>Datos a editar</h2>
            </div>
            <form onSubmit={sendInfo}>
                <div className='containerModal'>
                    <input type="text"
                        placeholder="Nombre"
                        className='auth_input'
                        autoComplete="off"
                    />
                </div>
                <div className='containerModal'>
                    <input type="text"
                        placeholder="Direccion"
                        className='auth_input'
                        autoComplete="off"
                    />
                    <input type="number"
                        placeholder="Celular"
                        className='auth_input'
                        autoComplete="off"
                    />
                </div>
                <div className='containerModal'>
                    <input type="password"
                        placeholder="Anterior contraseña"
                        className='auth_input'
                        autoComplete="off"
                    />
                    <input type="password"
                        placeholder="Nueva contraseña"
                        className='auth_input'
                        autoComplete="off"
                    />
                </div>
            </form>
            <div align='right' className='botonEdit'>
                <Button color='primary'>Enviar</Button>
                <Button color='secondary' onClick={() => openCloseModal()}>Cancelar</Button>
            </div>
        </div>
    )
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openCloseModal = () => {
        setModal(!modal)
    }


    return (
        <>
            <div id='navbar' >
                <AppBar className={classes.appBar} >
                    <Toolbar>
                        <div className={classes.container}>
                            <IconButton onClick={handleClick}>
                                <SortIcon className={classes.icon} />
                            </IconButton>
                            <Link href='/'><img src={icono} alt="logonav" width={55} height={68} className="pointer" /></Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <h2 className='title'> Area cliente</h2>
                <Link href='/'><MenuItem className='menuItem'> <ImHome className='emoticon' />Home</MenuItem></Link>
                <Link href='/viewClient' ><MenuItem className='menuItem'><AiOutlineStar className='emoticon' /> Favoritos</MenuItem></Link>
                <MenuItem className='menuItem' onClick={() => openCloseModal()}><FaPencilAlt className='emoticon' />  Editar perfil</MenuItem>
                <MenuItem className='menuItem' onClick={handleLogout}> <FiLogOut className='emoticon' /> Salir</MenuItem>
                <h2 className="title">Redes sociales</h2>
                <Link href="https://github.com/InmobilApp"><MenuItem className='menuItem'> <IoLogoGithub className='emoticon' />Git-Hub</MenuItem></Link>
                <Link href='https://inmobil-app.herokuapp.com/'><MenuItem className='menuItem'><IoLogoVercel className='emoticon' /> Link deploy</MenuItem></Link>
            </Menu>
            <Modal open={modal} onClose={openCloseModal}>
                {body}
            </Modal>
        </>
    )
}
