import {configureStore} from '@reduxjs/toolkit'
import sessionReducer from "./session";
import usuariosReducer from './usuarios'
import categoriasReducer from './categorias'


export default configureStore({
  reducer:{
    session: sessionReducer,
    usuarios: usuariosReducer,
    categorias: categoriasReducer,
  }
});
