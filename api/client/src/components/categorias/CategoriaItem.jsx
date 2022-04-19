import React from 'react'

export default function CategoriaItem({id,nombre,descripcion}) {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {nombre}
        </th>
        <td className="text-center px-6 py-4 dark:text-white">
          {descripcion}
        </td>
        <td className="text-center px-6 py-4 flex justify-center">
          <button className='background-button ml-5 cursor-pointer text-slate-50  shadow-sm border-none outline-none py-2 px-3 rounded-md' type="button"> Editar
          </button>
          <button className='button-cancel ml-5 cursor-pointer text-slate-50  shadow-sm border-none outline-none py-2 px-3 rounded-md' type="button"> Eliminar
          </button>
        </td>
      </tr>
    </>
  )
}
