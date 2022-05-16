import React, { useState } from "react";
import { AddTask, CheckRounded, CloseRounded } from "@mui/icons-material";
import { FormModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { createCategoria } from "../../../store/categorias";

export default function RegistroUsuarios() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  //Campos variables
  const [categoria, setCategoria] = useState({
    nombre: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    return dispatch(createCategoria(categoria)).then(() => setShowModal(false));
  };

  return (
    <>
      <div
        className="w-auto px-4 h-[35px] bg-sky-600 rounded cursor-pointer shadow-lg flex items-center justify-center hover:bg-opacity-80"
        onClick={() => setShowModal(true)}
      >
        <AddTask className="!fill-slate-50" />
        <p className="text-sm font-bold text-slate-50 ml-2">
          Agregar categoria
        </p>
      </div>
      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          className="w-[400px]"
          icon={<AddTask className="!text-sky-600 !text-[25px]" />}
          titulo="Registro de categoria"
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
                  name="nombre"
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
                Descripción
              </label>
              <div className="flex items-center gap-4">
                <textarea
                  type="text"
                  name="descripcion"
                  onChange={handleChange}
                  placeholder="Describa la categoria..."
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
                type="button"
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
