import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducer-index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


/* const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducer-index';
import thunk from 'redux-thunk' */

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
