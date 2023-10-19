import React from 'react';
import { Link } from 'react-router-dom'; 
import icono from '../../assets/icons/enlace.png';


import './popUp.css'
const Popup = ({ imageUrl, onClose,url }) => {
    return (
      <div className="popup-container">
        <div className="popup-content">
        <a href={url} target="_blank"  className="custom-button">
        <img src={icono} alt="Icono" width="2" height="2" />
        </a>
          <button className="close-button" onClick={onClose}>
          </button>
          <img src={imageUrl} alt="Imagen"/>
        </div>
      </div>
    );
  };
  

export default Popup;
