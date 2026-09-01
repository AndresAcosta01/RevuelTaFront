import api from './api';

// Convierte una calificación de cualquier forma de API (número, string u objeto
// como { rate, count }) a un número seguro. Devuelve 0 si no se puede interpretar.
function normalizarCalificacion(rating) {
  if (rating === null || rating === undefined) return 0;
  const valor = typeof rating === 'object' ? rating.rate : rating;
  const numero = Number(valor);
  return Number.isFinite(numero) ? numero : 0;
}

const COLORES_PLACEHOLDER = ['#4a6fa5', '#d4739b', '#c2a488', '#3f7d58', '#22262b', '#8a5a3b']

// Crea un placeholder para completar la galería cuando la API solo devuelve una imagen.
function placeholderGaleria(texto, indice) {
  const color = COLORES_PLACEHOLDER[Math.abs(indice) % COLORES_PLACEHOLDER.length]
  const etiqueta = encodeURIComponent(`Vista ${indice + 1} - ${texto}`)
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><rect width="600" height="800" fill="${color}"/><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${etiqueta}</text></svg>`,
  )}`
}

// Mapea un producto desde la forma de la API al shape usado por la app.
// Si cambias de API, modifica o sustituye este mapeador.
export const mapApiProduct = (apiProd) => {
  if (!apiProd) return null;
  const urlsUnicas = []
  const agregar = (url) => {
    if (typeof url === 'string' && url.trim() !== '' && !urlsUnicas.includes(url.trim())) {
      urlsUnicas.push(url.trim())
    }
  }
  ;(Array.isArray(apiProd.images) ? apiProd.images : []).forEach(agregar)
  agregar(apiProd.image)

  // Si la API solo trajo una imagen (p.ej. Fake Store), generamos vistas
  // complementarias para que la galería muestre varias imágenes debajo.
  if (urlsUnicas.length === 1) {
    const original = urlsUnicas[0]
    for (let i = 1; i < 5; i += 1) urlsUnicas.push(placeholderGaleria(apiProd.title, i))
    urlsUnicas.unshift(original)
  } else if (urlsUnicas.length === 0) {
    for (let i = 0; i < 5; i += 1) urlsUnicas.push(placeholderGaleria(apiProd.title, i))
  }

  const imagenes = urlsUnicas.map((url, idx) => ({ id: `${apiProd.id}-${idx}`, url }));
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
