import Head from "./Head";
import Tabla from "./Tabla";
import Paginacion from "./Paginacion";
import Tabs from "./Tabs";
import { useState } from "react";
import ProductoModal from "../ProductoModal"


const productosIniciales = [
	{id: 1,nombre: "Producto 1",descripcion:"lalalla",categoria: "Electrónica",precio: 299.99,stock: 50,estado: "Disponible",
	},
	{
		id: 2,
		nombre: "Producto 2",
		categoria: "Hogar",
		precio: 199.99,
		stock: 80,
		estado: "Disponible",
	},
	{
		id: 3,
		nombre: "Producto 3",
		categoria: "Oficina",
		precio: 399.99,
		stock: null,
		estado: "Disponible",
	},
	{
		id: 4,
		nombre: "Producto 4",
		categoria: "Herramientas",
		precio: 89.99,
		stock: 100,
		estado: "Disponible",
	},
	{
		id: 5,
		nombre: "Producto 5",
		categoria: "Dispositivos",
		precio: 49.99,
		stock: 200,
		estado: "Desactivado",
	},
	{
		id: 6,
		nombre: "Producto 6",
		categoria: "Electrodomésticos",
		precio: 599.99,
		stock: null,
		estado: "Disponible",
	},
	{
		id: 7,
		nombre: "Producto 7",
		categoria: "Máquinas",
		precio: 249.99,
		stock: 60,
		estado: "Disponible",
	},
	{
		id: 8,
		nombre: "Producto 8",
		categoria: "Electrónica",
		precio: 129.99,
		stock: 9,
		estado: "Disponible",
	},
];

const categorias = [
	{ id: 1, nombre: "Electrónica", descripcion: "Productos tecnológicos" },
	{ id: 2, nombre: "Hogar", descripcion: "Artículos para la casa" },
	{ id: 3, nombre: "Oficina", descripcion: "Material de oficina" },
	{ id: 4, nombre: "Herramientas", descripcion: "Equipos y herramientas" },
	{ id: 5, nombre: "Dispositivos", descripcion: "Gadgets y accesorios" },
	{ id: 6, nombre: "Electrodomésticos", descripcion: "Aparatos para el hogar" },
	{ id: 7, nombre: "Máquinas", descripcion: "Equipos industriales" },
];

export default function GestionProductos() {
	const [activeTab, setActiveTab] = useState("productos");
	const [productos, setProductos] = useState(productosIniciales); // pa que cambie

	// estado del modal 
	const [modalAbierto, setModalAbierto] = useState(false);
	const [productoSeleccionado, setProductoSeleccionado] = useState(null);
	const abrirNuevo = () => {
    setProductoSeleccionado(null);   // sin datos = modo NUEVO
    setModalAbierto(true);
	};

	const abrirEditar = (producto) => {
		setProductoSeleccionado(producto); // con datos = modo EDITAR
		setModalAbierto(true);
	};

	const cerrarModal = () => {
		setModalAbierto(false);
		setProductoSeleccionado(null);
	};
	const handleGuardar = (producto) => {
    if (productoSeleccionado) {
      // EDITAR
		setProductos((prev) =>
			prev.map((p) => (p.id === producto.id ? producto : p))
		);
		} else {
		//NUEVO
		setProductos((prev) => [...prev, producto]);
		}
		//cerrarModal();
	};

	return (
		<div className="p-6 min-h-screen font-texto bg-azul-oscuro text-blanco">
			<ProductoModal
				abierto={modalAbierto}
				productoEditar={productoSeleccionado}
				onGuardar={handleGuardar}
				onCancelar={cerrarModal}
				categorias={categorias} //paso la categoria

			/>
			<Head onAgregarProducto={abrirNuevo}/>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

			{activeTab === "productos" ? (
				productos.length > 0 ? (
					<>
						<Tabla productos={productos} onEditar={abrirEditar} />
						<Paginacion />
					</>
				) : (
					<div className="flex flex-col items-center justify-center py-20 text-center">
						<p className="text-sin-presionar text-lg mb-4">
							No hay productos cargados en el sistema
						</p>
						<button onClick={abrirNuevo} className="bg-naranja hover:bg-hover-btn text-blanco px-4 py-2 rounded">
							+ Agregar Producto
						</button>
					</div>
				)
			) : activeTab === "categorias" ? (
				<div className="overflow-x-auto">
					<table className="min-w-full border border-azul">
						<thead className="bg-azul">
							<tr>
								<th className="px-4 py-2 text-left">Nombre</th>
								<th className="px-4 py-2 text-left">Descripción</th>
							</tr>
						</thead>
						<tbody>
							{categorias.map((c) => (
								<tr key={c.id} className="border-t border-azul hover:bg-azul">
									<td className="px-4 py-2">{c.nombre}</td>
									<td className="px-4 py-2">{c.descripcion}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center py-20 text-center">
					<p className="text-sin-presionar text-lg mb-4 ">
						No hay productos cargados en el sistema
					</p>
					<button className="bg-naranja hover:bg-hover-btn text-blanco px-4 py-2 rounded">
						+ Agregar Producto
					</button>
				</div>
			)}
		</div>
	);
}
