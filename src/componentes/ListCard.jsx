import React from "react";
import { Grid } from "@material-ui/core";
import ProCard from "../componentes/ProCard";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export const ListCard = (props) => {
  if (props.properties.length === 0) {
    return <h1>Not Found</h1>;
  }

  return (
    <>
      <Card>
        <Grid container spacing={10}>
          {props.properties.map((property) => {
            return <ProCard key={property.id} property={property} />;
          })}
        </Grid>
      </Card>
    </>
  );
};
