// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to LuxE-Canteen</h1>
        <p>Delicious Bites, Delivered Right</p>
        <button className="hero-cta">Explore Menu</button>
      </div>
    </section>
  );
}

export default Hero;
