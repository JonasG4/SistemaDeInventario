import React, { useState } from "react";
import { CheckRounded, Edit } from "@mui/icons-material";
import { PencilAltIcon } from "@heroicons/react/solid";
import { FormModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { getSingleSupplier,updateSupplier } from "../../../store/proveedores";

export default function ActualizarSuppler(props) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  //Campos variables
  const [supplierData, setSupplierData] = useState({
    id_proveedor: props.id,
    nom_proveedor: "",
    tel_fijo: "",
    tel_personal: ""
  });

  const activeModal = async () => {
    return dispatch(getSingleSupplier(props.id)).then(async (data) => {
      setSupplierData(data.message);
      setShowModal(true)
    });
  };

  const handleChange = (e) => {
    setSupplierData({ ...supplierData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setSupplierData(supplierData);

    return dispatch(updateSupplier(supplierData))
      .then(() => {
        setShowModal(false);
      })
      .catch(async (res) => console.log("Error: ", res));
  };

  return (
    <>
      <em className="cursor-pointer" onClick={() => activeModal(props.id)} >
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
                  name="nom_proveedor"
                  value={supplierData.nom_proveedor}
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
                Telefono fijo
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  name="tel_fijo"
                  value={supplierData.tel_fijo}
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
                Telefono personal
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  name="tel_personal"
                  value={supplierData.tel_personal}
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
