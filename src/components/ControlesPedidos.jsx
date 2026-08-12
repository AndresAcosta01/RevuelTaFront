const ControlesPedidos = ({estadoSeleccionado, setEstadoSeleccionado}) => {

  const estados = [ {label: "Todos", value: "Todos" }, { label: "En preparación", value: "En preparación" }, { label: "Enviados", value: "Enviado"}, {label: "Entregados", value: "Entregado"}, {label: "Cancelados", value: "Cancelado"}]

  return (
    <div className="controles-pedidos">
      {estados.map((estado) => (
        <button key={estado.value} onClick={() => setEstadoSeleccionado(estado.value)} className={estadoSeleccionado === estado.value ? "activo" : ""}>{estado.label}</button>
      ))}
        

        <input type="text" placeholder='Buscar pedido...' />
    </div>
  )
}

export default ControlesPedidos