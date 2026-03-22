import React, {useContext, useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Logo from "./assets/logo.svg";
import { CartContext } from './context/CartContext';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  const { cart, wishList, setSearch, setCategory, search, filteredProducts  } = useContext(CartContext);
  
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
            <span>
              <select name="curruncies" className="curruncies">
                <option value="birr" id="">ETB</option>
                <option value="dollar" id="">US</option>
              </select>
              </span>
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
            <input type="text" placeholder='Search Products...' value={search} className='search-field' onFocus={()=>{setIsFocused(true)}} onBlur={()=>{setIsFocused(false)}} onChange={(e) => handleSearch(e.target.value)}/>
            <select name="catagory" id="" className='search-options' onChange={(e) => handleCategory(e.target.value) }>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="foods">Foods</option>
              <option value="accessories">Accesories</option>
              <option value="books">Books</option>
              <option value="clothings">Clothing</option>
            </select>
            <Link to="/searchResultPage">
              <button className='search-button' onClick={() => handleSearching(search)}>Search</button>
            </Link>
            <div className="search-result">
              {isFocused && filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 4).map((product) => (

                  <div key={product.id} className="matched-lists" onMouseDown={()=>handleSelect(product.name)}>
                    <h4>{product.name}</h4>
                  </div>
                  
                  ))
                ) : ( isFocused &&
                <p>No products found</p>
                )}
                
          </div>
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
              <Link to="/signInPage">
                <button className="sign-btn sign-in"> sign In </button>
              </Link>
              <Link to="/signUp">
                <button className="sign-btn sign-up">sign Up</button>
              </Link>

            </div>
          </div>
        </div>
      
    </div>
    
  )
}

export default Header