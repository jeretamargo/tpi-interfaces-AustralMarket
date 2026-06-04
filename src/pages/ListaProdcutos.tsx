import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GestionProductos from "../components/tabla/Gestion";

export default function ListaProdcutos() {
	return (
		<div>
			<Header />
			<GestionProductos />
			<Footer />
		</div>
	);
}
