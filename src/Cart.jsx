import Cards from "./Cards.jsx";
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";

function Cart() {
  const {cart} = useContext(CartContext)
  return (
    <div className="Cart">
      <p>cart page</p>
    </div>

  );
    
}

export default Cart;