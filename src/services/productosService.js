import axios from 'axios'
import { productos } from '../data/productos.js'
import { filtrosCatalogo } from '../data/filtros.js'
import { imagenPlaceholder } from '../utils/imagenes.js'

const POR_PAGINA = 9

const TALLAS = ['XS', 'S', 'M', 'L', 'XL']
const COLORES = ['Negro', 'Blanco', 'Azul', 'Rojo', 'Verde', 'Beige', 'Rosa', 'Amarillo']
const MARCAS = ['Levis', 'Zara', 'H&M', 'Adidas', 'Nike', 'Stradivarius']
const ESTADOS = ['Nuevo', 'Excelente', 'Muy bueno', 'Bueno']
const GENEROS = ['Mujer', 'Hombre', 'Niño', 'Unisex']
const VENDEDORES = [
  'Laura Gómez',
  'Carlos Ruiz',
  'Andrea Torres',
  'Miguel Herrera',
  'Valentina Rojas',
  'Andrés Pineda',
]
const CATEGORIAS = [
  'Chaquetas',
  'Vestidos',
  'Pantalones',
  'Blusas',
  'Camisas',
  'Faldas',
  'Zapatos',
  'Accesorios',
]

const MAPA_CATEGORIA = {
  shoe: 'Zapatos',
  clothes: 'Chaquetas',
  dress: 'Vestidos',
  pant: 'Pantalones',
  shirt: 'Camisas',
  blouse: 'Blusas',
  skirt: 'Faldas',
  cap: 'Accesorios',
  hat: 'Accesorios',
  glass: 'Accesorios',
  watch: 'Accesorios',
  bag: 'Accesorios',
  jewel: 'Accesorios',
  sock: 'Accesorios',
}

const elegir = (arreglo, id, semilla) => arreglo[(id * 7 + semilla) % arreglo.length]

function categoriaDeApi(nombre) {
  const nombreMin = String(nombre || '').toLowerCase()
  for (const [clave, categoria] of Object.entries(MAPA_CATEGORIA)) {
    if (nombreMin.includes(clave)) return categoria
  }
  return elegir(CATEGORIAS, nombreMin.length, 3)
}

function mapearProductoApi(api) {
  const id = api.id
  const imagenes = (api.images || []).filter(Boolean)
  const tallas = [
    elegir(TALLAS, id, 2),
    elegir(TALLAS, id, 3),
  ].filter((talla, indice, arreglo) => arreglo.indexOf(talla) === indice)
  return {
    id,
    nombre: api.title,
    marca: elegir(MARCAS, id, 1),
    categoria: categoriaDeApi(api.category?.name),
    tallas,
    color: elegir(COLORES, id, 4),
    precio: Math.round((api.price || 0) * 4000),
    estado: elegir(ESTADOS, id, 5),
    disponiblePara: elegir(GENEROS, id, 6),
    vendedor: elegir(VENDEDORES, id, 7),
    calificacion: Math.round((4 + (id % 9) / 10) * 10) / 10,
    verificado: id % 3 === 0,
    fechaPublicacion: api.creationAt || new Date().toISOString(),
    cantidadDisponible: 1 + (id % 9),
    imagen: imagenes[0] || imagenPlaceholder(api.title, id),
    imagenes,
  }
}

let productosApiCache = null

async function obtenerProductosApi() {
  if (productosApiCache) return productosApiCache
  const respuesta = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
    params: { offset: 0, limit: 200 },
  })
  productosApiCache = respuesta.data.map(mapearProductoApi)
  return productosApiCache
}

const campoPorFiltro = {
  categoria: 'categoria',
  talla: 'tallas',
  color: 'color',
  marca: 'marca',
  precio: 'precio',
  estado: 'estado',
  disponiblePara: 'disponiblePara',
  vendedor: 'vendedor',
}

function coincideFiltro(producto, filtroId, opcion) {
  const campo = campoPorFiltro[filtroId]
  if (filtroId === 'precio') {
    return producto.precio >= opcion.min && producto.precio <= opcion.max
  }
  const valor = producto[campo]
  if (Array.isArray(valor)) {
    return valor.some(
      (v) => String(v).toLowerCase() === String(opcion.nombre).toLowerCase(),
    )
  }
  return String(valor).toLowerCase() === String(opcion.nombre).toLowerCase()
}

function filtrarProductos(productosLista, filtrosActivos) {
  return productosLista.filter((producto) =>
    Object.entries(filtrosActivos).every(([filtroId, opcionIds]) => {
      if (!opcionIds || opcionIds.length === 0) return true
      const filtro = filtrosCatalogo.find((f) => f.id === filtroId)
      return opcionIds.some((opcionId) => {
        const opcion = filtro.opciones.find((o) => o.id === opcionId)
        return opcion && coincideFiltro(producto, filtroId, opcion)
      })
    }),
  )
}

function ordenarProductos(productosLista, orden) {
  const copia = [...productosLista]
  switch (orden) {
    case 'precio_menor_mayor':
      return copia.sort((a, b) => a.precio - b.precio)
    case 'precio_mayor_menor':
      return copia.sort((a, b) => b.precio - a.precio)
    case 'mejor_calificados':
      return copia.sort((a, b) => b.calificacion - a.calificacion)
    case 'mas_recientes':
    default:
      return copia.sort(
        (a, b) => new Date(b.fechaPublicacion) - new Date(a.fechaPublicacion),
      )
  }
}

function paginarProductos(productosLista, pagina) {
  const total = productosLista.length
  const totalPaginas = Math.max(1, Math.ceil(total / POR_PAGINA))
  const inicio = (pagina - 1) * POR_PAGINA
  return {
    productos: productosLista.slice(inicio, inicio + POR_PAGINA),
    totalPaginas,
    total,
    pagina,
  }
}

function obtenerProductosMock({ filtrosActivos, orden, pagina }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtrados = filtrarProductos(productos, filtrosActivos)
      const ordenados = ordenarProductos(filtrados, orden)
      resolve(paginarProductos(ordenados, pagina))
    }, 200)
  })
}

async function obtenerProductosHttp({ filtrosActivos, orden, pagina }) {
  const productosApi = await obtenerProductosApi()
  const filtrados = filtrarProductos(productosApi, filtrosActivos)
  const ordenados = ordenarProductos(filtrados, orden)
  return paginarProductos(ordenados, pagina)
}

export async function obtenerProductos({ filtrosActivos = {}, orden = 'mas_recientes', pagina = 1 }) {
  if (import.meta.env.VITE_DATA_SOURCE === 'http') {
    try {
      return await obtenerProductosHttp({ filtrosActivos, orden, pagina })
    } catch {
      return obtenerProductosMock({ filtrosActivos, orden, pagina })
    }
  }
  return obtenerProductosMock({ filtrosActivos, orden, pagina })
}
