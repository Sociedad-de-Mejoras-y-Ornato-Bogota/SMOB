
export default function CiudaniaYCivilidad() {

  return (
    <div className="general-container">
      <div className="row responsive-columna">
        <div className="col-lg-6">
          <div className="general-title">
            Ciudadanía y civilidad
          </div>

          <div  style={{ textAlign: "justify" }}>
            <a href="https://smob-storage.s3.us-east-2.amazonaws.com/libros/construyendo-civilidad/1.pdf" target="_blank" style={{ width: "200px", padding: "10px", fontSize: "14px", backgroundColor: "#762f0b", borderRadius: "5px #762f0b", borderColor: "#762f0b", color: "white", textAlign: "center", textDecoration: "none" }}>Descargar documento</a>
          </div>

        </div>

        <div className="col-lg-6">
          <iframe
            src="https://smob-storage.s3.us-east-2.amazonaws.com/libros/construyendo-civilidad/1.pdf"
            style={{ width: "50vw", height: "70vh" }}
            className="pdf-responsive"
          ></iframe>
        </div>

      </div>
    </div>
  )
}
