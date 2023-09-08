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
                    to="."
                    end
                    style={({isActive}) => isActive ? styleNav : null}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="income"
                    style={({isActive}) => isActive ? styleNav : null}
                >
                    Income
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? styleNav : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="reviews"
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