import { useContext, useState } from 'react'
import { ConnectedUserContext } from './context/ConnectedUser.context';
import Profile from './pages/community/Profile';

function App() {
  const [count, setCount] = useState(0)
  const { connectedUser, setConnectedUser } = useContext(ConnectedUserContext);

  return (
    <Profile />
  )
}

export default App
