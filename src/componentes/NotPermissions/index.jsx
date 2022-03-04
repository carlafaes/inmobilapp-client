import React from "react";
import classes from "./NotPermissions.module.css";

export default function NotPermissions() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        No tienes permisos para el manejo de propiedades!
      </h1>
    </div>
  );
}
