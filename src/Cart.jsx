import Cards from "./Cards.jsx";
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";
import products from "./data/products.js";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


function Cart() {
  const {cart} = useContext(CartContext);
  
  return (
    <div className="cart-page">
      <div className="added-items">
        <p>Added items</p>
         {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt="product-img" />
            <h2>{item.name}</h2>
            <p>${item.newPrice}</p>
            <div className="cart-page-buttons">
              <div className="pcs">
                <button className="decrease-button">-</button>
                <p>PCS</p>
                <button className="increase-button">+</button>
              </div>
              <div className="save-delete-button">
                <button className="save-button"><FaHeart />Save</button>
                <button className="delete-button"><RiDeleteBin6Line />Delete</button>
              </div>
            </div>
            
          </div>
        ))}
        {/* {cart.map((item)=>(
          <Cards key={item.id} product={item} showButton={false} />
        ))} */}
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