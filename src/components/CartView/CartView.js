import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem} from './CartItem'
import './CartView.css'

export const CartView = () => {


    const { cart, deleteCart } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2> El carrito está vacío</h2>
                <hr />
                <Link to="/" className="btn-volver">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Cart View</h2>
            <hr />
            <section>
                {cart.map((prod) => <CartItem key={prod.id} {...prod} />)}
            </section>
            <hr />
            <div>
                <button className="btn btn-danger" onClick={deleteCart}>Vaciar carrito</button>
                <button className="btn btn-success mx-2">Terminar mi compra</button>
            </div>
        </div>
    )
}