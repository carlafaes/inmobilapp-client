import { combineReducers } from "redux";

import clients from "./reducer-client";
import properties from "./reducer-property";
import reducerScore from "./reducer-properties-score";
import reducerReviews from "./reducer-reviews";
import reducerAdmin from "./reducer-admin";
import reducerAgent from "./reducer-agent";

const rootReducer = combineReducers({
  clients,
  properties,
  reducerScore,
  reducerReviews,
  reducerAdmin,
  reducerAgent,
});

export default rootReducer;
