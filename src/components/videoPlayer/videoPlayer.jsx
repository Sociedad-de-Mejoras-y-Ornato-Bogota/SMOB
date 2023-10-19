import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ videoSrc, width, heigth }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => {
      // Lógica para el evento de reproducción
      console.log('El video ha comenzado a reproducirse');
    };

    const handlePause = () => {
      // Lógica para el evento de pausa
      console.log('El video se ha pausado');
    };

    const handleEnded = () => {
      // Lógica para el evento de finalización
      console.log('El video ha terminado de reproducirse');
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video ref={videoRef} controls style={{width: width, height: heigth}}>
      <source src={videoSrc} type="video/mp4" />
      Tu navegador no admite la reproducción de video.
    </video>
  );
};

export default VideoPlayer;
