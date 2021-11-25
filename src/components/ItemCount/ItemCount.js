import {Button} from "react-bootstrap";
import './ItemCount.css';



export const ItemCount = ({stock,  setAmount, amount, onAdd}) =>{



    const handleRestar = () =>{
        if(amount>1){
            setAmount(amount-1);
        }else{
            alert("No se puede realizar esta operación")
        }

    }

    const handleSumar = () =>{
        if(stock>amount){
            setAmount(amount+1);
        }else{
            alert("Por el momento no tenemos más stock de este producto")
        }
    }



    return(
        <div>
           
           <div className="counter">
                <Button variant="secondary" size="sm" onClick={handleRestar}> - </Button>    
                <h2 className="counterNumber">{amount}</h2>             
                <Button variant="secondary" size="sm" onClick={handleSumar}> + </Button>
            </div>

            <div>
                 <Button className="AddtoCart" variant="secondary" size="sm" onClick={onAdd}>Agregar al Carrito</Button>
            </div>
        </div>


    )
}