import '../General.css';

export default function ConceptoLey() {
    return (
      <>
      <div className="general-container">
        <br></br>
        <div className="row responsive-columna">
          <div className="col-lg-6">
            <div className="general-title">
              Concepto Plan de Ordenamiento Territorial año 2019
            </div> 

            <div className="general-content text-responsive" style={{textAlign:"justify"}}>
            El concepto expresado por el Consejo Territorial de Planeación Distrital - CTPD, máxima instancia de participación ciudadana, incidente en la toma de decisión para la aprobación de los planes de ordenamiento territorial, hizo énfasis en las que consideró imprecisiones, en algunas cifras y series estadísticas incluidas en el proyecto del Plan de Ordenamiento Territorial - POT del año 2019, referentes a indicadores demográficos y condiciones de vida de los habitantes de la capital, y su relación con asuntos de importancia como los suelos de expansión. El concepto, contempló el análisis de la información en aspectos como los principios básicos del ordenamiento territorial, las funciones de los concejos municipales y distritales, asentamientos e informalidad, pobreza y demografía por localidades, servicios públicos y equipamientos, ingresos y gasto familiar, censo poblacional, y, por último, el concepto y ámbito de Bogotá-Región. 
            </div>
 
          </div>

          <div className="col-lg-6">          
    
              <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/0cb971f533574b0f8ec8a246b3f50ead/data'
                style={{width:"40vw",height:"60vh"}}
                className='pdf-responsive'
              ></iframe>

          </div>
        </div>
      </div>
    </>

  );
}