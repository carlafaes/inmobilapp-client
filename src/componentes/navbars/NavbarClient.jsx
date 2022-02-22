import React, { useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import icono from '../../Img/icono.png';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';

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
    modal:{
        position:'absolute',
        width:400,
        height:300,
        borderRadius:'5px',
        backgroundColor:'rgba(229, 196, 271,0.7)',
        border:'2px solid #535353',
        boxShadow: theme.shadows[5],
        padding:'16px 32px 24px',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
        
    },
    textfield:{
        width:'100%',
        paddingTop:'40px',
        color:'#535353'
    },
    button:{
        textAlign:'center'
    },
    titleLogin:{
        fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        color:'#535353',
        textShadow:'#f2d6ad 1px 1px'
    },
    btnLogin:{
        paddingTop:'15px',
        paddingRight:'16px'
    }
}));

export const NavbarClient = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const [modal,setModal]=useState(false);
    const [modalAg,setModalAg]=useState(false);

    const body=(
        
        <div className={classes.modal}>
            <div align='center'>
                <h2 className={classes.titleLogin}>Datos a editar</h2>
            </div>
            <TextField label='Dni' className={classes.textfield}/>
            <br/>
            <TextField label='Password' className={classes.textfield}/>
            <br/>
            <div align='right'>
                <Button className={classes.btnLogin} color='primary'>Ingresar</Button>
                <Button className={classes.btnLogin} color='secondary' onClick={()=>openCloseModal()}>Cancelar</Button>
            </div>
        </div>
    )
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const openCloseModal= ()=>{
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
                            <Link href='/'>
                            <MenuItem><i className="fa-solid fa-house emoticon"></i> Inicio</MenuItem>
                            </Link>
                            <MenuItem><i className="fa-regular fa-star emoticon"></i> Favoritos</MenuItem>
                            <MenuItem><i className="fa-solid fa-gift emoticon"></i> Solicita tu inmueble</MenuItem>
                            <MenuItem onClick={() => openCloseModal()}> <i className=" emoticon fa-solid fa-pen-to-square"></i> Editar perfil</MenuItem>
                            <Link href='/login'><MenuItem><i className="fa-solid fa-arrow-right-from-bracket emoticon"></i> Salir</MenuItem></Link>
                            {/* <h2 className="title">Redes sociales</h2>
                            <Link href="https://github.com/InmobilApp"><MenuItem><i className="fa-brands fa-github emoticon Link"></i> Git-Hub</MenuItem></Link>
                            <MenuItem> <i className="fa-solid fa-link emoticon"></i>Link deploy</MenuItem> */}
                        </Menu>
            <Modal open={modal} onClose={openCloseModal}> 
                {body}
            </Modal>
        </>
    )
}
