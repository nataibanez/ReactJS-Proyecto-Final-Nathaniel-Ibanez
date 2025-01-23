import {NavLink, Link} from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
          <div>
              <img className="navbar--brand" src='/img/newen.webp'></img>
              <p className="navbar--brand-text"><b>Gin Newen</b></p>
          </div>
        </Link>

        {/* Zona de NavBar, todos los links funcionando, pero no todas las páginas están hechas */}

        <ul className="navbar--categories">
            <NavLink to="category/clasico" className={({isActive } ) => 
              (isActive)
                ? "category-active" 
                : "category" 
              }>
                Gin Clásico 
            </NavLink>

            <NavLink to="category/especiado" className={({isActive } ) => 
              (isActive)
                ? "category-active" 
                : "category" 
              }>
                Gin Especiado 
            </NavLink>

            <NavLink to="category/clear" className={({isActive } ) => 
              (isActive)
                ? "category-active" 
                : "category" 
              }>
                Gin Clear
            </NavLink>

            <NavLink to="nosotros">
                Nosotros
            </NavLink>

            <NavLink to="envios">
                Envíos
            </NavLink>

            <NavLink to="distribuidores">
                Distribuidores
            </NavLink>

            <NavLink to="contacto">
                Contacto
            </NavLink>
        </ul>

        <CartWidget />
    </nav>
  )
}

export default Navbar