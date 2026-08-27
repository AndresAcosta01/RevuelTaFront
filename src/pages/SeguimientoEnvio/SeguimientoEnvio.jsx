import { useEffect, useState } from "react"
import styles from "./SeguimientoEnvio.module.css"
import { obtenerSeguimientoEnvio } from "../../services/seguimientoEnvioServicio";
import { BsArrowLeftRight } from "react-icons/bs";
import { ArrowLeftRight } from "lucide-react";
import BloqueSeguimientoEntrega from "../../components/pages/SeguimientoEnvio/BloqueSeguimientoEntrega";

const SeguimientoEnvio = () => {
    const [seguimiento, setSeguimiento] = useState({})
    useEffect(() => {

        const cargarSeguimiento = async () => {
            const datos = await obtenerSeguimientoEnvio();
            setSeguimiento(datos);
        }

        cargarSeguimiento();

    }, []);
    return (
        <div className={styles.contenedorPrincipal}>
            <h1 className={styles.tituloSeguimientoEnvio}>Seguimiento de Envío</h1>
            <p className={styles.referenciaPedido}>
                <span>Pedido #{seguimiento.pedidoId}</span>
                <span>·</span>
                {seguimiento.prendas && (
                    seguimiento.tipoOperacion === "trueque"
                        ? <>{seguimiento.prendas[0].nombre} <ArrowLeftRight /> {seguimiento.prendas[1].nombre}</>
                        : seguimiento.prendas[0].nombre
                )}
            </p>
            {seguimiento.entregas && seguimiento.entregas.map((entrega) => (
                <BloqueSeguimientoEntrega key={entrega.id} entrega={entrega}/>
            ))}
        </div>
    )
}

export default SeguimientoEnvio