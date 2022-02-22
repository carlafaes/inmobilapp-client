import {
  FILTER_REVIEWS,
  GET_ALL_REVIEWS,
  GET_SCORE_REVIEWS,
} from "../actions/actions-reviews";

const initialState = {
  allProperties: [],
  propertiesFilter: [],
  propertiesScore: [],
};

const reducerReviews = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_ALL_REVIEWS:
      return {
        ...state,
        allProperties: payload,
      };
    case FILTER_REVIEWS:
      return {
        ...state,
        propertiesFilter: state.allProperties.filter((property) => {
          return property.reviews.length !== 0;
        }),
      };

    case GET_SCORE_REVIEWS:
      const sumReviews = state.propertiesFilter.map((property) => {
        return {
          ...property,
          score: (property.reviews.reduce((sum, cur) => {
            return sum + cur.score;
          }, 0)) / property.reviews.length,
        };
      });
      return {
        ...state,
        propertiesScore: sumReviews,
      };

    default:
      return state;
  }
};

export default reducerReviews;
