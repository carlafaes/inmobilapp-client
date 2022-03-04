import React, { useEffect, useState } from 'react';
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
import { FaPencilAlt, FaUserCircle } from 'react-icons/fa'
import toast from 'react-hot-toast';
import clientService from '../../services/client';
import { useDispatch } from 'react-redux';

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

export const NavbarClient = ({ handleLogout, user }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const info = {
        name,
        email,
        phone,
        password,
        newPassword
    }
    // estados para el cambio de datos 
    const { token } = user
    const alert = () =>
        toast.error("Please enter your password");
    const alertEmail = () => {
        toast.error('El email es invalido')
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        if (info.password.length === 0) {
            return alert();
        }
        else if (!validator.isEmail(info.email)) {
            return alertEmail()
        }
        console.log(info, token)
        await clientService.updateInfo(info, token);
    }
    const body = (
        <div className={classes.modal}>
            <div align='center'>
                <h2 className={classes.titleLogin}>Datos a editar</h2>
            </div>
            <form onSubmit={handleEdit}>
                <div className='containerModal'>
                    <input type="text"
                        placeholder="Nombre"
                        className='auth_input'
                        autoComplete="off"
                        value={name}
                        name="name"
                        onChange={({ target }) => setName(target.value)}
                    />
                    <input type="text"
                        placeholder="Email"
                        className='auth_input'
                        autoComplete="off"
                        value={email}
                        name="email"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className='containerModal'>
                    <input type="text"
                        placeholder="Direccion"
                        className='auth_input'
                        autoComplete="off"
                        value={address}
                        name="address"
                        onChange={({ target }) => setAddress(target.value)}
                    />
                    <input type="number"
                        placeholder="Celular"
                        className='auth_input'
                        autoComplete="off"
                        value={phone}
                        name="phone"
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </div>
                <div className='containerModal'>
                    <input type="password"
                        placeholder="Anterior contraseña"
                        className='auth_input'
                        autoComplete="off"
                        value={password}
                        name="password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <input type="password"
                        placeholder="Nueva contraseña"
                        className='auth_input'
                        autoComplete="off"
                        value={newPassword}
                        name="newPassword"
                        onChange={({ target }) => setNewPassword(target.value)}
                    />
                </div>
                <div align='right' className='botonEdit'>
                    <button type='submit' className='btn_primary'>Enviar</button>
                    <button onClick={() => openCloseModal()} className='btn_primary'>Cancelar</button>
                </div>
            </form>
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
                <h2 className='title'><FaUserCircle className='emoticon' />  {user.name}  </h2>
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