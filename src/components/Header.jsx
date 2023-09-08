import { NavLink } from "react-router-dom";

const Header = () => {
    const styleNav = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
            <NavLink 
                to="/host"
                style={({isActive}) => isActive ? styleNav : null}
            >
                Host
            </NavLink>
            <NavLink 
                to="/about"
                style={({isActive}) => isActive ? styleNav : null}
            >
                About
            </NavLink>
            <NavLink 
                to="/van"
                style={({isActive}) => isActive ? styleNav : null}
            >
                Van
            </NavLink>
            </nav>
        </header>
    )

}

export default Header;