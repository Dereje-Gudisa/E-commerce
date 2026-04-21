import React, {useContext, useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { RiStarSLine, RiStarFill } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { CartContext } from "./context/CartContext";

const Cards = ({product, showButton = true}) => {

  const { addToCart, addToWishList, removeFromWishList, wishList } = useContext(CartContext);

  // Check if product is in wishlist
  const isInWishlist = wishList.some(item => item.id === product.id);

  // Rating state - get from localStorage or default to product rating or 0
  const [rating, setRating] = useState(() => {
    const storedRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    return storedRatings[product.id] || (product.rating || 0);
  });

  const [hoverRating, setHoverRating] = useState(0);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishList(product.id);
    } else {
      addToWishList(product);
    }
  };

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    // Store rating in localStorage
    const storedRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    storedRatings[product.id] = newRating;
    localStorage.setItem('productRatings', JSON.stringify(storedRatings));
  };

  const handleRatingHover = (ratingValue) => {
    setHoverRating(ratingValue);
  };

  const handleRatingLeave = () => {
    setHoverRating(0);
  };

  return (

    <div className='card'>   
      <div className="image-container">
        <img src={product.image} alt="product"/>
      </div>
        <p className='item-class'>{product.category}</p>
        <h1 className='item-name'>{product.name}</h1>
        <div>
          <span className="old-price">{`$ ${product.oldPrice}`}</span>
          <span className="new-price">{`$ ${product.newPrice}`} </span>
        </div>
        {showButton && (<button className='add-to-cart' onClick={()=> {addToCart(product)}} >
          <FaShoppingCart className='cart-icon'/>Add to cart
        </button>)}<br />
        
        <div className="bottom-icons-container">
          <div className="ratings" onMouseLeave={handleRatingLeave}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => handleRatingHover(star)}
                style={{ cursor: 'pointer' }}
              >
                {star <= (hoverRating || rating) ? (
                  <RiStarFill style={{ color: 'orange' }} />
                ) : (
                  <RiStarSLine style={{ color: '#ddd' }} />
                )}
              </span>
            ))}
          </div>
          <button className='wish-list shuffle'>
            <FaShuffle className='shuffle-icon'/>
            {isInWishlist ? (
              <FaHeart className="wish-list-icon saved" onClick={handleWishlistToggle}/>
            ) : (
              <FaRegHeart className="wish-list-icon" onClick={handleWishlistToggle}/>
            )}
          </button>
        </div>
        
    </div>
  )
}

export default Cards