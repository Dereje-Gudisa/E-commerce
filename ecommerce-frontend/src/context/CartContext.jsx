import React, { createContext, useState, useEffect } from 'react';
//import products from '../data/products';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  // 🟢 Add a state to store live products from MongoDB
    const [dbProducts, setDbProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [cart, setCart] = useState(() => {
      try {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        return [];
      }
    });

    const [wishList, setWishList] = useState(() => {
      try {
        const storedWishList = localStorage.getItem('wishList');
        return storedWishList ? JSON.parse(storedWishList) : [];
      } catch (error) {
        console.error('Error loading wish list from localStorage:', error);
        return [];
      }
    });

    const [search, setSearch] = useState(() => {
      try {
        const storedSearch = sessionStorage.getItem('search');
        return storedSearch ? JSON.parse(storedSearch) : "";
      } catch (error) {
        console.error('Error loading search from sessionStorage:', error);
        return "";
      }
    });

    const [category, setCategory] = useState("all");
    const [searchResult, setSearchResult] = useState([]);

    // 🟢 FETCH LIVE PRODUCTS FROM MONGODB ATLAS VIA BACKEND
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) throw new Error('Failed to fetch items');
        const data = await response.json();
        setDbProducts(data);
      } catch (error) {
        console.error("Error loading live database products into context:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [API_BASE_URL]);
    
    const addToCart = (product) => {
      const existingCartItem = cart.find(item => item._id === product._id);

      if (!existingCartItem) {
        const productToAdd = {
          ...product,
          quantity: 1,
        };
        setCart(prevCart => [...prevCart, productToAdd]);
      }
    };

    const addToWishList = (item) => {
      
      console.log(wishList)
      console.log(item._id)
      console.log(item)
      console.log(item.length)

      if(!item){
        console.log(" No item provided");
        return

      }

      const curruntWishList = wishList || [];
      const existingWishItem = curruntWishList?.find(product => product._id === item._id);

      if(!existingWishItem){
      setWishList([...wishList, item])
      console.log("item added to the wish list")
      console.log(wishList.length)
      }
      else{
          console.log("item already exists", item._id)
      }
      console.log("Wishlist after:", wishList); //this shows old state due to closure

    };

    const updateQuantity = (id, change) => {
      setCart(
        prevCart => prevCart.map(item => {
          if (item._id !== id) return item;
          const currentQuantity = Number(item.quantity) || 1;
          return {
            ...item,
            quantity: Math.max(1, currentQuantity + change),
          };
        })
      );
    };

    const removeItem = (id) =>{
      setCart(prevCart => prevCart.filter(item => item._id !== id) );
    };
    
    const removeFromWishList = (id) =>{
      setWishList(prevCart => prevCart.filter(item => item._id !== id) );
      console.log(wishList.length)
    };
    
    const clearCart = () =>{
      setCart([]);
    };

    const clearWishList = ()=>{
      setWishList([]);
    }

    const filteredProducts = dbProducts.filter((product)=>{
        const matchesSearch = product.name?.toLowerCase().includes((search || "").toLowerCase());
        const matchesCategory = product.category?.toLowerCase() === category.toLowerCase() || category === "all";
    
        return matchesCategory && matchesSearch
      });
    //console.log("filtered products: " + JSON.stringify(filteredProducts));

  // Save cart to local storage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  // Save wish list to local storage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('wishList', JSON.stringify(wishList));
    } catch (error) {
      console.error('Error saving wishList to localStorage:', error);
    }
  }, [wishList]);

  return (
    <CartContext.Provider value={{ 
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        wishList,
        addToWishList,
        removeFromWishList,
        clearWishList,
        search,
        setSearch,
        setCategory,
        searchResult,
        setSearchResult,
        category,
        filteredProducts
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider