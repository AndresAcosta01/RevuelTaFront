import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConnectedUserProvider } from './context/ConnectedUser.context'
import { ProveedorAutenticacion } from './context/ProveedorAutenticacion'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ConnectedUserProvider>
        <ProveedorAutenticacion>
          <App />
        </ProveedorAutenticacion>
      </ConnectedUserProvider>
    </BrowserRouter>
  </StrictMode>,
)
