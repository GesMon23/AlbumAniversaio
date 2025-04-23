import React from 'react';
import './AlbumHome.css';

export default function BlogPost({ image, title, meta, desc, video, imgClassName }) {
  return (
    <div className="blog-post">
      {video ? (
        <video controls className="post-image" style={{width:'100%',borderRadius:'12px',background:'#000'}}>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      ) : (
        <img src={image} alt={title} className={`post-image${imgClassName ? ' ' + imgClassName : ''}`} />
      )}
      { (title || meta || desc) && (
        <div className="post-body">
          <div className="post-title">{title}</div>
          <div className="post-meta">{meta}</div>
          <div className="post-desc">{desc}</div>
        </div>
      )}
    </div>
  );
}
