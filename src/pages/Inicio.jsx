import React, { useEffect } from 'react';

const Inicio = () => {
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

      {/* Sección de Promociones (mantener esta parte) */}
      <section className="promociones-section">
        <div className="promociones-container">
          <div className="promociones-imagen">
            <img src="/img/promociones.jpg" alt="Promociones Especiales" />
          </div>
          <div className="promociones-descripcion">
            <h2>🔥 Promociones Especiales</h2>
            <p>Esta semana tenemos ofertas increíbles que no te puedes perder:</p>
            <ul>
              <li>✅ 2x1 en todos los productos lácteos</li>
              <li>✅ 30% de descuento en frutas y verduras seleccionadas</li>
              <li>✅ Descuentos especiales en productos de limpieza</li>
              <li>✅ Ofertas relámpago todos los días a las 6:00 PM</li>
            </ul>
            <p>¡Aprovecha estas promociones antes de que se agoten! Válido hasta el 30 de diciembre.</p>
            <button className="btn-ver-productos">Ver Todos los Productos</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio;