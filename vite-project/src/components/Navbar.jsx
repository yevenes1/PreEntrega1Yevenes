import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {

return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
        <h1>
          <Link to="/">
          </Link>
        </h1>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link me-auto ">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/shonen" className="nav-link me-auto">Shonen</NavLink>
          </li>
         <li className="nav-item">
            <NavLink to="/category/deportes" className="nav-link me-auto">Deportes</NavLink>
         </li>
        <li className="nav-item">
           <NavLink to="/category/populares" className="nav-link me-auto">Populares</NavLink>
        </li>
      </ul>
    </div>
      <div>
        <CartWidget/>
      </div>

  </div>
</nav>
    )

}

export default NavBar;