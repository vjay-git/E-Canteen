import React, { useState, useRef } from 'react';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Cart from './components/Cart.jsx';
import Hero from './components/Hero.jsx';
import FloatingCartButton from './components/FloatingCartButton.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartRef = useRef(null);

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.name === itemName);
      if (index !== -1) {
        const updated = [...prevItems];
        updated.splice(index, 1);
        return updated;
      }
      return prevItems;
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#fff8f0] to-[#f0f0ff] min-h-screen text-gray-800 font-sans">
      <Header />
      <Hero />
      <Menu addToCart={addToCart} />
      <div ref={cartRef}>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
      <FloatingCartButton itemCount={cartItems.length} onClick={scrollToCart} />
    </div>
  );
}

export default App;
