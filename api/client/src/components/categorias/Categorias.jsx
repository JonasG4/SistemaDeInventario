import { Pagination } from "@mui/material";
import { Edit, Delete, FilterList, PersonAdd } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as categoriaStore from "../../store/categorias";
import { InputSearchWithFilter } from "../shared/forms/FormInputs";
import AddCategoria from "../shared/Modals/RegistrarCategoria";

export default function Usuarios() {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categorias);

  const [deleteIdUsuario, setDeleteIdUsuario] = useState();
  const [updateIdUsuario, setUpdateIdUsuario] = useState();

  useEffect(() => {
    dispatch(categoriaStore.getAllCategorias());
  }, [dispatch]);

  return (
    <div className="min-w-full flex flex-col">
      <h1 className="font-bold text-xl text-cyan-800">Categorias | Listado </h1>
      <div className="flex gap-5 items-center mt-5">
        <div className="flex gap-5 items-center">
          <AddCategoria />
        </div>
        <div className="flex gap-5 items-center ml-auto">
          <InputSearchWithFilter />
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
              <th className="px-6 py-4 text-sm text-cyan-800">Nombre</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Descripcion</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(categorias).map((categoria, index) => (
              <tr className="odd:bg-slate-100" key={index}>
                <td className="border-r-[1px] px-6 py-4">
                  <input type={"checkbox"} />
                </td>
                <td className="px-6 py-4 text-sm text-cyan-800">
                  {categoria.nombre}
                </td>
                <td className="px-6 py-4 text-sm text-cyan-800">
                  {categoria.description}
                </td>
            
                <td className="px-6 py-4 flex items-center justify-center gap-2">
                  <em
                    className="cursor-pointer"
                    onClick={() => setUpdateIdUsuario(categoria.id_categoria)}
                  >
                    <Edit className="!text-slate-500 w-5 hover:!text-opacity-70" />
                  </em>
                  <em
                    className="cursor-pointer"
                    onClick={() => setDeleteIdUsuario(categoria.id_categoria)}
                  >
                    <Delete className="!text-slate-500 w-5"></Delete>
                  </em>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex pt-5 items-center justify-between w-full">
        <p className="text-slate-600 font-bold text-md">
          {Object.values(categorias).length}
          {Object.values(categorias).length > 1 ? " elementos" : " elemento"}
        </p>
        <div>
          <Pagination count={3} className={`text-slate-600`} />
        </div>
      </div>
    </div>
  );
}
