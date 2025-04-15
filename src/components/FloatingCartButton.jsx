// src/components/FloatingCartButton.jsx
import React from 'react';
import { ShoppingCart } from 'lucide-react'; // optional: install lucide-react for icons
import '../styles/FloatingCartButton.css';

function FloatingCartButton({ itemCount, onClick }) {
  return (
    <button className="floating-cart-btn" onClick={onClick}>
      <ShoppingCart size={24} />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </button>
  );
}

export default FloatingCartButton;
