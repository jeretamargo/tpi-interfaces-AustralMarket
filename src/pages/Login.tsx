import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import usuarios from "../data/usuarios.json";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    credentials: "",
  });
  const [warnings, setWarnings] = useState({
    email: "",
    password: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleLogin() {
    let hasErrors = false;

    setErrors({
      email: "",
      credentials: "",
    });

    setWarnings({
      email: "",
      password: "",
    });

    if (email.trim() === "") {
      setWarnings((prev) => ({
        ...prev,
        email: "El campo de correo electrónico no puede estar vacío",
      }));

      hasErrors = true;
    } else if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email:
          "Debe ingresar una dirección de correo válida. Ejemplo: usuario@email.com",
      }));

      hasErrors = true;
    }

    if (password.trim() === "") {
      setWarnings((prev) => ({
        ...prev,
        password: "El campo de contraseña no puede estar vacío",
      }));

      hasErrors = true;
    }

    if (hasErrors) return;

    const usuario = usuarios.find((u) => u.email === email);

    if (!usuario || usuario.password !== password) {
      setErrors((prev) => ({
        ...prev,
        credentials:
          "Correo electrónico o contraseña incorrectos, vuelve a intentarlo",
      }));

      return;
    }
    console.log(usuario);
    login(usuario);
    navigate("/productos");
  }
  return (
    <div className="bg-azul-oscuro min-h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <div>
          <div>
            <h1 className=" block text-6xl text-naranja font-titulo font-extrabold text-center mt-10">
              AUSTRAL
            </h1>
            <h1 className=" block text-6xl text-naranja font-titulo font-extrabold text-center mb-10">
              MARKET
            </h1>
          </div>

          <h3 className=" text-4xl text-blanco font-texto text-center font-bold mt-5  ">
            Accedé al sistema
          </h3>
        </div>
        <div className="flex flex-col items-center mt-10 gap-5 mb-20">
          <input
            type="text"
            placeholder="Introduzca su correo electrónico"
            className={`bg-blanco text-black placeholder:text-gray-500 rounded-lg border-gray-300 focus:outline-none focus:ring-4 focus:ring-celeste w-75 h-8 px-3  ${errors.email ? "ring-rojo ring-4" : ""} ${errors.credentials ? "ring-rojo ring-4" : ""} ${warnings.email ? "ring-warning ring-4" : ""}  `}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-naranja font-texto  text-center">
              {errors.email}
            </p>
          )}
          {warnings.email && (
            <p className="text-naranja font-texto text-center">
              {warnings.email}
            </p>
          )}
          <div className="relative items-center">
            <input
              type={isShowingPassword ? "text" : "password"}
              placeholder="Introduzca su contraseña"
              className={`bg-blanco text-black placeholder:text-gray-500 rounded-lg border-gray-300 focus:outline-none focus:ring-4 focus:ring-celeste w-75 h-8 px-3 ${errors.credentials ? "ring-rojo ring-4" : ""}  ${warnings.password ? "ring-warning ring-4" : ""} `}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setIsShowingPassword(!isShowingPassword)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute size-8 right-2 top-1/2 -translate-y-1/2  text-gray-500 hover:text-black transition-all  cursor-pointer "
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
            </button>
          </div>
          {errors.credentials && (
            <p className="text-naranja font-texto  text-center">
              {errors.credentials}
            </p>
          )}
          {warnings.password && (
            <p className="text-naranja font-texto text-center">
              {warnings.password}
            </p>
          )}
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
          <button
            onClick={() => handleLogin()}
            className="bg-celeste text-2xl text-blanco font-texto font-bold mt-7 py-6 px-15 rounded hover:bg-hover-btn transition-all duration-300 cursor-pointer"
          >
            Acceder
          </button>
          <a href="#">
            <p className="text-blanco font-texto">Olvidé mi contraseña</p>
          </a>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
