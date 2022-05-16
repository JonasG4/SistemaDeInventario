import { Pagination } from "@mui/material";
import { Delete, FilterList, Search, Tune } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../store/usuarios";
// import { InputSearchWithFilter } from "../shared/forms/FormInputs";
import AddUsuario from "./modales/registroModal";
import DeleteUsuario from "./modales/eliminarModal";
import ActualizarUsuario from "./modales/editarModal";

export default function Usuarios() {
  const usuarios = useSelector((state) => state.usuarios.list);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, usuarios]);setSearchText

  return (
    <div className="min-w-full flex flex-col">
      <h1 className="font-bold text-xl text-cyan-800">Usuarios | Listado </h1>
      <div className="flex gap-5 items-center mt-5">
        <div className="flex gap-5 items-center">
          <AddUsuario />
        </div>
        <div className="flex gap-5 items-center ml-auto">
          <div className="relative">
            <Search className="absolute left-4 top-[10px] !text-[18px] !fill-slate-600" />
            <input
              type="text"
              className="bg-slate-300 bg-opacity-60 rounded px-2 h-[35px] pl-12 pr-12 outline-none text-sm w-[250px]"
              placeholder="Búsqueda"
              onChange={(e) => searchResult(e)}
            />
            <Tune className="absolute right-4 top-[10px] !text-[18px] !fill-slate-600" />
          </div>
          <div className="w-[45px] h-[35px] bg-slate-50 rounded cursor-pointer shadow-lg flex items-center justify-center hover:bg-opacity-80">
            <FilterList className="!fill-sky-600" />
          </div>
          <div className="w-[45px] h-[35px] bg-sky-600 rounded cursor-pointer shadow-lg flex items-center justify-center hover:bg-opacity-80">
            <Delete className="!fill-slate-50" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <table className={`bg-slate-50 mt-6 rounded-lg shadow-lg w-full`}>
          <thead>
            <tr className="text-slate-600 text-sm text-left">
              <th className="px-6 py-4 text-sm text-cyan-800 border-r-[1px] w-5">
                <input type={"checkbox"} />
              </th>
              <th className="px-6 py-4 text-sm text-cyan-800 border-r-[1px]">
                Nombre
              </th>
              <th className="px-6 py-4 text-sm text-cyan-800">Apellido</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Email</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Rol</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Estado</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {/* MAPEO DE LA LISTA DE USUARIOS */}
            {Object.values(usuarios).map((usuario, index) => (
              <tr className="odd:bg-slate-100" key={index}>
                <td className="border-r-[1px] px-6 py-4">
                  <input type={"checkbox"} />
                </td>
                <td className="px-6 py-4 text-sm text-cyan-800">
                  {usuario.nombre}
                </td>
                <td className="px-6 py-4 text-sm text-cyan-800">
                  {usuario.apellido}
                </td>
                <td className="px-6 py-4 text-sm text-cyan-800">
                  {usuario.email}
                </td>
                <td className="px-6 py-4 text-sm text-cyan-800">
                  {usuario.Role.nombre}
                </td>
                <td className="px-6 py-4text-sm text-cyan-800">
                  {usuario.estado === 1 ? "Activo" : "Desactivado"}
                </td>
                <td className="px-6 py-4 flex items-center justify-center gap-2">
                  <ActualizarUsuario id={usuario.id_usuario} />
                  <DeleteUsuario id={usuario.id_usuario} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex pt-5 items-center justify-between w-full">
        <p className="text-slate-600 font-bold text-md">
          {usuarios.length}
          {usuarios.length > 1 ? " elementos" : " elemento"}
        </p>
        <div>
          <Pagination count={3} className={`text-slate-600`} />
        </div>
      </div>
    </div>
  );
}
