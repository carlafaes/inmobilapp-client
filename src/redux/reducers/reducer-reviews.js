import { FILTER_REVIEWS, GET_ALL_REVIEWS } from "../actions/actions-reviews";
import { FILTER_PROPERTIES } from "../actions/types-propierties";

const initialState = {
  allReviews: [],
  reviewsFilter: [],
};

const reducerReviews = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_ALL_REVIEWS:
      return {
        ...state,
        allReviews: payload,
      };
    case FILTER_REVIEWS:
      return {
        ...state,
        reviewsFilter: state.allReviews.filter(({ score }) => score > 3),
      };

    default:
      return state;
  }
};

export default reducerReviews;
