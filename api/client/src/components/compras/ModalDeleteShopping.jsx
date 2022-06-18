import { useState } from "react";
import { Delete, PersonRemove,ShoppingBag } from "@mui/icons-material";
import { FormModal } from "../../context/Modal";
import { removeShopping } from '../../store/shopping';
import axios from "axios";
import { useDispatch } from "react-redux";
// import { deleteSupplier } from "../../../store/proveedores";

export function ModalDeleteShopping(props) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  // async function deleteProve(id) {
  //   return dispatch(deleteSupplier(id)).then(() => setShowModal(false));
  // }
  const deleteBuy = (id) => {
    axios.delete(`/api/compras/${id}`)
      .then(response => {
        console.log(response.data);
        dispatch(removeShopping(Number(response.data.payload)))
        setShowModal(false);
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
          titulo="Borrar Compra"
          icon={<ShoppingBag className="!text-sky-600 !text-[25px]"/>}
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
              onClick={() => deleteBuy(props.id)}
            >
              Si, eliminar.
            </button>
          </div>
        </FormModal>
      )}
    </>
  );
}
