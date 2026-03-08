import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
    setCart([...cart, product]);

        console.log("1 item added to the cart")
        console.log(product.id)
    };
    console.log(cart)
  return (
    <CartContext.Provider value={{ 
         cart, addToCart
    }}> 
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider