import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.nombre}</h4>
        <p className="cart-item-desc">{item.descripcion}</p>
        <p className="cart-item-price">${item.precio.toFixed(2)}</p>
      </div>
      <button 
        className="remove-item-btn"
        onClick={() => onRemove(item)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;