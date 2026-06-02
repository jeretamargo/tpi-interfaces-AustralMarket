import React from "react";

const Header = () => {
  return (
    <div className="w-full px-5  bg-blanco flex  justify-between content-center">
      <div className="flex  gap-4">
        <img src="../../public/LOGO-AUSTRAL-MARKET.png" className="h-25"></img>
        <h1 className="hidden md:flex font-titulo text-2xl self-center font-extrabold text-azul">
          AUSTRAL MARKET
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-10 text-naranja"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <p className="text-black font-texto  ">Inicia Sesión</p>
      </div>
    </div>
  );
};

export default Header;
