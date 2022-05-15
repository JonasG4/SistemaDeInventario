// frontend/src/context/Modal.js
import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseRounded, PersonAdd } from "@mui/icons-material";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function FormModal({ onClose, className, titulo, icon, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div
      id="modal"
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
    >
      <div
        id="modal-background"
        onClick={onClose}
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
      />
      <div
        id="modal-content"
        className={`absolute bg-slate-50 ${className} rounded-xl`}
      >
        <div className="flex justify-between items-center p-5">
          {icon}
          <p className="text-lg font-bold text-sky-900">{titulo}</p>
          <div
            className="rounded-full shadow-[2px_2px_5px_1px_rgba(0,0,0,0.3)] w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={onClose}
          >
            <CloseRounded className="!fill-sky-600 !text-[13px]" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-400"/>
        <div className="px-7 py-5">
        {children}
        </div>
      </div>
    </div>,
    modalNode
  );
}
