import { Link, NavLink } from "react-router-dom";


const Navbar=()=> {
    return (
        <div className="navbar">

            <h1>Our Menu</h1>

            <div className="navLinks">
                <NavLink to="/">All</NavLink>
                <NavLink to="/breakfast">Breakfast</NavLink>
                <NavLink to="/lunch">Lunch</NavLink>
                <NavLink to="shakes">Shakes</NavLink>
            </div>

        </div>
    );
}

export default Navbar;
