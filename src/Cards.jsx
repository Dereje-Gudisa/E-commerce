import React, {useContext} from 'react';
import {Routes, Route } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { CartContext } from "./context/CartContext";

const Cards = ({product}) => {

  const { addToCart } = useContext(CartContext);

  return (

    <div className='card'>
      <div className="image-container">
        <img src={product.image} alt="product"/>
      </div>
        <p className='item-class'>{product.catagory}</p>
        <h1 className='item-name'>{product.name}</h1>
        <div>
          <span className="old-price">{`$ ${product.oldPrice}`}</span>
          <span className="new-price">{`$ ${product.newPrice}`} </span>
        </div>
        <button className='add-to-cart' onClick={()=> {addToCart(product)}} >
          <FaShoppingCart className='cart-icon'/>Add to cart
        </button><br />
        
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