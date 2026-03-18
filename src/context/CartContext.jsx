import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);

    const addToCart = (product) => {
      const existingCartItem = cart.find(item => item.id === product.id);
      console.log(cart)

      if(!existingCartItem){
        setCart([...cart, product]);
        console.log(product)
        console.log("1 item added to the cart")
        console.log(product.id)
        console.log(product)
      };    
      
        
    };
//////////////////
// there is more to it 

    const addToWishList = (item) => {
      
      console.log(wishList)
      console.log(item.id)
      console.log(item)
      console.log(item.length)

      if(!item){
        console.log(" No item provided");
        return

      }

      const curruntWishList = wishList || [];
      const existingWishItem = curruntWishList?.find(product => product.id === item.id);

      if(!existingWishItem){
      setWishList([...wishList, item])
      console.log("item added to the wish list")
      console.log(wishList.length)
      }
      else{
          console.log("item already exists", item.id)
      }
      console.log("Wishlist after:", wishList);

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
    
    const removeFromWishList = (id) =>{
      setWishList(prevCart => prevCart.filter(item => item.id !== id) );
      console.log(wishList.length)
    };
    
    const clearCart = () =>{
      setCart([]);
    };


  return (
    <CartContext.Provider value={{ 
         cart, addToCart, updateQuantity, removeItem, clearCart, wishList, addToWishList, removeFromWishList
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider