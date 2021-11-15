import {Button} from "react-bootstrap";
import React, { useState } from 'react';
import './ItemCount.css';



export const ItemCount = ({stock}) =>{

    const [counter, SetCounter] = useState(1);

    const incrementar = () =>{
        if(stock>counter){
            SetCounter(counter+1);
        }else{
            alert("Por el momento no tenemos más stock de este producto")
        }
       
    }


    const decrementar = () =>{

        if(counter>1){
            SetCounter(counter-1);
        }else{
            alert("No se puede realizar esta operación")
        }
     
    
    }


    const result = () =>{
        alert(`Agregaste ${counter} productos al carrito`)
    }

    return(
        <div>
           
           <div className="counter">
                <Button variant="secondary" onClick={decrementar}> - </Button>    
                <h2 className="counterNumber">{counter}</h2>             
                <Button variant="secondary" onClick={incrementar}> + </Button>
            </div>

            <div>
                 <Button className="AddtoCart" variant="secondary" size="lg" onClick={result}>Agregar al Carrito</Button>
            </div>
        </div>


    )
}