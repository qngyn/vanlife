import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useSearchParams, Link } from "react-router-dom";
import { getVans } from "../../api";
const Van = () => {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])
    const displayedVans = typeFilter 
        ?   vans.filter(van => van.type.toLowerCase() === typeFilter) 
        : vans

    const vanElements = displayedVans.map(van => {
        return <Card 
                    key = {van.id}
                    params = {searchParams}
                    typeVan = {typeFilter}
                    {...van}
                />
    })

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There is an error. Please try again later!</h1>
    }
    return (
        <div className="van-list-container">
            <div className="van-list-filter-buttons">
                <button 
                    onClick = {() => setSearchParams({type: "simple"})}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button 
                    onClick = {() => setSearchParams({type: "luxury"})}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button 
                    onClick = {() => setSearchParams({type: "rugged"})}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>
                {   typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                    ) : null
                } 
            
            </div>
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}

export default Van;