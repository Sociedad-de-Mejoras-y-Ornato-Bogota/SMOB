import React from 'react';

import './popUp.css';

const Popup = ({ imageUrl, onClose }) => {

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}></button>
        <img src={imageUrl} alt="Imagen" />
      </div>
    </div>
  );
};

export default Popup;
