import Cards from "./Cards.jsx";
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";
import products from "./data/products.js";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


function Cart() {
  const {cart, updateQuantity} = useContext(CartContext);
  let pieces = 1;

  function handleIncrease(itemId){
    updateQuantity(itemId, 1);
  }
  function handleDecrease(itemId){
    updateQuantity(itemId, -1);
  }
  
  return (
    
    <div className="cart-page">
      <div className="added-items">
        <h1>Added items</h1>
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
                  <p>{item.length}PCS</p>
                  <button className="increase-button" onClick={()=>handleIncrease(item.id)}>+</button>
                </div>
                <div className="save-delete-button">
                  <button className="save-button"><FaHeart />Save</button>
                  <button className="delete-button"><RiDeleteBin6Line />Delete</button>
                </div>
              </div>
            </div>
          
            <div className="total-products">
              <div className="prices-list">
                <h2 className="product-price">Product: ${item.newPrice}</h2>
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