import React, {useEffect, useState} from 'react';
import { FilterList, Delete } from '@mui/icons-material'
import axios from 'axios';
import { Spinner } from '../shared/Spinner';
import { ModalDeleteShopping } from './ModalDeleteShopping';
import { ModalEditShopping } from './ModalEditShopping';
import { CreateShopping } from './CreateShopping';
import { InputSearchWithFilter } from "../shared/forms/FormInputs";
import { getShopping } from '../../store/shopping';
import { useSelector,useDispatch } from 'react-redux';


export const ShoppingList = () => {
  const {listShopping} = useSelector((state) => state.shopping);
  const loadBuy = async () => {
    const response = await axios.get('/api/compras');
    return response.data.message;
  }

  const dispatch = useDispatch();
  useEffect(() => {
      loadBuy().then(res => dispatch(getShopping(res)));
  },[])
  return (
    <div className="min-w-full flex flex-col">
      <h1 className="font-bold text-xl text-cyan-800">Compras | Listado </h1>
      <div className="flex gap-5 items-center mt-5">
        <div className="flex gap-5 items-center">
          <CreateShopping />
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
              <th className="px-3 py-4 text-sm text-cyan-800 border-r-[1px] w-5">
                <input type={"checkbox"} />
              </th>
              <th className="px-3 py-4 text-sm text-cyan-800">Id Compra</th>
              <th className="px-3 py-4 text-sm text-cyan-800">Proveedor</th>
              <th className="px-3 py-4 text-sm text-cyan-800">Fecha de documento</th>
              <th className="px-3 py-4 text-sm text-cyan-800">Número de documento</th>
              <th className="px-3 py-4 text-sm text-cyan-800">Fecha Ingresado</th>
              <th className="px-3 py-4 text-sm text-cyan-800">Estado</th>
            </tr>
          </thead>
            <tbody>
              { listShopping.map((buy,index) => (
                <tr className="odd:bg-slate-100" key={index}>
                <td className="border-r-[1px] px-6 py-4">
                  <input type={"checkbox"} />
                </td>
                <td className="px-2 py-4 text-sm text-cyan-800">
                  <span className="bg-sky-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">{buy.id_compra}</span>
                </td>
                <td className="px-2 py-4 text-sm text-cyan-800">
                  {buy.Proveedore.nom_proveedor}
                </td>
                <td className="text-sm text-cyan-800">
                  <span className="bg-sky-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">{buy.fecha.substring(0,10)}</span>
                </td>
                <td className="px-2 py-4 text-sm text-cyan-800">
                  {buy.num_documento}
                </td>
                <td className="text-sm text-cyan-800">
                  <span className="bg-sky-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">{buy.fecha_ingreso.substring(0,10)}</span>
                </td>
                <td className="px-2 py-4text-sm text-cyan-800">
                  {buy.estado === 1 ? 'En Inventario' : 'Sin Inventario'}
                </td>
                <td className="px-2 py-4 flex items-center justify-center gap-2">
                    {<ModalEditShopping id={buy.id_compra} />}
                    {<ModalDeleteShopping id={buy.id_compra} /> }
                  </td>
              </tr>
              ))} 
            </tbody>
        </table>
      </div>
    </div>
  )
}
