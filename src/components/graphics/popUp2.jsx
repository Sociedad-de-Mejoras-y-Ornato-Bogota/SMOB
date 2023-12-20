import Swal from 'sweetalert2'; // Importa SweetAlert
import './popUp.css';
import React, { useState, useEffect } from 'react';

const Popup2 = ({ onClose, url }) => {
  const [showIframe, setShowIframe] = useState(url !== '');

  useEffect(() => {
    if (url === '') {
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
  }, [url, onClose]);

  return (
    <>
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}></button>
        {showIframe && url !== '' ? (
          <iframe src={url} title="Contenido del enlace" width="100%" height="760"></iframe>
        ) : null}
      </div>
    </div>
    </>
  );
};

export default Popup2;

// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal'; // Importa react-modal
// import './popUp.css';

// // Define el estilo del modal
// const customModalStyle = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     transform: 'translate(-50%, -50%)',
//     maxWidth: '80%',
//     maxHeight: '80%',
//   },
// };

// const Popup2 = ({ onClose, url }) => {
//   const [showIframe, setShowIframe] = useState(url !== '');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (url === '') {
//       setIsModalOpen(true);
//     }
//   }, [url]);

//   const closeModal = () => {
//     setIsModalOpen(false);
//     onClose();
//   };

//   return (
//     <div className="popup-container">
//       {showIframe && url !== '' ? (
//         <iframe src={url} title="Contenido del enlace" width="100%" height="400"></iframe>
//       ) : null}
//       <Modal
//         isOpen={isModalOpen}
//         style={customModalStyle}
//         onRequestClose={closeModal}
//         contentLabel="Recurso no disponible"
//       >
//         <h2>Recurso no disponible</h2>
//         <p>Aún no está disponible este recurso, próximamente podrás acceder a él</p>
//         <button onClick={closeModal}>Cerrar</button>
//       </Modal>
//     </div>
//   );
// };

// export default Popup2;
//------------------------------------------------------------------------------------

// import './popUp.css';
// import React, { useState, useEffect, useRef } from 'react';

// const Popup2 = ({ onClose, url }) => {
//   const [showIframe, setShowIframe] = useState(url !== '');
//   const dialogRef = useRef(null);

//   useEffect(() => {
//     if (url === '') {
//       // Abre el diálogo si la URL está vacía
//       dialogRef.current.showModal();
//     }
//   }, [url]);

//   const handleClose = () => {
//     dialogRef.current.close();
//     if (url === '') {
//       onClose(); // Cierra el popup solo si no hay URL
//     }
//   };

//   return (
//     <div className="popup-container">
//       <div className="popup-content">
//         <button className="close-button" onClick={onClose}></button>
//         {showIframe && url !== '' ? (
//           <iframe src={url} title="Contenido del enlace" width="100%" height="400"></iframe>
//         ) : null}
//       </div>

//       <dialog ref={dialogRef}>
//         <p>Recurso no disponible</p>
//         <p>Aún no está disponible este recurso, próximamente podrás acceder a él.</p>
//         <button onClick={handleClose}>OK</button>
//       </dialog>
//     </div>
//   );
// };

// export default Popup2;
