import HeaderCell from "./HeadTabla";
import TablaItem from "./TablaItem";
import { useState } from "react";

export default function Tabla({ productos,onEditar  }) {
	const [sortedData, setSortedData] = useState(productos);

	const handleSort = (key, direction) => {
		if (!direction) {
			setSortedData(productos); // reset
			return;
		}
		const sorted = [...productos].sort((a, b) => {
			if (direction === "asc") return a[key] > b[key] ? 1 : -1;
			if (direction === "desc") return a[key] < b[key] ? 1 : -1;
			return 0;
		});
		setSortedData(sorted);
	};

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full border border-azul">
				<thead className="bg-azul">
					<tr>
						<HeaderCell
							label="Nombre del producto"
							sortKey="nombre"
							onSort={handleSort}
						/>
						<HeaderCell
							label="Categoría"
							sortKey="categoria"
							onSort={handleSort}
							className="hidden md:table-cell"
						/>
						<HeaderCell
							label="Precio"
							sortKey="precio"
							onSort={handleSort}
							className="hidden md:table-cell"
						/>
						<HeaderCell
							label="Stock"
							sortKey="stock"
							onSort={handleSort}
							className="hidden md:table-cell"
						/>
						<th className="px-4 py-2 text-left">Estado</th>
						<th className="px-4 py-2 text-left">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map((p) => (
						<TablaItem 
						key={p.id} 
						producto={p} 
						onEditar={onEditar}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}
