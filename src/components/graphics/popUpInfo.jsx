import React from 'react';
import './popUp.css'; // Asegúrate de tener tus estilos CSS adecuados

const PopupInfo = ({ onClose, text }) => {
  return (
    <div className="popup-info-container">
      {text[0].map((line, index) => (
        <h3 key={index} className="h3-c">{line}</h3>
      ))}
      <button className="close-button-info" onClick={onClose}></button>
    </div>
  );
};

export default PopupInfo;
