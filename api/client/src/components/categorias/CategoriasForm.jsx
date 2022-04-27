import React,{useState,useEffect} from 'react'
import * as API from '../../services/categorias';
import { useNavigate, useParams } from 'react-router-dom';
export default function CategoriasForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoria,setCategoria] = useState({
    nombre: '',
    descripcion: ''
  })
  const [editing,setEditing] = useState(false);
  const handleChange = (e) => {
    setCategoria({...categoria,[e.target.name]: e.target.value});
  }
  const validateCategories = () => {
    const {nombre,descripcion} = categoria;
    let validate = !nombre.length || !descripcion.length 
    return validate;
  }

  const loadCategory = async(id) => {
    API.getCategory(id)
      .then(data => {
        setCategoria({nombre: data.categoria.nombre, descripcion: data.categoria.descripcion});
        setEditing(true)
      });
  }

  useEffect(() => {
    if(params.id) {
      loadCategory(params.id);
    }
  },[params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if(editing) {
      API.updateCategory(params.id,categoria)
        .then(data => console.log(data));
    }else {
      API.addCategorias(categoria)
        .then(data => console.log(data));
      }
      navigate('/categorias')
  }
  
  return (
    <>
      <div className='w-full mx-auto max-w-4xl h-screen border-gray-200 py-3 px-4 flex flex-col justify-center'>
      <h2 className='color-text-title font-medium text-3xl mb-5'>Categorias</h2>
        <div>
          <form className='border-2 bg-gray-200 px-5 py-5 shadow-md' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-left color-text text-lg font-bold mb-2' htmlFor="">Nombre</label>
              <input className='w-full shadow-sm border-none outline-none py-2 px-3 rounded-md' name='nombre' onChange={handleChange} type="text" placeholder='Nombre de categoria' value={categoria.nombre} />
            </div>
            <div className='mb-4'>
              <label className='block text-left color-text text-lg font-bold mb-2' htmlFor="">Descripcion</label>
              <input className='w-full shadow-sm border-none outline-none py-2 px-3 rounded-md' onChange={handleChange} name='descripcion' type="text" placeholder='Descripcion' value={categoria.descripcion} />
            </div>
            <div className='mb-4'>
              <input className='bg-blue-600 cursor-pointer text-slate-50  shadow-sm py-2 px-3 rounded-md' type="submit" value="Guardar" disabled={validateCategories()} />
              <button onClick={() => navigate('/categorias')} className='button-cancel ml-5 cursor-pointer text-slate-50  shadow-sm border-none outline-none py-2 px-3 rounded-md' type="button"> Regresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
