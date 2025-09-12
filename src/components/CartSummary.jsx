import React from 'react';

const CartSummary = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div className="cart-summary">
      <h3>Resumen de Compra</h3>
      <div className="cart-items-list">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-summary-item">
            <span>{item.nombre}</span>
            <span>${item.precio.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
      <button className="checkout-btn">
        Finalizar Compra
      </button>
    </div>
  );
};

export default CartSummary;