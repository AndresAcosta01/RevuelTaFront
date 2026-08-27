import './App.css'
import InformacionProducto from './components/pages/catalogo/InformacionProducto'
import PaginaDetalleProducto from './pages/PaginaDetalleProducto'
import ProductosRelacionados from './components/pages/catalogo/ProductosRelacionados'
import SeccionesProducto from './components/pages/catalogo/SeccionesProducto'

function App() {
  return (
    <main className="app-shell">
      <section className="content-card">
        <InformacionProducto />
        <SeccionesProducto />
        <ProductosRelacionados />
        <PaginaDetalleProducto />


      </section>
    </main>
  )
}

export default App
