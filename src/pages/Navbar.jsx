import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import icono from '../Img/icono.png'
import Menu from '@material-ui/core/Menu';
import MenuNav from './MenuNav';


const useStyles = makeStyles((theme) => ({
    appBar: {
        background: 'rgba(212,212,212, 0.7)',
        position: 'relative',
    },
    icon: {
        color: '#faa222',
        fontSize: '2rem',
        marginLeft: '-10px'
    },
    icono: {
        marginTop: '0px',
        marginLeft: '150vh'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    siplemenu:{
        padding: '0',
        width: '100%',
    }
}))


export default function Navbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
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
                        <img src={icono} alt="loconav" width={55} height={68} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}