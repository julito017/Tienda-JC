import React, { useState } from 'react';

const ListaProductos = () => {
  // Estado inicial con TODOS los productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Arroz Premium", precio: 18.50, imagen: "/img/producto1.jpg" },
    { id: 2, nombre: "Leche Entera", precio: 4.50, imagen: "/img/producto2.jpg" },
    { id: 3, nombre: "Pan Integral", precio: 6.00, imagen: "/img/producto3.jpg" },
    { id: 4, nombre: "Huevos de Gallina", precio: 8.50, imagen: "/img/producto4.jpg" },
    { id: 5, nombre: "Queso Fresco", precio: 15.00, imagen: "/img/producto5.jpg" },
    { id: 6, nombre: "Manzanas Rojas", precio: 7.80, imagen: "/img/producto6.jpg" },
    { id: 7, nombre: "Plátano de Seda", precio: 5.50, imagen: "/img/producto7.jpg" },
    { id: 8, nombre: "Yogurt Natural", precio: 9.90, imagen: "/img/producto8.jpg" },
    { id: 9, nombre: "Azúcar Rubia", precio: 6.80, imagen: "/img/producto9.jpg" },
    { id: 10, nombre: "Aceite Vegetal", precio: 12.50, imagen: "/img/producto10.jpg" }
  ]);

  // Productos adicionales para agregar (3 más)
  const productosAdicionales = [
    { id: 11, nombre: "Café Molido", precio: 22.90, imagen: "/img/producto1.jpg" },
    { id: 12, nombre: "Galletas de Avena", precio: 8.30, imagen: "/img/producto2.jpg" },
    { id: 13, nombre: "Jabón Líquido", precio: 14.20, imagen: "/img/producto3.jpg" }
  ];

  // Función para agregar más productos
  const agregarProductos = () => {
    setProductos([...productos, ...productosAdicionales]);
  };

  return (
    <div className="lista-productos">
      <h2>Lista de Productos - Sprint 10</h2>
      <p className="descripcion">Gestiona el inventario de productos del supermercado</p>
      
      <div className="productos-grid-lista">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card-lista">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="precio">S/ {producto.precio.toFixed(2)}</p>
            <span className="producto-id">ID: {producto.id}</span>
          </div>
        ))}
      </div>

      <button onClick={agregarProductos} className="btn-agregar-mas">
        ➕ Agregar 3 Productos Extra
      </button>

      <div className="estadisticas">
        <p>Total de productos: <strong>{productos.length}</strong></p>
        <p>Valor total del inventario: <strong>S/ {productos.reduce((total, prod) => total + prod.precio, 0).toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

export default ListaProductos;