
function CivilidadYComplejidad() {

  return (
    <div className="general-container">
      <div className="row responsive-columna">
        <div className="col-lg-5">
          <div className="general-title">Civilidad y complejidad</div>

          <div className="general-content " style={{ textAlign: "justify" }}>
            <a href="https://geoapps.esri.co/recursos/SMOB/libros/construyendo-civilidad/4.pdf" target="_blank" style={{ width: "200px", padding: "10px", fontSize: "14px", backgroundColor: "#762f0b", borderRadius: "5px #762f0b", borderColor: "#762f0b", color: "white", textAlign: "center", textDecoration: "none" }}>Descargar documento</a>

          </div>
        </div>

        <div className="col-lg-7">
          <iframe
            src="https://geoapps.esri.co/recursos/SMOB/libros/construyendo-civilidad/4.pdf"
            style={{ width: "50vw", height: "70vh" }}
            className="pdf-responsive"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default CivilidadYComplejidad;
