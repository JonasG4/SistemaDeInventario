import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import AddUsuario from '../shared/Modals/RegistroUsuarios'
import { FormModal  } from '../../context/Modal'
import { useDispatch, useSelector } from 'react-redux';
import * as proveedorStore from '../../store/proveedores';
import { InputSearchWithFilter } from "../shared/forms/FormInputs";
import { createProveedor } from '../../store/proveedores'
import { Edit, Delete, FilterList, PersonAdd, CheckRounded, CloseRounded } from "@mui/icons-material";
import { Pagination } from "@mui/material";

export default function ListaProveedores() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const proveedores = useSelector((state) => state.proveedores);
  const [showModal, setShowModal] = useState(false);
  const [proveedor,setProveedor] = useState({
    nom_proveedor: "",
    tel_fijo: "",
    tel_personal: ""
  })

  useEffect(() => {
    dispatch(proveedorStore.getAllProveedores());
  },[dispatch,proveedores])

  const handleChange = (e) => {
    setProveedor({...proveedor, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    return dispatch(createProveedor(proveedor))
      .then(res => {
        if(res.ok) {
          navigate('/proveedores')
        }
      })
      .catch(e => console.log(e))
  }

  const deleteProveedor = (id) => {
    dispatch(proveedorStore.deleteProveedor(id));
    console.log(proveedores);
  }

  return (
    <div className="min-w-full flex flex-col">
      <h1 className="font-bold text-xl text-cyan-800">Usuarios | Listado </h1>
      <div className="flex gap-5 items-center mt-5">
        <div className="flex gap-5 items-center">
          <div className='w-auto px-4 h-[35px] bg-sky-600 rounded cursor-pointer shadow-lg flex items-center justify-center hover:bg-opacity-80' onClick={() => setShowModal(true)}>
          <PersonAdd className="!fill-slate-50"/>
          <p className="text-sm font-bold text-slate-50 ml-2">Agregar Proveedor</p>
          </div>
        </div>
        {
          showModal && (
            <FormModal onClose={() => setShowModal(false)} className="w-[400px]">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

              {/* INPUTS */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nombre"
                  className="text-sm text-slate-600 font-bold"
                >
                  Nombre
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    onChange={handleChange}
                    name="nom_proveedor"
                    className="w-[300px] shadow-lg outline-none px-5 py-2 rounded-lg text-sm placeholder:text-slate-400 placeholder:font-medium"
                    placeholder="Escriba su nombre"
                  />
                  <div className="w-[25px] h-[25px] rounded-full border-[1px] border-sky-600 flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
                  <CheckRounded className="!text-sky-600 !text-sm" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nombre"
                  className="text-sm text-slate-600 font-bold"
                >
                  Teléfono fijo
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    onChange={handleChange}
                    name="tel_fijo"
                    placeholder="Teléfono fijo"
                    className="w-[300px] shadow-lg outline-none px-5 py-2 rounded-lg text-[12px] placeholder:text-slate-400 placeholder:font-medium"
                  />
                  <div className="w-[25px] h-[25px] rounded-full border-[1px] border-sky-600 flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
                  <CheckRounded className="!text-sky-600 !text-sm" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nombre"
                  className="text-sm text-slate-600 font-bold"
                >
                  Teléfono Personal
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    name="tel_personal"
                    onChange={handleChange}
                    placeholder="Teléfono personal"
                    className="w-[300px] shadow-lg outline-none px-5 py-2 rounded-lg text-[12px] placeholder:text-slate-400 placeholder:font-medium"
                  />
                  <div className="w-[25px] h-[25px] rounded-full border-[1px] border-sky-600 flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
                  <CheckRounded className="!text-sky-600 !text-sm" />
                  </div>
                </div>
              </div>
              {/* BOTONES */}
              <div className="flex justify-between my-3">
                <button
                  type="submit"
                  className="bg-bg-red-btn rounded-md w-40 py-1 text-slate-50 font-bold text-sm"
                >
                  Limpiar campos
                </button>
                <button
                  type="submit"
                  className="bg-sky-600 rounded-md w-40 py-1 text-slate-50 font-bold text-sm"
                >
                  Guardar
                </button>
              </div>
            </form>
          </FormModal>
          )
        }
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
                 <em
                   // className="cursor-pointer"
                   // onClick={() =>
                   //   console.log("VIVAN", usuario.id_usuario)
                   // }
                 >
                   <Edit className="!text-slate-500 w-5 hover:!text-opacity-70" />
                 </em>
                 <em
                   className="cursor-pointer"
                   onClick={() => deleteProveedor(proveedor.id)}
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
