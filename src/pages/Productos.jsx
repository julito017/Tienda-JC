import React from 'react';
import Producto from '../components/Producto';

const Productos = () => {
  const productos = [
    {
      nombre: "Arroz Premium",
      precio: "18.50",
      imagen: "/img/producto1.jpg",
      descripcion: "Grano largo, calidad superior, 5kg."
    },
    {
      nombre: "Leche Entera",
      precio: "4.50",
      imagen: "/img/producto2.jpg",
      descripcion: "Fresca y nutritiva, 1 litro."
    },
    {
      nombre: "Pan Integral",
      precio: "6.00",
      imagen: "/img/producto3.jpg",
      descripcion: "Horneado del día, saludable y delicioso."
    },
    {
      nombre: "Huevos de Gallina",
      precio: "8.50",
      imagen: "/img/producto4.jpg",
      descripcion: "Docena de huevos frescos de granja."
    },
    {
      nombre: "Queso Fresco",
      precio: "15.00",
      imagen: "/img/producto5.jpg",
      descripcion: "Queso artesanal de alta calidad, 500g."
    },
    {
      nombre: "Manzanas Rojas",
      precio: "7.80",
      imagen: "/img/producto6.jpg",
      descripcion: "Kilo de manzanas frescas y jugosas."
    },
    {
      nombre: "Plátano de Seda",
      precio: "5.50",
      imagen: "/img/producto7.jpg",
      descripcion: "Kilo de plátanos dulces y frescos."
    },
    {
      nombre: "Yogurt Natural",
      precio: "9.90",
      imagen: "/img/producto8.jpg",
      descripcion: "Botella de 1 litro, probióticos y saludable."
    },
    {
      nombre: "Azúcar Rubia",
      precio: "6.80",
      imagen: "/img/producto9.jpg",
      descripcion: "Bolsa de 2kg, sin aditivos artificiales."
    },
    {
      nombre: "Aceite Vegetal",
      precio: "12.50",
      imagen: "/img/producto10.jpg",
      descripcion: "Botella de 1 litro, ideal para cocina."
    }
  ];

  return (
    <main>
      <h1>Nuestros Productos</h1>
      <section className="productos-grid">
        {productos.map((producto, index) => (
          <Producto
            key={index}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            descripcion={producto.descripcion}
          />
        ))}
      </section>
    </main>
  );
};

export default Productos;