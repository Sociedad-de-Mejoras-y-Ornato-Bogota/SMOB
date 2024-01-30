import {useEffect, useState} from 'react';
import Swal from 'sweetalert2';
import './popUp.css';

const Popup = ({ imageUrl, onClose }) => {

  const [showIframe, setShowIframe] = useState(imageUrl !== '');

  useEffect(() => {
    if ( imageUrl === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Recurso no disponible',
        text: 'Aún no está disponible este recurso, próximamente podrás acceder a él',
        allowOutsideClick: false,
      }).then((result) => {
        // Verifica si el usuario hizo clic en "OK"
        if (result.isConfirmed) {
          onClose(); // Cierra el popup
        }
      });
    }
  }, [ imageUrl, onClose]);

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}></button>
        
        {showIframe && imageUrl !== '' ? (
          <img src={imageUrl} alt="Imagen" />
        ) : null}
      </div>
    </div>
  );
};

export default Popup;
