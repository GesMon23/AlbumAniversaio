import React from 'react';
import './AlbumHome.css';

export default function WideBlock({ image, title, desc, reverse }) {
  return (
    <div className={`wide-block${reverse ? ' wide-block-reverse' : ''}`}>
      <div className="wide-img-wrap">
        <img src={image} alt={title} className="wide-img" />
      </div>
      <div className="wide-content">
        <h2 className="wide-title">{title}</h2>
        <p className="wide-desc">{desc}</p>
      </div>
    </div>
  );
}
