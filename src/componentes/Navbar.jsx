import React, { useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar,Modal,TextField,Button } from '@material-ui/core';
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



export default function Navbar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const [modal,setModal]=useState(false);
    const [modalAg,setModalAg]=useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openCloseModal= ()=>{
        setModal(!modal)
    }
    const openCloseModalAg= ()=>{
        setModalAg(!modalAg)
    }

    
    const body=(
        
        <div className={classes.modal}>
            <div align='center'>
                <h2 className={classes.titleLogin}>Login Admin</h2>
            </div>
            <TextField label='Correo electronico' className={classes.textfield}/>
            <br/>
            <TextField label='Password' className={classes.textfield}/>
            <br/>
            <div align='right'>
                <Button className={classes.btnLogin} color='primary'>Ingresar</Button>
                <Button className={classes.btnLogin} color='secondary' onClick={()=>openCloseModal()}>Cancelar</Button>
            </div>
        </div>
    )
    const body_agent=(
        <div className={classes.modal}>
            <div align='center'>
                <h2 className={classes.titleLogin}>Loggin Agente</h2>
            </div>
            <TextField label='Correo electronico' className={classes.textfield}/>
            <br/>
            <TextField label='Password' className={classes.textfield}/>
            <br/>
            <div align='right'>
                <Button className={classes.btnLogin} color='primary'>Ingresar</Button>
                <Button className={classes.btnLogin} color='secondary' onClick={()=>openCloseModalAg()}>Cancelar</Button>
            </div>
        </div>
    )
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
                <MenuItem  onClick={()=>openCloseModal()}> <i className=" emoticon fa-solid fa-user-shield"></i> Admin</MenuItem>
                <MenuItem onClick={()=>openCloseModalAg()}><i className="emoticon fa-solid fa-id-badge"></i> Agente</MenuItem>
                <h2 className="title">Redes sociales</h2>
                <MenuItem><i className="fa-brands fa-facebook-f emoticon"></i> Facebook</MenuItem>
                <MenuItem> <i className="fa-brands fa-twitter emoticon"></i>Twitter</MenuItem>
            </Menu>
            <Modal open={modal} onClose={openCloseModal}> 
                {body}
            </Modal>
            <Modal open={modalAg} onClose={openCloseModalAg}> 
                {body_agent}
            </Modal>
        
        </>


    )
}
