import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Logo from "./assets/logo.svg";


const Header = () => {
  return (
    <div className='header'>
        <div className='header-info'>
          <div>
            <span className=''>Help / </span>
            <span>Support / </span>
            <span>Contact</span>
          </div>
            <span>call us: +251999999999   </span>
          <div>
            <span>ETB   </span>
            <select name="languages" id="" className='languages'>
              <option value="english">English</option>
              <option value="amharic">Amharic</option>
            </select>
            <span> My Dashboard</span>
          </div>
            
        </div>
        <div className='search-area'>
          
          <img src={Logo} alt="LOGO" className='logo-image' />

          <div>
            <input type="text" placeholder='Search Products...' className='search-field' />
            <select name="catagory" id="" className='search-options'>
              <option value="food">Foods</option>
              <option value="accesories">Accesories</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
            </select>
            <button className='search-button'>Search</button>
          </div>

          <div className='sign-ins'>
            <button className="cart-button"><FaShoppingCart className='top-cart-icon'/></button>
            <div className='sign-holder'>
             <button className="sign-btn sign-in"> sign In </button>
             <button className="sign-btn sign-up">sign Up</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header