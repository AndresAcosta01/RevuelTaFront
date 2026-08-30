import styles from "./MisPedidos.module.css";

const ListadoPedidos = ({ pedidos }) => {

    const mostrarSaldoTrueque = (saldo) => {
        const saldoNumerico = Number(saldo)

        if (saldo > 0) {
            return `Debes pagar: $${saldo.toLocaleString("es-CO")}`
        }
        if (saldo < 0) {
            return `Recibes: $${Math.abs(saldo).toLocaleString("es-CO")}`
        }

        return "No debes pagar ni recibir dinero"
    }

    return (
        <div className={styles.listadoPedidos}>
            {pedidos.map((pedido) => (
                <div className={styles.pedidoCard} key={pedido.id}>

                    <section className={styles.pedidoHeader}>

                        <section className={styles.pedidoInfo}>
                            <h2>Pedido #{pedido.id}</h2>
                            <p className={styles.pedidoFecha}>{pedido.fecha}</p>
                        </section>

                        <span className={styles.pedidoEstado}>{pedido.estado}</span>
                    </section>

                    {pedido.tipoOperacion === "compra" && (
                        <div className={styles.pedidoCompra}>
                            <p>{pedido.prendas.length} {pedido.prendas.length === 1 ? "prenda" : "prendas"}</p>
                            {pedido.prendas.map((prenda) => (

                                <div className={styles.prenda} key={prenda.id}>

                                    <div className={styles.prendaInfo}>
                                        <h3>{prenda.nombre}</h3>
                                        
                                    </div>

                                    <span className={styles.prendaPrecio}>
                                        ${prenda.precio.toLocaleString("es-CO")}
                                    </span>

                                </div>

                            ))}
                        </div>
                    )}

                    {pedido.tipoOperacion === "trueque" && (
                        <div className={styles.pedidoTrueque}>
                            <div className={styles.prenda}>
                                <section className={styles.prendaInfo}><h3>{pedido.prendas[0].nombre}</h3></section>
                            </div>

                            <div className={styles.truequeIndicador}>↕</div>

                            <div className={styles.prenda}>
                                <section className={styles.prendaInfo}><h3>{pedido.prendas[1].nombre}</h3></section>
                            </div>

                            <div className={styles.saldoTrueque}>{mostrarSaldoTrueque(pedido.saldoTrueque)}</div>

                        </div>
                    )}


                    <section className={styles.pedidoAcciones}>
                        {pedido.estado === "En preparación" && (
                            <>
                                <button>Rastrear envío</button>
                                <button>Ver detalles</button>
                            </>
                        )}

                        {pedido.estado === "Enviado" && (
                            <>
                                <button>Rastrear envío</button>
                                <button>Ver detalles</button>
                            </>
                        )}

                        {pedido.estado === "Entregado" && (
                            <>
                                <button>Ver detalles</button>
                                {!pedido.tieneResena ? (<button>Dejar reseña</button>) : <button>Ver mi reseña</button>}

                                <button>Volver a comprar</button>
                            </>
                        )}

                        {pedido.estado === "Cancelado" && (
                            <>
                                {pedido.motivoCancelacion && (<p>Motivo: {pedido.motivoCancelacion}</p>)}
                                {pedido.estadoReembolso && (<p>Reembolso: {pedido.estadoReembolso}</p>)}
                                <button>Ver detalles</button>
                            </>
                        )}
                    </section>

                </div>
            ))}
        </div>
    );
}

export default ListadoPedidos