/* import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='notFound-page'>
        NotFound Page
    </div>
  )
}

export default NotFoundPage */

import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './context/CartContext.jsx';
import { FaShoppingCart, FaHeart, FaRegHeart, FaArrowLeft } from "react-icons/fa";
import { RiStarSLine, RiStarFill } from "react-icons/ri";
import './NotFoundPage.css';

const NotFoundPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishList, removeFromWishList, wishList } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoverRating, setHoverRating] = useState(0);

  // Fetch product from backend by ID
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id, API_BASE_URL]);

  // Wishlist logic matching Cards logic
  const isInWishlist = wishList.some(item => item._id === product?._id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishList(product._id);
    } else {
      addToWishList(product);
    }
  };

  // Rating persistence logic
  const [rating, setRating] = useState(() => {
    const storedRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    return storedRatings[id] || 0;
  });

  // Dynamic initialization when product loads
  useEffect(() => {
    if (product) {
      const storedRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
      setRating(storedRatings[product._id] || product.rating || 0);
    }
  }, [product]);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    const storedRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    storedRatings[product._id] = newRating;
    localStorage.setItem('productRatings', JSON.stringify(storedRatings));
  };

  if (loading) {
    return (
      <div className="single-page-loading">
        <div className="spinner"></div>
        <p>Loading item details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="single-page-error">
        <h2>Oops! Product Not Found</h2>
        <button onClick={() => navigate('/')} className="back-home-btn">
          <FaArrowLeft /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="single-product-page">
      <button onClick={() => navigate(-1)} className="back-nav-btn">
        <FaArrowLeft /> Back
      </button>

      <div className="single-product-container">
        {/* Left Side: Image Area */}
        <div className="product-image-section">
          <div className="main-image-wrapper">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Right Side: Information Details & Purchase Triggers */}
        <div className="product-info-section">
          <span className="product-meta-category">{product.category}</span>
          <h1 className="product-main-title">{product.name}</h1>

          {/* Interactive Ratings Row */}
          <div className="product-rating-row" onMouseLeave={() => setHoverRating(0)}>
            <div className="stars-wrapper">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  className="interactive-star"
                >
                  {star <= (hoverRating || rating) ? (
                    <RiStarFill className="star-icon filled" />
                  ) : (
                    <RiStarSLine className="star-icon empty" />
                  )}
                </span>
              ))}
            </div>
            <span className="rating-numerical-label">
              ({rating > 0 ? rating.toFixed(1) : "No rating yet"})
            </span>
          </div>

          {/* Pricing Row Layer */}
          <div className="product-price-row">
            {product.oldPrice && (
              <span className="product-old-price">${product.oldPrice}</span>
            )}
            <span className="product-new-price">${product.newPrice}</span>
          </div>

          {/* Description Block */}
          <div className="product-description-block">
            <h3>Product Overview</h3>
            <p>
              {product.description || 
              "Experience the perfect combination of design and everyday functionality. Crafted using premium, long-lasting materials and designed to blend seamlessly into your lifestyle, this item delivers premium performance day in and day out."}
            </p>
          </div>

          {/* Checkout and Interaction Buttons Grid */}
          <div className="product-actions-grid">
            <button className="add-cart-primary" onClick={() => addToCart(product)}>
              <FaShoppingCart /> Add to Shopping Cart
            </button>
            
            <button 
              className={`wishlist-secondary ${isInWishlist ? 'active-saved' : ''}`} 
              onClick={handleWishlistToggle}
              title={isInWishlist ? "Remove from wishlist" : "Save to wishlist"}
            >
              {isInWishlist ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;