import {CircularProgress,makeStyles,createStyles} from '@material-ui/core';


const useStyles=makeStyles((theme) =>
    createStyles({
        root:{
            margin:theme.spacing(30),
        }
    }))

export default function Loading(){
    const classes=useStyles();

    return(
        <div className={classes.root}>
            <CircularProgress/>
        </div>
    )
}