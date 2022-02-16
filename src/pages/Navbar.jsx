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
    marginTop:'0px',
    marginLeft:'-10px'
    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        

    }
}))

export default function Navbar(){
    const classes= useStyles();
    return(
        <div id='navbar' >
            <AppBar className={classes.appBar} >
                <Toolbar>
                    <div className={classes.container}>
                    <img src={icono} alt="loconav" width={55} height={68}  />
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}