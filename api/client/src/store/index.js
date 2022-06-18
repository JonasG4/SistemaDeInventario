import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./session";
import usuariosReducer from './usuarios'
import proveedoresReducer from './proveedores';
import categoriasReducer from './categorias'
import materialReducer from './materials';
import shoppingReducer from './shopping';


export default configureStore({
  reducer: {
    session: sessionReducer,
    usuarios: usuariosReducer,
    categorias: categoriasReducer,
    proveedores: proveedoresReducer,
    materials: materialReducer,
    shopping: shoppingReducer
  }
});
