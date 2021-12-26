import { Link } from "react-router-dom";
import './Item.css'
import { Button } from "react-bootstrap";



export const Item = ({id, img, name}) => {

return (

        <section className="card">
            <div className="cards" key={id}>
                    <img className="card-img" src={img} alt={name} />
                        <h4 className="card-name">{name}</h4>
                        <div className="b">
                           <Button variant="dark" as={Link} to={`/detail/${id}`}> Descripción del producto</Button>
                        </div>
            </div>
        </section>
    )
}