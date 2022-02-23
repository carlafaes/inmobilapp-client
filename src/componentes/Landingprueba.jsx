import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Logo from '../Img/logo.png';
import { Navigate } from 'react-router-dom';
// import '../styles/Landing.css'
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: '100vh',
    // backgroundImage:"url('https://images.pexels.com/photos/1095826/pexels-photo-1095826.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
    backgroundImage: "url('https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '10',
  },
  imgLogo: {
    marginLeft: '210px',
    marginTop: '2%',
    '@media (max-width:575px)' : {
      marginLeft:'100px',
      width:'300px',
      marginTop:'-10%',
    },
    '@media (max-width:1200px)' : {
      width: '400px',
      marginLeft:'170px',
      height:'300px',
    }
  },
  slogan: {
    marginLeft: '36%',
    marginTop: '-5%',
    fontSize: '30px',
    color:'#0d0d0d',
    fontFamily: 'Times New Roman',
    textShadow: '#faa222 1px 1px',
  '@media (max-width:575px)' : {
    width: '50%',
    fontSize:'20px',
    marginLeft: '26%',
  },
  '@media (max-width:1200px)' : {
    width: '400px',
    marginLeft:'170px',
    height:'80px',
  }
  },
  arrow: {
    width:'100px',
    color: '#faa222',
    // fontSize: '40rem',
     marginLeft: '385px',
    marginTop: '-5%',
    position: 'absolute',
    zIndex: '10',
    height:'80px',
    '@media (max-width:575px)' : {
      width: '100px',
      marginLeft:'170px',
      height:'40px',
    },
    '@media (max-width:1200px)' : {
      width: '100px',
      marginLeft:'270px',
      height:'40px',
    }
  },
}));

export default function Landing() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);




  return (
    <div className={classes.root}>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <img className={classes.imgLogo}  src={Logo} alt="imglogo" width={650} height={450} />
        <h3 className={classes.slogan} >Innovación inmobiliaria</h3>
        <CssBaseline />
        <div>
          <Scroll to="navbar" smooth>
            <IconButton>
              <div className='arrow_landing'>
              <ExpandMoreIcon className={classes.arrow} />
              </div>
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
