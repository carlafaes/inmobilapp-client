<<<<<<< HEAD

import rootReducer from '../reducers/reducer-index';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEn = (typeof window !== "undefined" && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
=======
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
>>>>>>> c914bb0c030696b4d6740b2f31dde3fa94b453e0

const store = createStore(rootReducer,composeEn(applyMiddleware(thunk)));

export default store;

