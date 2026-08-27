import { Link, useParams } from 'react-router-dom'
import { RUTAS } from '../../constants/rutas'
import styles from './DetalleProducto.module.css'

function DetalleProducto() {
  const { id } = useParams()

  return (
    <div className={styles.detalleProducto}>
      <h1>Detalle del producto</h1>
      <p>Producto seleccionado: {id}</p>
      <Link to={RUTAS.CATALOGO}>Volver al catálogo</Link>
    </div>
  )
}

export default DetalleProducto