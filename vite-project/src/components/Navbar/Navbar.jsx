import {Link, NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">MangaStore</Link>

                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink to="/category/shonen" className="nav-link">Shonen</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/deportes" className="nav-link">Deportes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/populares" className="nav-link">Populares</NavLink>
                    </li>
                </ul>

                    <NavLink to="/cart">
                        <CartWidget />
                    </NavLink>
            
            </div>
        </nav>
    )
};

export default NavBar;