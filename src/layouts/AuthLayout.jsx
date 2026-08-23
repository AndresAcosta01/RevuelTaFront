import { Outlet } from "react-router-dom"
import HeaderAuth from "../components/layout/Header/HeaderAuth"

const AuthLayout = () => {
    return (
        <>
            <HeaderAuth />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AuthLayout