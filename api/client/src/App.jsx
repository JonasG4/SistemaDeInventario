import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Children, useEffect, useState } from "react";

import * as sessionActions from "./store/session";

// RUTAS
import ListaUsuarios from "./components/usuarios/listaUsuarios";
import ListaProveedores from "./components/proveedores/listaProveedores";
import Login from "./components/auth/login";
import Dashboard from "./components/dashboard";
import Layout from "./components/shared/Layout";
import Categorias from "./components/categorias";

function App() {
  const dispatch = useDispatch();
  const [isActiveUser, setActiveUser] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => {
        setActiveUser(true);
      })
      .catch(() => {
        nav("/login");
      });
  }, [dispatch, nav]);

  function Sidebar() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/proveedores" element={<ListaProveedores />} />
        </Routes>
      </Layout>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/*" element={<Sidebar />} />
        <Route
          path="/login"
          element={isActiveUser ? <Navigate to={"/"} /> : <Login />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
