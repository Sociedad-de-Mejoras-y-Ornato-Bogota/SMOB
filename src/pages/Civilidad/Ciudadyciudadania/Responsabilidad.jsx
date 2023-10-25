import Pronto from "../../../components/Not found/ComingSoon";
function Responsabilidad() {
  return (
    <div className="general-container">
      <div className="row responsive-columna">
        <div className="col-lg-6">
          <div className="general-title">
            La responsabilidad social de la Sociedad de Mejoras y Ornato de
            Bogotá
          </div>

          <div
            className="general-content text-responsive"
            style={{ textAlign: "justify" }}
          >
            {/* En la medida en que crecía y se desarrollaba la ciudad, fueron cambiando sus características esenciales y las ópticas o visiones para tratar de analizarla y comprenderla. Esto sucedió lentamente al comienzo, cuando se trató de la urbe que apenas nacía, pero su dinámica empezó a acelerarse marcadamente a mediados del siglo XX. Estas visiones de la ciudad no desaparecieron para dejar lugar a las nuevas, por el contrario, se mezclaron con las que llegaron formando el conjunto complejo que tenemos hoy en día. */}
          </div>
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
export default Responsabilidad;
