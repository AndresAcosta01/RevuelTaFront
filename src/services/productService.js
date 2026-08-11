import { get } from './api';

// Mapea un producto desde la forma de la API al shape usado por la app.
// Si cambias de API, modifica o sustituye este mapeador.
export const mapApiProduct = (apiProd) => {
  if (!apiProd) return null;
  return {
    id: apiProd.id,
    marca: apiProd.category?.name || '',
    nombre: apiProd.title || apiProd.name || '',
    vendedor: apiProd.user?.name || 'Revuelta',
    calificacion: apiProd.rating || '⭐⭐⭐⭐⭐',
    precio: apiProd.price || 0,
    cantidadDisponible: apiProd.stock || 5,
    imagenes: (apiProd.images || []).map((url, idx) => ({ id: `${apiProd.id}-${idx}`, url })),
    tallas: [
      { id: 'xs', nombre: 'XS' },
      { id: 's', nombre: 'S' },
      { id: 'm', nombre: 'M' },
      { id: 'l', nombre: 'L' }
    ],
    secciones: {
      descripcion: apiProd.description || '',
      detalles: `Estado: Buen estado\nMaterial: -\nMedidas: Según talla de elección\nMarca: ${apiProd.category?.name || ''}\nPublicado: 2026`,
      preguntas: ' No hay preguntas registradas.'
    },
    relacionados: []
  };
};

/**
 * Obtiene un producto por id y lo mapea usando `mapper` (por defecto `mapApiProduct`).
 * Pasar un `mapper` permite adaptar la transformación cuando cambies la API.
 */
export const fetchProductById = async (id, mapper = mapApiProduct) => {
  const data = await get(`/products/${id}`);
  return mapper(data);
};

/**
 * Obtiene una lista de productos y mapea cada elemento con `mapper`.
 */
export const fetchProducts = async (limit = 10, mapper = mapApiProduct) => {
  const data = await get(`/products?limit=${limit}`);
  return Array.isArray(data) ? data.map(mapper) : [];
};

export default { fetchProductById, fetchProducts, mapApiProduct };
