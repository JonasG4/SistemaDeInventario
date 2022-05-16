import React, { useState } from "react";
import { PersonAdd, CheckRounded, CloseRounded } from "@mui/icons-material";
import { FormModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { createUsuario } from "../../../store/usuarios";

export default function RegistroUsuarios() {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const dispatch = useDispatch();


  //Campos variables
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
    id_rol: "2",
    estado: "1",
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    usuario.estado = isChecked ? 1 : 2;

    return dispatch(createUsuario(usuario)).then(() => setShowModal(false));
  };

  return (
    <>
      <div
        className="w-auto px-4 h-[35px] bg-sky-600 rounded cursor-pointer shadow-lg flex items-center justify-center hover:bg-opacity-80"
        onClick={() => setShowModal(true)}
      >
        <PersonAdd className="!fill-slate-50" />
        <p className="text-sm font-bold text-slate-50 ml-2">Agregar usuario</p>
      </div>
      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          className="w-[400px]"
          icon={<PersonAdd className="!text-sky-600 !text-[25px]"/>}
          titulo="Registro de usuario"
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
                Apellido
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  name="apellido"
                  onChange={handleChange}
                  placeholder="Escriba su apellido"
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
                Correo electrónico
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Escriba su correo electronico"
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
                Contraseña
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Escriba su contraseña"
                  className="w-[300px] shadow-lg outline-none px-5 py-2 rounded-lg text-[12px] placeholder:text-slate-400 placeholder:font-medium"
                />
                <div className="w-[25px] h-[25px] rounded-full border-[1px] border-bg-red-btn flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
                  {/* <CheckRounded className="!text-sky-600 !text-sm" /> */}
                  <CloseRounded className="!text-sm !text-bg-red-btn" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="nombre"
                className="text-sm text-slate-600 font-bold"
              >
                Confirmar contraseña
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="Vuelva a escribir su contraseña"
                  className="w-[300px] shadow-lg outline-none px-5 py-2 rounded-lg text-[12px] placeholder:text-slate-400 placeholder:font-medium"
                />
                <div className="w-[25px] h-[25px] rounded-full border-[1px] border-bg-red-btn flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
                  {/* <CheckRounded className="!text-sky-600 !text-sm" /> */}
                  <CloseRounded className="!text-sm !text-bg-red-btn" />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-4">
              <div className="flex flex-col w-1/2 gap-4">
                <label
                  htmlFor="rol"
                  className="text-sm text-slate-600 font-bold"
                >
                  Rol del usuario
                </label>
                <select
                  name="id_rol"
                  id="id_rol"
                  onChange={handleChange}
                  className="rounded p-1 shadow-lg outline-none"
                  defaultValue={2}
                >
                  <option value="1">Superadmin</option>
                  <option value="2">Admin</option>
                </select>
              </div>
              <div className="flex flex-col w-1/2 gap-4">
                <label
                  htmlFor="estado"
                  className="text-sm text-slate-600 font-bold"
                >
                  Estado del usuario
                </label>
                <label
                  className={`relative w-24 h-8 cursor-pointer rounded-full shadow-lg flex justify-start items-center border-[1px] ${
                    isChecked
                      ? "bg-sky-600 border-sky-800"
                      : "bg-slate-300 border-slate-500"
                  } transition-all duration-500`}
                >
                  <input
                    type="checkbox"
                    name="estado"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={(e) => {
                      setIsChecked(!isChecked);
                    }}
                  />
                  <span
                    className={`w-[25px] h-4/5 bg-slate-50 absolute rounded-full top-1 ${
                      isChecked ? "left-16" : "left-2"
                    } transition-all duration-500`}
                  ></span>
                  <span
                    className={`text-slate-50 ml-5 text-[12px] mt-0 pt-0 font-semibold ${
                      isChecked ? "opacity-100" : "opacity-0"
                    } transition-all duration-500`}
                  >
                    Activo
                  </span>
                </label>
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
