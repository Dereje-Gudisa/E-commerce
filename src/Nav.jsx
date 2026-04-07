import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handelSelectChange =(event)=>{
    const path = event.target.value;
    console.log(path)
    if(path){
      navigate(path)
      event.target.value = '';
    }
    setIsMenuOpen(false); // Close menu after selection
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='nav-container'>
      <div className='nav-items'>
        <Link to='/' className='nav-links' onClick={closeMenu}>Home</Link>
        <Link to="/shop" className='nav-links' onClick={closeMenu}>Shop</Link>
        <Link to="/singlePage" className='nav-links' onClick={closeMenu}>Single Page</Link>
        <select name="pages" id="" onChange={handelSelectChange} defaultValue='' className='nav-select'>
          <option value="" hidden>Pages</option>
          <option value="/bestSeller">Best Seller</option>
          <option value="/cart">Cart</option>
          <option value="/checkOut">Check Out</option>
          <option value="/notFoundPage">404 Page</option>
        </select>
        <Link to="/contact" className='nav-links' onClick={closeMenu}>Contact</Link>
      </div>

      <button className='mobile-menu-toggle' onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to='/' className='mobile-nav-links' onClick={closeMenu}>Home</Link>
        <Link to="/shop" className='mobile-nav-links' onClick={closeMenu}>Shop</Link>
        <Link to="/singlePage" className='mobile-nav-links' onClick={closeMenu}>Single Page</Link>
        <select name="pages-mobile" id="" onChange={handelSelectChange} defaultValue='' className='mobile-nav-select'>
          <option value="" hidden>Pages</option>
          <option value="/bestSeller">Best Seller</option>
          <option value="/cart">Cart</option>
          <option value="/checkOut">Check Out</option>
          <option value="/notFoundPage">404 Page</option>
        </select>
        <Link to="/contact" className='mobile-nav-links' onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  )
}

export default Nav