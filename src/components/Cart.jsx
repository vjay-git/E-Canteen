import React from 'react';
import '../styles/Cart.css';

function Cart({ cartItems, removeFromCart }) {
  // Grouping items by name and quantity
  const groupedItems = cartItems.reduce((acc, item) => {
    const key = item.name;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 };
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});

  const totalPrice = Object.values(groupedItems).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty...</p>
      ) : (
        <div className="cart-body">
          <ul className="cart-list">
            {Object.values(groupedItems).map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">₹{item.price} x {item.quantity}</span>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.name)}>
                  ✖
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong> ₹{totalPrice}
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
