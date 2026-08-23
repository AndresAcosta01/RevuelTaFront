import { Outlet } from "react-router-dom"
import styles from "./Layout.module.css"
import Header from "../components/layout/Header/Header"
import Footer from "../components/layout/Footer/Footer"

const MainLatout = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLatout