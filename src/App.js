// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>Product Listing App</h1>
      <ProductList products={products} addToCart={addToCart} />
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
