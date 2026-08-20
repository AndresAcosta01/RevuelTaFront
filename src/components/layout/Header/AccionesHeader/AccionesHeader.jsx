import { Bell, LogOut, Plus, ShoppingCart, UserRound } from "lucide-react"
import styles from "./AccionesHeader.module.css"
import PanelIdentificacion from "./PanelIdentificacion/PanelIdentificacion"
import PanelNotificaciones from "./PanelNotificaciones/PanelNotificaciones"
import PanelPerfil from "./PanelPerfil/PanelPerfil"
import { obtenerNotificaciones } from "../../../../services/notificacionesService"
import { useEffect, useRef, useState } from "react"

const AccionesHeader = () => {
    const [panelActivo, setPanelActivo] = useState(null);
    const estaAutenticado = true;
    const notificaciones = obtenerNotificaciones();
    const contenedorAcciones = useRef(null)

    function alternarMenuPerfil() {
        const panelDestino = estaAutenticado ? "perfil" : "identificacion";
        setPanelActivo(
            panelActivo === panelDestino ? null : panelDestino
        )
    }
    function alternarNotificaciones() {
        const panelDestino = estaAutenticado ? "notificaciones" : "identificacion";

        setPanelActivo(
            panelActivo === panelDestino ? null : panelDestino
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
    const cerrarMenuPerfil = () => {
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
            <button className={styles.botonIcono}>
                <ShoppingCart />
                <span className={styles.contadorCarrito}>54+</span>
            </button>
            <button className={styles.botonIcono} onClick={alternarMenuPerfil}>
                <UserRound />
            </button>
            <button className={styles.botonPublicar}>
                <Plus className={styles.iconoBotonPublicar} />
                Publicar prenda
            </button>
            {panelActivo === "perfil" && (
                <PanelPerfil
                    cerrarMenuPerfil={cerrarMenuPerfil} />
            )}
            {panelActivo === "notificaciones" && (
                <PanelNotificaciones
                    notificaciones={notificaciones} />
            )}
            {panelActivo === "identificacion" && (
                <PanelIdentificacion />
            )}
        </div>
    )
}

export default AccionesHeader