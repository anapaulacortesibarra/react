import { ItemCount } from "../ItemCount/ItemCount.";


export const Item = ({id, img, name, price, }) => {

    return (
        <article key={id} className="card m-3" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price}</p>
                
                <ItemCount stock="10"/>
            </div>
        </article>
    )
}