import React from 'react';
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbHeartBrokenFilled } from "react-icons/tb";
import { ImCrying } from "react-icons/im";

const SavedItem = () => {
    const {wishList, removeFromWishList} = useContext(CartContext);

    const handleDelete = (itemId) => {
        removeFromWishList(itemId);
        console.log(itemId);
    }

  return (
    <div className="wish-list-container">
        {wishList.length === 0 ? (<>
        <ImCrying className="crying-emoji"/>
        <h1>No wish list</h1>
        </>
        ):(
        <>  
            {wishList.map((item) =>(
                <div key={item.id} className="saved-item">
                    <div className="wish-item-container">

                        <img src={item.image} alt="product-img" className='wish-item-image' />
                        <h2>{item.name}</h2>
                        <div className="saved-page-button">
                            
                            <button className = "remove-from-wish-list-button" onClick={()=>handleDelete(item.id)}><TbHeartBrokenFilled />Unsave</button>

                        </div>
                    </div>
            </div>  
            ))

            }

                <div className="checkout">
                    <button className="checkout-button">Go to checkout</button>
                    <button className="clear-wish-list">Empty Wish List</button>
                </div>
        </>
          )
        }
    </div>
  )
}

export default SavedItem