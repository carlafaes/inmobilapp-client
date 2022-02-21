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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)),
);

export default store;
