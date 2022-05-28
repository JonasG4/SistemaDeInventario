import React, { useState } from "react";
import { PersonAdd, CheckRounded, CloseRounded } from "@mui/icons-material";
import { FormModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import OptionStock from '../optionStock';
import { createSupplier } from "../../../store/proveedores";

export default function RegistroMaterial() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  //Campos variables
  const [supplier, setSupplier] = useState({
    nom_proveedor: "",
    tel_fijo: "",
    tel_personal: ""
  });

  const handleChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    return dispatch(createSupplier(supplier)).then(() => setShowModal(false));
  };

  return (
    <>
      <div
        className="w-auto px-4 h-[35px] bg-sky-600 rounded cursor-pointer shadow-lg flex items-center justify-center hover:bg-opacity-80"
        onClick={() => setShowModal(true)}
      >
        <PersonAdd className="!fill-slate-50" />
        <p className="text-sm font-bold text-slate-50 ml-2">Agregar Material</p>
      </div>
      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          className="w-[400px]"
          icon={<PersonAdd className="!text-sky-600 !text-[25px]"/>}
          titulo="Registro de material"
        >
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
                  name="nom_proveedor"
                  onChange={handleChange}
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
                Mínimo Stock
              </label>
              <div className="flex items-center gap-4">
                <OptionStock />
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
                Estado
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  name="tel_personal"
                  onChange={handleChange}
                  placeholder="Escriba su correo electronico"
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
      )}
    </>
  );
}
