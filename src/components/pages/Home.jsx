import { useNavigate } from "react-router-dom";
import { RUTAS } from "../../constants/rutas"
import Hero from "./Home/Hero/Hero";
import CategoriasDestacadas from "./Home/CategoriasDestacadas/CategoriasDestacadas";
import Estadisticas from "./Home/Estadisticas/Estadisticas";
import ProductosDestacados from "./Home/ProductosDestacados/ProductosDestacados";
import ComoFunciona from "./Home/ComoFunciona/ComoFunciona";
import MarcasDestacadas from "./Home/MarcasDestacadas/MarcasDestacadas";
import Testimonios from "./Home/Testimonios/Testimonios";

function Home() {
    const navigate = useNavigate();
    const heroImg = "https://res.cloudinary.com/ihe8jaok/image/upload/v1788192323/landing_img.jpg"
    const handleExplorarCatalogo = () => {
        navigate(RUTAS.CATALOGO);
    };

    const handleSeleccionarCategoria = () => {
        navigate(RUTAS.CATALOGO);
    };

    const handleVerProducto = (idProducto) => {
        
        console.log("Abrir modal de producto:", idProducto);
    };

    const handleAgregarCarrito = (idProducto) => {
        
        console.log("Agregar al carrito / abrir modal:", idProducto);
    };

    const handleTrueque = (idProducto) => {
        
        console.log("Iniciar trueque:", idProducto);
    };

    return (
        <>
            <Hero
                titulo="Dale una segunda vida a tu ropa"
                descripcion="Compra, vende y truequea prendas en un solo lugar."
                imagenSrc={heroImg}
                onExplorarCatalogo={handleExplorarCatalogo}
            />
            <Estadisticas />
            <CategoriasDestacadas onSeleccionarCategoria={handleSeleccionarCategoria} />
            <ProductosDestacados
                onVerProducto={handleVerProducto}
                onAgregarCarrito={handleAgregarCarrito}
                onTrueque={handleTrueque}
            />
            < ComoFunciona />
            < MarcasDestacadas />
            < Testimonios />
        </>
    );
}

export default Home;