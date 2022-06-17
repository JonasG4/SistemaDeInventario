import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { PersonAdd,CheckRounded, ShoppingBag } from '@mui/icons-material';
export const ModalShopping = ({handleChange, handleSubmit, setShowModal}) => {
  const [suppliers, setSuppliers] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const hideModal = () => {
    setShowModal(false);
  }
  useEffect(() => {
    axios.get('/api/proveedores')
      .then(response => setSuppliers(response.data.message));
  },[])
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
    {/* INPUTS */}
    <div className="flex flex-col gap-2">
      <label
        htmlFor="nombre"
        className="text-sm text-slate-600 font-bold"
      >
        Proveedor
      </label>
      <div className="flex items-center gap-4">
        <select 
          onChange={handleChange}
          name="id_proveedor"  
          className='w-[300px] px-2 py-1.5 shadow-lg outline-none'>
          <option defaultValue={'Seleccionar'} >Selecciona un proveedor</option>
          {suppliers.map(supplier => (
            <option key={supplier.id_proveedor} value={supplier.id_proveedor}>{supplier.nom_proveedor}</option>
          ))}
        </select>

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
        Fecha de documento
      </label>
      <div className='flex items-center gap-4'>
        <input
          onChange={handleChange} 
          name='fecha' 
          type="date" 
          className='w-[300px] px-2 py-1.5 shadow-lg outline-none rounded-lg' />
      </div>

    </div>
    <div className="flex flex-col gap-2">
      <label
        htmlFor="nombre"
        className="text-sm text-slate-600 font-bold"
      >
        Número de documento
      </label>
      <div className="flex items-center gap-4">
        <input
          type="text"
          onChange={handleChange} 
          name="num_documento"
          placeholder="Número de documento"
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
        Fecha de ingreso
      </label>
      <div className='flex items-center gap-4'>
        <input
          onChange={handleChange}  
          name='fecha_ingreso' 
          type="date" 
          className='w-[300px] px-2 py-1.5 shadow-lg outline-none rounded-lg' />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <label
        htmlFor="nombre"
        className="text-sm text-slate-600 font-bold"
      >
        Estado de compra
      </label>
      <div className="flex items-center gap-4">
        <select 
          name="estado" 
          onChange={handleChange}  
          className='w-[300px] px-2 py-1.5 shadow-lg outline-none'>
          <option defaultValue={'Seleccionar'} >Selecciona una opción</option>
          <option value="1">En Inventario</option>
          <option value="0">No en inventario</option>
        </select>

        <div className="w-[25px] h-[25px] rounded-full border-[1px] border-sky-600 flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
          <CheckRounded className="!text-sky-600 !text-sm" />
        </div>
      </div>
    </div>
    {/* BOTONES */}
    <div className="flex justify-between my-3">
      <button
        type='button'
        onClick={hideModal}
        className="bg-bg-red-btn rounded-md w-40 py-1 text-slate-50 font-bold text-sm"
      >
        Limpiar campos
      </button>
      <button
        type="submit"
        className="bg-sky-600 rounded-md w-40 py-2 text-slate-50 font-bold text-sm"
      >
        Guardar
      </button>
    </div>
  </form>
  )
}
