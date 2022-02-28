import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import reviewsService from "../services/reviews";
import {
  filterRevies,
  getAllReviews,
  getScoreReviews,
} from "../redux/actions/actions-reviews";
import { isValidURL } from "../utils/validurl";
import "../styles/Score.css";
import Carousel from "react-elastic-carousel";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

export default function ScoreMax() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reducerReviews.propertiesScore);
  const navigate = useNavigate();

  useEffect(() => {
    reviewsService
      .getPropertiesReviews()
      .then((data) => {
        return dispatch(getAllReviews(data));
      })
      .then(() => {
        return dispatch(filterRevies());
      })
      .then(() => {
        dispatch(getScoreReviews());
      });
  }, []);

  const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 5 },
  ];

  return (
    <div className="container_carrousel">
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={1500}
        itemPadding={[10, 10]}
        focusOnSelect={false}
      >
        {reviews.length !== 0 ? (
          reviews.map((e, index) => (
            <div className="container_score" key={Math.random(index)}>
              <h2 className="score_letter">
                {e.location.city}-{e.location.neighborhood}
              </h2>
              <Rating
                className="score_rating"
                name="read-only"
                value={e.score}
                readOnly
              />
              <h2 className="score_disp">
                {e.state === "available"
                  ? "DISPONIBLE"
                  : e.state === "unavailable"
                  ? "NO DISPONIBLE"
                  : "RESERVADO"}
              </h2>
              <a>
                <img className="img_score" src={e.images.filter((e) => e)} />
              </a>
              <br />
              <button
                className="btn_score"
                onClick={() => {
                  navigate(`/property/${e.id}`);
                }}
              >
                Mas detalles
              </button>
            </div>
          ))
        ) : (
          <h1 className="no_found_score">No existen mejores puntuados☹️</h1>
        )}
      </Carousel>
    </div>
  );
}
