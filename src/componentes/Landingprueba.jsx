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
    marginLeft: '28%',
    marginTop: '2%',

  },
  slogan: {
    marginLeft: '36%',
    marginTop: '-5%',
    fontSize: '30px',
    fontFamily: 'Times New Roman',
    textShadow: '#faa222 1px 1px',
  },
  arrow: {
    color: '#faa222',
    fontSize: '4rem',
    marginLeft: '185vh',
    marginTop: '-5%',
    position: 'absolute',
    zIndex: '10',
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
        <img className={classes.imgLogo} src={Logo} alt="imglogo" width={650} height={450} />
        <h3 className={classes.slogan}>Innovación inmobiliaria</h3>
        <CssBaseline />
        <div>
          <Scroll to="navbar" smooth>
            <IconButton>
              <ExpandMoreIcon className={classes.arrow} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
