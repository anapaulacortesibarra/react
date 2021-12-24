import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from './NavBar.img/logo.png'
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';


export default function  NavBar() {

    return (

                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img class="logo" src={logo} alt="logo" width="20%"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink as={Link} to="productos/collares">Collares</NavLink>
                        <NavLink as={Link}to="productos/aros">Aros</NavLink>
                        <NavLink as={Link} to="cart"><CartWidget /> </NavLink>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

    )

}