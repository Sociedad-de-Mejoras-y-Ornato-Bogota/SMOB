import Pronto from "../../../components/Not found/ComingSoon";
export default function OrigenesCivilidad() {
  return (
    <div className="general-container">
      <div className="row responsive-columna">
        <div className="col-lg-6">
          <div className="general-title">
            Origenes de la civilidad en Colombia
          </div>

          <div
            className="general-content text-responsive"
            style={{ textAlign: "justify" }}
          ></div>
        </div>

        <div className="col-lg-6">
          <iframe
            src="https://geoapps.esri.co/recursos/SMOB/libros/construyendo-civilidad/2.pdf"
            style={{ width: "40vw", height: "50vh" }}
            className="pdf-responsive"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
