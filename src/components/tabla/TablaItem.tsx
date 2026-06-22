import { useState } from "react";

export default function TablaItem({ producto, onEditar, onEliminar }) {
	const [isOpen, setIsOpen] = useState(false);

	// Lógica de estilos según estado y stock
	let borderColor = "border-sin-presionar"; // default gris
	let dotColor = "bg-sin-presionar";
	let estadoText = producto.estado;

	if (producto.estado === "Disponible") {
		if (producto.stock < 10 && producto.stock > 0) {
			borderColor = "border-warning";
			dotColor = "bg-warning";
			estadoText = "Limitado";
		} else if (producto.stock <= 0) {
			borderColor = "border-naranja";
			dotColor = "bg-naranja";
			estadoText = "Agotado";
		} else {
			borderColor = "border-celeste";
			dotColor = "bg-celeste";
		}
	} else {
		borderColor = "border-rojo";
		dotColor = "bg-rojo";
	}

	return (
		<>
			{/* Fila principal */}
			<tr className="border-t border-azul hover:bg-azul">
				<td className="px-4 py-2 flex items-center gap-2">
					{producto.nombre}
					{/* Ícono acordeón solo en móviles */}
					<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={`w-5 h-5 transition-transform ${
								isOpen ? "rotate-180" : ""
							}`}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
				</td>

				{/* Columnas ocultas en móvil */}
				<td className="px-4 py-2 hidden md:table-cell">{producto.categoria}</td>
				<td className="px-4 py-2 font-numeros text-right hidden md:table-cell">
					${producto.precio.toFixed(2)}
				</td>
				<td className="px-4 py-2 font-numeros text-right hidden md:table-cell">
					{producto.stock ?? "-"}
				</td>

				{/* Estado */}
				<td className="px-4 py-2">
					<span
						className={`flex items-center gap-2 px-3 py-1 rounded-full border ${borderColor} bg-transparent text-sm font-semibold`}
					>
						<span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
						{estadoText}
					</span>
				</td>

				{/* Acciones */}
				<td className="px-4 py-2 flex flex-row gap-2 align-middle">
					<button
						onClick={() => onEditar(producto)}
						className="bg-naranja hover:bg-orange-500 text-blanco px-3 py-1 rounded text-sm hidden md:inline-block cursor-pointer select-none"
					>
						Editar
					</button>
					<button
						onClick={() => onEliminar(producto)}
						className="bg-rojo hover:bg-red-500 text-blanco px-3 py-1 rounded text-sm hidden md:inline-block cursor-pointer select-none"
					>
						Eliminar
					</button>

					{/* Iconos en móvil */}
					<button
						onClick={() => onEditar(producto)}
						className="w-12 h-12 flex items-center justify-center border-2 border-azul rounded-md hover:bg-azul/10 md:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 text-naranja"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
							/>
						</svg>
					</button>

					<button
						onClick={() => onEliminar(producto)}
						className="w-12 h-12 flex items-center justify-center border-2 border-azul rounded-md hover:bg-azul/10 md:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 text-rojo"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
							/>
						</svg>
					</button>
				</td>
			</tr>

			{/* Fila extra para acordeón en móvil */}
			{isOpen && (
				<tr className="md:hidden bg-azul hover:bg-celeste rounded">
					<td colSpan={6} className="px-4 py-2 text-sm text-naranja">
						<div className="flex flex-col gap-1">
							<p>
								<span className="font-bold">Categoría:</span>{" "}
								{producto.categoria}
							</p>
							<p>
								<span className="font-bold">Precio:</span> $
								{producto.precio.toFixed(2)}
							</p>
							<p>
								<span className="font-bold">Stock:</span>{" "}
								{producto.stock ?? "-"}
							</p>
						</div>
					</td>
				</tr>
			)}
		</>
	);
}
