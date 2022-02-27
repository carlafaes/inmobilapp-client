import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Modal,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
import icono from "../../Img/icono.png";
import Fade from "@material-ui/core/Fade";
import Link from "@material-ui/core/Link";
import { ImHome } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaPencilAlt, FaCat } from "react-icons/fa";
import { logaoutCurrentUserForLocalStorage } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import PutAdmin from "../PutAdmin";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "rgba(212,212,212, 0.7)",
    position: "relative",
  },
  icon: {
    color: "#faa222",
    fontSize: "2rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100vw",
  },
  modal: {
    position: "absolute",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
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

export default function NavBarAdmin({ user, token, deleteCurrentAdminID }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [modal, setModal] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openCloseModal = () => {
    setModal(!modal);
  };

  const body = (
    <div className={classes.modal}>
      <PutAdmin token={token} openCloseModal={openCloseModal} />
    </div>
  );

  const handleLogout = () => {
    swal({
      title: "Salir",
      text: "Estas seguro que deseas salir?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((op) => {
      if (op) {
        logaoutCurrentUserForLocalStorage();
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
              <Link href="/">
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
        <h2 className="title"> {user.name}</h2>
        <Link href="/">
          <MenuItem className="menuItem">
            <ImHome className="emoticon" />
            Home
          </MenuItem>
        </Link>
        <MenuItem className="menuItem" onClick={() => openCloseModal()}>
          <FaPencilAlt className="emoticon" /> Editar perfil
        </MenuItem>
        <MenuItem
          className="menuItem"
          onClick={() => deleteCurrentAdminID(user.id, token)}
        >
          <FaCat className="emoticon" /> Eliminar perfil
        </MenuItem>
        <MenuItem className="menuItem" onClick={handleLogout}>
          <FiLogOut className="emoticon" /> Salir
        </MenuItem>
        <h2 className="title">Redes sociales</h2>
        <Link href="https://github.com/InmobilApp">
          <MenuItem className="menuItem">
            <IoLogoGithub className="emoticon" />
            Git-Hub
          </MenuItem>
        </Link>
        <Link href="https://inmobil-app.herokuapp.com/">
          <MenuItem className="menuItem">
            <IoLogoVercel className="emoticon" /> Link deploy
          </MenuItem>
        </Link>
      </Menu>
      <Modal open={modal} onClose={openCloseModal}>
        {body}
      </Modal>
    </>
  );
}
