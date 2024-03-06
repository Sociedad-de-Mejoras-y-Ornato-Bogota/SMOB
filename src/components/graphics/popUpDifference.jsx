import React from 'react'
import './popUp.css'; // Asegúrate de tener tus estilos CSS adecuados

const PopupDifference = ({ content, valueHA }) => {
  return (
    <div className="popup-diff-container">
      <h3 className="h1-c-circle">{content}</h3>
      <div className="circulo">
        <h3 className="h3-c-2-circle">
          <strong>{valueHA}</strong>
        </h3>
        <h3 className="h3-c-2-circle">
          <strong>ha</strong>
        </h3>
      </div>
    </div>
  )
}

export default PopupDifference;