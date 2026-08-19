import { Bell, LogOut, Plus, ShoppingCart, UserRound } from "lucide-react"
import styles from "./AccionesHeader.module.css"
import opcionesMenuPerfil from "./OpcionMenuPerfil/opcionesMenuPerfil"
import { useState } from "react"
import OpcionMenuPerfil from "./OpcionMenuPerfil/OpcionMenuPerfil"

const AccionesHeader = () => {
    const [menuPerfilAbierto, setMenuPerfilAbierto] = useState(false);

    function alternarMenuPerfil() {
        setMenuPerfilAbierto(!menuPerfilAbierto)
    }

    const cerrarMenuPerfil = () => {
        setMenuPerfilAbierto(false)
    }

    return (
        <div className={styles.accionesHeader}>
            <button className={styles.botonIcono}>
                <Bell />
                <span className={styles.indicadorNotificacion}></span>
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
            {menuPerfilAbierto && (
                <div className={styles.menuPerfil}>
                    <div className={styles.datosPerfil}>
                        <div className={styles.usuarioPerfil}>
                            <div className={styles.contenedorFotoPerfil}>
                                <UserRound />
                            </div>
                            <p className={styles.nombreUsuario}>Nombre Usuario</p>
                        </div>
                        <span className={styles.puntosUsuario}>0 pts</span>
                    </div>
                    {opcionesMenuPerfil.map((opcion) => (
                        <OpcionMenuPerfil
                            key={opcion.id}
                            Icono={opcion.Icono}
                            texto={opcion.texto}
                            ruta={opcion.ruta}
                            onClick={cerrarMenuPerfil}
                        />
                    ))}
                    <div className={styles.contenedorCerrarSesion}>
                        <OpcionMenuPerfil
                            Icono={LogOut}
                            texto={"Cerrar Sesión"}
                        />
                    </div>
                </div>)}
        </div>
    )
}

export default AccionesHeader