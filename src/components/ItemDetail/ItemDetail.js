import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import './ItemDetail.css'


export default function ItemDetail({ id, name, img, price, category}) {


    const navigate = useNavigate() //controla el historial de navegación //
    const [amount, setAmount] = useState(0);
    const [agregado, setAgregado] = useState(false);


    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () =>{
        if (amount> 0) {
            console.log('Item agregado:',{
            id,
            name,
            price,
            img,
            amount
         })
            setAgregado(true)
        }
    }


    return (
        <article>
            <div className="card-product-container" key={id}>
                <div className="card-product">
                    <img className="card-img" src={img} alt={name} />
                    <h3 className="card-name">{name}</h3>
                    <p className="card-description">lorem ipsum </p>
                    <p className="card-price">Precio: ${price}</p>
                    <p className="card-category">{category}</p>


                    {
                        !agregado
                        ?  <ItemCount 
                                stock="10" 
                                amount={amount} 
                                setAmount={setAmount}
                                onAdd={handleAgregar}
                            />

                        : <Link to="/cart" className="btn btn success ">Terminar compra</Link>

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