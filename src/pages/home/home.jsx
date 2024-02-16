import React, { useState, useEffect, useRef } from 'react';
import Panels from "../../components/panels/paneles";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const videoSrc = "https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/DATACIVILIDAD.mp4";
  const audio = "https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/Audio%20reseña%20INICIO.mp3";

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
    
    <div className="Home" id="Home">
      <div className="home-main-background">
        <div className="home-main-title-overlay">
          <p className="bienvenido"> Bienvenidos a<br></br><span>DATACIVILIDAD</span></p>
        </div>
        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/aplicaci%C3%B3n+de+logotipos+DATA+CIVILIDAD_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" className="ocultarImg" style={{ width: '22rem', position:'absolute', height:'5rem', top:'10vh'}} />
        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/FondoJ.png" alt="marca de agua Construyendo Civilidad"></img>
      </div>
      <div className="home-content">
      <div className="home-content-text">
        <div className="button-container">
        <button  onClick={() => handlePlayPause()}>{reproduciendo ? '⫾⫾' : '⧐'}</button>
        <audio ref={audioRef} src={audio} type="audio/mp3" controls={false} autoPlay/>
        </div>
          <p
            className="text-principal"
          >
            La trayectoria de la organización cívica más antigua de la ciudad, la Sociedad de Mejoras y Ornato de Bogotá, se entreteje con la historia misma de la ciudad. La SMOB halla en la memoria colectiva la razón para crear lazos profundos de fraternidad y solidaridad en la ciudadanía, cuyo ademán ideal es la civilidad. Llevamos más de un siglo empeñados en fortalecer una ciudadanía responsable, participativa e incidente, en el ámbito de una ciudad compleja y en permanente cambio, de manera que prevalezca la civilidad como el camino a una vida plena, digna y sostenible.
            <br/> <br/>
            En ese propósito, la SMOB se ha valido de novedosas tecnologías digitales para construir esta plataforma interactiva llamada Data Civilidad, que contiene información suficiente para conocer la historia de la ciudad y permite organizarla de manera objetiva y contrastada.
            <br/><br/>
            En el marco de la lógica de los procesos del ordenamiento del territorio vistos desde la óptica del pensamiento complejo se elaboró una metodología que permite caracterizar la dinámica y los cambios en los Modelos de cuidad, constituidos por tres componentes que interactúan entorno a un marco institucional, conformados por grupos de estructuras, que a vez se subdividen en sistemas que orbitan entre sí en un proceso continuo y cambiante, como se ilustra en el siguiente esquema.
            <br/><br/>
            ¡Bienvenidos!
          </p>
        </div>
        <div
          className="home-content-video"
        >
          <video controls style={{ objectFit: "cover" }}>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no admite la reproducción de video.
          </video>
        </div>
      </div>
      <div className="home-panels">
        <Panels />
      </div>
    </div>
  );
};
export default Home;
