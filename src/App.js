import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import {CartProvider} from './components/context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import {Footer} from './components/Footer/Footer'



function App() {


  return (
  
    <CartProvider>
                <BrowserRouter>
                <NavBar/>
                    <Routes>

                      <Route path="/" element={<ItemListContainer/>}/>
                      <Route path="/productos/:catId" element={<ItemListContainer/>}/>
                      <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
                      <Route path="/cart" element={<CartView/>}/>
                      <Route path="/checkout" element={<Checkout/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
    </CartProvider>
  );
}

export default App;



