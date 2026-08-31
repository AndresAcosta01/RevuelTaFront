export const seguimientoEnvioMock = {
    pedidoId: 1,
    tipoOperacion: "trueque",
    prendas: [
        { id: 1, nombre: "Chaqueta negra" },
        { id: 2, nombre: "Camiseta blanca" }
    ],
    entregas: [
        {
            id: 1,
            envioId: "11111111-1111-1111-1111-111111111111",
            codigoGuia: "REV-ENV-001",
            etiqueta: "Tu entrega",
            prenda: { id: 1, nombre: "Chaqueta negra" },
            estados: [
                { id: 1, estado: "Trueque aceptado", fechaHora: "2026-08-23T10:30:00", situacion: "completado" },
                { id: 2, estado: "Pendiente de entrega en", punto: "origen", fechaHora: null, situacion: "actual" },
                { id: 3, estado: "Prenda recibida en", punto: "origen", fechaHora: null, situacion: "pendiente" },
                { id: 4, estado: "Procesamiento en bodega", fechaHora: null, situacion: "pendiente" },
                { id: 5, estado: "Traslado hacia", punto: "destino", fechaHora: null, situacion: "pendiente" },
                { id: 6, estado: "Lista para ser recogida", fechaHora: null, situacion: "pendiente" },
                { id: 7, estado: "Recogida por el usuario", fechaHora: null, situacion: "pendiente" }
            ],
            tipoEntrega: "propia",
            puntoOrigen: { id: 2, nombre: "Punto ReVuelta - Poblado", direccion: "Cra 43A # 10-20", horario: "8:00 a.m. - 8:00 p.m.", latitud: 6.2088, longitud: -75.5673 },
            puntoDestino: { id: 1, nombre: "Punto ReVuelta - Chapinero", direccion: "Cra 7 # 60-15", horario: "8:00 a.m. - 8:00 p.m.", latitud: 4.6486, longitud: -74.0615 },
            transportista: { id: 1, nombre: "Envios Rapidos SAS" },
            costoEnvio: 12500
        },
        {
            id: 2,
            envioId: "22222222-2222-2222-2222-222222222222",
            codigoGuia: "REV-ENV-002",
            etiqueta: "Entrega de Laura",
            prenda: { id: 2, nombre: "Camiseta blanca" },
            estados: [
                { id: 1, estado: "Trueque aceptado", fechaHora: "2026-08-23T10:30:00", situacion: "completado" },
                { id: 2, estado: "Pendiente de entrega en", punto: "origen", fechaHora: "2026-08-23T12:15:00", situacion: "completado" },
                { id: 3, estado: "Prenda recibida en", punto: "origen", fechaHora: "2026-08-23T14:20:00", situacion: "completado" },
                { id: 4, estado: "Procesamiento en bodega", fechaHora: null, situacion: "actual" },
                { id: 5, estado: "Traslado hacia", punto: "destino", fechaHora: null, situacion: "pendiente" },
                { id: 6, estado: "Lista para ser recogida", fechaHora: null, situacion: "pendiente" },
                { id: 7, estado: "Recogida por el usuario", fechaHora: null, situacion: "pendiente" }
            ],
            tipoEntrega: "recibida",
            puntoOrigen: { id: 1, nombre: "Punto ReVuelta - Chapinero", direccion: "Cra 7 # 60-15", horario: "8:00 a.m. - 8:00 p.m.", latitud: 4.6486, longitud: -74.0615 },
            puntoDestino: { id: 2, nombre: "Punto ReVuelta - Poblado", direccion: "Cra 43A # 10-20", horario: "8:00 a.m. - 8:00 p.m.", latitud: 6.2088, longitud: -75.5673 },
            transportista: { id: 1, nombre: "Envios Rapidos SAS" },
            costoEnvio: 13800
        }
    ]
}