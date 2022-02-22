export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const FILTER_REVIEWS = "FILTER_REVIEWS";

export const getAllReviews = (data) => {
  return { type: GET_ALL_REVIEWS, payload: data };
};

export const filterRevies = () => {
  return { type: FILTER_REVIEWS, payload: null };
};
