import { useState, useEffect } from "react";

const CATEGORIAS = [
  "Alimentos y conservas",
  "Bebidas artesanales",
  "Textiles y artesanías",
  "Mariscos y pesca",
  "Dulces y repostería",
  "Madera y tallados",
  "Cosmética natural",
  "Otros",
];

const ESTADO_INICIAL = {
  nombre: "",
  descripcion: "",
  categoria: "",
  precio: "",
  stock: "",
  estado: "disponible",
};

const ERRORES_INICIAL = {
  nombre: "",
  categoria: "",
  precio: "",
  stock: "",
};

export default function ProductoModal({
  abierto = true,
  productoEditar = null,
  onGuardar,
  onCancelar,
}) {
  const [form, setForm] = useState(ESTADO_INICIAL);
  const [errores, setErrores] = useState(ERRORES_INICIAL);
  const [guardado, setGuardado] = useState(false);

  useEffect(() => {
    if (productoEditar) {
      setForm({
        nombre: productoEditar.nombre || "",
        descripcion: productoEditar.descripcion || "",
        categoria: productoEditar.categoria || "",
        precio: productoEditar.precio?.toString() || "",
        stock: productoEditar.stock?.toString() || "",
        estado: productoEditar.estado === "Desactivado" ? "desactivado" : "disponible",
      });
    } else {
      setForm(ESTADO_INICIAL);
    }
    setErrores(ERRORES_INICIAL);
    setGuardado(false);
  }, [productoEditar, abierto]);

  if (!abierto) return null;

  function validar() {
    const nuevosErrores = { nombre: "", categoria: "", precio: "", stock: "" };
    let valido = true;

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre del producto es obligatorio.";
      valido = false;
    } else if (form.nombre.trim().length < 3) {
      nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres.";
      valido = false;
    }

    if (!form.categoria) {
      nuevosErrores.categoria = "Seleccioná una categoría.";
      valido = false;
    }

    if (!form.precio) {
      nuevosErrores.precio = "El precio es obligatorio.";
      valido = false;
    } else if (isNaN(Number(form.precio)) || Number(form.precio) <= 0) {
      nuevosErrores.precio = "El precio debe ser un numero positivo.";
      valido = false;
    }

    if (form.stock === "") {
      nuevosErrores.stock = "El stock es obligatorio.";
      valido = false;
    } else if (
      isNaN(Number(form.stock)) ||
      Number(form.stock) < 0 ||
      !Number.isInteger(Number(form.stock))
    ) {
      nuevosErrores.stock = "El stock debe ser un número positivo.";
      valido = false;
    }

    setErrores(nuevosErrores);
    return valido;
  }

  function handleChange(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
    if (errores[campo]) {
      setErrores((prev) => ({ ...prev, [campo]: "" }));
    }
  }

  function handleGuardar() {
    if (!validar()) return;

    const producto = {
      ...form,
      precio: parseFloat(form.precio),
      stock: parseInt(form.stock, 10),
      estado: form.estado === "disponible" ? "Disponible" : "Desactivado",
      id: productoEditar?.id || Date.now(),
    };

    setGuardado(true);
    setTimeout(() => {
      setGuardado(false);
      onGuardar?.(producto);
    }, 1500);
  }

  function handleCancelar() {
    setForm(ESTADO_INICIAL);
    setErrores(ERRORES_INICIAL);
    setGuardado(false);
    onCancelar?.();
  }

  const esEdicion = Boolean(productoEditar);
  const titulo = esEdicion ? "EDITAR PRODUCTO" : "NUEVO PRODUCTO";

  return (
    /* Overlay */
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && handleCancelar()}
    >
      {/* Modal wrapper — sin padding, para que header y body tengan colores distintos */}
      <div
        className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
      >

        {/* ── HEADER: azul-oscuro ── */}
        <div className="bg-azul-oscuro px-8 py-5">
          <h2
            id="modal-titulo"
            className="font-titulo text-blanco text-[28px] font-normal text-center tracking-widest"    
            >
            {titulo}
          </h2>
        </div>

        {/* ── CUERPO: azul ── */}
        <div className="bg-azul px-8 py-6 max-h-[75vh] overflow-y-auto">

          {/* Toast éxito */}
          {guardado && (
            <div
              className="flex items-center justify-center gap-2 mb-4 px-4 py-3 rounded-lg border border-celeste bg-celeste/20 text-celeste text-sm"
              role="status"
            >
              <span>✓</span>
              <span>Producto {esEdicion ? "actualizado" : "guardado"} con éxito</span>
            </div>
          )}

          {/* Nombre */}
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sin-presionar text-sm mb-1 font-medium">
              Nombre del Producto <span className="text-rojo">*</span>
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Ingrese el nombre del producto.."
              value={form.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              className={`w-full px-3 py-2 rounded-lg text-sm outline-none font-texto
                bg-blanco text-azul-oscuro placeholder:text-gray-400
                border transition-colors
                focus:border-celeste focus:ring-2 focus:ring-celeste/30
                ${errores.nombre ? "border-warning border-3" : "border-transparent"}`}
              aria-invalid={!!errores.nombre}
              aria-describedby={errores.nombre ? "error-nombre" : undefined}
            />
            {errores.nombre && (
              <p id="error-nombre" className="text-warning text-xs mt-1 flex items-center gap-1" role="alert">
                ⚠ {errores.nombre}
              </p>
            )}
          </div>

          {/* Descripción */}
          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-sin-presionar text-sm mb-1 font-medium">
              Descripcion{" "}
              <span className="text-sin-presionar/60 text-xs font-normal">(Opcional)</span>
            </label>
            <textarea
              id="descripcion"
              placeholder="Ingrese una descripción del producto..."
              value={form.descripcion}
              onChange={(e) => handleChange("descripcion", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg text-sm outline-none font-texto
                bg-blanco text-azul-oscuro placeholder:text-gray-400
                border border-transparent resize-none
                focus:border-celeste focus:ring-2 focus:ring-celeste/30 transition-colors"
            />
          </div>

          {/* Categoría */}
          <div className="mb-4">
            <label htmlFor="categoria" className="block text-sin-presionar text-sm mb-1 font-medium">
              Categoria <span className="text-rojo">*</span>
            </label>
            <select
              id="categoria"
              value={form.categoria}
              onChange={(e) => handleChange("categoria", e.target.value)}
              className={`w-full px-3 py-2 rounded-lg text-sm outline-none font-texto
                bg-blanco border transition-colors cursor-pointer
                focus:border-celeste focus:ring-2 focus:ring-celeste/30
                ${form.categoria ? "text-azul-oscuro" : "text-gray-400"}
                ${errores.categoria ? "border-warning border-3" : "border-transparent"}`}
              aria-invalid={!!errores.categoria}
              aria-describedby={errores.categoria ? "error-categoria" : undefined}
            >
              <option value="">-- Sin Categoria Seleccionada --</option>
              {CATEGORIAS.map((cat) => (
                <option key={cat} value={cat} className="text-azul-oscuro">
                  {cat}
                </option>
              ))}
            </select>
            {errores.categoria && (
              <p id="error-categoria" className="text-warning text-xs mt-1 flex items-center gap-1" role="alert">
                ⚠ {errores.categoria}
              </p>
            )}
          </div>

          {/* Precio + Stock */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="precio" className="block text-sin-presionar text-sm mb-1 font-medium">
                Precio <span className="text-rojo">*</span>
              </label>
              <input
                id="precio"
                type="number"
                min="0"
                step="0.01"
                placeholder="Ingrese precio.."
                value={form.precio}
                onChange={(e) => handleChange("precio", e.target.value)}
                className={`w-full px-3 py-2 rounded-lg text-sm outline-none font-numeros
                  bg-blanco text-azul-oscuro placeholder:text-gray-400
                  border transition-colors
                  focus:border-celeste focus:ring-2 focus:ring-celeste/30
                  ${errores.precio ? "border-rojo border-3 bg-red-50" : "border-transparent"}`}
                aria-invalid={!!errores.precio}
                aria-describedby={errores.precio ? "error-precio" : undefined}
              />
              {errores.precio && (
                <p id="error-precio" className="text-warning text-xs mt-1 flex items-center gap-1" role="alert">
                  ⚠ {errores.precio}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="stock" className="block text-sin-presionar text-sm mb-1 font-medium">
                Stock <span className="text-rojo">*</span>
              </label>
              <input
                id="stock"
                type="number"
                min="0"
                step="1"
                placeholder="Ingrese cantidad..."
                value={form.stock}
                onChange={(e) => handleChange("stock", e.target.value)}
                className={`w-full px-3 py-2 rounded-lg text-sm outline-none font-numeros
                  bg-blanco text-azul-oscuro placeholder:text-gray-400
                  border transition-colors
                  focus:border-celeste focus:ring-2 focus:ring-celeste/30
                  ${errores.stock ? "border-rojo border-3 bg-red-50" : "border-transparent"}`}
                aria-invalid={!!errores.stock}
                aria-describedby={errores.stock ? "error-stock" : undefined}
              />
              {errores.stock && (
                <p id="error-stock" className="text-warning text-xs mt-1 flex items-center gap-1" role="alert">
                  ⚠ {errores.stock}
                </p>
              )}
            </div>
          </div>

          {/* Toggle Estado */}
          <div className="mb-2">
            <p className="text-sin-presionar text-sm font-medium text-center mb-3">Estado</p>
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={() => handleChange("estado", "desactivado")}
                aria-pressed={form.estado === "desactivado"}
                className={`flex-1 max-w-[180px] py-2 px-2 rounded-full font-titulo font-bold text-xs tracking-wider  transition-all
                  ${form.estado === "desactivado"
                    ? "bg-rojo text-blanco"
                    : "bg-azul-oscuro text-sin-presionar/50 opacity-60"
                  }`}
              >   
                DESACTIVADO
              </button>
              <button
                type="button"
                onClick={() => handleChange("estado", "disponible")}
                aria-pressed={form.estado === "disponible"}
                className={`flex-1 max-w-[180px] py-2 px-2 rounded-full font-titulo font-bold text-xs tracking-wider  transition-all
                  ${form.estado === "disponible"
                    ? "bg-verde text-blanco"
                    : "bg-azul-oscuro text-sin-presionar/50 opacity-60"
                  }`}
              >
                DISPONIBLE
              </button>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-blanco/10 my-5" />

          {/* Footer */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCancelar}
              className="flex-1 py-2 rounded-lg text-sm font-semibold font-texto
                border border-celeste text-celeste bg-transparent
                hover:bg-celeste/15 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleGuardar}
              disabled={guardado}
              className="flex-1 py-2 rounded-lg text-sm font-semibold font-texto
                bg-celeste text-blanco border-none
                hover:bg-hover-btn disabled:opacity-60 transition-colors"
            >
              {guardado ? "Guardando..." : "Guardar"}
            </button>
          </div>

        </div>
        {/* fin cuerpo azul */}
      </div>
    </div>
  );
}
