import { combineReducers } from 'redux';

import employees from './reducer-employee';
import clients from './reducer-client';
import property from './reducer-property';

const rootReducer = combineReducers({
  employees,
  clients,
  property,
});

export default rootReducer;
