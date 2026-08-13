import { Search } from "lucide-react"
import styles from "./BarraBusqueda.module.css"

const BarraBusqueda = () => {
    return (
        <div className={styles.contenedorBusqueda}>
            <Search className={styles.iconoBusqueda}/>
            <input className={styles.campoBusqueda} type="text" placeholder="Buscar prendas, marcas..."/>
        </div>
    )
}

export default BarraBusqueda