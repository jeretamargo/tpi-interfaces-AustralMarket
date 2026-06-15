import React from "react";
import HeaderLogeado from "../components/tabla/header-logeado";
import Footer from "../components/Footer";
import GestionProductos from "../components/tabla/Gestion";

export default function ListaProdcutos() {
	return (
		<div>
			<HeaderLogeado />
			<GestionProductos />
			<Footer />
		</div>
	);
}
