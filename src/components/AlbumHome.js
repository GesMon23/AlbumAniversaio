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
  const textosRecuerdos = [
  'Un cumplemes que se suma a todos los momentos especiales que celebramos juntos. ¡Te amo más cada día mi artista <3!',
  'Este diploma siempre me recordará lo afortunado que soy de tenerte como mi todo. Feliz Aniversario mi Gatita :3',
  'Otro diploma que recuerda que eres mi persona favorita y el amor de mi vida.',
  'Mi \'Yo como Michi\' siempre estará feliz de tener a mi \'Tú como Michi\' a su lado. UwU',
  'Nuestros primeros pasos en nuestra aventura y nuestro mundo.',
  '¡Nuestro primer hogar, ladrillo a ladrillo UwU! Construyéndolo juntos desde el inicio.',
  'Nuestro amor gatuno plasmado en un dibujo. ¡Tú mi gatita, yo tu gatito con lentes! :3',
  'Cada uno de estos regalos lleva un pedacito de mi cariño por ti.UwU',
  'Siempre presente en mis juegos y en mi corazón. ¡Te amo, mi cielito UwU!',
  'Cada uno de estos objetos cuenta una parte de nuestra historia de este primer año. ¡Te amo más de lo que expresar!',
  'Desde el primer momento se llevaron bien. ¡Qué feliz soy de tenerlos a los dos en mi vida! :3',
  'El cielo estaba hermoso esa tarde, no hablo del celeste, hablo de mi cielito de abril, tan bella y deslumbrante como siempre UwU',
  'Las noches que a pesar de la distancia siento tu compañía y la felicidad de estar contigo son de las que más me hacen feliz <3',
  'Ese brillo es el que me ha guiado por más de dos años, podría ver la luz que emanan esos luceritos cafés por siempre UwU',
  'Los momentos espontáneos de poder vernos sin tiempo de planeación son los más únicos :3',
  'Cuando veo las flores tan coloridas y únicas, es imposible no poder pensar en ti, porque aún siendo tan bellas no se comparan contigo UwU',
  'Todo vale la pena al tenerte a mi lado. Te amo <3',
  'Es tu espontaneidad y tu forma tan única de ser que me tiene loquito :3',
  'Me siento tan lleno de paz y plenitud al estar contigo que se me olvidan por un momento todo lo malo en mi cabeza <3',
  'Nuestras escapaditas en carretera escuchando nuestra música no tienen precio UwU',
  'No importan si son 10 o 5 minutos, el simple hecho de poder vernos un instante y compartir juntos hacen que mis días sean mejores.',
  'Donde quiera que vaya no solo te llevo en mi mente o en mi corazón, estar en mi ser y quiero que acá te quedes <3',
  'A pesar de las altas y bajas te quiero conmigo y tengo la seguridad que será mucho tiempo así <3',
  'Nuestro amor no tiene límites, ni en este mundo, ni en este universo, siendo michis o siendo lo que sea sé que te seguiré amando UwU',
  'Tu puedes ver el cielo azul toda la tarde, yo puedo verte a ti todo el día, ambos quedaríamos asombrados de la belleza.',
  'Hemos dados grandes pasos juntos y sé que si los seguimos dando lograremos lo que queremos juntos <3',
  'Ver la emoción en tu rostro no tiene precio, solo puedo quedarme admirándola.',
  'Pasar las épocas más especiales a tu lado han sido mis mejores regalos :3',
  'Siendo de las primeras ocasiones que nos veíamos seguía poniéndome nervioso pero al estar junto a ti se me olvidaba',
  'El vernos en horarios no adecuados solo para abrazarnos son de los momentos que más llenan a mi corazón UwU',
  'Teniendo tu compañía no importa si es en el mejor restaurante o comiendo papitas, siempre será el mejor plan UwU',
  'Hemos estado desde un principio rocoso, pero sé que cuando el camino se aclare estaremos juntos para disfrutarlo <3',
  'Una noche especial donde hasta fuimos la envidia de muchos, una noche para el recuerdo UwU',
  'Contigo puedo ser quien soy, me siento libre y seguro al estar a tu lado <3',
  'Ver tu emoción y felicidad en las cositas sencillas hacen que en cada lugar te recuerde :3',
  'Tenemos fotos más bonitas y en mejores lugares, pero este recuerdo lo atesoro al demostrar que desde un principio estamos el uno para el otro <3'
];

const textosVideos = [
  'Quisiera quedarme pequeñito y que me tengas así toda la vida UwU',
  'Nuestro rinconcito es testigo de nuestra historia :3',
  'Nada importa cuando veo esa sonrisa, es lo mejor que existe en mi mundo <3',
  'Aunque me encanta el cafecito, no hay ningún otro mejor que el de tus ojos UwU',
  'Un año después sigo igual de encantado con mi señorita :3',
  'Las tardes de jugar UNO en nuestro rinconcito son de las mejores <3',
  'Podría pasar días contigo en ese rinconcito, recordando y haciendo más recuerdos preciosos de lo nuestro UwU.',
  'Desde las primeras veces que nos pudimos ver haz hecho que todo lo malo se olvide y haz sido mi salvavidas en los peores momentos <3'
];

  const [modal, setModal] = React.useState({ open: false });
  const [recuerdoIdx, setRecuerdoIdx] = React.useState(null);

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

  const handleOpenModal = (data) => {
    // Buscar el índice del recuerdo abierto
    const idx = recuerdos.findIndex(r => r.src === data.src && r.tipo === data.tipo);
    let desc = '';
    if (idx !== -1) {
      desc = recuerdos[idx].tipo === 'imagen' ? textosRecuerdos[idx] : textosVideos[idx - imageFiles.length];
    }
    setModal({ open: true, ...data, desc });
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
        title: r.tipo === 'imagen' ? textosRecuerdos[recuerdoIdx-1] : textosVideos[recuerdoIdx-1-recuerdos.filter(x=>x.tipo==='imagen').length],
        meta: '',
        desc: r.tipo === 'imagen' ? textosRecuerdos[recuerdoIdx-1] : textosVideos[recuerdoIdx-1-imageFiles.length]
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
        title: r.tipo === 'imagen' ? textosRecuerdos[recuerdoIdx+1] : textosVideos[recuerdoIdx+1-recuerdos.filter(x=>x.tipo==='imagen').length],
        meta: '',
        desc: r.tipo === 'imagen' ? textosRecuerdos[recuerdoIdx-1] : textosVideos[recuerdoIdx-1-imageFiles.length]
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
                <div key={`recuerdo-img-${imgIdx}`} onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt, title: textosRecuerdos[imgIdx],
      meta: '',
      desc: r.tipo === 'imagen' ? textosRecuerdos[recuerdoIdx-1] : textosVideos[recuerdoIdx-1-imageFiles.length] })} style={{ cursor: 'pointer', marginBottom: j === 3 ? '0px' : undefined }}>
                  <img src={r.src} alt={`Recuerdo #${imgBloqueNum}`} className="post-image galeria-miniatura" style={{ width: '100%', borderRadius: '0', objectFit: 'cover' }} />
                </div>
              );
            }
            // 2. Segunda fila: bloque grande
            if (imgIdx < soloImagenes.length) {
              const r = soloImagenes[imgIdx];
              bloques.push(
                <div key={`recuerdo-large-img-${imgIdx}`} className="bloque-animado" onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt, title: textosRecuerdos[imgIdx],
      meta: '',
      desc: r.tipo === 'imagen' ? textosRecuerdos[recuerdoIdx-1] : textosVideos[recuerdoIdx-1-imageFiles.length] })} style={{ cursor: 'pointer', gridColumn: '1 / -1', display: 'flex', alignItems: 'stretch', background: '#fff', borderRadius: '20px', minHeight: 220, padding: 0, width: '100%', maxHeight: 350 }}>
                  <>
                    <div style={{flex: '0 0 50%', minWidth: 0, height: '100%'}}>
                      <img src={r.src} alt={`Recuerdo #${imgBloqueNum}`} style={{ width: '100%', height: '100%', maxHeight: 350, objectFit: 'cover', borderRadius: '0 0 1.5px 1.5px', display: 'block' }} />
                    </div>
                    <div className="bloque-animado-text" style={{ padding: '0 32px', flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#e1b75a', borderRadius: 0, borderTop: '1px solid #d6b24b', borderBottom: '1px solid #d6b24b', boxShadow: '-12px 12px 48px rgba(120, 90, 30, 0.38), 0 2px 0 #e7e2c7' }}>
                      <div style={{ fontWeight: 700, fontSize: 22, color: '#444', marginBottom: 8 }}>{textosRecuerdos[imgIdx]}</div>
                      <div style={{ color: '#7a7a7a', fontSize: 16, marginBottom: 8 }}></div>
                      
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
                <div key={`recuerdo-mini-img-${galeriaIndex}`} onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt, title: textosRecuerdos[galeriaIndex],
      meta: '',
      desc: r.tipo === 'imagen' ? textosRecuerdos[recuerdoIdx-1] : textosVideos[recuerdoIdx-1-imageFiles.length] })} style={{ cursor: 'pointer', display: 'inline-block', width: '132px', margin: '0 0.5px' }}>
                  <img src={r.src} alt={`Recuerdo #${imgBloqueNum + fotosAgregadas}`} className="post-image galeria-miniatura" style={{ width: '100%', borderRadius: '4px', objectFit: 'cover' }} />
                </div>
              );
              fotosAgregadas++;
              galeriaIndex++;
            }
            if (galeria.length > 0) {
              bloques.push(
                <div key={`galeria-row-img-${imgIdx}`} className="tercera-fila" style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', gap: '8px', margin: '0' }}>
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
                <div key={`recuerdo-large4-img-${imgIdx}`} className="bloque-animado" onClick={() => handleOpenModal({ tipo: r.tipo, src: r.src, alt: r.alt, title: textosRecuerdos[imgIdx],
      meta: '',
      desc: r.tipo === 'imagen' ? textosRecuerdos[recuerdoIdx-1] : textosVideos[recuerdoIdx-1-imageFiles.length] })} style={{ cursor: 'pointer', gridColumn: '1 / -1', display: 'flex', alignItems: 'stretch', background: '#fff', borderRadius: '0 0 20px 20px', minHeight: 220, padding: 0, width: '100%', position: 'relative', top: '-2px', boxShadow: 'none', maxHeight: 350 }}>
                  <>
                    <div className="bloque-animado-text" style={{ padding: '0 32px', flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#e1b75a', borderRadius: 0, borderTop: '1px solid #d6b24b', borderBottom: '1px solid #d6b24b', boxShadow: '-12px 12px 48px rgba(120, 90, 30, 0.38), 0 2px 0 #e7e2c7' }}>
                      <div style={{ fontWeight: 700, fontSize: 22, color: '#444', marginBottom: 8 }}>{textosRecuerdos[imgIdx]}</div>
                      <div style={{ color: '#7a7a7a', fontSize: 16, marginBottom: 8 }}></div>
                      
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
