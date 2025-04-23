import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-menu">
          <a href="#blog">Blog</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contacto</a>
        </div>
        <div className="footer-subscribe">
          <form>
            <input type="email" placeholder="Tu email" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">&#xf16d;</a>
          <a href="#" aria-label="Facebook">&#xf09a;</a>
        </div>
      </div>
      <div className="footer-copy">&copy; 2025 PortalAlbum. Creado con ❤️</div>
    </footer>
  );
}
