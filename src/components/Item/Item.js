import { Link } from "react-router-dom";
import './Item.css'



export const Item = ({id, img, name}) => {

return (

        <section className="card">
            <div className="cards" key={id}>
                    <img className="card-img" src={img} alt={name} />
                        <h4 className="card-name">{name}</h4>
                        <div className="b">
                            <Link to={`/detail/${id}`} className="nav-link" >Descripción del producto</Link>
                        </div>
            </div>
        </section>
    )
}