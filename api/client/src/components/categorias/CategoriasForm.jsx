import React from 'react'
export default function CategoriasForm() {
  return (
    <>
      <div className='w-full mx-auto max-w-4xl h-screen border-gray-200 py-3 px-4 flex flex-col justify-center'>
      <h2 className='color-text-title font-medium text-3xl mb-5'>Categorias</h2>
        <div>
          <form className='border-2 bg-gray-200 px-5 py-5 shadow-md'>
            <div className='mb-4'>
              <label className='block text-left color-text text-lg font-bold mb-2' htmlFor="">Nombre</label>
              <input className='w-full shadow-sm border-none outline-none py-2 px-3 rounded-md' type="text" placeholder='Nombre de categoria' />
            </div>
            <div className='mb-4'>
              <label className='block text-left color-text text-lg font-bold mb-2' htmlFor="">Descripcion</label>
              <input className='w-full shadow-sm border-none outline-none py-2 px-3 rounded-md' type="text" placeholder='Descripcion' />
            </div>
            <div className='mb-4'>
              <input className='background-button cursor-pointer text-slate-50  shadow-sm border-none outline-none py-2 px-3 rounded-md' type="submit" value="Guardar" />
              <button className='button-cancel ml-5 cursor-pointer text-slate-50  shadow-sm border-none outline-none py-2 px-3 rounded-md' type="button"> Regresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
