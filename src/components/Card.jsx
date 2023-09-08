import { Link } from "react-router-dom"
const Card = (props) => {   
    const { id, imageUrl, name, price, type } = props
    return (
            <div key={id} className="van-tile">
                 <Link to={`/van/${id}`}>
                    <img src={imageUrl} />
                    <div className="van-info">
                        <h3>{name}</h3>
                        <p>${price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${type} selected`}>{type}</i>
                </Link>
            </div>
    )

}

export default Card;