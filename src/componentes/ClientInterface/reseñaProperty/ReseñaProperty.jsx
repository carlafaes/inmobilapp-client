import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./ReseñaProperty.css";
import { toast } from "react-toastify";
import { getUserForLocalStorage } from "../../../utils/user";
import { useDispatch } from "react-redux";
import { PostReview } from "../../../redux/actions/actionClient";
import { useNavigate } from "react-router-dom";
export const ReseñaProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alertContent = () => {
    return toast.error("Debe escribir una reseña");
  };
  const alertScore = () => {
    return toast.error("Debe poner una puntuacion");
  };
  ///////////////////////////////////////////////////////////////////7
  const [input, setInput] = useState({
    content: "",
    score: "",
    user: "",
    porpertyID: "",
  });

  useEffect(() => {
    const info = getUserForLocalStorage();
    const { name, propertyID } = info;
    setInput({ ...input, user: name, porpertyID: propertyID });
  }, []);

  console.log(input);

  const { content, score } = input;

  const enviar = async (e) => {
    e.preventDefault();
    if (content === "") {
      return alertContent();
    } else if (score === "") {
      return alertScore();
    }
    await dispatch(PostReview(input));

    navigate('/viewClient')
  };

  return (
    <div className="auth_main">
      <div className="auth_box-container">
        <h3 className="auth_title">Realice su reseña</h3>
        <form>
          <div className="content_conten">
            <textarea
              className="inputReseña"
              placeholder="Descripcion de la reseña"
              onChange={(e) => {
                setInput({ ...input, content: e.target.value });
              }}
            />
            <h2>
              Score:{" "}
              <Rating
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiFillStar className="emoticon i" />}
                onChange={(value) => {
                  setInput({ ...input, score: value });
                }}
              />
            </h2>
          </div>
          <div className="botonEdit">
            <button className="btn" onClick={enviar}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
