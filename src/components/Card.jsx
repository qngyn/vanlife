import { Link } from "react-router-dom"
const Card = (props) => {   
    return (
            <div key={props.id} className="van-tile">
                 <Link 
                    to={`${props.id}`} 
                    state={{ search: `?${props.params.toString()}`, type: props.typeVan}}
                >
                    <img src={props.imageUrl} />
                    <div className="van-info">
                        <h3>{props.name}</h3>
                        <p>${props.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${props.type} selected`}>{props.type}</i>
                </Link>
            </div>
    )

}

export default Card;