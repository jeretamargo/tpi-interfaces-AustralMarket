export default function Paginacion() {
	return (
		<div className="flex justify-center mt-6 space-x-2">
			<button className="px-3 py-1 text-naranja bg-azul-oscuro hover:bg-celeste rounded">
				‹ Anterior
			</button>
			<button className="px-3 py-1 text-naranja bg-azul-oscuro hover:bg-hover-btn rounded border border-naranja">
				1
			</button>
			<button className="px-3 py-1 text-naranja bg-azul-oscuro hover:bg-celeste rounded ">
				2
			</button>
			<button className="px-3 py-1 text-naranja bg-azul-oscuro hover:bg-celeste rounded">
				3
			</button>
			<button className="px-3 py-1 text-naranja bg-azul-oscuro hover:bg-celeste rounded ">
				Siguiente ›
			</button>
		</div>
	);
}
