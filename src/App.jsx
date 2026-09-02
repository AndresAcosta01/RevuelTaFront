import './App.css'
import ProveedorAutenticacion from './context/ProveedorAutenticacion'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <ProveedorAutenticacion><AppRouter /></ProveedorAutenticacion>
  )
}

export default App