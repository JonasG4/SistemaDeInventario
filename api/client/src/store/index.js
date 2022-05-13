import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import usuariosReducer from './usuarios'
import proveedoresReducer from './proveedores';
import categoriasReducer from './categorias'

const rootReducer = combineReducers({
  session: sessionReducer,
  usuarios: usuariosReducer,
  proveedores: proveedoresReducer,
  categorias: categoriasReducer
});

let enhancer;

const logger = require("redux-logger").default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(applyMiddleware(logger, thunk));

const configureStore = (prealoadState) => {
  return createStore(rootReducer, prealoadState, enhancer);
};

export default configureStore;
