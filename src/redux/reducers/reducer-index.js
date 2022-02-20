import { combineReducers } from 'redux';

import employees from './reducer-employee';
import clients from './reducer-client';
<<<<<<< HEAD
import property from './reducer-property';
=======
import propertys from './reducer-property';
import reducerScore from './reducer-properties-score';
>>>>>>> 07f1cf169db8cb079580688d4b3f57de2e0c32cb

const rootReducer = combineReducers({
  employees,
  clients,
<<<<<<< HEAD
  property,
=======
  propertys,
  reducerScore
>>>>>>> 07f1cf169db8cb079580688d4b3f57de2e0c32cb
});

export default rootReducer;
