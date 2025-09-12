import React, { useState } from 'react';

const Footer = () => {
  const [showReclamoForm, setShowReclamoForm] = useState(false);
  const [showTerminos, setShowTerminos] = useState(false);
  const [showPrivacidad, setShowPrivacidad] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    reclamo: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitReclamo = (e) => {
    e.preventDefault();
    alert("¡Reclamo enviado correctamente! Nos contactaremos contigo pronto.");
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      direccion: '',
      reclamo: ''
    });
    setShowReclamoForm(false);
  };

  const closeAllModals = () => {
    setShowReclamoForm(false);
    setShowTerminos(false);
    setShowPrivacidad(false);
  };

  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <p>© 2025 Supermercado JC - Todos los derechos reservados</p>
          </div>
          
          <div className="footer-legal">
            <button 
              className="footer-link"
              onClick={() => setShowTerminos(true)}
            >
              Términos y Condiciones
            </button>
            <span className="separator">|</span>
            <button 
              className="footer-link"
              onClick={() => setShowPrivacidad(true)}
            >
              Política de Privacidad
            </button>
            <span className="separator">|</span>
            <button 
              className="footer-link"
              onClick={() => setShowReclamoForm(true)}
            >
              Libro de Reclamaciones
            </button>
          </div>

          <div className="footer-contact">
            <p>📞 (01) 555-1234 | 📧 info@supermercadojc.com</p>
            <p>📍 jr San Paulo 2496, Lima - Perú</p>
          </div>
        </div>
      </footer>

      {/* Modal de Términos y Condiciones */}
      {showTerminos && (
        <div className="modal-overlay" onClick={closeAllModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>📄 Términos y Condiciones</h3>
            <div className="modal-text">
              <h4>1. Aceptación de los Términos</h4>
              <p>Al acceder y utilizar nuestros servicios, usted acepta cumplir con estos términos y condiciones.</p>
              
              <h4>2. Productos y Precios</h4>
              <p>Nos reservamos el derecho de modificar precios y disponibilidad de productos sin previo aviso.</p>
              
              <h4>3. Pedidos y Entregas</h4>
              <p>Los pedidos están sujetos a disponibilidad. Realizamos entregas en la zona de Lima Metropolitana.</p>
              
              <h4>4. Política de Devoluciones</h4>
              <p>Aceptamos devoluciones dentro de los 7 días posteriores a la compra, con ticket de compra.</p>
            </div>
            <button className="modal-close" onClick={closeAllModals}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Política de Privacidad */}
      {showPrivacidad && (
        <div className="modal-overlay" onClick={closeAllModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>🔒 Política de Privacidad</h3>
            <div className="modal-text">
              <h4>1. Información que Recopilamos</h4>
              <p>Recopilamos información personal que usted nos proporciona voluntariamente al realizar compras o contactarnos.</p>
              
              <h4>2. Uso de la Información</h4>
              <p>Utilizamos su información para procesar pedidos, mejorar nuestros servicios y comunicarnos con usted.</p>
              
              <h4>3. Protección de Datos</h4>
              <p>Implementamos medidas de seguridad para proteger su información personal contra accesos no autorizados.</p>
              
              <h4>4. Cookies</h4>
              <p>Utilizamos cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio web.</p>
            </div>
            <button className="modal-close" onClick={closeAllModals}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Libro de Reclamaciones */}
      {showReclamoForm && (
        <div className="modal-overlay" onClick={closeAllModals}>
          <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
            <h3>📝 Libro de Reclamaciones</h3>
            <form onSubmit={handleSubmitReclamo} className="reclamo-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">Apellido:</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="direccion">Dirección:</label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="reclamo">Reclamo o Queja:</label>
                <textarea
                  id="reclamo"
                  name="reclamo"
                  rows="5"
                  value={formData.reclamo}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe tu reclamo o queja en detalle..."
                ></textarea>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn-enviar-reclamo">
                  📤 Enviar Reclamo
                </button>
                <button 
                  type="button" 
                  className="btn-cerrar"
                  onClick={closeAllModals}
                >
                  ❌ Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;