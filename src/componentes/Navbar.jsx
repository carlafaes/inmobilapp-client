import React, { useState } from 'react';
import { AppBar, IconButton, Menu, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import icono from '../Img/icono.png';
import {MenuNav} from './MenuNav';
import {Navigate, useNavigate} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'rgba(212,212,212, 0.7)',
    position: 'relative',

    },
    icon:{
        color:'#faa222',
        fontSize:'2rem',
        
    },
    container:{
        display:'flex',
        // flexDirection:'row',
        justifyContent:'space-between',
        width:'100vw',
        

  },
}));

export default function Navbar(){

    const navigate =useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleInicio=()=>{
        navigate(-1)
    }

    const classes = useStyles();
    return(
        <div id='navbar' >
            <AppBar className={classes.appBar} >
                <Toolbar>
                    <div className={classes.container}>
                    <IconButton onClick={handleClick}>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                    <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className={classes.siplemenu}
                        >
                            <MenuNav />
                        </Menu>
                    <img onClick={handleInicio} src={icono} alt="logonav" width={55} height={68}  className="pointer"/>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
        
    )
}
