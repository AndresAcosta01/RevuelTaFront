import './App.css'
import InformacionProducto from './components/InformacionProducto'
import PaginaDetalleProducto from './components/PaginaDetalleProducto'
import ProductosRelacionados from './components/ProductosRelacionados'
import SeccionesProducto from './components/SeccionesProducto'

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
