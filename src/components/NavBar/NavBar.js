import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from './NavBar.img/logo.png'




export default function  NavBar() {

    return (

        <header className="header">
           <Link to="/" className="nav-link"><img class="logo" src={logo} alt="logo" width="20%"/></Link>


            <nav>
                <ul>
                    <li><Link to="productos/collares" className="nav-link">Collares</Link></li>
                    <li><Link to="productos/aros" className="nav-link">Aros</Link></li>

                </ul>


            </nav>

           <Link to="cart" className="nav-link"> <CartWidget/> </Link>
            
        </header>



    )

}