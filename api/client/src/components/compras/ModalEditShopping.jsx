import React, { useState, useEffect } from "react";
import { CheckRounded, Edit, ShoppingBag } from "@mui/icons-material";
import { PencilAltIcon } from "@heroicons/react/solid";
import axios from "axios";
import { updateShopping } from '../../store/shopping';
import { FormModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { ButtonUnstyled } from "@mui/base";

export function ModalEditShopping(props) {
  const [suppliers, setSuppliers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  //Campos variables
  const [createBuy, setCreateBuy] = useState({
    id_proveedor: 0,
    fecha: '',
    num_documento: '',
    fecha_ingreso: '',
    estado: ''
  })

  const activeModal = async (id) => {
    axios.get(`/api/compras/${id}`)
      .then(response => {
        setCreateBuy(response.data.message);
        setShowModal(true);
      })
      
    };

  const handleChange = (e) => {
    setCreateBuy({ ...createBuy, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let {estado,fecha,fecha_ingreso,id_compra,id_proveedor,num_documento,user_ing,user_mod} = createBuy;
    id_compra = Number(id_compra);
    const updateBuy = {estado,fecha,fecha_ingreso,id_compra,id_proveedor,num_documento,user_ing,user_mod}
    axios.put(`/api/compras/${props.id}`,updateBuy)
      .then(response => {
        dispatch(updateShopping(response.data.material))
        setShowModal(false);
      });
  };

  const hideModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    axios.get('/api/proveedores')
      .then(response => setSuppliers(response.data.message));
  },[])

  return (
    <>
      <em className="cursor-pointer" onClick={() => activeModal(props.id)}>
        <Edit className="!text-slate-500 w-5 hover:!text-opacity-70" />
      </em>
      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          className="w-[400px]"
          icon={<ShoppingBag className="!text-sky-600 !text-[25px]" />}
          titulo="Registro de compra"
        >
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
                  className="w-[300px] px-2 py-1.5 shadow-lg outline-none"
                >
                  <option defaultValue={createBuy.Proveedore.id_proveedor}>
                    {createBuy.Proveedore.nom_proveedor}
                  </option>
                  {suppliers.map(supplier => {
                    if(supplier.id_proveedor !== createBuy.Proveedore.id_proveedor) {
                      return (
                        <option
                          key={supplier.id_proveedor}
                          value={supplier.id_proveedor}
                        >
                          {supplier.nom_proveedor}
                        </option>
                      )
                    } 
                  })}
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
              <div className="flex items-center gap-4">
                <input
                  onChange={handleChange}
                  value={createBuy.fecha.substring(0,10)}
                  name="fecha"
                  type="date"
                  className="w-[300px] px-2 py-1.5 shadow-lg outline-none rounded-lg"
                />
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
                  value={createBuy.num_documento}
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
              <div className="flex items-center gap-4">
                <input
                  onChange={handleChange}
                  name="fecha_ingreso"
                  value={createBuy.fecha_ingreso.substring(0,10)}
                  type="date"
                  className="w-[300px] px-2 py-1.5 shadow-lg outline-none rounded-lg"
                />
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
                  className="w-[300px] px-2 py-1.5 shadow-lg outline-none"
                >
                  <option defaultValue={createBuy.estado}>
                    {createBuy.estado === 0 ? 'No en inventario' : 'En Inventario'}
                  </option>
                  <option value={createBuy.estado === 0 ? '1' : '0'}>
                  {createBuy.estado === 0 ? 'En Inventario' : 'No en Inventario'}
                  </option>
                </select>

                <div className="w-[25px] h-[25px] rounded-full border-[1px] border-sky-600 flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
                  <CheckRounded className="!text-sky-600 !text-sm" />
                </div>
              </div>
            </div>
            {/* BOTONES */}
            <div className="flex justify-between my-3">
              <button
                type="button"
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
        </FormModal>
      )}
    </>
  );
}
