export default function Head({onAgregarProducto }) {
	return (
		<div className="flex justify-between items-center mb-6">
			<h2 className="text-2xl font-titulo">Gestión de productos</h2>
			<button 
			onClick={onAgregarProducto}
			className="bg-celeste hover:bg-hover-btn text-blanco px-4 py-2 rounded"
			>
				Agregar Producto
			</button>
		</div>
	);
}
