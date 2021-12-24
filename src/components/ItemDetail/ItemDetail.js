import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import './ItemDetail.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


export default function ItemDetail({ id, name, img, desc, price, category}) {

    const {addtoCart, isInCart} = useContext(CartContext)

    const navigate = useNavigate() //controla el historial de navegación //
    const [amount, setAmount] = useState(0);


    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () =>{
        if (amount> 0) {
            addtoCart({
                id,
                name,
                img,
                price,
                amount

            })
        }
    }


    return (
        <article className="card">
            <div className="cards" key={id}>
                <div className="card-product">
                    <img className="card-img" src={img} alt={name} />
                     <h3 className="card-name">{name}</h3>
                        <div className="elements">
                            <p>{desc} - <span>${price}</span></p>
                        </div>


                    {
                        !isInCart(id)
                        ?  <ItemCount 
                                stock="10" 
                                amount={amount} 
                                setAmount={setAmount}
                                onAdd={handleAgregar}
                            />

                        : <div className='lastStep'>
                            <Link to="/cart"  className="nav-link ">Terminar compra</Link>
                        </div>

                    }


                    <div className="card-buttons">
                        <Button className="handle" variant="secondary" size="sm" onClick={handleVolver}>Volver</Button>
                        <Button className="handle" variant="secondary" size="sm" onClick={handleVolverInicio}>Inicio</Button>
                    </div>
                </div>
             </div>
        </article>
    )
}