import { Row } from 'react-bootstrap'
import { Item } from '../Item/Item'
import './ItemList.css';

export const ItemList = ({items}) => {

    return (
        <div className='ItemList'>
            <h2 className="productTitle">Productos</h2>
            <hr/>
            <Row>
                {/* {items.map((prod) => <Item prod={prod}/>)} */}
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </div>
    )
}