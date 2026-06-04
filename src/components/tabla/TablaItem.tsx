export default function TablaItem({ producto }) {
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
		// Desactivado u otros estados
		borderColor = "border-rojo";
		dotColor = "bg-rojo";
	}

	return (
		<tr className="border-t border-azul hover:bg-azul">
			<td className="px-4 py-2">{producto.nombre}</td>
			<td className="px-4 py-2">{producto.categoria}</td>
			<td className="px-4 py-2 font-numeros text-right">
				${producto.precio.toFixed(2)}
			</td>
			<td className="px-4 py-2 font-numeros text-right">
				{producto.stock ?? "-"}
			</td>
			<td className="px-4 py-2">
				<span
					className={`flex items-center gap-2 px-3 py-1 rounded-full border ${borderColor} bg-transparent text-sm font-semibold`}
				>
					<span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
					{estadoText}
				</span>
			</td>
			<td className="px-4 py-2">
				<button className="bg-naranja hover:bg-hover-btn text-blanco px-3 py-1 rounded mr-2 text-sm">
					Editar
				</button>
				<button className="bg-rojo hover:bg-red-800 text-blanco px-3 py-1 rounded text-sm">
					Eliminar
				</button>
			</td>
		</tr>
	);
}
