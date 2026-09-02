import api from './apidos';

// Extrae todas las imágenes reales de un producto tal como viene de la API.
// Soporta tanto `images` (array, p.ej. Platzi) como `image` (string, p.ej. Fake Store),
// deduplicándolas y descartando vacías.
export function extraerImagenesProducto(apiProd) {
  if (!apiProd) return []

  const urlsUnicas = []
  const agregar = (url) => {
    if (typeof url === 'string' && url.trim() !== '' && !urlsUnicas.includes(url.trim())) {
      urlsUnicas.push(url.trim())
    }
  }

  ;(Array.isArray(apiProd.images) ? apiProd.images : []).forEach(agregar)
  agregar(apiProd.image)

  return urlsUnicas.map((url, idx) => ({ id: `${apiProd.id}-${idx}`, url }))
}

// Obtiene un producto por id y devuelve sus imágenes reales.
export const obtenerImagenesProducto = async (id) => {
  const data = await api.get(`/products/${id}`).then((r) => r.data)
  return extraerImagenesProducto(data)
}
