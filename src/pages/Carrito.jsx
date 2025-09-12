import React from 'react';
import { Link } from 'react-router-dom';

const Carrito = ({ cartItems, onRemoveItem, onClearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);

  if (cartItems.length === 0) {
    return (
      <main>
        <div className="carrito-vacio">
          <h2>🛒 Tu carrito está vacío</h2>
          <p>No hay productos en tu carrito de compras.</p>
          <Link to="/productos" className="btn-seguir-comprando">
            ← Continuar comprando
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="carrito-contenedor">
        <div className="carrito-header">
          <h2>Tu Carrito de Compras</h2>
          <button onClick={onClearCart} className="btn-vaciar-carrito">
            🗑️ Vaciar carrito
          </button>
        </div>

        <div className="carrito-items">
          {cartItems.map((item) => (
            <div key={item.id} className="carrito-item">
              <img src={item.imagen} alt={item.nombre} className="carrito-item-imagen" />
              <div className="carrito-item-info">
                <h4>{item.nombre}</h4>
                <p>{item.descripcion}</p>
                <span className="carrito-item-precio">S/ {item.precio.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => onRemoveItem(item.id)}
                className="btn-eliminar-item"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <div className="carrito-resumen">
          <h3>Resumen de Compra</h3>
          <div className="resumen-detalles">
            <div className="resumen-fila">
              <span>Productos:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="resumen-fila total">
              <strong>Total:</strong>
              <strong>S/ {total.toFixed(2)}</strong>
            </div>
          </div>
          <button className="btn-finalizar-compra">
            Finalizar Compra
          </button>
          <Link to="/productos" className="btn-seguir-comprando">
            ← Seguir comprando
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Carrito;