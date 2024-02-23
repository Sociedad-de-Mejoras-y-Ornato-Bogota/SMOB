import React, { useState, useEffect, useRef } from 'react';
const Page_tipe_full = (props) => {

    const audioRef = useRef(null);
    const [reproduciendo, setReproduciendo] = useState(false);
    const [audioCargado, setAudioCargado] = useState(false);
  
    const handlePlayPause = async () => {
      const audioElement = audioRef.current;
  
      if (!audioCargado) {
        await cargarAudio(); // Esperar hasta que el audio esté completamente cargado
      }
  
      if (audioElement && audioElement.paused) {
        audioElement.play().catch(error => {
          console.error('Error al reproducir audio:', error);
        });
      } else if (audioElement) {
        audioElement.pause();
      }
    };
  
    const cargarAudio = async () => {
      const audioElement = audioRef.current;
  
      if (audioElement && audioElement.readyState < 2) {
        // El estado 2 indica que el audio está completamente cargado
        await new Promise((resolve) => {
          const handleCanPlayThrough = () => {
            setAudioCargado(true);
            resolve();
          };
  
          audioElement.addEventListener('canplaythrough', handleCanPlayThrough);
  
          // Si el audio ya está cargado, resolver de inmediato
          if (audioElement.readyState >= 2) {
            setAudioCargado(true);
            resolve();
          }
        });
      }
    };
  
    useEffect(() => {
      const audioElement = audioRef.current;
  
      if (audioElement) {
        const handleStateChange = () => {
          setReproduciendo(!audioElement.paused);
        };
  
        audioElement.addEventListener('play', handleStateChange);
        audioElement.addEventListener('pause', handleStateChange);
  
        return () => {
          audioElement.removeEventListener('play', handleStateChange);
          audioElement.removeEventListener('pause', handleStateChange);
        };
      }
    }, []);
  

    return (
        <div className="page_t1">
            <section className='title_section'>
                <h2 className='title_page'>{props.title}
                {props.audio && (
            <div className="button-container1">
              <button onClick={() => handlePlayPause()}>{reproduciendo ? '⫾⫾' : '⧐'}</button>
              <audio ref={audioRef} src={props.audio} type="audio/mp3" controls={false} autoPlay/>
            </div>
          )}
                </h2>
            </section>
            <section className='content_section'>
                <iframe src={props.content_url} className='content_full_page'></iframe>
            </section>
        </div>
    )
}
export default Page_tipe_full