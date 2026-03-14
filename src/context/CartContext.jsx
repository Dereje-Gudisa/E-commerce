import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    const addToCart = (product) => {
    setCart([...cart, product]);

        console.log("1 item added to the cart")
        console.log(product.id)
    };

    const addToWishList = (product) => {
      setWishList([...wishList, product]) 

      console.log(product.id)
      console.log(product)
      console.log(wishList)
      console.log("item added to the wish list")
    };

    const updateQuantity = (id, change) => {
      setCart(
        prevCart => prevCart.map(item => 
                    item.id === id ? {...item, quantity: Math.max(1,(item.quantity || 1)+ change)}
                    :item )
      );
      console.log(cart)  
    };

    const removeItem = (id) =>{
      setCart(prevCart => prevCart.filter(item => item.id !== id) );
    };
    const clearCart = () =>{
      setCart([]);
    };


  return (
    <CartContext.Provider value={{ 
         cart, addToCart, updateQuantity, removeItem, clearCart, wishList, addToWishList
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider