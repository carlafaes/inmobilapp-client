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
import { FaPencilAlt } from 'react-icons/fa'
import { useForm } from "react-hook-form";

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

    // estados para el cambio de datos 
    const { token } = user
    const alertPhone = () =>
    toast.error("El numero de celular debe tener 10 digitos o más digitos");
    const [input, setInput] = useState({
        name: '',
        age: '',
        phone: '',
        address: '',
        password: '',
        newPassword: ''
    })

    const handleEdit = () => {
        
        console.log(input);
    }
    const body = (
        <div className={classes.modal}>
            <div align='center'>
                <h2 className={classes.titleLogin}>Datos a editar</h2>
            </div>
            <form >
                <div className='containerModal'>
                    <input type="text"
                        placeholder="Nombre"
                        className='auth_input'
                        autoComplete="off"
                        onChange={(e) => {
                            setInput({ ...input, name: e.target.value })
                        }}
                    />
                    <input type="number"
                        placeholder="Edad"
                        className='auth_input'
                        autoComplete="off"
                        onChange={(e) => {
                            setInput({ ...input, age: e.target.value })
                        }}
                    />
                </div>
                <div className='containerModal'>
                    <input type="text"
                        placeholder="Direccion"
                        className='auth_input'
                        autoComplete="off"
                        onChange={(e) => {
                            setInput({ ...input, address: e.target.value })
                        }}
                    />
                    <input type="number"
                        placeholder="Celular"
                        className='auth_input'
                        autoComplete="off"
                        onChange={(e) => {
                            setInput({ ...input, phone: e.target.value })
                        }}
                    />
                </div>
                <div className='containerModal'>
                    <input type="password"
                        placeholder="Anterior contraseña"
                        className='auth_input'
                        autoComplete="off"
                        onChange={(e) => {
                            setInput({ ...input, password: e.target.value })
                        }}
                    />
                    <input type="password"
                        placeholder="Nueva contraseña"
                        className='auth_input'
                        autoComplete="off"
                        onChange={(e) => {
                            setInput({ ...input, newPassword: e.target.value })
                        }}
                    />
                </div>
            </form>
            <div align='right' className='botonEdit'>
                <Button color='primary' onClick={handleEdit}>Enviar</Button>
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
