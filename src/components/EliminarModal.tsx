interface EliminarModalProps {
    abierto: boolean;
    nombreProducto: string;
    onConfirmar: () => void;
    onCancelar: () => void;
}

export default function EliminarModal({
    abierto,
    nombreProducto,
    onConfirmar,
    onCancelar,
    }: EliminarModalProps) {
    if (!abierto) return null;

    return (
    <div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        onClick={(e) => e.target === e.currentTarget && onCancelar()}
    >
        <div
        className="rounded-2xl overflow-hidden shadow-2xl flex flex-col w-full max-w-[350px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="eliminar-titulo"
        >
        {/* ── HEADER: azul-oscuro ── */}
        <div className="bg-azul-oscuro px-8 py-4">
            <h2
            id="eliminar-titulo"
            className="font-titulo text-blanco text-[22px] font-normal text-center tracking-widest"
            >
            ELIMINAR PRODUCTO
            </h2>
        </div>

        {/* ── CUERPO: azul ── */}
        <div className="bg-azul px-8 py-10 flex items-center justify-center">
            <p className="text-blanco text-center text-base font-texto">
            ¿Está seguro de querer borrar{" "}
            <br />
            <span className="font-bold">{nombreProducto}</span>?
            </p>
        </div>

        {/* ── FOOTER: azul-oscuro ── */}
        <div className="bg-azul-oscuro px-8 py-4 flex gap-3 rounded-b-2xl">
            <button
            type="button"
            onClick={onCancelar}
            className="flex-1 py-2 rounded-lg text-sm font-semibold font-texto
                border-2 border-celeste text-celeste bg-transparent
                hover:bg-celeste hover:text-blanco transition-colors"
            >
            Cancelar
            </button>
            <button
            type="button"
            onClick={onConfirmar}
            className="flex-1 py-2 rounded-lg text-sm font-semibold font-texto
            border-2 border-rojo text-rojo bg-transparent
            hover:bg-rojo hover:text-blanco transition-colors"
            >
            Borrar
            </button>
        </div>
        </div>
    </div>
    );
}
