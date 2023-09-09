import { useState, useEffect } from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getHostVans } from "../../api";

const HostVanDetail = () => {
    const params = useParams()
    const [van, setVan] = useState(null); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const styleNav = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans(params.id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [params.id])

    if (!van) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? styleNav : null}
                    >
                        Details
                    </NavLink>
                    
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? styleNav : null}
                    >
                        Pricing
                    </NavLink>
                    
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? styleNav : null}
                    >
                        Photos
                    </NavLink>
                    
                </nav>
                <Outlet context={{van}}/>
            </div>
        </section>
    )
    
}

export default HostVanDetail;