import React from 'react';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./context/CartContext.jsx";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbHeartBrokenFilled } from "react-icons/tb";
import { ImCrying } from "react-icons/im";

const SavedItem = () => {
    const { wishList, removeFromWishList, clearWishList, addToCart } = useContext(CartContext);

    const handleDelete = (itemId) => {
        removeFromWishList(itemId);
        console.log(itemId);
    }

    const handelClearWishList = ()=>{
        clearWishList();
        console.log();
        console.log(wishList)
    }

    const subtotal = wishList.reduce(
        (total, item) => total + parseFloat(item.newPrice || 0),
        0
    );
    const tax = wishList.reduce(
        (total, item) => total + (parseFloat(item.newPrice || 0) * 0.15),
        0
    );
    const serviceFee = wishList.reduce(
        (total, item) => total + parseFloat(item.oldPrice || 0),
        0
    );
    const totalAmount = subtotal + tax + serviceFee;

  return (
    <div className="wish-list-page">
        {wishList.length === 0 ? (
        <div style={{textAlign: 'center', padding: '40px 20px'}}>
          <ImCrying className="crying-emoji"/>
          <h2 style={{color: '#6c757d', marginBottom: '10px'}}>No Saved Items</h2>
          <p style={{color: '#6c757d'}}>Save some products to see them here!</p>
        </div>
        ):(
        <div className="wish-list-layout">
            <div className="wish-list-items-section">
                {/*<h1>Saved Items</h1>
                <h2>Items in Wishlist: {wishList.length}</h2>
                <div className="clear-btn-container">
                    <button className="clear-cart-button" onClick={()=>handelClearWishList()}>Cle   ar Wishlist</button>
                </div>*/}
                {wishList.map((item) =>(
                    <div key={item._id} className="saved-item">
                        <div className="wish-item-container">
                            <img src={item.image} alt="product-img" className='wish-item-image' />
                            <div className="wish-item-details">
                                <h3>{item.name}</h3>
                                <p>${item.newPrice}</p>
                            </div>
                            <div className="wish-item-buttons">
                                <button className="add-to-cart-button" title="Add to cart" onClick={()=>{addToCart(item)}}>Add Cart</button>
                                <button className="delete-button" title="Delete item" onClick={()=>handleDelete(item._id)}><TbHeartBrokenFilled /></button>
                            </div>
                        </div>
                    </div>  
                ))}
            </div>

            <div className="wish-list-summary">
                <div className="prices-list">
                    <h2 className="product-price">Subtotal: ${subtotal.toFixed(2)}</h2>
                    <h2 className="discount">Discount: $0.00</h2>
                    <h2 className="tax">Tax: ${tax.toFixed(2)}</h2>
                    <h2 className="product-price">Service Fee: ${serviceFee.toFixed(2)}</h2>
                    <h2 className="coupon">Coupon: $0.00</h2>
                    <h1 className="total-price">Total: ${totalAmount.toFixed(2)}</h1>
                </div>

                <div className="wish-list-actions">
                    <Link to="/checkOut" className="checkout-button">Go to checkout</Link>
                    <button className="clear-button" onClick={()=>handelClearWishList()}>Empty Wishlist</button>
                </div>
            </div>
        </div>
          )
        }
    </div>
  )
}

export default SavedItem