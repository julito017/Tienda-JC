import React from 'react';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Responderemos pronto.");
    e.target.reset();
  };

  return (
    <main>
      <div className="contenedor-contacto">
        <div className="seccion-principal">
          <section className="contacto">
            <h1>Contáctanos</h1>
            <p>Escríbenos para cualquier consulta o sugerencia. Estamos atentos a ayudarte en lo que necesites.</p>
            <p>Tu opinión es muy valiosa para nosotros, ya sea sobre productos, atención o promociones.</p>

            <form className="form-contacto" onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />

              <label htmlFor="email">Correo:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

              <button type="submit">Enviar</button>
            </form>
          </section>
          
          <div className="opciones-contacto">
            <h2>Otras formas de contactarnos</h2>
            <p>Puedes escribirnos también por redes sociales o visitarnos en nuestra tienda física.</p>
            <a href="https://wa.me/51999999999" target="_blank" className="whatsapp">
              📱 Escríbenos por WhatsApp
            </a>
            <p className="direccion">📍 Dirección: jr San Paulo 2496, Lima - Perú</p>
            <p className="horario">🕒 Horario de atención: Lunes a Sábado, 8:00 am - 8:00 pm</p>
            <p className="telefono">☎️ Teléfono: (01) 555-1234</p>
          </div>
        </div>

        <aside className="imagenes-contacto">
          <img src="/img/tienda1.jpg" alt="Imagen supermercado 1" />
          <img src="/img/tienda2.jpg" alt="Imagen supermercado 2" />
          <div className="mapa-placeholder"></div>
        </aside>
      </div>
    </main>
  );
};

export default Contacto;