import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <img src="/img/logo.png" alt="Logo Supermercado" className="logo" />
      <nav>
        <ul className="menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'activo' : ''}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" className={location.pathname === '/productos' ? 'activo' : ''}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={location.pathname === '/contacto' ? 'activo' : ''}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/acerca" className={location.pathname === '/acerca' ? 'activo' : ''}>
              Acerca de
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;