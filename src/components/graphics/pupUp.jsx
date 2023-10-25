import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert
import icono from '../../assets/icons/enlace.png';

import './popUp.css';

const Popup = ({ imageUrl, onClose, url }) => {
  const handleButtonClick = () => {
    if (url === '') {
      // Muestra SweetAlert si 'url' está vacío
      Swal.fire({
        icon: 'warning',
        title: 'Recurso no disponible',
        text: 'Aún no esta disponible este recurso, proximamente podrás acceder a él',
      });
    } else {
      // Continúa con el comportamiento normal
    window.open(url, '_blank');
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="custom-button" onClick={handleButtonClick}>
          <img src={icono} alt="Icono" width="2" height="2" />
        </button>
        <button className="close-button" onClick={onClose}></button>
        <img src={imageUrl} alt="Imagen" />
      </div>
    </div>
  );
};

export default Popup;
