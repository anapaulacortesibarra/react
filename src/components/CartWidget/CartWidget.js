
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import React, { useContext } from 'react'
import './CartWidget.css';


export const CartWidget = () =>{

    const {totalAmountCart} = useContext(CartContext)

    return (

        <div className="Cart"> 

            <FaCartPlus/>
            <span className="totalAmount">{totalAmountCart()}</span>

        </div>

    )
}