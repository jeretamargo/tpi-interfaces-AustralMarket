import React from "react";
import { useNavigate } from "react-router";

const HeaderLogeado = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate("/login");
	};

	return (
		<div className="w-full px-5  bg-blanco flex items-center justify-between shadow-md">
			{/* Logo + Nombre */}
			<div className="flex items-center gap-4 ">
				<img
					src="../../public/LOGO-AUSTRAL-MARKET.png"
					alt="Logo Austral Market"
					className="h-16 w-16 rounded-full object-contain"
				/>
				<h1 className="font-titulo hidden md:flex md:text-2xl font-extrabold text-azul">
					AUSTRAL MARKET
				</h1>
			</div>

			{/* Perfil hardcodeado */}
			<div className="flex items-center gap-4">
				<img
					src="../../public/foto-perfil.png"
					alt="Foto de perfil"
					className="h-12 w-12 rounded-full object-cover"
				/>
				<div className="flex flex-col text-right">
					<p className="font-texto text-lg text-celeste font-bold">ADMIN</p>
					<p className="hidden md:block font-texto text-naranja">
						Nombre Apellido
					</p>
					<p className="md:hidden font-texto text-naranja">N.Apellido</p>
				</div>
				<img
					src="../../public/log-out.svg"
					alt="Cerrar sesión"
					className="h-8 w-8 cursor-pointer"
					onClick={handleLogout}
				/>
			</div>
		</div>
	);
};

export default HeaderLogeado;
