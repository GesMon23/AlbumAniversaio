import React from 'react';
import './AlbumHome.css';

export default function GalleryRow({ images }) {
  return (
    <div className="gallery-row">
      {images.map((img, idx) => (
        <img src={img.src} alt={img.alt || `img${idx+1}`} className="gallery-thumb" key={idx} />
      ))}
    </div>
  );
}
