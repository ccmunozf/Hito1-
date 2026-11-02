import { formatPrice } from '../utils/formatPrice'

function Navbar() {
  const total = 25000
  // Cambia a true para probar el menú de un usuario conectado.
  const token = false

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <span className="brand">Pizzería Mamma Mía!</span>
      <div className="nav-links">
        <button type="button">🍕 Home</button>
        {token ? (
          <>
            <button type="button">🔓 Profile</button>
            <button type="button">🔒 Logout</button>
          </>
        ) : (
          <>
            <button type="button">🔐 Login</button>
            <button type="button">🔐 Register</button>
          </>
        )}
      </div>
      <button type="button" className="cart">🛒 Total: ${formatPrice(total)}</button>
    </nav>
  )
}

export default Navbar
