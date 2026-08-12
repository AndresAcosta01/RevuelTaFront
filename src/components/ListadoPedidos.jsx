const ListadoPedidos = ({ pedidos }) => {
    return (
        <div className="listado-pedidos">
            {pedidos.map((pedido) => (
                <div className="pedido-card" key={pedido.id}>

                    <section className="pedido-header">

                        <section className="pedido-info">
                            <h2>Pedido #{pedido.id}</h2>
                            <p className="pedido-fecha">{pedido.fecha}</p>
                        </section>

                        <span className="pedido-estado">{pedido.estado}</span>
                    </section>

                    {pedido.prendas.map((prenda) => (

                        <div className="prenda" key={prenda.id}>

                            <div className="prenda-info">
                                <h3>{prenda.nombre}</h3>
                                <p>1 prenda</p>
                            </div>

                            <span className="prenda-precio">
                                ${prenda.precio.toLocaleString("es-CO")}
                            </span>

                        </div>

                    ))}


                    <section className="pedido-acciones">
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