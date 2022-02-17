import { combineReducers } from 'redux';

import employees from './reducer-employee';
import clients from './reducer-client';
import propertys from './reducer-property';

const rootReducer = combineReducers({
  employees,
  clients,
  propertys,
});

export default rootReducer;
