import React from 'react'

const optionStock = () => {
  let options = [];
  for(let i = 1; i <= 30; i++) {
    options.push(i);
  }
  return (
    <select name="" className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="stock">
      <option defaultValue={'Seleccionar'} >Seleccionar</option>
      {options.map((element,index) => (
        <option key={index} value={element}>{element}</option>
      ))}
    </select>
  )
}

export default optionStock;
