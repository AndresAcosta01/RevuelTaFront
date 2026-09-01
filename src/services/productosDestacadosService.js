import api from "./apidos";

export const obtenerProductosDeRopa = async () => {
    const [hombre, mujer] = await Promise.all([
        api.get("/products/category/men's clothing"),
        api.get("/products/category/women's clothing"),
    ]);

    return [...hombre.data, ...mujer.data];
};