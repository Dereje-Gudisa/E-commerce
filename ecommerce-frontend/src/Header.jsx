import React, { useContext, useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Logo from "./assets/logo.svg";
import { CartContext } from './context/CartContext';
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './HeaderNav.css';

const Header = () => {
  const { cart, wishList, setSearch, setCategory, search, filteredProducts  } = useContext(CartContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleSearch = (searchInput)=>{
    setSearch(searchInput);
    console.log("searching for: " + searchInput);
    console.log(search);
    console.log(searchInput);
  }

  const handleSearching = (input)=>{
    console.log("searching for: " + input);
    console.log(search);
    console.log(JSON.stringify(search));
    console.log(input);
  }

  const handleCategory = (categoryInput)=>{
    setCategory(categoryInput);
  }

  const handleSelect = (name)=>{
    console.log(name + " selected");
    setIsFocused(false);
    setSearch(name);
  }

  const [isFocused, setIsFocused] = useState(false);

  useEffect(()=>{
    const storedUser = localStorage.getItem('user')
    if(storedUser){
      setUser(JSON.parse(storedUser))
      console.log(user)
    }
  }, []);

  const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/')
        window.location.reload();
  };

  return (
    <div className='header'>
      <div className="header-info">
        
        {/* Left Side: Branding Title / Logo */}
        <h2 onClick={() => navigate('/')}>MyeCommerce</h2>

        {/* Center Section: Search Inputs */}
        <div className="search-area">
          <input 
            type="text" 
            className='search-field' 
            placeholder='Search items here...' 
            value={search} 
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
          <button className='search-button' onClick={() => navigate('/searchResultPage')}>
            Search
          </button>

          {isFocused && search && (
            <div className="search-result">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id || product._id} 
                  className="search-item-row" 
                  onMouseDown={() => handleSelect(product.name)}
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side Action Shell: Holds badged item summaries and gateway controls */}
        <div className="header-actions-group">
          
          {/* Sub-Wrapper 1: Shopping Cart and Saved Item badged launchers */}
          <div className="utility-buttons">
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

          {/* Sub-Wrapper 2: Identity Session Sign In / Out Links */}
          <div className='sign-holder'>
            { user ? (
              <button className='sign-btn sign-up' onClick={handleSignOut} >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/signInPage">
                  <button className="sign-btn sign-in"> sign In </button>
                </Link>
                <Link to="/signUp">
                  <button className="sign-btn sign-up">sign Up</button>
                </Link>
              </>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Header;