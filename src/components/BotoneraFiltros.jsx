import { useState } from 'react';
import './BotoneraFiltros.css';

const BotoneraFiltros= () => {
    
    const [filtroActivo, setFiltroActivo] = useState('Todas');

    const opcionesFiltros = ["Todas", "Categoría", "Talla", "Estado", "Precio"];

    return (
    <div className="botonera-filtros">
      {opcionesFiltros.map((filtro) => {
        const isActive = filtroActivo === filtro;

        return (
          <button
            key={filtro}
            onClick={() => setFiltroActivo(filtro)}
            className={`botonera-filtros__boton ${isActive ? 'is-active' : ''}`}
          >
            {filtro}
          </button>
        );
      })}
    </div>
  );
};

export default BotoneraFiltros;
