import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaUsuarios from "./components/usuarios/listaUsuarios";
import Navbar from "./components/shared/navbar";
import Sidebar from "./components/shared/sidebar";
import Login from "./components/auth/login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/" element={<ListaUsuarios />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
