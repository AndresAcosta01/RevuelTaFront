import { Bell, Plus, ShoppingCart, UserRound } from "lucide-react"
import styles from "./AccionesHeader.module.css"

const AccionesHeader = () => {
    return (
        <div className={styles.accionesHeader}>
            <button className={styles.botonIcono}>
                <Bell />
                <span className={styles.indicadorNotificacion}></span>
            </button>
            <button className={styles.botonIcono}>
                <ShoppingCart />
                <span className={styles.contadorCarrito}></span>
            </button>
            <button className={styles.botonIcono}>
                <UserRound />
            </button>
            <button className={styles.botonPublicar}>
                <Plus className={styles.iconoBotonPublicar} />
                Publicar prenda
            </button>
        </div>
    )
}

export default AccionesHeader