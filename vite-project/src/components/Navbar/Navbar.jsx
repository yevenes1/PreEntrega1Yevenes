import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "../styles/Navbar.modules.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid container-navbar">
            <h2>
                <Link to="/">MangaStore</Link>
            </h2>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link item-nav"  to="/category/shonen">Shonen</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link item-nav" to="/category/deportes">Deportes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link item-nav" to="/category/populares">Populares</NavLink>
                </li>
               
            </ul>
            < CartWidget />
        </div>
      </nav>
  );
};

export default Navbar;