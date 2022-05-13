import {useState} from 'react'
import { XCircleIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import {Search, Tune} from '@mui/icons-material'

const InputText = (props) =>{
    return (
        <div className="relative w-full">
          <input
            type="text"
            className={`w-full p-3 pl-5 shadow-xl rounded-lg text-sm outline-none  border-[1px] ${
              props.isError ? "border-red-500" : "border-transparent"
            }`}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
          />
          {props.isError &&
            <XCircleIcon className={`absolute h-6 right-[20px] top-[11px] stroke-red-500 stroke-2`} />
          }
          <p className="text-red-500 mt-2">{props.messageError}</p>
        </div>
      );
}

const InputPassword = (props) =>{
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative w-full">
        <input
          type={`${showPassword ? "text" : "password"}`}
          name={props.name}
          onChange={props.onChange}
          className={`w-full p-3 pl-5 shadow-xl rounded-lg text-sm outline-none border-[1px] ${
              props.isError ? "border-red-500" : "border-transparent"
            }` }
          placeholder={props.placeholder}
          value={props.value}
        />
  
        {showPassword ? (
          <EyeOffIcon
            className="absolute h-6 right-[20px] top-[11px] fill-slate-600 cursor-pointer"
            onClick={() => {
              setShowPassword(false);
            }}
          />
        ) : (
          <EyeIcon
            className="absolute h-6 right-[20px] top-[11px] fill-slate-600 cursor-pointer"
            onClick={() => {
              setShowPassword(true);
            }}
          />
        )}
        <p className="text-red-500 mt-2">{props.messageError}</p>
      </div>
    );
}

const InputSearchWithFilter = (props) =>{ 
    return (
        <div className='relative'>
            <Search className='absolute left-4 top-[10px] !text-[18px] !fill-slate-600' />
            <input type="text" className='bg-slate-300 bg-opacity-60 rounded px-2 h-[35px] pl-12 pr-12 outline-none text-sm w-[250px]' placeholder='Búsqueda'/>
            <Tune className="absolute right-4 top-[10px] !text-[18px] !fill-slate-600"/>
       </div>
    );
}




export { InputText, InputPassword, InputSearchWithFilter}
