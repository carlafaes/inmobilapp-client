import { IconButton } from "@mui/material";
import { BsFillPlusSquareFill } from "react-icons/bs";
import CardPropertyAgent from "../CardPropertyAgent";

import classes from "./PanelAgent.module.css";

export default function PanelAgent({ agent }) {
  return (
    <div className={classes.container}>
      <div className={classes.appBar}>
        <IconButton>
          <BsFillPlusSquareFill />
        </IconButton>
      </div>
      <div className={classes.content}>
        {agent.properties.map((property) => {
          return <CardPropertyAgent key={property.id} {...property} />;
        })}
      </div>
    </div>
  );
}
