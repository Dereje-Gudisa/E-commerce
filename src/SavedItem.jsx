import React from 'react';
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";

const SavedItem = () => {
    const {wishList} = useContext(CartContext)
  return (
    <div>
        Saved Item Page
        {wishList.map((item) =>(
            <div key={item.id} className="saved-item">
                {item.name}
            </div>
        ))
            
        }
    </div>
  )
}

export default SavedItem