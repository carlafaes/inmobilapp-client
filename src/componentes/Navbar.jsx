import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
import icono from "../Img/inmobilapp-logo.png";
import Fade from "@material-ui/core/Fade";
import {Link} from 'react-router-dom'
import { ImHome } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
import "../styles/Navbar.css";

import {
  getUserForLocalStorage,
  logaoutCurrentUserForLocalStorage,
} from "../utils/user";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "rgba(212,212,212, 0.7)",
    position: "relative",
    width:'100%',
  },
  icon: {
    color: "#faa222",
    fontSize: "2rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  modal: {
    position: "absolute",
    width: 400,
    height: 300,
    borderRadius: "5px",
    backgroundColor: "rgba(229, 196, 271,0.7)",
    border: "2px solid #535353",
    boxShadow: theme.shadows[5],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  textfield: {
    width: "100%",
    paddingTop: "40px",
    color: "#535353",
  },
  button: {
    textAlign: "center",
  },
  titleLogin: {
    fontFamily: "Cambria, Cochin, Georgia, Times, Times New Roman, serif",
    color: "#535353",
    textShadow: "#f2d6ad 1px 1px",
  },
  btnLogin: {
    paddingTop: "15px",
    paddingRight: "16px",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const classes = useStyles();
  const open = Boolean(anchorEl);

  useEffect(() => {
    setUser(getUserForLocalStorage());
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    swal({
      title: "Salir",
      text: "Estas seguro que deseas salir?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((op) => {
      if (op) {
        logaoutCurrentUserForLocalStorage();
        setUser(null);
        swal("Listo!", {
          icon: "success",
        });
        navigate("/");
      }
    });
  };

  return (
    <>
      <div id="navbar">
        <AppBar className={classes.appBar}>
          <Toolbar>
            <div className={classes.container}>
              <IconButton onClick={handleClick}>
                <SortIcon className={classes.icon} />
              </IconButton>
              <Link to="/" className="link_home">
                <img
                  src={icono}
                  alt="logonav"
                  width={55}
                  height={68}
                  className="pointer"
                />
              </Link>
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
        <h2 className="title">{!!user ? user.name : "Inicio"}</h2>
        {!!user ? (
          <MenuItem
            className="menuItem"
            onClick={() => {
              switch (user.role) {
                case "ADMIN":
                  navigate("/viewAdmin");
                  break;
                case "AGENT":
                  navigate("/viewAgent");
                  break;
                case "CLIENT":
                  navigate("/viewClient");
                default:
                  break;
              }
            }}
          >
            <ImHome className="emoticon" />
            My Page
          </MenuItem>
        ) : (
          <Link to="/">
            <MenuItem className="menuItem">
              <ImHome className="emoticon" />
              Home
            </MenuItem>
          </Link>
        )}

        {!!user ? (
          <MenuItem className="menuItem" onClick={handleLogout}>
            <GiExitDoor className="emoticon" /> Salir
          </MenuItem>
        ) : (
          <Link to="/login">
            <MenuItem className="menuItem">
              <RiLoginBoxLine className="emoticon" />
              Login
            </MenuItem>
          </Link>
        )}

        <h2 className="title">Redes sociales</h2>
        <Link to="https://github.com/InmobilApp">
          <MenuItem className="menuItem">
            {" "}
            <IoLogoGithub className="emoticon" />
            Git-Hub
          </MenuItem>
        </Link>
        <Link to="https://inmobil-app.herokuapp.com/">
          <MenuItem className="menuItem">
            <IoLogoVercel className="emoticon" /> Link deploy
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}
