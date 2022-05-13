import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import usuariosReducer from './usuarios'

const rootReducer = combineReducers({
  session: sessionReducer,
  usuarios: usuariosReducer
});

let enhancer;

const logger = require("redux-logger").default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(applyMiddleware(logger, thunk));

const configureStore = (prealoadState) => {
  return createStore(rootReducer, prealoadState, enhancer);
};

export default configureStore;
