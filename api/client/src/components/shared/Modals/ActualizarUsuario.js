import React, { useEffect, useState } from "react";
import {
  PersonAdd,
  CheckRounded,
  CloseRounded,
  Edit,
} from "@mui/icons-material";
import { FormModal } from "../../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../../store/usuarios";

export default function ActualizarUsuario(props) {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState()
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
    if (e.target.type === "checkbox") {
      setUsuario({ ...usuario, [e.target.name]: e.target.checked });
    } else {
      setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }
  };

  const activeModal = async () => {
    
    await fetch(`/api/usuarios/${props.id}`).then(async(res) => {
      const data = await res.json()
      setUserData(data.usuario)
      setIsChecked(data.usuario.estado == 1 ? true : false)
      setShowModal(true);
    })
    
    console.log("ROL========", userData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // return dispatch(createUser(usuario))
    //   .then(() => {
    //     setShowModal(false);
    //   })
    //   .catch(async (res) => console.log("Error: ", res));
  };

  return (
    <>
      <em className="cursor-pointer" onClick={activeModal}>
        <Edit className="!text-slate-500 w-5 hover:!text-opacity-70" />
      </em>
      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          className="w-[400px]"
          titulo="Actualizar usuario"
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
                  value={userData.nombre}
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
                  value={userData.apellido}
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
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Escriba su correo electronico"
                  className="w-[300px] shadow-lg outline-none px-5 py-2 rounded-lg text-[12px] placeholder:text-slate-400 placeholder:font-medium"
                />
                <div className="w-[25px] h-[25px] rounded-full border-[1px] border-sky-600 flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
                  <CheckRounded className="!text-sky-600 !text-sm" />
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
                  defaultValue={userData.id_rol}
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
                    onChange={(e) => {
                      e.target.checked
                        ? setIsChecked(true)
                        : setIsChecked(false);
                      handleChange(e);
                    }}
                    checked={isChecked}
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
                Actualizar
              </button>
            </div>
          </form>
        </FormModal>
      )}
    </>
  );
}
