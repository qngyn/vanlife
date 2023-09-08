import { Outlet, NavLink  } from "react-router-dom";
import Header from "./Header";

const HostLayout = () => {
    const styleNav = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                    to="/host"
                    end
                    style={({isActive}) => isActive ? styleNav : null}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/host/income"
                    style={({isActive}) => isActive ? styleNav : null}
                >
                    Income
                </NavLink>
                <NavLink 
                    to="/host/reviews"
                    style={({isActive}) => isActive ? styleNav : null}
                >
                    Reviews
                </NavLink>
            </nav>

            <Outlet />
        </>
    )
}

export default HostLayout;