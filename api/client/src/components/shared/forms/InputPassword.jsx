import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

export default function InputPassword(props) {
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
