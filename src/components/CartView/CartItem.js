import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {MdDeleteOutline} from "react-icons/md";
import { Button } from "react-bootstrap";
import './CartItem.css'


export const CartItem = ({name, img, price, amount, id}) => {

    const {deleteItem} = useContext(CartContext)

    return (
        <div className="card">
            <div className="cards">
            <img className="card-img" src={img} alt={name} />
            <h3 className="card-name">{name}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {amount}</p>
            
            <Button variant="dark" onClick={() => { deleteItem(id) }}>
            <MdDeleteOutline/>
            </Button>

            </div>

        </div>
    


    )
}

