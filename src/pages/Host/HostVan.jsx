import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HostCard from "../../components/HostCard";
import { getHostVans } from "../../api";
const HostVan = () => {
    const [vans, setVans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
            const data = await getHostVans()
            setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    // useEffect(() => {fetch("/api/host/vans")
    //     .then(res => res.json())
    //     .then(data => setVans(data.vans))
    // }, [])

    if (loading) {
        return  <h1>Loading...</h1>
    }

    if (error) {
        return <h1> There was an error! Please try again later </h1>
    }

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