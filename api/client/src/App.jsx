import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import * as sessionActions from "./store/session";


// RUTAS
import ListaUsuarios from "./components/usuarios/listaUsuarios";
import ListaProveedores from "./components/proveedores/listaProveedores"
import ListaMateriales from "./components/materiales/listaMateriales";
import { ShoppingList } from './components/compras/ShoppingList';
import Login from "./components/auth/login";
import Dashboard from "./components/dashboard";
import Layout from "./components/shared/Layout";
import Categorias from './components/categorias'

function App() {
  const dispatch = useDispatch();
  const [isLogggin, setLogin] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLogin(true));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Sidebar />} />
        <Route path="/auth/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

function Sidebar() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/proveedores" element={<ListaProveedores />} />

        <Route path="/materiales" element={<ListaMateriales />} />
        <Route path="/compras" element={<ShoppingList />} />
      </Routes>
    </Layout>
  );
}

export default App;
