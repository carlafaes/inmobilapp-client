import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Logo from '../Img/inmobilapp-logo-landing.png';
import './../styles/Navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    marginRigth: '0px',
    // backgroundImage:"url('https://images.pexels.com/photos/1095826/pexels-photo-1095826.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
    backgroundImage: "url('https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw ',
    zIndex: '10',
  },
  imgLogo: {
    width: '20%',
    marginLeft: '40%',
    // marginTop: '1%',
    height: '15%',
    '@media only screen and (max-width:575px)': {
      marginLeft: '0%',
      width: '30%',
      marginTop: '10%',
    },
    '@media only screen and (max-width:960px)': {
      width: '480px',
      marginLeft: '240px',
      height: '300px',
    },
    '@media only screen and (max-width:1200px)': {
      width: '700px',
      marginLeft: '190px',
      height: '350px',
      marginTop: '30px',
    },
    '@media only screen and (max-width:1900px)': {
      width: '780px',
      marginLeft: '490px',
      height: '400px',
      marginTop: '10%',
    },
    '@media only screen and (max-width:2060px)': {
      width: '780px',
      marginLeft: '30%',
      height: '300px',
      marginTop: '100px',
    },
    '@media only screen and (max-width:2600px)': {
      width: '780px',
      marginLeft: '35%',
      height: '300px',
      marginTop: '10%',
    },
  },
  arrow: {
    // width:'100px',
    color: '#faa222',
    // fontSize: '40rem',
    //  marginLeft: '45%',
    // marginTop: '-5%',
    // position: 'absolute',
    zIndex: '10',
    '@media (max-width:575px)': {
      width: '100px',
      marginLeft: '170px',
      height: '40px',
    },
    '@media (max-width:960px)': {
      width: '100px',
      marginLeft: '370px',
      height: '40px',
      marginTop: '-10px',
    },
    '@media (max-width:2060px)': {
      width: '100vw',
      height: '113px',
      marginTop: '-10px',
    },
    '@media (max-width:1366px)': {
      width: '400px',
      marginLeft: '260px',
      height: '60px',
      marginTop: '-20px',
    },
    '@media (max-width:1900px)': {
      width: '100vw',
      height: '100px',
      marginTop: '-60px',
    },
    '@media (max-width:2600px)': {
      width: '100vw',
      marginLeft: '-20px',
      height: '150px',
      marginTop: '0%',
    },
  }
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
        <img className={classes.imgLogo} src={Logo} alt="imglogo" width={650} height={450} />
        <CssBaseline />
        <div>
          <Scroll to="navbar" smooth>
            <IconButton className='custombtn'>
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
