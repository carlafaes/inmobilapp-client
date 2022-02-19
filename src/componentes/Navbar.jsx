import React, { useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import icono from '../Img/icono.png';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'

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
}));



export default function Navbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    const classes = useStyles();
    return (
        <>
            <div id='navbar' >
                <AppBar className={classes.appBar} >
                    <Toolbar>
                        <div className={classes.container}>
                            <IconButton onClick={handleClick}>
                                <SortIcon className={classes.icon} />
                            </IconButton>
                            <img src={icono} alt="logonav" width={55} height={68} className="pointer" />
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
                TransitionComponent={Fade}>
                <h2 className="title">Area cliente</h2>
                <MenuItem><i className="fa-regular fa-star emoticon"></i> Favoritos</MenuItem>
                <MenuItem><i className="fa-solid fa-gift emoticon"></i> Solicita tu inmueble</MenuItem>
                <MenuItem><i className="fa-solid fa-arrow-right-to-bracket emoticon"></i> <Link to='/login' className='Link'>Entrar</Link></MenuItem>
                <h2 className="title">Area administrativa</h2>
                <MenuItem> <i className=" emoticon fa-solid fa-user-shield"></i> Admin</MenuItem>
                <MenuItem><i className="emoticon fa-solid fa-id-badge"></i> Agente</MenuItem>
                <h2 className="title">Redes sociales</h2>
                <MenuItem><i className="fa-brands fa-facebook-f emoticon"></i> Facebook</MenuItem>
                <MenuItem> <i className="fa-brands fa-twitter emoticon"></i>Twitter</MenuItem>
            </Menu>

        </>


    )
}
