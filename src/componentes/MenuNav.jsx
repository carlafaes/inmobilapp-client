
import React from "react"
// import {useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import { openModal } from "../../redux/actions/ActionsClient";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function MenuNav() {
    const classes = useStyles();
    // const dispatch=useDispatch()

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleOpenModal=()=>{
        // dispatch(openModal())
    }
    return (
        <>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Area Del cliente" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary='Favorito'/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <CardGiftcardIcon />
                            </ListItemIcon>
                            <ListItemText primary='Solicita tu inmueble' />
                        </ListItem>
                        <ListItem button onClick={handleOpenModal} className={classes.nested}>
                            <ListItemIcon >
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary='Entrar'/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Area administrativa" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon >
                            <i className=" emoticon fa-solid fa-user-shield"></i>
                            </ListItemIcon>
                            <ListItemText primary='Admin'  />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <i className="emoticon fa-solid fa-id-badge"></i>
                            </ListItemIcon>
                            <ListItemText primary='Agente' />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Redes sociales" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <FacebookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Twitter" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </>
    );
}