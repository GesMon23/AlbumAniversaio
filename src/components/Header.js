import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo" style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <span>M&amp;E</span>
          <span>
            <svg width="2.1rem" height="2.1rem" viewBox="0 0 24 24" fill="#b08b24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </span>
        </div>
        <nav className="main-nav">
          {/* Aquí puedes agregar otros enlaces si lo deseas */}
        </nav>
        <div className="header-socials">
          <a href="https://open.spotify.com/playlist/6STfi2CZ6Tx5jLI19CoLQz?si=66917a6709484241" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="nav-icon">
            {/* Ícono Spotify SVG */}
            <svg width="40" height="40" viewBox="0 0 496 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle'}}>
              <path d="M248 8C111.033 8 0 119.033 0 256c0 136.967 111.033 248 248 248s248-111.033 248-248C496 119.033 384.967 8 248 8zm121.941 365.899c-5.281 8.801-16.711 11.6-25.514 6.406-69.926-42.68-158.221-52.406-262.743-28.406-9.857 2.209-19.719-3.857-21.926-13.719-2.211-9.857 3.857-19.719 13.717-21.928 112.436-25.188 209.221-14.188 286.514 32.406 8.801 5.281 11.6 16.711 6.406 25.241zm35.406-61.926c-6.594 10.656-20.406 13.984-31.063 7.391-79.926-49.063-201.969-63.344-296.563-34.344-11.594 3.469-23.844-2.969-27.313-14.563-3.469-11.594 2.969-23.844 14.561-27.313 105.563-32.406 237.221-16.406 326.221 39.063 10.656 6.594 13.984 20.406 7.391 31.066zm37.406-65.498c-93.406-55.844-247.594-60.967-336.625-33.844-13.406 4.094-27.781-3.188-31.875-16.594-4.094-13.406 3.188-27.781 16.594-31.875 99.719-30.406 266.344-24.781 370.25 37.406 12.281 7.344 16.281 23.406 8.938 35.688-7.344 12.281-23.406 16.281-35.282 8.219z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
