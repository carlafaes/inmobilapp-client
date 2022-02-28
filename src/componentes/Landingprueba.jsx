import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Logo from '../Img/logo.png';

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
    width:'600px',
    marginLeft: '220px',
    marginTop: '1%',
    height:'300px',
    '@media (max-width:575px)' : {
      marginLeft:'100px',
      width:'300px',
      marginTop:'-10%',
    },
    '@media (max-width:960px)' : {
      width: '480px',
      marginLeft:'240px',
      height:'300px',
    },
    '@media (max-width:1200px)' : {
      width: '700px',
      marginLeft:'190px',
      height:'350px',
      marginTop:'30px',
    },
    '@media (max-width:1900px)' : {
      width: '780px',
      marginLeft:'490px',
      height:'400px',
    },
    '@media (max-width:2060px)' : {
      width: '780px',
      marginLeft:'421px',
      height:'300px',
      marginTop:'100px',
    },
  },
  slogan: {
    marginLeft: '26%',
    marginTop: '1%',
    fontSize: '30px',
    color:'#0d0d0d',
    fontFamily: 'Times New Roman',
    textShadow: '#faa222 1px 1px',
  '@media (max-width:575px)' : {
    width: '50%',
    fontSize:'20px',
    marginLeft: '26%',
  },
  '@media (max-width:960px)' : {
    width: '400px',
    marginLeft:'270px',
    height:'80px',
  },
  '@media (max-width:1200px)' : {
    width: '400px',
    marginLeft:'306px',
    height:'40px',
    marginTop:'-20px',
  },
  '@media (max-width:1980px)' : {
    width: '780px',
    marginLeft:'270px',
    height:'300px',
    marginTop:'-30px',
  },
  '@media (max-width:2060px)' : {
    width: '400px',
    marginLeft:'540px',
    height:'80px',
    marginTop:'-10px',
  },
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
    '@media (max-width:960px)' : {
      width: '100px',
      marginLeft:'370px',
      height:'40px',
      marginTop:'-10px',
    },
    '@media (max-width:2060px)' : {
      width: '200px',
      marginLeft:'870px',
      height:'90px',
      marginTop:'-10px',
    },
    '@media (max-width:1366px)' : {
      width: '400px',
      marginLeft:'260px',
      height:'60px',
      marginTop:'-20px',
    },
    '@media (max-width:1900px)' : {
      width: '500px',
      marginLeft:'450px',
      height:'100px',
      marginTop:'-60px',
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
