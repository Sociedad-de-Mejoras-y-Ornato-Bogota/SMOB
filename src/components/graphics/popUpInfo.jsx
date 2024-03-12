import React from 'react';
import './popUp.css'; // Asegúrate de tener tus estilos CSS adecuados

const PopupInfo = ({ onClose, text }) => {
  return (
    <div className="popup-info-container">
      {text[0].map((line, index) => (
        index === 0 ? 
          <h3 key={index} className="h1-c-info-black">{line}</h3> :
          <h3 key={index} className="h1-c-info">{line}</h3>
      ))}
      <button className="close-button-info" onClick={onClose}></button>
    </div>
  );
};

export default PopupInfo;
