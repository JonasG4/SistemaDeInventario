import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/solid";
// import {Input} from '../shared/forms'
import InputText from "../shared/forms/inputText";
import InputPassword from "../shared/forms/InputPassword";
export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPasswordErr, setInputPasswordErr] = useState(false);

  const [messageEmailError, setMessageEmailError] = useState("");
  const [messagePasswordError, setMessagePasswordError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" },
    });

    const status = await res.status;
    const data = await res.json();

    if (status === 404) {
      setInputEmailErr(true);
      setMessageEmailError(data.msg);
    }else{
      setInputEmailErr(false);
      setMessageEmailError("");
    }
    
    if(status === 401){
      setInputPasswordErr(true)
      setMessagePasswordError(data.msg)
    }else{
      setInputPasswordErr(false)
      setMessagePasswordError("")
    }

    if(status === 201){
      navigate('/')
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-3/4 bg-zinc-100 flex h-4/5 rounded-lg shadow-2xl">
        <div className="container flex items-center justify-center flex-col">
          <div className="w-2/5 flex flex-col items-start gap-5">
            <UserCircleIcon className="w-20 h-20 fill-white mx-auto stroke-cyan-500" />
            <h1 className="text-xl font-bold text-slate-700">
              INICIAR SESIÓN
              <span className="w-10 h-[4px] bg-slate-700 block mt-2"></span>
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2 justify-center items-start">
                <label
                  htmlFor="email"
                  className="font-semibold text-slate-700 text-sm"
                >
                  Correo Electrónico
                </label>
                <InputText
                  name="email"
                  onChange={handleChange}
                  placeholder="Escriba su correo electrónico"
                  isError={inputEmailErr}
                  messageError={messageEmailError}
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-start">
                <label
                  htmlFor="email"
                  className="font-semibold text-slate-700 text-sm"
                >
                  Contraseña
                </label>
                <InputPassword
                  name="password"
                  onChange={handleChange}
                  isError={inputPasswordErr}
                  messageError={messagePasswordError}
                  placeholder="Escriba su contraseña"
                />
                {/* <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="w-full p-3 pl-5 shadow-md rounded-lg text-sm outline-none"
                  placeholder="Escriba su contraseña"
                /> */}
                <Link to="/reset-password">
                  <p className="text-xs text-slate-400 font-semibold">
                    ¿Olvidaste tu contraseña?
                  </p>
                </Link>
              </div>
              <button
                type="submit"
                className="py-2 bg-sky-500 rounded-lg text-white font-bold mt-2"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
        <div className="container flex items-center justify-center bg-cyan-600 w-2/4 rounded-r-lg">
          <h1 className="text-2xl text-white font-bold">Mubleria Perez</h1>
        </div>
      </div>
    </div>
  );
}
