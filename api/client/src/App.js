import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaUsuarios from "./components/usuarios/listaUsuarios";
import Navbar from "./components/shared/navbar";
import Sidebar from "./components/shared/sidebar";
import Login from "./components/auth/login";
import Categorias from "./components/categorias/Categorias";
import CategoriasForm from "./components/categorias/CategoriasForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categorias/new" element={<CategoriasForm />} />
          <Route path="/" element={<ListaUsuarios />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
