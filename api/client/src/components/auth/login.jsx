import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Login() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

const handleChange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value});
};

  const handleSubmit = async (e) => {
    e.preventDefault();

  const res = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {'Content-Type': 'application/json'}
    });

    const data = await res.json();
    console.log(data);
  }


  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-3/4 bg-zinc-100 flex h-4/5 rounded-lg shadow-2xl">
        <div className="container flex items-center justify-center flex-col">
          <div className="w-2/5 flex flex-col items-start gap-5">
            <h1 className="text-xl font-bold text-slate-700">
              INICIAR SESIÓN
              <span className="w-10 h-[4px] bg-slate-700 block mt-2"></span>
            </h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-2 justify-center items-start">
                <label
                  htmlFor="email"
                  className="font-semibold text-slate-700 text-sm"
                >
                  Correo Electrónico
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="w-full p-3 pl-5 shadow-lg rounded-lg text-sm outline-none"
                  placeholder="Escriba su correo electronico"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-start">
                <label
                  htmlFor="email"
                  className="font-semibold text-slate-700 text-sm"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="w-full p-3 pl-5 shadow-md rounded-lg text-sm outline-none"
                  placeholder="Escriba su contraseña"
                />
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
