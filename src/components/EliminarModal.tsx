import { useState } from "react";

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
    const [eliminadoExito, setEliminadoExito] = useState(false); // ← siempre antes del return

    if (!abierto) return null;

    const handleConfirmar = () => {
        setEliminadoExito(true);
        setTimeout(() => {
            setEliminadoExito(false);
            onConfirmar();
        }, 1500);
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={(e) => e.target === e.currentTarget && onCancelar()}
        >
            <div
                className="rounded-2xl overflow-hidden shadow-2xl flex flex-col w-full max-w-[351px]"
                style={{ minHeight: "289px" }}
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

                {eliminadoExito ? (
  /* ── PANTALLA DE ÉXITO ── */
  <>
    <div className="bg-azul flex flex-col items-center justify-center flex-1 gap-4 py-6">
      <p className="font-texto text-blanco text-base">
        Producto borrado con éxito
      </p>
      <div className="w-14 h-14 rounded-full bg-verde flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="#022036"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
    </div>
    {/* Footer vacío para mantener la altura */}
    <div className="bg-azul-oscuro px-8 py-4 rounded-b-2xl" style={{ height: "64px" }} />
  </>
) : (
                    <>
                        {/* ── CUERPO: azul ── */}
                        <div className="bg-azul px-8 py-10 flex items-center justify-center flex-1">
                            <p className="text-blanco text-center text-base font-texto">
                                ¿Está seguro de querer borrar
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
                    border-2 border-celeste bg-celeste text-blanco
                    hover:bg-transparent hover:text-celeste transition-colors
                    cursor-pointer select-none"
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                onClick={handleConfirmar}
                                className="flex-1 py-2 rounded-lg text-sm font-semibold font-texto
                    border-2 border-rojo bg-rojo text-blanco
                    hover:bg-transparent hover:text-rojo transition-colors
                    cursor-pointer select-none"
                            >
                                Borrar
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
