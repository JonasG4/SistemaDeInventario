import React from "react";
import { XCircleIcon } from "@heroicons/react/outline";

export default function input(props) {
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
      />
      {props.isError &&
        <XCircleIcon className={`absolute h-6 right-[20px] top-[11px] stroke-red-500 stroke-2`} />
      }
      <p className="text-red-500 mt-2">{props.messageError}</p>
    </div>
  );
}
