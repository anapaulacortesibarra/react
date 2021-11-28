
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import React, { useContext } from 'react'
import './CartWidget.css';


export const CartWidget = () =>{

    const {totalAmountCart} = useContext(CartContext) //cada funcion que utilizo del context en mis componentes debo agregarlas//

    return (

        <div className="Cart"> 

            <FaCartPlus/>
            <span className="totalAmount">{totalAmountCart()}</span>

        </div>

    )
}