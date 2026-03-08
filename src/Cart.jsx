import Cards from "./Cards.jsx";
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";


function Cart() {
  const {cart} = useContext(CartContext)
  return (
    <div className="cart-page">
      <div className="added-items">
        <p>Added items</p>
      </div>
      <div className="total-products">
        <div className="prices-list">
          <h2 className="product-price">Product  $2000</h2>
          <h2 className="discount">Discount  $0 </h2>
          <h2 className="tax">Tax $300</h2>
          <h2 className="product-price">Service Fee  $0</h2>
          <h2 className="coupon">Coupon $0</h2>
          <h1 className="total-price">Total Price $2000</h1>
          
        </div>
        <div className="checkout">
          <button className="checkout-button">Go to checkout</button>
          <button className="clear-button">Clear</button>
        </div>
      </div>
    </div>

  );
    
}

export default Cart;