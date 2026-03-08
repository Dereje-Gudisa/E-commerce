import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Cart from './Cart.jsx';
import {Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext.jsx";


function App() {
  
  return (
    <>
      <div className='app'>
        <CartProvider>
          <Header />
          <Nav />
          <Home />
          <Footer />
        </CartProvider>
      </div>

    </>
  )
}

export default App