import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Cart from './Cart.jsx';
import Contact from './Contact.jsx';
import BestSeller from './BestSeller.jsx';
import CheckOut from './CheckOut.jsx';
import Shop from './Shop.jsx';
import SinglePage from './SinglePage.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import SavedItem from './SavedItem.jsx';
import SearchResultPage from './SearchResultPage.jsx';
import SignUp from './SignUp.jsx';
import SignInPage from './SignInPage.jsx';
import {Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext.jsx";


function App() {
  
  return (
    <>
      <div className='app'>
        <CartProvider>
          <Header />
          <Nav />
          
            <div className="main-content">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bestSeller" element={<BestSeller />} />
              <Route path="/checkOut" element={<CheckOut />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/singlePage" element={<SinglePage />} />
              <Route path="/notFoundPage" element={<NotFoundPage />} />
              <Route path="/savedItem" element={<SavedItem />} />
              <Route path="/searchResultPage" element={<SearchResultPage />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signInPage" element={<SignInPage />} />
            </Routes>
            </div>
          
          <Footer />
        </CartProvider>
      </div>

    </>
  )
}

export default App