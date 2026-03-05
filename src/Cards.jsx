import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";


import product1 from './assets/product-4.png';
const Cards = () => {
  return (
    <div className='card'>
      <div className="image-container">
        <img src={product1} alt="product 4"/>
      </div>
        <p className='item-class'>camera</p>
        <h1 className='item-name'>Canon camera</h1>
        <div>
          <span className="old-price">$1,500</span>
          <span className="new-price">$1,000 </span>
        </div>
        <button className='add-to-cart'><FaShoppingCart className='cart-icon'/>Add to cart</button><br />
        <div className="bottom-icons-container">
          <button className="ratings">
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          </button>
          <button className='wish-list shuffle'>
            <FaShuffle className='shuffle-icon'/>
            <FaHeart className='wish-list-icon'/>
          </button>
        </div>
        
    </div>
  )
}

export default Cards