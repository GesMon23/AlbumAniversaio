import React from 'react';
import './AlbumHome.css';
import BlogPost from './BlogPost';
import WideBlock from './WideBlock';
import GalleryRow from './GalleryRow';
import ModalMedia from './ModalMedia';

const imageFiles = [
  'Imagen1.jpg','Imagen2.jpg','Imagen3.jpg','Imagen4.jpg','Imagen5.jpg','Imagen6.jpg','Imagen7.jpg','Imagen8.jpg','Imagen9.jpg','Imagen10.jpg','Imagen11.jpg','Imagen12.jpg','Imagen13.jpg','Imagen14.jpg','Imagen15.jpg','Imagen16.jpg','Imagen17.jpg','Imagen18.jpg','Imagen19.jpg','Imagen20.jpg','Imagen21.jpg','Imagen22.jpg','Imagen23.jpg','Imagen24.jpg','Imagen25.jpg','Imagen26.jpg','Imagen27.jpg','Imagen28.jpg','Imagen29.jpg','Imagen30.jpg','Imagen31.jpg','Imagen32.jpg','Imagen33.jpg','Imagen34.jpg','Imagen35.jpg','Imagen36.jpg']

const videoFiles = [
  'video1.mp4','video2.mp4','video3.mp4','video4.mp4','video5.mp4','video6.mp4','video7.mp4','video8.mp4'
];


function AlbumHome() {
  // Fechas simuladas para el ejemplo de blog
  const fechas = [
    '20 de abril de 2025',
    '19 de abril de 2025',
    '18 de abril de 2025',
    '17 de abril de 2025',
    '16 de abril de 2025',
    '15 de abril de 2025',
    '14 de abril de 2025',
  ];

  const [modal, setModal] = React.useState({ open: false });
  const [recuerdoIdx, setRecuerdoIdx] = React.useState(null);

  function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledImages = shuffleArray(imageFiles);

const recuerdos = [
  ...shuffledImages.map((img, idx) => ({
    tipo: 'imagen',
    src: process.env.PUBLIC_URL + '/media/' + img,
    alt: `Foto ${idx + 1}`
  })),
  ...videoFiles.map((vid, idx) => ({
    tipo: 'video',
    src: process.env.PUBLIC_URL + '/media/' + vid,
    alt: `Video ${idx + 1}`
  }))
];

  const handleOpenModal = (data) => {
    // Buscar el índice del recuerdo abierto
    const idx = recuerdos.findIndex(r => r.src === data.src && r.tipo === data.tipo);
    setModal({ open: true, ...data });
    setRecuerdoIdx(idx !== -1 ? idx : null);
  };
  const handleCloseModal = () => {
    setModal({ open: false });
    setRecuerdoIdx(null);
  };
  const handlePrev = () => {
    if (recuerdoIdx > 0) {
      const r = recuerdos[recuerdoIdx - 1];
      setModal({
        open: true,
        tipo: r.tipo,
        src: r.src,
        alt: r.alt,
        title: r.tipo === 'imagen' ? `Recuerdo #${recuerdoIdx}` : r.alt,
        meta: fechas[(recuerdoIdx - 1) % fechas.length],
        desc: ''
      });
      setRecuerdoIdx(recuerdoIdx - 1);
    }
  };
  const handleNext = () => {
    if (recuerdoIdx < recuerdos.length - 1) {
      const r = recuerdos[recuerdoIdx + 1];
      setModal({
        open: true,
        tipo: r.tipo,
        src: r.src,
        alt: r.alt,
        title: r.tipo === 'imagen' ? `Recuerdo #${recuerdoIdx + 2}` : r.alt,
        meta: fechas[(recuerdoIdx + 1) % fechas.length],
        desc: ''
      });
      setRecuerdoIdx(recuerdoIdx + 1);
    }
  };

  return (
    <main className="album-home">
      <>
        <ModalMedia
          open={modal.open}
          onClose={handleCloseModal}
          tipo={modal.tipo}
          src={modal.src}
          alt={modal.alt}
          title={modal.title}
          meta={modal.meta}
          desc={modal.desc}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={recuerdoIdx > 0}
          hasNext={recuerdoIdx !== null && recuerdoIdx < recuerdos.length - 1}
        />
        {modal.open && (
          <div style={{textAlign: 'center', marginTop: 18, fontWeight: 'bold', color: '#b08b24', fontSize: '1.1rem'}}>
            {(() => {
              const canciones = [
                'Oh ms believer - twenty one pilots',
                'Luna - Zoé',
                'Labios rotos - Zoé',
                'Brillas - Leon Larregui',
                'Malena - Ricardo Arjona',
                'Ojos color sol - Calle 13',
                'We don’t believe what’s on TV - twenty one pilots',
                'Arrullo de estrellas - Zoé',
                'Pruébame a ti - josean log',
                'Yo quiero ser - Malacates',
                'Quiero ver - Café',
                'A la medida - Ricardo Arjona',
                'Adiós Melancolía - Ricardo Arjona',
                'Compartir - Carla Morrison',
                'Te quiero tanto - Kevin Kaarl',
                'Locos - Leon Larregui',
                'Amor completo - Mon Laferte',
                'Te quiero - Hombres G',
                'Peace of mind - Imagine Dragons'
              ];
              if (recuerdoIdx !== null) {
                const idx = recuerdoIdx % canciones.length;
                return `Canción: ${canciones[idx]}`;
              }
              return null;
            })()}
          </div>
        )}
      </>
      <header className="album-header">
        
        
        <img src={process.env.PUBLIC_URL + '/media/Portada.png'} alt="Portada Margarita & Elí" className="album-cover-img" style={{display:'block',margin:'0 auto 18px auto',maxWidth:'1280px',width:'100%'}} />
        
      </header>
      <section className="blog-section">
        {/* Generar patrón repetitivo para todos los recuerdos */}
        {/* Todos los recuerdos como BlogPost iguales */}
        {(() => {
          // --- SECCIÓN SOLO IMÁGENES ---
          const recuerdos = [
            ...imageFiles.map((img, idx) => ({
              tipo: 'imagen',
              src: process.env.PUBLIC_URL + '/media/' + img,
              alt: `Foto ${idx + 1}`
            })),
            ...videoFiles.map((vid, idx) => ({
              tipo: 'video',
              src: process.env.PUBLIC_URL + '/media/' + vid,
              alt: `Video ${idx + 1}`
            }))
          ];
          const bloques = [];
          let i = 0;
          let bloqueNum = 1;
          // Repetir patrón de 4 filas de forma cíclica SOLO para imágenes
          const soloImagenes = recuerdos.filter(r => r.tipo === 'imagen');
          let imgIdx = 0;
          let imgBloqueNum = 1;
          while (imgIdx < soloImagenes.length) {
            // 1. Primera fila: 4 bloques
            for (let j = 0; j < 4 && imgIdx < soloImagenes.length; j++, imgIdx++, imgBloqueNum++) {
              const r = soloImagenes[imgIdx];
              bloques.push(
                <div key={`recuerdo-img-${imgIdx}`} onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt, title: `Recuerdo #${imgBloqueNum}`, meta: fechas[imgIdx % fechas.length], desc: '' })} style={{ cursor: 'pointer', marginBottom: j === 3 ? '0px' : undefined }}>
                  <img src={r.src} alt={`Recuerdo #${imgBloqueNum}`} className="post-image galeria-miniatura" style={{ width: '100%', borderRadius: '0', objectFit: 'cover' }} />
                </div>
              );
            }
            // 2. Segunda fila: bloque grande
            if (imgIdx < soloImagenes.length) {
              const r = soloImagenes[imgIdx];
              bloques.push(
                <div key={`recuerdo-large-img-${imgIdx}`} className="bloque-animado" onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt, title: `Recuerdo #${imgBloqueNum}`, meta: fechas[imgIdx % fechas.length], desc: '' })} style={{ cursor: 'pointer', gridColumn: '1 / -1', display: 'flex', alignItems: 'stretch', background: '#fff', borderRadius: '20px', minHeight: 220, padding: 0, width: '100%', maxHeight: 350 }}>
                  <>
                    <div style={{flex: '0 0 50%', minWidth: 0, height: '100%'}}>
                      <img src={r.src} alt={`Recuerdo #${imgBloqueNum}`} style={{ width: '100%', height: '100%', maxHeight: 350, objectFit: 'cover', borderRadius: '0 0 1.5px 1.5px', display: 'block' }} />
                    </div>
                    <div className="bloque-animado-text" style={{ padding: '0 32px', flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#e1b75a', borderRadius: 0, borderTop: '1px solid #d6b24b', borderBottom: '1px solid #d6b24b', boxShadow: '-12px 12px 48px rgba(120, 90, 30, 0.38), 0 2px 0 #e7e2c7' }}>
                      <div style={{ fontWeight: 700, fontSize: 22, color: '#444', marginBottom: 8 }}>{`Recuerdo #${imgBloqueNum}`}</div>
                      <div style={{ color: '#7a7a7a', fontSize: 16, marginBottom: 8 }}>{fechas[imgIdx % fechas.length]}</div>
                      
                    </div>
                  </>
                </div>
              );
              imgIdx++;
              imgBloqueNum++;
            }
            // 3. Tercera fila: galería SOLO de imágenes
            const galeria = [];
            let fotosAgregadas = 0;
            let galeriaIndex = imgIdx;
            while (galeriaIndex < soloImagenes.length && fotosAgregadas < 10) {
              const r = soloImagenes[galeriaIndex];
              galeria.push(
                <div key={`recuerdo-mini-img-${galeriaIndex}`} onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt, title: `Recuerdo #${imgBloqueNum + fotosAgregadas}`, meta: fechas[galeriaIndex % fechas.length], desc: '' })} style={{ cursor: 'pointer', display: 'inline-block', width: '132px', margin: '0 0.5px' }}>
                  <img src={r.src} alt={`Recuerdo #${imgBloqueNum + fotosAgregadas}`} className="post-image galeria-miniatura" style={{ width: '100%', borderRadius: '4px', objectFit: 'cover' }} />
                </div>
              );
              fotosAgregadas++;
              galeriaIndex++;
            }
            if (galeria.length > 0) {
              bloques.push(
                <div key={`galeria-row-img-${imgIdx}`} style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', gap: '8px', margin: '0' }}>
                  {galeria}
                </div>
              );
            }
            imgIdx = galeriaIndex;
            imgBloqueNum += fotosAgregadas;
            // 4. Cuarta fila: bloque grande invertido
            if (imgIdx < soloImagenes.length) {
              const r = soloImagenes[imgIdx];
              bloques.push(
                <div key={`recuerdo-large4-img-${imgIdx}`} className="bloque-animado" onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt, title: `Recuerdo #${imgBloqueNum}`, meta: fechas[imgIdx % fechas.length], desc: '' })} style={{ cursor: 'pointer', gridColumn: '1 / -1', display: 'flex', alignItems: 'stretch', background: '#fff', borderRadius: '0 0 20px 20px', minHeight: 220, padding: 0, width: '100%', position: 'relative', top: '-2px', boxShadow: 'none', maxHeight: 350 }}>
                  <>
                    <div className="bloque-animado-text" style={{ padding: '0 32px', flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#e1b75a', borderRadius: 0, borderTop: '1px solid #d6b24b', borderBottom: '1px solid #d6b24b', boxShadow: '-12px 12px 48px rgba(120, 90, 30, 0.38), 0 2px 0 #e7e2c7' }}>
                      <div style={{ fontWeight: 700, fontSize: 22, color: '#444', marginBottom: 8 }}>{`Recuerdo #${imgBloqueNum}`}</div>
                      <div style={{ color: '#7a7a7a', fontSize: 16, marginBottom: 8 }}>{fechas[imgIdx % fechas.length]}</div>
                      
                    </div>
                    <div style={{flex: '0 0 50%', minWidth: 0, height: '100%'}}>
                      <img src={r.src} alt={`Recuerdo #${imgBloqueNum}`} className="galeria-miniatura" style={{ width: '100%', height: '100%', maxHeight: 350, objectFit: 'cover', borderRadius: '4px', display: 'block' }} />
                    </div>
                  </>
                </div>
              );
              imgIdx++;
              imgBloqueNum++;
            }
          }
          return bloques;
        })()}
        {/* SECCIÓN SOLO VIDEOS */}
        {(() => {
          // --- SECCIÓN SOLO VIDEOS: una sola fila horizontal tipo galería ---
          const soloVideos = videoFiles.map((vid, idx) => ({
            tipo: 'video',
            src: process.env.PUBLIC_URL + '/media/' + vid,
            alt: `Video ${idx + 1}`
          }));

          if (soloVideos.length === 0) {
            return <div style={{padding: '32px', color: '#b00', fontWeight: 'bold', textAlign: 'center', background: '#fff0f0', borderRadius: 12}}>No hay videos para mostrar en este álbum.</div>;
          }

          return (
            <div className="gallery-row" style={{ boxShadow: '0 12px 48px rgba(120, 90, 30, 0.38), 0 2px 0 #e7e2c7' }}>
              {soloVideos.map((r, idx) => (
                <video
                  key={`video-thumb-${idx}`}
                  className="gallery-thumb"
                  src={r.src}
                  onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt })}
                  style={{objectFit:'cover', cursor:'pointer'}}
                  preload="metadata"
                  muted
                  tabIndex={0}
                  onMouseOver={e => e.target.play()}
                  onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
                />
              ))}
            </div>
          );
        })()}

         

        {/* Fin sección videos */}

      </section>
    </main>
  );
}

export default AlbumHome;
