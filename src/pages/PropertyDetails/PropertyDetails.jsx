import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import propertyService from "../../services/property";
import Loading from "../../componentes/Loading";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../../componentes/Footer";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BathroomIcon from "@mui/icons-material/Bathroom";
import GarageIcon from "@mui/icons-material/Garage";
import {
  Grid,
  Card,
  Box,
  Container,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

let imageIndex = 0;

function PropertyDetails(props, classes) {
  const [property, setProperty] = useState({});
  const [image, setImage] = useState();

  const { id } = useParams();
  let previousButton = null;

  useEffect(async () => {
    const request = await propertyService.getPropertyDetail(id);
    setImage(request.images[0]);
    setProperty(request);
  }, []);

  return property.hasOwnProperty("id") && image ? (
    <Grid spacing={3} container className={props.classes.root}>
      <Container>
        <Box mt={2}>
          <Card className={props.classes.card}>
            <CardMedia>
              <Carousel className={props.classes.carousel}>
                {property.images.map((image, index) => (
                  <CardMedia
                    className={props.classes.media}
                    key={index}
                    image={image}
                    alt="property-images"
                    component="img"
                    image={image}
                    title="property-images"
                    height="400"
                  />
                ))}
              </Carousel>
            </CardMedia>
            <Container className={props.classes.container}>
              <Grid>
                <Box>
                  <Box />
                  <Box>
                    <CardContent>
                      <Grid className={props.classes.gridItem}>
                        <Grid>
                          <Item>
                            <BedroomParentIcon className={props.classes.icon} />
                            <span>Rooms: </span>
                            {property.details.rooms
                              ? property.details.rooms
                              : "Not available"}
                          </Item>
                        </Grid>
                        <Grid>
                          <Item>
                            <DashboardIcon className={props.classes.icon} />
                            <span>Area: </span>
                            {property.details.area}
                          </Item>
                        </Grid>
                        <Grid>
                          <Item>
                            <BathroomIcon className={props.classes.icon} />
                            <span>Baths: </span>
                            {property.details.baths
                              ? property.details.baths
                              : "N/A"}
                          </Item>
                        </Grid>
                        <Grid>
                          <Item>
                            <GarageIcon className={props.classes.icon} />
                            <span>Garage: </span>
                            {property.details.garage ? "Yes" : "No"}
                          </Item>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Box className={props.classes.title}>
                      <Typography variant="h4">
                        {property.location.address}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        {property.details.description}
                        <p>
                          Lorem ipsum es el texto que se usa habitualmente en
                          diseño gráfico en demostraciones de tipografías o de
                          borradores de diseño para probar el diseño visual
                          antes de insertar el texto final
                        </p>
                      </Typography>
                    </Box>
                    <Grid>
                      <Item>
                        <span className={props.classes.Agen}>Name: </span>
                        {property.agentID ? property.agentID.name : "No agent"}
                        <br />
                        <span className={props.classes.Agen}>Phone: </span>
                        {property.agentID ? property.agentID.phone : "No Found"}
                      </Item>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Container>
          </Card>
          <Card>
            <Container fixed className={props.classes.containeri}>
              <Box>
                <h4>Inmuebles destacados</h4>
              </Box>
            </Container>
          </Card>
        </Box>
        <Footer />
      </Container>
    </Grid>
  ) : (
    <Loading />
  );
}

export default withStyles({
  root: {
    backgroundImage: `url('https://www.semana.com/resizer/jnQaPKkvpQMk8c15-bx4f0F8zIo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/RGY5R6T7SFCSFJ6DDBEURLQCPM.jpg')`,
    flexGrow: 1,
    backgroundPosition: "center",
    backgroundSize: "cover",
    opactity: "0.5",
  },
  Agen: {
    color: "#FAA222",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  icon: {
    color: "#FAA222",
    fontSize: "1.5rem",
    marginRight: "0.5rem",
    position: "relative",
    top: "0.3rem",
    left: "0.3rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    height: "400px",
    cover: true,
    direction: "row",
    cursor: "pointer",
    boxDecorationBreak: "clone",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
  },
  content: {},
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#FAA222",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px",
    padding: "0px",
  },
  carousel: {
    position: "relative",
    width: "860px",
    height: "400px",
    margin: "0 auto",
    marginTop: "70px",
    marginBottom: "20px",
    hover: {
      cursor: "pointer",
    },
  },
  card: {},
  gridItem: {
    display: "flex",
    justifyContent: "center",
    margin: "0px",
    padding: "0px",
    width: "100%",
    height: "100%",
  },
  box: {},
})(PropertyDetails);
