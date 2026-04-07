import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";
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

  return (
    
    <div className="cart-page">
      <div className="added-items">
        <h1>Shopping Cart</h1>
         {cart.length === 0 ?(
          <div style={{textAlign: 'center', padding: '40px 20px'}}>
            <ImCrying className="crying-emoji"/>
            <h2 style={{color: '#6c757d', marginBottom: '10px'}}>Your Cart is Empty</h2>
            <p style={{color: '#6c757d'}}>Add some products to get started!</p>
          </div>
        ) :(

          <>
         <h2>Items in Cart: {cart.length}</h2>
         <div className="clear-btn-container">
          <button className="clear-cart-button" onClick={()=>handleClearCart()}>Clear Cart</button>
        </div>
         {cart.map((item) => (
          
          <div key={item.id} className="cart-item">
            <div className="item-container">
              <img src={item.image} alt="product-img" />
              <h2>{item.name}</h2>
              <p>${item.newPrice}</p>
              
              <div className="pcs">
                <button className="decrease-button" onClick={()=>handleDecrease(item.id)}>-</button>
                <p>{item.quantity} PCS</p>
                <button className="increase-button" onClick={()=>handleIncrease(item.id)}>+</button>
              </div>
              
              <div className="save-delete-button">
                <button className="save-button" onClick={()=>{addToWishList(item)}}><FaHeart />Save</button> 
                <button className="delete-button" onClick={()=>handleDelete(item.id)}><RiDeleteBin6Line />Delete</button>
              </div>
            </div>
          </div>
          
        ))}

        <div className="total-products">
          <div className="prices-list">
            <h2 className="product-price">Subtotal: ${cart.length > 0 ? cart.reduce((total, item) => total + (parseFloat(item.newPrice || 0) * (item.quantity || 1)), 0).toFixed(2) : '0.00'}</h2>
            <h2 className="discount">Discount: $0.00</h2>
            <h2 className="tax">Tax: ${cart.length > 0 ? cart.reduce((total, item) => total + (parseFloat(item.newPrice || 0) * 0.15 * (item.quantity || 1)), 0).toFixed(2) : '0.00'}</h2>
            <h2 className="product-price">Service Fee: ${cart.length > 0 ? cart.reduce((total, item) => total + parseFloat(item.oldPrice || 0), 0).toFixed(2) : '0.00'}</h2>
            <h2 className="coupon">Coupon: $0.00</h2>
            <h1 className="total-price">Total: ${cart.length > 0 ? cart.reduce((total, item) => {
              const subtotal = parseFloat(item.newPrice || 0) * (item.quantity || 1);
              const tax = parseFloat(item.newPrice || 0) * 0.15 * (item.quantity || 1);
              const serviceFee = parseFloat(item.oldPrice || 0);
              return total + subtotal + tax + serviceFee;
            }, 0).toFixed(2) : '0.00'}</h1>
          </div>
          
          <div className="checkout">
            <button className="checkout-button">Go to checkout</button>
            <button className="clear-button" onClick={()=>handleClearCart()}>Clear All</button>
          </div>
        </div>

        </>)}

      </div>
      

    </div>
  );
    
}

export default Cart;