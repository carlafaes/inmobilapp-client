export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const FILTER_REVIEWS = "FILTER_REVIEWS";
export const GET_SCORE_REVIEWS = "GET_SCORE_REVIEWS";

export const getAllReviews = (data) => {
  return { type: GET_ALL_REVIEWS, payload: data };
};

export const filterRevies = () => {
  return { type: FILTER_REVIEWS, payload: null };
};

export const getScoreReviews = () => {
  return { type: GET_SCORE_REVIEWS, payload: null };
};
