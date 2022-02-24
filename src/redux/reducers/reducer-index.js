import { combineReducers } from "redux";

import clients from "./reducer-client";
import properties from "./reducer-property";
import reducerReviews from "./reducer-reviews";
import reducerAdmin from "./reducer-admin";
import reducerAgent from "./reducer-agent";
import reducerProperties from "./reducer-properties";

const rootReducer = combineReducers({
  clients,
  properties,
  reducerReviews,
  reducerAdmin,
  reducerAgent,
  reducerProperties,
});

export default rootReducer;
