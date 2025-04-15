import React from 'react';
import '../styles/Menu.css';
import MenuItem from './MenuItem.jsx';

const foodItems = [
  { id: 1, name: 'Pizza', price: 150 },
  { id: 2, name: 'Burger', price: 80 },
  { id: 3, name: 'Fries', price: 50 },
  { id: 4, name: 'Cold Coffee', price: 60 }
];

function Menu({ addToCart }) {
  return (
    <section className="menu-section">
      <h2 className="menu-title">🍽️ Our Signature Dishes</h2>
      <ul className="menu-list">
        {foodItems.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            onAdd={() => addToCart(item)}
          />
        ))}
      </ul>
    </section>
  );
}

export default Menu;
