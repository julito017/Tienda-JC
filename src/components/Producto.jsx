import React from 'react';

const Producto = ({ nombre, precio, imagen, descripcion }) => {
  const agregarAlCarrito = () => {
    alert(`"${nombre}" agregado al carrito ✅`);
  };

  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <span className="precio">S/ {precio}</span>
      <button className="btn-agregar" onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Producto;