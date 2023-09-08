
const Card = (props) => {   
    const { id, imageUrl, name, price, type } = props
    console.log(id, imageUrl, name, price, type)
    return (
        <div key={id} className="van-tile">
            <img src={imageUrl} />
            <div className="van-info">
                <h3>{name}</h3>
                <p>${price}<span>/day</span></p>
            </div>
            <i className={`van-type ${type} selected`}>{type}</i>
        </div>
    )

}

export default Card;