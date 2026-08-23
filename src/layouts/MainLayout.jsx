import { Outlet } from "react-router-dom"
import styles from "./MainLayout.module.css"
import Header from "../components/layout/Header/Header"

const MainLatout = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    )
}

export default MainLatout