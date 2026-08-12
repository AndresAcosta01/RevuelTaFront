const pedidos = [
  {
    id: "001",
    fecha: "2026-08-10",
    estado: "En preparación",
    tipoOperacion: "compra",
    prendas: [
      {
        id: 1,
        nombre: "Camisa negra",
        precio: 50000
      }
    ]
  },

  {
    id: "002",
    fecha: "2026-08-09",
    estado: "Enviado",
    tipoOperacion: "compra",
    prendas: [
      {
        id: 2,
        nombre: "Jean azul",
        precio: 80000
      }
    ]
  },

  {
    id: "003",
    fecha: "2026-08-05",
    estado: "Entregado",
    tipoOperacion: "compra",
    tieneResena: true,
    prendas: [
      {
        id: 3,
        nombre: "Vestido rojo",
        precio: 90000
      }
    ]
  },

  {
    id: "004",
    fecha: "2026-08-03",
    estado: "Cancelado",
    tipoOperacion: "compra",
    motivoCancelacion: "Producto no disponible",
    estadoReembolso: "Pendiente",
    prendas: [
      {
        id: 4,
        nombre: "Chaqueta negra",
        precio: 120000
      }
    ]
  }
];

export default pedidos