export default function Tabs({ activeTab, setActiveTab }) {
	return (
		<div className="flex gap-4 mb-6 border-b border-azul cursor-pointer select-none">
			<button
				onClick={() => setActiveTab("productos")}
				className={`px-4 py-2 font-titulo ${
					activeTab === "productos"
						? "text-naranja border-b-2 border-naranja"
						: "text-naranja hover:text-naranja"
				}`}
			>
				Productos
			</button>
			<button
				onClick={() => setActiveTab("categorias")}
				className={`px-4 py-2 font-titulo cursor-pointer select-none ${
					activeTab === "categorias"
						? "text-naranja border-b-2 border-naranja"
						: "text-naranja hover:text-naranja"
				}`}
			>
				Categorías
			</button>
			<button
				onClick={() => setActiveTab("vacio")}
				className={`px-4 py-2 font-titulo cursor-pointer select-none ${
					activeTab === "vacio"
						? "text-naranja border-b-2 border-naranja"
						: "text-naranja hover:text-naranja"
				}`}
			>
				-
			</button>
		</div>
	);
}
