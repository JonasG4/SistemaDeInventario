import { useState } from "react";
import { Delete, PersonRemove } from "@mui/icons-material";
import { FormModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { deleteUsuario } from "../../../store/usuarios";

export default function RegistroUsuarios(props) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  async function deleteUser(id) {
    return dispatch(deleteUsuario(id)).then(() => setShowModal(false));
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
          icon={<PersonRemove className="!text-bg-red-btn !text-[25px]"/>}
        >
          <p className="text-xl text-center text-sky-800">
            ¿Está seguro que desea eliminar éste registro?
          </p>
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
