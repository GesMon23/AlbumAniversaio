import React from 'react';
import './AlbumHome.css';

export default function ModalMedia({ open, onClose, tipo, src, alt, title, meta, desc, onPrev, onNext, hasPrev, hasNext }) {
  const [anim, setAnim] = React.useState('');
  const prevSrc = React.useRef(src);
  React.useEffect(() => {
    if (src !== prevSrc.current) {
      setAnim('modal-media-fade');
      prevSrc.current = src;
      const timeout = setTimeout(() => setAnim(''), 350);
      return () => clearTimeout(timeout);
    }
  }, [src, tipo]);
  if (!open) return null;
  return (
    <div className="modal-media-overlay" onClick={onClose}>
      <div className="modal-media-content" onClick={e => e.stopPropagation()}>
        <button className="modal-media-close" onClick={onClose}>&times;</button>
        <div className={`modal-media-media ${anim}`}>
          {tipo === 'imagen' ? (
            <img src={src} alt={alt} className="modal-media-img" />
          ) : (
            <video controls className="modal-media-video">
              <source src={src} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          )}
        </div>
        <div className="modal-media-info">
          <div className="modal-media-title">{title}</div>
          <div className="modal-media-meta">{meta}</div>
          {/* Reproductor de YouTube según el archivo multimedia */}
          {(() => {
            // Diccionario de archivo multimedia a YouTube ID
            const mediaToYoutube = {
              'Imagen1.jpg': 'waKVvHdkGI8',
              'Imagen2.jpg': 'kjRZ-VkV9sE',
              'Imagen3.jpg': 'MzNduKt0ylU',
              'Imagen4.jpg': 'c5K3NQ08IQI',
              'Imagen5.jpg': 'oAJB67OSM7g',
              'Imagen6.jpg': '95GAYvnHQW4',
              'Imagen7.jpg': '5-g2u3h2ocA',
              'Imagen8.jpg': 'fzNG5B_onMA',
              'Imagen9.jpg': 'hbhWDNRGciA',
              'Imagen10.jpg': 'H-WutQ6vXDc',
              'Imagen11.jpg': 'HuQC33joOrc',
              'Imagen12.jpg': 'sDMOP1cnVUo',
              'Imagen13.jpg': '3CjIx9K3snI',
              'Imagen14.jpg': 'o6KgErzzDXU',
              'Imagen15.jpg': 'Sm5FW6MRyro',
              'Imagen16.jpg': 'IPiA2ljRhvo',
              'Imagen17.jpg': 'or-7z1tBO6U',
              'Imagen18.jpg': 'rwsRmnjEcYo',
              'Imagen19.jpg': 'zcwWvtjmViE',
              'Imagen20.jpg': 'ot6eRIZaTps',
              'Imagen21.jpg': 'zy9eSyyt0fs',
              'Imagen22.jpg': 'w8SOcXfnQ_8',
              'Imagen23.jpg': 'u8fHa5H5f7c',
              'Imagen24.jpg': 'XnDhdSorVcs',
              'Imagen25.jpg': '_OKxtMn4dDk',
              'Imagen26.jpg': 'A8XP9TEf2y8',
              'Imagen27.jpg': 'Z2Vu0NZ6DnE',
              'Imagen28.jpg': 'HboHK7cr55A',
              'Imagen29.jpg': 'jrotr_I5uKU',
              'Imagen30.jpg': 'kJDbz7aICiA',
              'Imagen31.jpg': 'pf0KXLqu1BU',
              'Imagen32.jpg': 'lYoWuaw5nSk',
              'Imagen33.jpg': 'ctUDToc-qnE',
              'Imagen34.jpg': 'wLYk_qRjP6c',
              'Imagen35.jpg': 'difAEKi9wjw',
              'Imagen36.jpg': 'MCH1tA-6JWs',
              // Puedes agregar videos si tienes los nombres y links
            };
            // Extraer el nombre del archivo multimedia del src
            let filename = '';
            if (src) {
              const parts = src.split('/');
              filename = parts[parts.length - 1];
            }
            const youtubeId = mediaToYoutube[filename];
            if (youtubeId) {
              return (
                <iframe
                  style={{borderRadius: '12px', margin: '10px auto', display: 'block'}}
                  width="100%"
                  height="80"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              );
            }
            return null;
          })()}
          <div className="modal-media-desc">{desc}</div>
        </div>
        <div className="modal-media-nav">
          <button className="modal-media-btn" onClick={onPrev} disabled={!hasPrev}>&larr; Anterior</button>
          <button className="modal-media-btn" onClick={onNext} disabled={!hasNext}>Siguiente &rarr;</button>
        </div>
      </div>
    </div>
  );
}
