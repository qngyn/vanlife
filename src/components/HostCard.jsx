import { Link } from "react-router-dom";
const HostCard = (props) => {
    const {id, name, price, imageUrl} = props

    return (
        <Link
            to={`${id}`}
            key={id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={id}>
                <img src={imageUrl} alt={`Photo of ${name}`} />
                <div className="host-van-info">
                    <h3>{name}</h3>
                    <p>${price}/day</p>
                </div>
            </div>
        </Link>
    )
}

export default HostCard;