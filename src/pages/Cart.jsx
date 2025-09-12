import React from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>🛒 Tu carrito está vacío</h2>
        <p>No hay productos en tu carrito de compras.</p>
        <Link to="/catalog" className="continue-shopping-btn">
          ← Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>🛒 Carrito de Compras</h2>
        <button onClick={onClearCart} className="clear-cart-btn">
          🗑️ Vaciar carrito
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemoveItem}
            />
          ))}
        </div>

        <div className="cart-sidebar">
          <CartSummary cartItems={cartItems} />
          
          <Link to="/catalog" className="continue-shopping-link">
            ← Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;