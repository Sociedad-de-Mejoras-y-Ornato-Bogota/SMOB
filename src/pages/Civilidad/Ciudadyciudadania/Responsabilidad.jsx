import Pronto from "../../../components/Not found/ComingSoon";
function Responsabilidad() {

  const handleDownload = () => {
    const response = fetch("https://geoapps.esri.co/recursos/SMOB/libros/construyendo-civilidad/5.pdf", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        
      },
    });

    if (response.ok) {
      const blob = response.blob();
      const fileName = "documento.pdf";

      FileSaver.saveAs(blob, fileName);
    }
  };
  return (
    <div className="general-container">
      <div className="row responsive-columna">
        <div className="col-lg-5">
          <div className="general-title">
            La responsabilidad social de la Sociedad de Mejoras y Ornato de
            Bogotá
          </div>


          <div className="general-content " style={{ textAlign: "justify" }}>
            <button style={{ width: "200px", fontSize: "14px", backgroundColor: "#762f0b", borderRadius: "5px #762f0b", borderColor: "#762f0b", color: "white" }} onClick={handleDownload}>Descargar documento</button>
          </div>
        </div>

        <div className="col-lg-7">
          <iframe
            src="https://geoapps.esri.co/recursos/SMOB/libros/construyendo-civilidad/5.pdf"
            style={{ width: "50vw", height: "70vh" }}
            className="pdf-responsive"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Responsabilidad;
