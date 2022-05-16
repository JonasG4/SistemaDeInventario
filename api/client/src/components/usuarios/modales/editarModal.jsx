import { useState } from "react";
import { CheckRounded, Edit } from "@mui/icons-material";
import { PencilAltIcon } from "@heroicons/react/solid";
import { FormModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { getSingleUsuario, updateUsuario } from "../../../store/usuarios";

export default function ActualizarUsuario(props) {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const dispatch = useDispatch();

  //Campos variables
  const [usuarioData, setUsuarioData] = useState({
    id_usuario: props.id,
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
    id_rol: "2",
    estado: "1",
  });

  const activeModal = async () => {
    return dispatch(getSingleUsuario(props.id)).then(async (data2) => {
      setUsuarioData(data2.usuario);
      setIsChecked(data2.usuario.estado === 1);
      setShowModal(true);
    });
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setUsuarioData({
        ...usuarioData,
        [e.target.name]: e.target.checked ? "1" : "0",
      });

      console.log("Input", e.target.checked);
    } else {
      setUsuarioData({ ...usuarioData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    return dispatch(updateUsuario(usuarioData))
      .then(() => {
        setShowModal(false);
      })
      .catch(async (res) => console.log("Error: ", res));
  };

  return (
    <>
      <em className="cursor-pointer" onClick={() => activeModal(props.id)}>
        <Edit className="!text-slate-500 w-5 hover:!text-opacity-70" />
      </em>
      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          className="w-[400px]"
          titulo="Actualizar usuario"
          icon={<PencilAltIcon className="text-sky-600 text-[25px] w-5" />}
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
                  value={usuarioData.nombre}
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
                  value={usuarioData.apellido}
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
                  value={usuarioData.email}
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
                  defaultValue={usuarioData.id_rol}
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
                      handleChange(e);
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
                type="button"
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
