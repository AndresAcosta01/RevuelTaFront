import { Routes, Route, Navigate } from 'react-router-dom'
import Carrito from '../pages/Carrito'
import MisTrueques from '../pages/MisTrueques'
import Registro from '../pages/Registro'
import InicioSesion from '../pages/InicioSesion'
import Profile from '../pages/community/Profile'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/carrito" replace />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/mis-trueques" element={<MisTrueques />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<InicioSesion />} />
      <Route path="/iniciar-sesion" element={<InicioSesion />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/perfil/:id" element={<Profile />} />
      <Route path="*" element={<Navigate to="/carrito" replace />} />
    </Routes>
  )
}
