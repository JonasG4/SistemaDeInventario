import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./session";
import usuariosReducer from "./usuarios";
import proveedoresReducer from "./proveedores";
import categoriasReducer from "./categorias";

const createStore = () => {
  return configureStore({
    reducer: {
      session: sessionReducer,
      usuarios: usuariosReducer,
      categorias: categoriasReducer,
      proveedores: proveedoresReducer,
    },
  });
};

export default createStore;