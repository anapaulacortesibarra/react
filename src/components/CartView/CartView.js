import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem} from './CartItem'
import { Button } from 'react-bootstrap'
import './CartView.css'

export const CartView = () => {


    const { cart, deleteCart, totalCart  } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2> El carrito está vacío</h2>
                <hr />
                <div className='back'>
                    <Button variant="secondary" as={Link} to="/">Volver</Button>
                </div>
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
                <p>Total compra: ${totalCart()}</p>
                <Button variant="secondary" onClick={deleteCart}>Vaciar carrito</Button>
                <Button variant="dark" as={Link} to="/checkout">Terminar compra </Button>
            </div>
        </div>
    )
}