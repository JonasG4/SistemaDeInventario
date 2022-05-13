import React, { useState } from "react";
import {
  PersonRemove,
  CheckRounded,
  CloseRounded,
  Delete,
} from "@mui/icons-material";
import { FormModal } from "../../../context/Modal";

export default function RegistroUsuarios(props) {
  const [showModal, setShowModal] = useState(false);
 
  async function deleteUser(id){
    fetch(`/api/usuarios/${id}`, {
      method: "DELETE",
    }).then(() => {
        setShowModal(false)
    })
  }
  return (
    <>
      <em className="cursor-pointer" onClick={() => setShowModal(true)}>
        <Delete className="!text-slate-500 w-5"></Delete>
      </em>
      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          className="w-[400px]"
          titulo="Borrar usuario"
        >
            <p className="text-xl text-center text-sky-800">¿Está seguro que desea eliminar éste registro?</p>
          <div className="flex justify-between my-5">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="bg-bg-red-btn rounded-md w-40 py-1 text-slate-50 font-bold text-sm"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="bg-sky-600 rounded-md w-40 py-1 text-slate-50 font-bold text-sm"
              onClick={() => deleteUser(props.id)}
            >
              Si, eliminar.
            </button>
          </div>
        </FormModal>
      )}
    </>
  );
}
