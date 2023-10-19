import Plain_content from '../../components/plain_content/plain_content';


function PapelSociedad() {
  return (
    <>
      <div className="general-container" >
        <div className="row responsive-columna">
          <div className="col-lg-6">
            <div className="general-title">
              El papel de la Sociedad de Mejoras Públicas en el Ordenamiento Territorial, antecedentes y perspectivas
            </div>

            <div className="general-content text-responsive" style={{ textAlign: "justify" }}>
              La SMOB presentó un panorama histórico de las Sociedades de Mejoras Públicas, en junio de 2019 en Manizales, con ocasión de los 107 años de fundación de la Sociedad de Mejoras de la capital caldense. Se señala cómo, desde la Constitución de 1886, el ámbito legal es propicio a la creación y al concurso activo de este tipo de entidades, nacidas en lo hondo del espíritu cívico y de la civilidad. Gradualmente, se hace el tránsito del sencillo embellecimiento de plazas y parajes, a la participación activa en la planeación de la ciudad y la consolidación de los espacios de control ciudadano. Las sociedades de mejoras son las llamadas a convocar y congregar a la ciudadanía. Y desde luego, a expandir la civilidad.
            </div>

          </div>

          <div className="col-lg-6">
            <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/a29178abad9044d69fc26c78b8fc6185/data'
              style={{ width: "40vw", height: "60vh" }}
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
}
export default PapelSociedad;


