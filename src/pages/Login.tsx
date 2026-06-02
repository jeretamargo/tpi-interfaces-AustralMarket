import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className="bg-azul-oscuro">
      <Header />
      <div>
        <div>
          <h1 className=" block text-6xl text-naranja font-titulo font-extrabold text-center mt-10">
            AUSTRAL
          </h1>
          <h1 className=" block text-6xl text-naranja font-titulo font-extrabold text-center mb-10">
            MARKET
          </h1>
        </div>

        <h3 className=" text-2xl text-blanco font-texto text-center font-bold mt-5  ">
          Accedé al sistema
        </h3>
      </div>
      <div className="flex flex-col items-center mt-10 gap-5 mb-20">
        <input
          type="text"
          placeholder="Introduzca su correo electrónico"
          className="bg-blanco text-black placeholder:text-gray-500 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-celeste w-75 h-8 px-3"
        />
        <div className="relative items-center">
          <input
            type="password"
            placeholder="Introduzca su contraseña"
            className="bg-blanco text-black placeholder:text-gray-500 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-celeste w-75 h-8 px-3"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className=" absolute size-8 right-2 top-1/2 -translate-y-1/2  text-gray-500 hover:text-black transition-all  cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 w-5 h-5 accent-celeste "
          />
          <label htmlFor="remember" className="text-blanco font-texto">
            Recordar mi inicio de sesión
          </label>
        </div>
        <button className="bg-celeste text-xl text-blanco font-texto font-bold mt-7 py-6 px-15 rounded hover:bg-hover-btn transition-all duration-300 cursor-pointer">
          Acceder
        </button>
        <a href="#">
          <p className="text-blanco font-texto">Olvidé mi contraseña</p>
        </a>
      </div>
      <Footer />
    </div>
  );
}
