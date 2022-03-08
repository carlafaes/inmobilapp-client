import React from "react";
import { useParams } from "react-router-dom";

export default function AssignProperty() {
  const { clientID, propertyID } = useParams();

  return (
    <div>
      <p>
        {clientID}, {propertyID}
      </p>
      <button></button>
    </div>
  );
}
