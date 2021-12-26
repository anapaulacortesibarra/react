import {Button} from "react-bootstrap";
import './ItemCount.css';



export const ItemCount = ({stock,  setAmount, amount, onAdd}) =>{



    const handleRestar = () =>{
        if(amount>0){ setAmount(amount-1);
        }
    }

    const handleSumar = () =>{
        if(stock>amount){ setAmount(amount+1);
        }
    }



    return(
        <div>
           
           <div className="counter">
                <Button disabled={amount===0} variant="secondary" size="sm" onClick={handleRestar}> - </Button>    
                <h2 className="counterNumber">{amount}</h2>             
                <Button disabled={amount === stock} variant="secondary" size="sm" onClick={handleSumar}> + </Button>
            </div>

            <div>
                 <Button className="AddtoCart" variant="dark" size="sm" onClick={onAdd}>Agregar al Carrito</Button>
            </div>
        </div>


    )
}