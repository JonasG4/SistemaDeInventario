import React from 'react'

export default function ButtonAgregar({message, handleEvent}) {
  return (
    <div className='flex justify-end'>
      <button onClick={handleEvent} className='background-button cursor-pointer text-slate-50  shadow-sm border-none outline-none py-2 px-3 mb-5 rounded-md' type="button"> 
      {message}
      </button>
    </div>
  )
}
