import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const Page_principal = (props) => {
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
    <>
      <div className="page_principal">
        <section className='left_section'>
          <img src={props.url_imagen} className="img_componente" width="150" height="150" alt='Imagen circulo por componente' useMap="#examplemap" />
          {props.areas && (
                        <map name="examplemap">
                        {
                            props.areas.map((area, index) => {
                                return area
                            })
                        }
                        </map>
                    )}
        </section>
        <section className='right_section'>
          {props.audio && (
            <div className="button-container">
              <button onClick={() => handlePlayPause()}>{reproduciendo ? '⫾⫾' : '⧐'}</button>
              <audio ref={audioRef} src={props.audio} type="audio/mp3" controls={false} autoPlay/>
            </div>
          )}
          <p className="name_component">{props.name_component}</p>
          <p className="description_component">{props.description_component}</p>
        </section>
      </div>
    </>
  );
};

export default Page_principal;
