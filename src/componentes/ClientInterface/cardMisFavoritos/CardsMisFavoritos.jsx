import React, { useEffect, useState } from "react";
import { CardFavoritos } from "./CardFavoritos";
import services from "../../../services/client";

export const CardsMisFavoritos = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    const GetInfo = async () => {
      const info = await services.getClientInfo(user.id);
      setInfo(info);
    };
    GetInfo();
  }, []);

  return (
    <>
      {info.favoriteProperties?.map((el) => (
        <CardFavoritos
          key={el.id}
          description={el.description}
          details={el.details}
          images={el.images}
          location={el.location}
          rentalPrice={el.rentalPrice}
          state={el.state}
          typeProperty={el.typeProperty}
        />
      ))}
    </>
  );
};
