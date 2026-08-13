const VentanaModalConfirmarCanje = ({ oferta, saldoActual, onCerrar, onCanjeExitoso }) => {
  if (!oferta) return null;

  const costo = Number(oferta.puntos ?? 0);
  const puedeCanjear = saldoActual >= costo;

  const confirmar = () => {
    if (!puedeCanjear) return;
    onCanjeExitoso?.(costo);
    onCerrar?.();
  };

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold" style={{ color: 'var(--ink)' }}>
              Confirmar canje
            </h5>
            <button type="button" className="btn-close" aria-label="Cerrar" onClick={onCerrar} />
          </div>

          <div className="modal-body">
            <p className="mb-2">
              Estás a punto de canjear <strong>{oferta.nombre ?? 'esta oferta'}</strong>.
            </p>
            <p className="mb-3 text-muted">
              Costo: <strong>{costo} puntos</strong>
            </p>

            {puedeCanjear ? (
              <p className="mb-0 text-success fw-semibold">Tienes saldo suficiente para continuar.</p>
            ) : (
              <p className="mb-0 text-danger fw-semibold">No tienes puntos suficientes para este canje.</p>
            )}
          </div>

          <div className="modal-footer border-0">
            <button type="button" className="btn btn-outline-secondary" onClick={onCerrar}>
              Cancelar
            </button>
            <button
              type="button"
              className="btn fw-bold"
              style={{ backgroundColor: 'var(--pine)', color: '#fff' }}
              onClick={confirmar}
              disabled={!puedeCanjear}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentanaModalConfirmarCanje;
