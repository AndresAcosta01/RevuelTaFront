import { useState } from 'react';
import styles from '../../../pages/DetalleProducto.module.css';

const GaleriaProducto = ({ imagenes = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imagenActiva = imagenes[activeIndex] || imagenes[0] || null;

  return (
    <div className={styles.galeriaContainer}>
      <div className={styles.imagenPrincipalWrapper}>
        <img
          src={imagenActiva?.url || ''}
          alt="Producto principal"
          className={styles.imagenPrincipal}
        />
      </div>
      <div className={styles.miniaturasContainer}>
        {imagenes.map((imagen, idx) => (
          <button
            key={imagen.id}
            onClick={() => setActiveIndex(idx)}
            className={`${styles.miniaturaBtn} ${imagenActiva?.id === imagen.id ? styles.activa : ''}`}
          >
            <img src={imagen.url} alt="miniatura" className={styles.miniaturaImg} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GaleriaProducto;
