import React from 'react';
import { cartItems, removeFromCart } from "../../helper/cart";
function Cart({ cart, removeFromCart }) {

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <div>
      {console.log('a', cart)}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <strong>{item.title}</strong> - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total">
              <h2>Total: ${total.toFixed(2)}</h2>
            </div>
        </div>
      )}
    </div>
  );
}
export default Cart