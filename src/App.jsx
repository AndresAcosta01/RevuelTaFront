import { Link, useLocation } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import AppRouter from './routers/AppRouter'

function NavigationLayout() {
  const { usuario, autenticado, cerrarSesion } = useAuth()
  const location = useLocation()

  return (
    <div style={{ padding: '1.5rem 2rem', maxWidth: 1120, margin: '0 auto' }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <nav style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/carrito"
            style={{
              fontWeight: 600,
              color: location.pathname === '/carrito' ? 'var(--clay)' : 'var(--pine)',
            }}
          >
            Carrito
          </Link>
          <Link
            to="/mis-trueques"
            style={{
              fontWeight: 600,
              color: location.pathname === '/mis-trueques' ? 'var(--clay)' : 'var(--pine)',
            }}
          >
            Mis Trueques
          </Link>
          <Link
            to="/registro"
            style={{
              fontWeight: 600,
              color: location.pathname === '/registro' ? 'var(--clay)' : 'var(--pine)',
            }}
          >
            Registro
          </Link>
          <Link
            to="/login"
            style={{
              fontWeight: 600,
              color: location.pathname === '/login' || location.pathname === '/iniciar-sesion' ? 'var(--clay)' : 'var(--pine)',
            }}
          >
            Iniciar sesión
          </Link>
          <Link
            to="/perfil"
            style={{
              fontWeight: 600,
              color: location.pathname.startsWith('/perfil') ? 'var(--clay)' : 'var(--pine)',
            }}
          >
            Perfil
          </Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
          {autenticado ? (
            <>
              <span style={{ color: 'var(--pine)', fontWeight: 600 }}>
                ● {usuario?.nombre || usuario?.correo}
              </span>
              <button
                type="button"
                onClick={cerrarSesion}
                style={{
                  padding: '0.3rem 0.6rem',
                  fontSize: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--line)',
                  background: '#fff',
                  cursor: 'pointer',
                }}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <span style={{ color: '#888' }}>Sin sesión activa</span>
          )}
        </div>
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  )
}

function App() {
  return <NavigationLayout />
}

export default App
