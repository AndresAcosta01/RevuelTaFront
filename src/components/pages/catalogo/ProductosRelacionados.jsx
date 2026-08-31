import styles from '../../../pages/DetalleProducto.module.css';

const ProductosRelacionados = ({ productos, onSeleccionarProducto }) => {
  if (!productos) return null;

  return (
    <div className={styles.relacionadosContainer}>
      <h3 className={styles.relacionadosTitulo}>TAMBIÉN TE PODRÍA INTERESAR</h3>
      <div className={styles.relacionadosGrid}>
        {productos.map((prod) => {
          const imageUrl = prod.imagen || prod.imagenes?.[0]?.url || '/placeholder.png';
          return (
            <div 
              key={prod.id} 
              className={styles.tarjetaProducto}
              onClick={() => onSeleccionarProducto(prod.id)}
            >
              <img src={imageUrl} alt={prod.nombre} className={styles.tarjetaImg} />
              <div className={styles.tarjetaBody}>
                <h4 className={styles.tarjetaNombre}>{prod.nombre}</h4>
                <span className={styles.tarjetaPrecio}>${(prod.precio || 0).toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductosRelacionados;