import React from 'react';
import '../styles/MenuItem.css';

function MenuItem({ name, price, onAdd }) {
  return (
    <li className="menu-item" onClick={onAdd} style={{ cursor: 'pointer' }}>
      {name} - ₹{price}
    </li>
  );
}

export default MenuItem;
