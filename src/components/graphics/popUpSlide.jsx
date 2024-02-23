import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './popUp.css';

const Popup = ({ imageUrls, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Recursos no disponibles',
        text: 'Aún no están disponibles estos recursos, próximamente podrás acceder a ellos',
        allowOutsideClick: false,
      }).then((result) => {
        // Verifica si el usuario hizo clic en "OK"
        if (result.isConfirmed) {
          onClose(); // Cierra el popup
        }
      });
    }
  }, [imageUrls, onClose]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}></button>

        {imageUrls.length > 0 && (
          <div className="slider">
            <button className="arrow-button" onClick={handlePrevImage}>&lt;</button>
            <img src={imageUrls[currentImageIndex]} alt="Imagen" />
            <button className="arrow-button" onClick={handleNextImage}>&gt;</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
