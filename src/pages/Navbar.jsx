import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Importa el CSS específico para Navbar

function Navbar() { 
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-link">Tarjeta</NavLink>
        <NavLink to="/about" className="nav-link">Palabras</NavLink>
        <NavLink to="/dashbord" className="nav-link">Promesas</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;


