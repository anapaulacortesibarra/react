import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from './NavBar.img/logo.png'




export default function  NavBar() {

    return (

        <div className="header">
            <img class="logo" src={logo} alt="logo" width="5%"/>


            <nav>
                <ul>
                    <li>Productos</li>
                    <li>Sobre nosotras</li>
                    <li>Contacto</li>
                </ul>


            </nav>

            <CartWidget/>
            
        </div>



    )

}