import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Acerca from './pages/Acerca';
import Carrito from './pages/Carrito';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, id: Date.now() }]);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="App">
        <Header cartItemsCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route 
            path="/productos" 
            element={<Productos onAddToCart={handleAddToCart} />} 
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route 
            path="/carrito" 
            element={
              <Carrito 
                cartItems={cartItems} 
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
              />
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;