import React from 'react';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./context/CartContext.jsx";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbHeartBrokenFilled } from "react-icons/tb";
import { ImCrying } from "react-icons/im";

const SavedItem = () => {
    const { wishList, removeFromWishList, clearWishList } = useContext(CartContext);

    const handleDelete = (itemId) => {
        removeFromWishList(itemId);
        console.log(itemId);
    }

    const handelClearWishList = ()=>{
        clearWishList();
        console.log();
        console.log(wishList)
    }

  return (
    <div className="wish-list-container">
        {wishList.length === 0 ? (
        <div style={{textAlign: 'center', padding: '40px 20px'}}>
          <ImCrying className="crying-emoji"/>
          <h2 style={{color: '#6c757d', marginBottom: '10px'}}>No Saved Items</h2>
          <p style={{color: '#6c757d'}}>Save some products to see them here!</p>
        </div>
        ):(
        <>  
            {wishList.map((item) =>(
                <div key={item.id} className="saved-item">
                    <div className="wish-item-container">
                        <img src={item.image} alt="product-img" className='wish-item-image' />
                        <h2>{item.name}</h2>
                        <div className="saved-page-button">
                            <button className = "remove-from-wish-list-button" onClick={()=>handleDelete(item.id)}><TbHeartBrokenFilled />Remove</button>
                        </div>
                    </div>
            </div>  
            ))

            }

                <div className="checkout">
                    <Link to="/checkOut" className="checkout-button checkout-link">Go to checkout</Link>
                    <button className="clear-wish-list" onClick={()=>handelClearWishList()}>Empty Wish List</button>
                </div>
        </>
          )
        }
    </div>
  )
}

export default SavedItem