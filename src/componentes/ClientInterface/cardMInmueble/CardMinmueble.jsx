import React, { useEffect, useState } from "react";
import services from "../../../services/client";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineSquareFoot } from "react-icons/md";
import { IoMdBed } from "react-icons/io";
import { GiHomeGarage } from "react-icons/gi";
import { HiArrowCircleRight } from "react-icons/hi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./CardMinmueble.css";
import { useNavigate } from "react-router-dom";
import { sendPayment } from "../../../services/payment";
import swal from "sweetalert";
import { notifySuccess } from "../../../utils/notifications";

export const CardMinmueble = () => {
  const [info, setInfo] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState(null);
  const [typeProperty, setTypeProperty] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [idProperties, setIdProperties] = useState("");

  const [pago, setPago] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    const GetInfo = async () => {
      const info = await services.getClientInfo(user.id);
      setInfo(info);
      const { propertyID } = info;
      const { location, images, typeProperty, description, details, id } =
        propertyID;
      setLocation(location);
      setImg(images);
      setTypeProperty(typeProperty);
      setDescription(description);
      setDetails(details);
      setIdProperties(id);
    };
    GetInfo();
  }, []);

  const handleId = () => {
    navigate(`/property/${idProperties}`);
  };
  const reseña = () => {
    navigate("/reseProperty");
  };

  const handlePago = () => {
    sendPayment("Alquiler Inmueble", info.propertyID.rentalPrice)
      .then((data) => {
        notifySuccess("Se genero el link de pago!");
        setPago(data);
      })
      .catch((err) => {
        swal("Hubo un error en el pago!", {
          icon: "warning",
        });
      });
  };

  return (
    <div className="container_card cursor">
      <div className="img">
        <img className="container_img" src={img} alt="imagen" width="320px" />
      </div>
      <div className="seccion1">
        <h6>
          <HiLocationMarker className="emoticon" />
          {location.neighborhood},{location.city}
        </h6>
        <div className="botonesEx">
          <button className="btn_card btn_p">{typeProperty}</button>

          <button onClick={handlePago} className="btn_card btn_p">
            Pagar Factura
          </button>
          {pago && (
            <a href={pago.links[1].href} target="_blank">
              Realizar pago
            </a>
          )}

          <button className="btn_card btn_p" onClick={reseña}>
            Realizar reseña
          </button>
        </div>
        <p>{description}</p>
      </div>
      <div className="seccion2">
        <h6>
          <MdOutlineSquareFoot className="emoticon" /> {details.area} m²
        </h6>
        <h6>
          <IoMdBed className="emoticon" />
          {details.rooms} dorms
        </h6>
        {details.garage && (
          <h6>
            <GiHomeGarage className="emoticon" />
            {details.garage}1 garajes
          </h6>
        )}

        <button className="btn_card btn_p p" onClick={handleId}>
          Mas detalles <HiArrowCircleRight className="emoticon" />{" "}
        </button>
      </div>
      <div className="seccion3">
        {info.paymentIssued?.length >= 1 && (
          <>
            <h6>Fechas de facturas pagadas: </h6>
            <ul>
              {info.paymentIssued?.map((e) => (
                <li key={e._id}>{e.date}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
