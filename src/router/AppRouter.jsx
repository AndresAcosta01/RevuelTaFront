import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { RUTAS } from "../constants/rutas"
import PerfilPrueba from "../pages/_pruebas/PerfilPrueba"
import LandingPage from "../pages/_pruebas/LandingPagePruebas"
import PedidosPrueba from "../pages/_pruebas/PedidosPrueba"
import TruequesPrueba from "../pages/_pruebas/TruequesPrueba"
import CampanasDescuentos from "../pages/_pruebas/CampanasDescuentosPruebas"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={RUTAS.LANDING_PAGE} element={<LandingPage />}/>
                    <Route path={RUTAS.PERFIL} element={<PerfilPrueba />}/>
                    <Route path={RUTAS.PEDIDOS} element={<PedidosPrueba />}/>
                    <Route path={RUTAS.TRUEQUES} element={<TruequesPrueba />}/>
                    <Route path={RUTAS.CAMPANAS_DESCUENTOS} element={<CampanasDescuentos />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter