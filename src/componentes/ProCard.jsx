import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  CardActions,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@material-ui/icons/Star";

function ProCard(props, classes) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <Grid className={classes.root2}>
      <Box boxSizing={"border-box"} m={1} spacing={10}>
        <Card color="primary" className={props.classes.item}>
          <CardActionArea>
            <div className={props.classes.textoencima}>
              {props.property.state === "available"
                ? "DISPONIBLE"
                : props.property.state === "unavailable"
                ? "NO DISPONIBLE"
                : "RESERVADO"}
            </div>
            <CardMedia
              className={props.classes.media}
              component="img"
              height="190"
              image={props.property.images[0]}
            />
            <CardContent>
              <Typography component="p" variant="h6" component="div">
                <p className={props.classes.detallesCity}>
                  <LocationOnIcon className={props.classes.icon} />
                  {props.property.location?.city}
                </p>
                <p className={props.classes.price}>
                  USD{props.property.rentalPrice}
                </p>
              </Typography>
            </CardContent>
            <div className={props.classes.buttong}>
              <Button
                className={props.classes.button}
                size="small"
                color="primary"
                href={`/property/${props.property.id}`}
                size="small"
                color="primary"
              >
                Mas detalles
              </Button>
            </div>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
}

export default withStyles({
  buttong: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  icon: {
    color: "#FAA222",
    marginRight: "0.1rem",
    position: "relative",
    top: "0.2rem",
    left: "0.2rem",
    JustifyContent: "center",
    padding: "0.1rem",
  },
  detallesCity: {
    padding: "0px",
    margin: "0px",
    fontSize: "27px",
    fontWeight: "bold",
    JustifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  root2: {},
  root: {
    maxWidth: 345,
  },
  textoencima: {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "#FAA222",
    padding: "5px",
  },
  contenedor: {},

  button: {
    display: "flex",
    justifyContent: "center",
    textTransform: "yes",
    color: "#fff",
    backgroundColor: "#FAA222",
    "&:hover": {
      backgroundColor: "#535353",
      color: "#fff",
      op: "1",
    },
  },
  price: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "bold",
    color: "#FAA222",
    padding: "0rem",
    marginBlock: "0rem",
    margin: "0px",
    marginTop: "0px",
    marginBottom: "0px",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "none",
  },
  item: {
    opacity: "0.9",
    display: "flex",
    marginTop: "5em",
    marginLeft: "1em",
    marginRight: "1em",
    marginBottom: "5em",
    width: "300px",
    height: "380px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fcebc9",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px #000000",
    "&:hover": {
      boxShadow: "0px 0px 10px  #FAA222",
      trasition: "0.9s",
      opacity: "1",
    },
  },

  media: {
    boder: "3px solid #red",
    height: "220px",
  },
})(ProCard);
