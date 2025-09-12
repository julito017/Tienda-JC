import React, { useState } from 'react';

const Producto = ({ nombre, precio, imagen, descripcion, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const agregarAlCarrito = () => {
    onAddToCart({
      nombre,
      precio: parseFloat(precio),
      imagen,
      descripcion
    });
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <span className="precio">S/ {precio}</span>
      <button 
        className={`btn-agregar ${added ? 'added' : ''}`} 
        onClick={agregarAlCarrito}
      >
        {added ? '✓ Agregado' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default Producto;