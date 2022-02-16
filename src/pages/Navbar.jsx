import React from 'react';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import icono from '../Img/icono.png'

const useStyles = makeStyles((theme)=>({
    appBar:{
        background:'rgba(212,212,212, 0.7)',
        position:'relative',
        

    },
    icon:{
        color:'#faa222',
        fontSize:'2rem',
        marginLeft:'150vh'
    },
    icono:{
    marginTop:'-50px',
    marginLeft:'-10px'
    },
    container:{
        alignItems:'center'
    }
}))

export default function Navbar(){
    const classes= useStyles();
    return(
        <div id='navbar' className={classes.container}>
            <AppBar className={classes.appBar} >
                <Toolbar>
                    <img src={icono} alt="loconav" width={55} height={55}  />
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}