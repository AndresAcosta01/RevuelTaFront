import Logo from './Logo/Logo'
import BarraBusqueda from './BarraBusqueda/BarraBusqueda'
import AccionesHeader from './AccionesHeader/AccionesHeader'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <BarraBusqueda />
            <AccionesHeader />
        </header>
    )
}

export default Header