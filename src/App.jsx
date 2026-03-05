import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import {Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  
  return (
    <>
      <div className='app'>
        <Header />
        <Nav />
        <Home />
        <Footer />
      </div>

    </>
  )
}

export default App