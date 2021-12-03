import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {MdDeleteOutline} from "react-icons/md";
import './CartItem.css'


export const CartItem = ({name, img, price, amount, id}) => {

    const {deleteItem} = useContext(CartContext)

    return (
        <div className="productCart">
            <h3>{name}</h3>
            <img className="productImg" src={img} alt={name} />
            <p>Precio: ${price}</p>
            <p>Cantidad: {amount}</p>

            <button className="btn btn-danger" onClick={() => { deleteItem(id) }}>

            <MdDeleteOutline/>
            </button>
        </div>
    


    )
}

