import React from 'react';

const Acerca = () => {
  return (
    <main>
      <section className="acerca-intro">
        <h1>Sobre Nosotros</h1>
        <p>Desde nuestros inicios hemos trabajado para ofrecerte los mejores productos, con precios accesibles y calidad garantizada.</p>
      </section>

      <section className="mision-vision">
        <div className="mision">
          <h2>Misión</h2>
          <p>Proveer la mejor experiencia de compra a nuestros clientes, combinando calidad en los productos, precios justos y un servicio cercano.</p>
        </div>
        <div className="vision">
          <h2>Visión</h2>
          <p>Ser el supermercado líder en confianza y ahorro, llegando a cada hogar con productos frescos y accesibles.</p>
        </div>
      </section>

      <section className="historia">
        <div className="texto">
          <h2>📖 Nuestra Historia</h2>
          <p>Supermercado JC nació con el sueño de ofrecer precios bajos y productos de calidad a todas las familias. 
            Desde nuestra primera tienda, hemos crecido gracias a la confianza de nuestros clientes y al compromiso de nuestro equipo.</p>
          <p>Hoy seguimos expandiéndonos, con el mismo objetivo: hacer que cada compra sea una experiencia sencilla y beneficiosa para ti.</p>
        </div>
        <div className="imagen">
          <img src="/img/supermercado.jpg" alt="Supermercado JC" />
        </div>
      </section>
    </main>
  );
};

export default Acerca;