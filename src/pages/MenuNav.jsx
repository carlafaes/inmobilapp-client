

import React from 'react';
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
import AnnouncementIcon from '@material-ui/icons/Announcement';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from '@material-ui/core/Link';

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
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

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
                            <ListItemText primary={<Link path="/" onClick={e => { e.preventDefault() }}>Favoritos</Link>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <CardGiftcardIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Link path="/" onClick={e => { e.preventDefault() }}>Solicita tu inmueble</Link>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Link path="/" onClick={e => { e.preventDefault() }}>Entrar</Link>} />
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
                    <ListItemText primary="Institucional" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <GroupWorkIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Link path="/" onClick={e => { e.preventDefault() }}>Sobre nosotros</Link>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <AnnouncementIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Link path="/" onClick={e => { e.preventDefault() }}>Preguntas frecuentes</Link>} />
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