import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { FormModal  } from '../../context/Modal'
import { useDispatch, useSelector } from 'react-redux';
import {getAllSuppliers} from '../../store/proveedores';
import { InputSearchWithFilter } from "../shared/forms/FormInputs";
import AddSupplier from "./modales/registroModal";
import { Edit, Delete, FilterList, PersonAdd, CheckRounded, CloseRounded } from "@mui/icons-material";
import ActualizarSupplier from "./modales/editarModal";
import DeleteSupplier from "./modales/eliminarModal";
import { Pagination } from "@mui/material";

export default function ListaProveedores() {
  const navigate = useNavigate();
  const proveedores = useSelector((state) => state.proveedores.list);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllSuppliers());
  },[dispatch,proveedores])


  return (
    <div className="min-w-full flex flex-col">
      <h1 className="font-bold text-xl text-cyan-800">Proveedores | Listado </h1>
      <div className="flex gap-5 items-center mt-5">
        <div className="flex gap-5 items-center">
          <AddSupplier />
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
              <th className="px-6 py-4 text-sm text-cyan-800 border-r-[1px]">
                Nombre
              </th>
              <th className="px-6 py-4 text-sm text-cyan-800">Telefono Fijo</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Telefono Personal</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Fecha creación</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Fecha actualización</th>
              <th className="px-6 py-4 text-sm text-cyan-800">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(proveedores).map((proveedor,index) => (
              <tr className="odd:bg-slate-100" key={index}>
               <td className="border-r-[1px] px-6 py-4">
                 <input type={"checkbox"} />
               </td>
               <td className="px-6 py-4 text-sm text-cyan-800">
                {proveedor.nom_proveedor}
               </td>
               <td className="px-6 py-4 text-sm text-cyan-800">
                {proveedor.tel_fijo}
               </td>
               <td className="px-6 py-4 text-sm text-cyan-800">
                {proveedor.tel_personal}
               </td>
               <td className="px-6 py-4 text-sm text-cyan-800">
                 {proveedor.created_at}
               </td>
               <td className="px-6 py-4text-sm text-cyan-800">
                {proveedor.updated_at}
               </td>
               <td className="px-6 py-4 flex items-center justify-center gap-2">
                  <ActualizarSupplier id={proveedor.id_proveedor} />
                  <DeleteSupplier id={proveedor.id_proveedor} />
                </td>
             </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex pt-5 items-center justify-between w-full">
        <p className="text-slate-600 font-bold text-md">
          {/* {Object.values(usuarios).length} */}
          {/* {Object.values(usuarios).length > 1 ? " elementos" : " elemento"} */}
        </p>
        <div>
          <Pagination count={3} className={`text-slate-600`} />
        </div>
      </div>
    </div>
  );
}
