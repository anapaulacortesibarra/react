import { Link } from "react-router-dom";
import './Item.css'



export const Item = ({id, img, name, desc, price,category }) => {

    return (
        <div className="card-product-container" key={id}>
            <div className="card-product">
                <img className="card-img" src={img} alt={name} />
                <h3 className="card-name">{name}</h3>
                <p className="card-price">Precio: ${price}</p>
                <p className="card-category">{category}</p>
                <Link to={`/detail/${id}`} className="nav-link">Descripción del producto</Link>

            </div>
        </div>
    )
}