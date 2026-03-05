import React from 'react'

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
          <h1>D-mart</h1>

          <div>
            
            <input type="text" className='search-field' />
            <select name="catagory" id="" className='search-options'>
              <option value="food">Foods</option>
              <option value="accesories">Accesories</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
            </select>
            <button className='search-button'>Search</button>
          </div>

          <div className='sign-ins'>
            <button className="btn cart-button">cart</button>
            <button className="btn sign-in"> sign In</button>
            <button className="btn sign-up"> sign Up</button>
          </div>
        </div>
    </div>
  )
}

export default Header