import React, { useContext }  from 'react';
import {useGlobalContext} from '../context/SideCartContext'
import { FaTimes } from 'react-icons/fa';
import { CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'

export const SideCart = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    const {cart,  totalCart} = useContext(CartContext)
   
  
  
    return (
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <h3>Carrito</h3>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
            
          </button>
          </div>
          {cart.map((prod)=>{
              const {price, name, img, amount} = prod
              return(
              <aside className="aside-cart">
              <img src={img} alt={name}/>
              
              <h5>{name}</h5>
              <h5>$ {price}</h5>
              <h5>Cant.{amount}</h5>
              
              
          </aside>)
  
              
          })}
          <div className='cart-total'>
              <hr/>
            <h4 className='mx-3'>
              total: $: {totalCart()}
            </h4>
            <Link to="/cart" className="filter-btn mt-4 px-3 " onClick={closeSidebar}>
              <FaShoppingCart className='mx-2'/>
              Finalizar Compra
              </Link>
          </div>
          
          
          
       
        
      </aside>
    );
  };
  
