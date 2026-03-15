import Cards from "./Cards.jsx";
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";
//import product from "./data/products.js";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ImCrying } from "react-icons/im";


function Cart() {
  const {cart, updateQuantity, removeItem, clearCart, addToWishList} = useContext(CartContext);

  function handleIncrease(itemId){
    updateQuantity(itemId, 1);
  }
  function handleDecrease(itemId){  
    updateQuantity(itemId, -1);
  }

  const handleDelete = (itemId) => {
    removeItem(itemId);
  }

  const handleClearCart = () => {
    clearCart();
  }
  
/*   const handleWishList = (product) => {
    addToWishList(product);
  } */
  
  return (
    
    <div className="cart-page">
      <div className="added-items">
        <h1>items</h1>
        {cart.length === 0 ? (
        <ImCrying className="crying-emoji"/>):(<>
        <h1>Added items {cart.length}</h1>
        <div className="clear-btn-container">
          <button className="clear-cart-button" onClick={()=>handleClearCart()}>Clear Cart</button>
        </div>
        </>
        )

        }
         {cart.length === 0 ?(
          <p>Your Cart is empty</p>
        ) :(
          <>
        
         {cart.map((item) => (
          <div key={item.id} className="cart-item">
              {JSON.stringify(item.id)}
            <div className="item-container">
              <img src={item.image} alt="product-img" />
              <h2>{item.name}</h2>
              <p>${item.newPrice}</p> 
              <div className="cart-page-buttons">
                <div className="pcs">
                  <button className="decrease-button" onClick={()=>handleDecrease(item.id)}>-</button>
                  <p>{item.quantity}PCS</p>
                  <button className="increase-button" onClick={()=>handleIncrease(item.id)}>+</button>
                </div>
                <div className="save-delete-button">
                  <button className="save-button" onClick={()=>{addToWishList(item)}}><FaHeart />Save</button> 
                  <button className="delete-button" onClick={()=>handleDelete(item.id)}><RiDeleteBin6Line />Delete</button>
                </div>
              </div>
            </div>
          
            <div className="total-products">
              <div className="prices-list">
                <h2 className="product-price">Product: ${item.newPrice*item.quantity}</h2>
                <h2 className="discount">Discount:  $0 </h2>
                <h2 className="tax">Tax: ${(item.newPrice*0.15)}</h2>
                <h2 className="product-price">Service Fee: ${item.oldPrice}</h2>
                <h2 className="coupon">Coupon: $0</h2>
                <h1 className="total-price">Total Price: $2000</h1>
              </div>
              
              <div className="checkout">
                <button className="checkout-button">Go to checkout</button>
                <button className="clear-button">Clear</button>
              </div>
            </div>  
          </div>
    
        ))}
        

        </>)}
      </div>
      

    </div>
  );
    
}

export default Cart;