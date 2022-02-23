import { combineReducers } from "redux";

import employees from "./reducer-employee";
import clients from "./reducer-client";
import properties from "./reducer-property";
import reducerScore from "./reducer-properties-score";
import reducerReviews from "./reducer-reviews";
import reducerAdmin from "./reducer-admin";

const rootReducer = combineReducers({
  employees,
  clients,
  properties,
  reducerScore,
  reducerReviews,
  reducerAdmin,
});

export default rootReducer;
