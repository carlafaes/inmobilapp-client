import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import propertyService from "../../services/property";
import Loading from "../../componentes/Loading";
import styles from "./PropertyDetails.module.css";
let imageIndex = 0;

export default function PropertyDetails() {
  const [property, setProperty] = useState({});
  const [image, setImage] = useState();
  
  const { id } = useParams();
  let previousButton = null;

  useEffect(async () => {
    const request = await propertyService.getPropertyDetail(id);
    setImage(request.images[0]);
    setProperty(request);
  }, []);

  function onClickHandler(e) {
    e.preventDefault();

    if (!previousButton) {
      previousButton = e.target;
    }
    previousButton.className = "";

    previousButton = e.target;
    
    imageIndex = e.target.value;

    e.target.className = styles.active;
    setImage(property.images[imageIndex]);
  }

  return property.hasOwnProperty("id") && image ? (
    <div className={styles.main_container}>
      {console.log(property)}
      <div className={styles.container}>
        <section className={styles.slider_container}>
          <img
            className={styles.image}
            src={image}
            alt="property-images"
          />
          <div className={styles.buttons}>
            {property.images.map((p, i) => (
              <button className="" key={i} type="button" value={i} onClick={onClickHandler}></button>
            ))}
          </div>
        </section>
        <section className={styles.details_container}>
          <div className={styles.details}>
            <h2 className={styles.details_title}>Details</h2>
            <h2>{property.location.address}</h2>
            <h3>
              {property.location.city}, {property.location.neighborhood}
            </h3>
            <p>
              <span>Surface: </span>
              {property.details.area}
            </p>
            <p>
              <span>Rooms: </span>
              {property.details.rooms}
            </p>
            <p>
              <span>Baths: </span>
              {property.details.baths}
            </p>
            <p>
              <span>Garage: </span>
              {property.details.garage ? <span>Yes</span> : <span>No</span>}
            </p>
          </div>
          <div className={styles.agent_info_container}>
            <h3>Agent info</h3>
            <div className={styles.agent_info}>
              <p>
                <span>Name: </span>
                {property.agentID.name}
              </p>
              <p>
                <span>Phone: </span>
                {property.agentID.phone}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <Loading/>
  );
}
