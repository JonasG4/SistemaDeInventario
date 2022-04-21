import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as API from '../../services/categorias';
import ButtonAgregar from '../shared/ButtonAgregar';
import CategoriaItem from './CategoriaItem';
export default function Categorias() {
  const [categorias,setCategorias] = useState([]);
  const navigate = useNavigate();
  useEffect(()=> {
    API.getCategorias()
      .then(data => setCategorias(data.message));
  },[])
  const handleEvent = () => {
    navigate('/categorias/new');
  }
  return (
    <>
      <h2 className='text-2xl my-5 text-gray-500'>Lista de categorias</h2>
      <div className='relative w-4/5 mx-auto overflow-x-auto shadow-md '>
        <ButtonAgregar handleEvent={handleEvent} message={'Agregar Categoria'}/>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"'>
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {
              categorias.map(categoria => (
                <CategoriaItem key={categoria.id_categoria} id={categoria.id} nombre={categoria.nombre} descripcion={categoria.descripcion} />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
