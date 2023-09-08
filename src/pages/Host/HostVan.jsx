import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HostCard from "../../components/HostCard";
const HostVan = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const hostCardElements = vans.map(van => {
        return <HostCard 
                    key = {van.id}
                    {...van}
                />

    })

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostCardElements}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}
export default HostVan;