import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext.jsx';

const CheckOut = () => {
  const { cart, clearCart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + (parseFloat(item.newPrice || 0) * (Number(item.quantity) || 1)),
    0
  );
  const tax = cart.reduce(
    (total, item) => total + (parseFloat(item.newPrice || 0) * 0.15 * (Number(item.quantity) || 1)),
    0
  );
  const serviceFee = cart.reduce(
    (total, item) => total + parseFloat(item.oldPrice || 0),
    0
  );
  const total = subtotal + tax + serviceFee;

  return (
    <div className='checkout-page'>
      <div className='checkout-container'>
        <h1>Checkout</h1>
        {cart.length === 0 ? (
          <div className='checkout-empty'>
            <p>Your cart is empty.</p>
            <Link to='/shop' className='checkout-link'>Continue shopping</Link>
          </div>
        ) : (
          <div className='checkout-grid'>
            <section className='checkout-form-section'>
              <h2>Billing information</h2>
              <form className='checkout-form'>
                <label>
                  Full name
                  <input type='text' placeholder='John Doe' />
                </label>
                <label>
                  Email address
                  <input type='email' placeholder='you@example.com' />
                </label>
                <label>
                  Address
                  <input type='text' placeholder='123 Main Street' />
                </label>
                <label>
                  City
                  <input type='text' placeholder='City' />
                </label>
                <label>
                  Postal code
                  <input type='text' placeholder='12345' />
                </label>
              </form>
            </section>

            <aside className='checkout-summary'>
              <h2>Order summary</h2>
              <div className='checkout-items'>
                {cart.map(item => (
                  <div key={item.id} className='checkout-item'>
                    <span>{item.name}</span>
                    <span>{`${Number(item.quantity) || 1} × $${item.newPrice}`}</span>
                  </div>
                ))}
              </div>

              <div className='checkout-totals'>
                <div className='checkout-total-row'>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='checkout-total-row'>
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className='checkout-total-row'>
                  <span>Service fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
                <div className='checkout-total-row checkout-total-final'>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className='checkout-actions'>
                <button className='checkout-button' type='button' onClick={clearCart}>
                  Place order
                </button>
                <button className='clear-button' type='button' onClick={clearCart}>
                  Clear cart
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;