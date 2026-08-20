/**
 * MER-DC04 · Componente 2: SelectorEstadoCampanas
 * Alterna entre campañas activas y finalizadas, actualizando el listado
 * mostrado en la modal. No decide el filtrado; solo informa el cambio.
 */
const SelectorEstadoCampanas = ({ estadoSeleccionado, onCambiarEstado }) => {
  const opciones = ['Activas', 'Finalizadas'];

  return (
    <div className="d-flex gap-4 border-bottom mb-3" style={{ borderColor: 'var(--line)' }}>
      {opciones.map((opcion) => {
        const activo = opcion === estadoSeleccionado;
        return (
          <button
            key={opcion}
            type="button"
            onClick={() => onCambiarEstado(opcion)}
            className="btn btn-link text-decoration-none fw-semibold px-0 pb-2"
            style={{
              color: activo ? 'var(--ink)' : 'var(--line)',
              borderBottom: activo ? '2px solid var(--ink)' : '2px solid transparent',
              borderRadius: 0,
            }}
          >
            {opcion}
          </button>
        );
      })}
    </div>
  );
};

export default SelectorEstadoCampanas;
