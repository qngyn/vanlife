import { useEffect, useState } from "react";
import Card from "../../components/Card";
const Van = () => {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => {
        return <Card 
                    key = {van.id}
                    {...van}
                />
    })
    
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}

export default Van;