import ListadoPedidos from './ListadoPedidos'
import pedidos from '../data/pedidos'
import { useState } from 'react'
import ControlesPedidos from './ControlesPedidos';
import "./MisPedidos.css";

const MisPedidos = () => {

    const [estadoSeleccionado, setEstadoSeleccionado] = useState("Todos");

    const pedidosFiltrados = estadoSeleccionado === "Todos" ? pedidos : pedidos.filter((pedido) => pedido.estado === estadoSeleccionado);

  return (
    <main className='mis-pedidos'>
      <section className='mis-pedidos-contenido'>
        <h1>Mis pedidos</h1>

        <ControlesPedidos estadoSeleccionado = {estadoSeleccionado} setEstadoSeleccionado = {setEstadoSeleccionado} />
        
        <ListadoPedidos pedidos={pedidosFiltrados} />
        </section>
    </main>
  )
}

export default MisPedidos