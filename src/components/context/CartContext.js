import {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext()

//custom provider //

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

  const addtoCart = (item) =>{
    setCart([...cart, item])

  }

  const deleteItem = (id) =>{
    setCart(cart.filter(prod => prod.id !== id)) 
  }

  const deleteCart = () =>{
    setCart([])
  }

  const isInCart = (id) =>{
    return cart.some(prod => prod.id === id )
  }

  const totalAmountCart = () =>{
    return cart.reduce((acc, prod) => acc + prod.amount,0)
  }

  const totalCart = () =>{
    return cart.reduce((acc, {amount,price}) => acc + amount * price,0)
  }

  const values = {
    addtoCart,
    deleteItem,
    deleteCart,
    isInCart,
    totalAmountCart,
    totalCart,
  }

    return (

        <CartContext.Provider value={values}>

            {children}
        
        </CartContext.Provider>
    )
}


//children son todos los componentes que se encuentran en el app dentro del CartProvider//