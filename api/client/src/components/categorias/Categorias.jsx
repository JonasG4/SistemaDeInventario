import React, {useEffect,useState} from 'react'
import * as API from '../../services/categorias';
import CategoriaItem from './CategoriaItem';
export default function Categorias() {
  const [categorias,setCategorias] = useState([]);
  useEffect(()=> {
    API.getCategorias()
      .then(data => setCategorias(data.message));
  },[])
  return (
    <>
      <h2 className='text-2xl my-5 text-gray-500'>Lista de categorias</h2>
      <div className='relative w-4/5 mx-auto overflow-x-auto shadow-md '>
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
                <CategoriaItem key={categoria.id} id={categoria.id} nombre={categoria.nombre} descripcion={categoria.descripcion} />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
