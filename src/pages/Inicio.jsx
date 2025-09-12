import React, { useEffect } from 'react';

const Inicio = () => {
  useEffect(() => {
    setTimeout(() => {
      alert("¡Bienvenido a Supermercado JC 🛒");
    }, 500);
  }, []);

  return (
    <main>
      <section className="bienvenida">
        <h1>Bienvenido a Supermercado JC</h1>
        <p>Los mejores precios y productos frescos para tu hogar.</p>
      </section>
      
      <section className="videos">
        <video src="/img/anuncio1.mp4" controls></video>
        <video src="/img/anuncio2.mp4" controls></video>
      </section>
      
      <section className="imagen-promocional">
        <img src="/img/promo.jpg" alt="Supermercado JC" />
      </section>
    </main>
  );
};

export default Inicio;