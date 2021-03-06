import React,{useState, useEffect} from 'react'
import { PersonAdd,CheckRounded, ShoppingBag } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { setShopping } from '../../store/shopping';
import axios from 'axios';
import { FormModal } from "../../context/Modal";

export const CreateShopping = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session);
  const [suppliers, setSuppliers] = useState([]);
  const [createSupplier, setCreateSupplier] = useState({
    id_proveedor: 0,
    fecha: '',
    num_documento: '',
    fecha_ingreso: '',
    estado: ''
  })

  const handleChange = (e) => {
    setCreateSupplier({
      ...createSupplier,
      [e.target.name]: e.target.value
    })
  }

  const hideModal = () => {
    setShowModal(false);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBuy = {...createSupplier,user_ing: user.user.id_usuario, user_mod: user.user.id_usuario}
    axios.post('/api/compras',newBuy)
      .then(response => {
        console.log(response.data.buy)
        dispatch(setShopping(response.data.buy));
        setShowModal(false);
      })
  }


  useEffect(() => {
    axios.get('/api/proveedores')
      .then(response => setSuppliers(response.data.message));
  },[])
  return (
    <>
      <div
        className="w-auto px-4 h-[35px] bg-sky-600 rounded cursor-pointer shadow-lg flex items-center justify-center hover:bg-opacity-80"
        onClick={() => setShowModal(true)}
      >
        <ShoppingBag className="!fill-slate-50" />
        <p className="text-sm font-bold text-slate-50 ml-2">Agregar Compra</p>
      </div>
      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          className="w-[400px]"
          icon={<ShoppingBag className="!text-sky-600 !text-[25px]"/>}
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
                  className='w-[300px] px-2 py-1.5 shadow-lg outline-none'>
                  <option defaultValue={'Seleccionar'} >Selecciona un proveedor</option>
                  {suppliers.map(supplier => (
                    <option key={supplier.id_proveedor} value={supplier.id_proveedor}>{supplier.nom_proveedor}</option>
                  ))}
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
              <div className='flex items-center gap-4'>
                <input
                  onChange={handleChange} 
                  name='fecha' 
                  type="date" 
                  className='w-[300px] px-2 py-1.5 shadow-lg outline-none rounded-lg' />
              </div>

            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="nombre"
                className="text-sm text-slate-600 font-bold"
              >
                N??mero de documento
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  onChange={handleChange} 
                  name="num_documento"
                  placeholder="N??mero de documento"
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
              <div className='flex items-center gap-4'>
                <input
                  onChange={handleChange}  
                  name='fecha_ingreso' 
                  type="date" 
                  className='w-[300px] px-2 py-1.5 shadow-lg outline-none rounded-lg' />
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
                  className='w-[300px] px-2 py-1.5 shadow-lg outline-none'>
                  <option defaultValue={'Seleccionar'} >Selecciona una opci??n</option>
                  <option value="1">En Inventario</option>
                  <option value="0">No en inventario</option>
                </select>

                <div className="w-[25px] h-[25px] rounded-full border-[1px] border-sky-600 flex justify-center items-center shadow-[0px_4px_10px_-1px_rgba(0,0,0,0.3)]">
                  <CheckRounded className="!text-sky-600 !text-sm" />
                </div>
              </div>
            </div>
            {/* BOTONES */}
            <div className="flex justify-between my-3">
              <button
                type='button'
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
  )
}
