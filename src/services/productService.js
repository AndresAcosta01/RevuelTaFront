import api from './api';

// Convierte una calificación de cualquier forma de API (número, string u objeto
// como { rate, count }) a un número seguro. Devuelve 0 si no se puede interpretar.
function normalizarCalificacion(rating) {
  if (rating === null || rating === undefined) return 0;
  const valor = typeof rating === 'object' ? rating.rate : rating;
  const numero = Number(valor);
  return Number.isFinite(numero) ? numero : 0;
}

// Mapea un producto desde la forma de la API al shape usado por la app.
// Si cambias de API, modifica o sustituye este mapeador.
export const mapApiProduct = (apiProd) => {
  if (!apiProd) return null;
  const imagenes = (Array.isArray(apiProd.images) ? apiProd.images : [])
    .concat(apiProd.image ? [apiProd.image] : [])
    .filter((url) => typeof url === 'string' && url.trim() !== '')
    .map((url, idx) => ({ id: `${apiProd.id}-${idx}`, url }));
  return {
    id: apiProd.id,
    marca: apiProd.category?.name || apiProd.category || '',
    nombre: apiProd.title || apiProd.name || '',
    vendedor: apiProd.user?.name || 'Revuelta',
    calificacion: normalizarCalificacion(apiProd.rating),
    precio: apiProd.price || 0,
    cantidadDisponible: apiProd.stock || 5,
    imagen: imagenes[0]?.url || '',
    imagenes,
    tallas: [
      { id: 'xs', nombre: 'XS' },
      { id: 's', nombre: 'S' },
      { id: 'm', nombre: 'M' },
      { id: 'l', nombre: 'L' }
    ],
    secciones: {
      descripcion: apiProd.description || '',
      detalles: `Estado: Buen estado\nMaterial: -\nMedidas: Según talla de elección\nMarca: ${apiProd.category?.name || apiProd.category || ''}\nPublicado: 2026`,
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
  const data = await api.get(`/products/${id}`).then((r) => r.data);
  return mapper(data);
};

/**
 * Obtiene una lista de productos y mapea cada elemento con `mapper`.
 */
export const fetchProducts = async (limit = 10, mapper = mapApiProduct) => {
  const data = await api.get(`/products?limit=${limit}`).then((r) => r.data);
  return Array.isArray(data) ? data.map(mapper) : [];
};

export default { fetchProductById, fetchProducts, mapApiProduct };
