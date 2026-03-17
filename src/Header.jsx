import React, {useContext} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Logo from "./assets/logo.svg";
import { CartContext } from './context/CartContext';
import { FaHeart } from "react-icons/fa";
import {Routes, Route, Link } from 'react-router-dom';
import products from './data/products';

const Header = () => {
  const { cart, wishList, setSearch, setCategory, search, category  } = useContext(CartContext);
  
////////////////////
  const handleSearch = (searchInput)=>{
    setSearch(searchInput);
  }

  const handleCategory = (categoryInput)=>{
    setCategory(categoryInput);
  }

  const filteredProducts = products.filter((product)=>{
    const matchesSearch = product.title?.toLowerCase().includes((search || "").toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    console.log(matchesSearch);
    return matchesCategory && matchesSearch
  });

  //////////// 
                                      
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
            <input type="text" placeholder='Search Products...' className='search-field' onChange={(e) => handleSearch(e.target.value)}/>
            <select name="catagory" id="" className='search-options' onChange={(e) => handleCategory(e.target.value) }>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="food">Foods</option>
              <option value="accesories">Accesories</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
            </select>
            <button className='search-button'>Search</button>
          </div>

          <div className='sign-ins'>

            <div className="cart-icon-badge">
              <Link to="/Cart">
              <button className="cart-button">
                <div className="badge">
                  {cart.length}
                </div>
                <FaShoppingCart className='top-cart-icon'/>
              </button>
              </Link>

              <Link to="/SavedItem">
              <button className="cart-button">
                <div className="badge">
                  {wishList.length}
                </div>
                <FaHeart className='wish-list-icon'/>
              </button>
              </Link>

            </div>
            <div className='sign-holder'>
             <button className="sign-btn sign-in"> sign In </button>
             <button className="sign-btn sign-up">sign Up</button>
            </div>
          </div>
        </div>

        <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              
            >
              <h4>{product.title}</h4>
              <p>Category: {product.category}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      
    </div>
    
  )
}

export default Header