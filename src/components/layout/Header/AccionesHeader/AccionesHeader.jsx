import { Bell, Plus, ShoppingCart, UserRound } from "lucide-react"
import styles from "./AccionesHeader.module.css"
import PanelIdentificacion from "./PanelIdentificacion/PanelIdentificacion"
import PanelNotificaciones from "./PanelNotificaciones/PanelNotificaciones"
import PanelPerfil from "./PanelPerfil/PanelPerfil"
import { obtenerNotificaciones } from "../../../../services/notificacionesService"
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { RUTAS } from "../../../../constants/rutas"

const AccionesHeader = () => {
    const [panelActivo, setPanelActivo] = useState(null);
    const estaAutenticado = false;
    const notificaciones = obtenerNotificaciones();
    const contenedorAcciones = useRef(null)
    const cantidadCarrito = 10;
    const contadorCarrito = cantidadCarrito > 10 ? "10+" : cantidadCarrito

    function alternarMenuPerfil() {
        setPanelActivo(
            panelActivo === "perfil" ? null : "perfil"
        )
    }
    function alternarNotificaciones() {
        setPanelActivo(
            panelActivo === "notificaciones" ? null : "notificaciones"
        )
    }
    function manejarClickFuera(event) {
        if (
            panelActivo !== null &&
            contenedorAcciones.current &&
            !contenedorAcciones.current.contains(event.target)
        ) {
            setPanelActivo(null)
        }
    }
    const cerrarPanelActivo = () => {
        setPanelActivo(null)
    }

    useEffect(() => {
        document.addEventListener("mousedown", manejarClickFuera)

        return () => {
            document.removeEventListener("mousedown", manejarClickFuera)
        }
    }, [panelActivo])

    return (
        <div className={styles.accionesHeader} ref={contenedorAcciones}>
            <button className={styles.botonIcono} onClick={alternarNotificaciones}>
                <Bell />
                {notificaciones.length > 0 && (
                    <span className={styles.indicadorNotificacion}></span>
                )}
            </button>
            {estaAutenticado ? (
                <NavLink to={RUTAS.CARRITO} className={styles.botonIcono} onClick={cerrarPanelActivo}>
                    <ShoppingCart />
                    {cantidadCarrito > 0 && (
                        <span className={styles.contadorCarrito}>
                            {contadorCarrito}
                        </span>
                    )}
                </NavLink>
            ) : (
                <button className={styles.botonIcono} onClick={() =>
                    setPanelActivo(panelActivo === "carrito" ? null : "carrito")}>
                    <ShoppingCart />
                    {cantidadCarrito > 0 && (
                        <span className={styles.contadorCarrito}>
                            {contadorCarrito}
                        </span>
                    )}
                </button>
            )}
            <button className={styles.botonIcono} onClick={alternarMenuPerfil}>
                <UserRound />
            </button>
            {estaAutenticado ? (
                <NavLink to={RUTAS.PUBLICAR_PRENDA} className={styles.botonPublicar} onClick={cerrarPanelActivo}>
                    <Plus className={styles.iconoBotonPublicar} />
                    Publicar prenda
                </NavLink>
            ) : (
                <button className={styles.botonPublicar} onClick={() =>
                    setPanelActivo(panelActivo === "publicar" ? null : "publicar")}>
                    <Plus className={styles.iconoBotonPublicar} />
                    Publicar prenda
                </button>
            )}
            {estaAutenticado && panelActivo === "perfil" && (
                <PanelPerfil
                    cerrarPanelActivo={cerrarPanelActivo} />
            )}
            {estaAutenticado && panelActivo === "notificaciones" && (
                <PanelNotificaciones
                    notificaciones={notificaciones} />
            )}
            {!estaAutenticado && panelActivo !== null && (
                <PanelIdentificacion />
            )}
        </div>
    )
}

export default AccionesHeader