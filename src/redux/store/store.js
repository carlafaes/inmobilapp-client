import rootReducer from '../reducers/reducer-index';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEn = (typeof window !== "undefined" && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

<<<<<<< HEAD
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
=======
const store = createStore(rootReducer,composeEn(applyMiddleware(thunk)));
>>>>>>> 12f52f5676c5f80abaf82f3961d00eb18e4ec4cb

export default store;