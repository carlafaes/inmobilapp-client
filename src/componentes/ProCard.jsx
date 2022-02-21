import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import { Button, CardActions } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function ProCard(props, classes) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <Card className={props.classes.item}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://images4.alphacoders.com/211/thumb-350-211398.jpg"
          alt="green iguana"
          boxshadow="0px 0px 10px #f2D6AD"
        />
        <CardMedia image={props.property.image} src="img" />

        <CardContent>
          <Typography component="p" variant="h6" component="div">
            {props.property.state}
            <p>{props.property.location?.city}</p>
          </Typography>
          <p className={props.classes.$price}>{props.property.rentalPrice}</p>
        </CardContent>
        <div className={props.classes.rating}>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/property/${props.property.id}`}>Mas informacion</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles({
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
  },
  rating: {
    display: "flex",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    marginTop: "5em",
    marginLeft: "1em",
    marginRight: "1em",
    marginBottom: "5em",
    width: "300px",
    height: "340px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px #000000",
    flexGrow: 4,
    padding: "10 10 0 0",
  },

  "&:hover": {
    boxShadow: "#f2D6AD",
  },

  media: {
    minWidth: "200px",
    height: "200px",
    backgroundColor: "#f2D6AD",
    borderRadius: "1px",
    margin: "10px",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    item: {
      margin: "10px",
      border: "1px solid red",
      margin: "10px",
      width: "300px",
      height: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      borderRadius: "1px",

      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",

      "&:hover": {
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      },
    },

    media: {
      minWidth: "200px",
      height: "200px",
      backgroundColor: "#f5f5f5",
      borderRadius: "1px",
      margin: "10px",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    },
  },
})(ProCard);
