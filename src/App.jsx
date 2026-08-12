import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MisPedidos from './components/MisPedidos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MisPedidos />
    </>
  )
}

export default App
