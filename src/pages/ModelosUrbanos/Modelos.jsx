
// import Page_principal from "../../components/page-principal/page-principal"
import React, { useState, useEffect, useRef } from 'react';
import './Modelos.css'
function Modelos() {

    const audio = "https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/Audio Modelos de ciudad.mp3";

  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleStateChange = () => {
      setReproduciendo(!audioElement.paused);
    };

    audioElement.addEventListener('play', handleStateChange);
    audioElement.addEventListener('pause', handleStateChange);

    return () => {
      audioElement.removeEventListener('play', handleStateChange);
      audioElement.removeEventListener('pause', handleStateChange);
    };
  }, []);


    return (
        <>
            <div className='modelos-div'>
            <div className="button-container">
                <button  onClick={() => handlePlayPause()}>{reproduciendo ? '⫾⫾' : '⧐'}</button>
                <audio ref={audioRef} src={audio} type="audio/mp3" controls={false} autoplay/>
            </div>
                <p className='title_modelos'>Modelos de ciudad</p>
                <p className='modelos_text'>La SMOB ha construido la noción de “modelo de ciudad”, que reúne la
                    información que esta Data acopia, contrasta e interrelaciona en sus
                    diversas secciones y capítulos. Los elementos constitutivos del estudio
                    del territorio, de la demografía y de la búsqueda del bienestar de las
                    comunidades, ejes centrales de esta herramienta interactiva, son
                    dispuestos y analizados en términos de las relaciones de causalidad
                    que los vinculan y enriquecen históricamente, de forma que se
                    obtenga una visión cabal del complejo proceso de desarrollo de
                    Bogotá a lo largo de los años: la Ciudad Colonial, la Ciudad
                    Republicana, la Ciudad Moderna y la Ciudad del Futuro, son
                    formalizaciones novedosas que permiten abordar esta materia de
                    estudio de manera orgánica, dinámica e integral.</p>
            </div>
        </>
    )
}

export default Modelos