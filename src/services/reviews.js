import axios from "axios";

const baseUrl = "/api/reviews";

const getReviews = async () =>
  (await axios.get(`${baseUrl}?detailsProperty=true`)).data;

const getPropertiesReviews = async () =>
  (await axios.get("/api/properties?detailsReviews=true")).data;

const reviewsService = {
  getReviews,
  getPropertiesReviews,
};

export default reviewsService;
