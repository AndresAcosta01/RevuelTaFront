import { useState, useEffect } from 'react';
import InformacionProducto from './InformacionProducto';
import SeccionesProducto from './SeccionesProducto';
import ProductosRelacionados from './ProductosRelacionados';
import GaleriaProducto from './GaleriaProducto';
import { fetchProductById, fetchProducts } from '../services/productService';

const PaginaDetalleProducto = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducto = async (id) => {
    try {
      setLoading(true);
      const p = await fetchProductById(id);
      const relacionados = await fetchProducts(4);
      p.relacionados = relacionados.filter(r => r.id !== p.id).slice(0, 4);
      setProducto(p);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('No se pudo cargar el producto');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const path = window.location.pathname || '';
    const match = path.match(/\/producto\/(\d+)/);
    const id = match ? Number(match[1]) : 1;
    (async () => { await loadProducto(id); })();

    const onPop = () => {
      const m = window.location.pathname.match(/\/producto\/(\d+)/);
      const i = m ? Number(m[1]) : 1;
      (async () => { await loadProducto(i); })();
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleAgregarCarrito = (prod, talla, cantidad) => {
    console.log('Agregado al carrito:', { prod, talla, cantidad });
  };

  const handleProponerTrueque = () => {
    const usuarioAutenticado = true;
    if (usuarioAutenticado) alert('Abriendo modal de trueque del producto...');
    else alert('Abriendo modal de identificación (Login)...');
  };

  if (loading) return <div>Cargando producto...</div>;
  if (error) return <div>{error}</div>;
  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <div className="detalle-producto-container">
      <div className="detalle-grid">
        <GaleriaProducto key={producto.id} imagenes={producto.imagenes} />
        <InformacionProducto
          producto={producto}
          onAgregarCarrito={handleAgregarCarrito}
          onProponerTrueque={handleProponerTrueque}
        />
      </div>

      <SeccionesProducto infoSecciones={producto.secciones} producto={producto} />

      <ProductosRelacionados
        productos={producto.relacionados}
        onSeleccionarProducto={(id) => {
          window.history.pushState({ productoId: id }, '', `/producto/${id}`);
          loadProducto(id);
        }}
      />
    </div>
  );
};

export default PaginaDetalleProducto;
