import marcas from "../../../../data/marcas";
import LogoMarca from "./LogoMarca";
import styles from "../MarcasDestacadas/MarcasDestacadas.module.css";

function MarcasDestacadas() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Marcas Destacadas</h2>

            <div className={styles.carousel}>
                <div className={styles.track}>
                    {marcas.map((marca) => (
                        <LogoMarca key={marca.id} nombre={marca.nombre} logo={marca.logo} />
                    ))}
                    {/* Copia idéntica para que el scroll se vea infinito y sin cortes */}
                    {marcas.map((marca) => (
                        <LogoMarca key={`duplicado-${marca.id}`} nombre={marca.nombre} logo={marca.logo} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MarcasDestacadas;