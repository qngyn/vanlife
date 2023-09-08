import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useSearchParams, Link } from "react-router-dom";
const Van = () => {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
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