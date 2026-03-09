import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cartPiece, setCartPiece] = useState([]);
    const addToCart = (product) => {
    setCart([...cart, product]);

        console.log("1 item added to the cart")
        console.log(product.id)
    };
    console.log(cart)
    const updateQuantity = (id, change) => {
      setCartPiece(
        prevCart => prevCart.map(item => 
                    item.id === id ? {...item, quantity: Math.max(1,(item.quantity || 1)+ change)}
                    :item )
      );
    };
  return (
    <CartContext.Provider value={{ 
         cart, addToCart, updateQuantity
    }}> 
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider