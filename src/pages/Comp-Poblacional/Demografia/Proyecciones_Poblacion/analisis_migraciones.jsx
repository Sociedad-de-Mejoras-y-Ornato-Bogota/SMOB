import Plain_content from "../../../../components/plain_content/plain_content";


const Analisis = () => {
    return (

            <>
            <div className="general-container">
              <div className="row responsive-columna">
                <div className="col-lg-6">
                  <div className="general-title">
                  Análisis de migraciones en Bogotá y municipios 2018
                  </div> 
        
                  <div  className="general-content text-responsive" style={{textAlign:"justify"}}>
                  Para desarrollar estudios válidos, que den sustento a afirmaciones teóricas, juicios académicos o decisiones de política pública, por ejemplo, es necesario conocer demográficamente, con el mayor nivel de detalle posible, la población bogotana y la de los municipios circunvecinos. No nos sirven las miradas globales o panorámicas, necesitamos saber cómo está conformado cada grupo social. Ayer, hoy y mañana. Y cuál es la dinámica social y humana que lo define y lo impulsa. Por eso debemos hacernos preguntas como: ¿Cuándo nacieron y en dónde, los residentes de la capital colombiana? ¿Dónde han residido y dónde lo hacen en este momento? ¿Qué edad tienen? Y muy importante, ¿Cómo afectan todas estas cifras y movimientos poblacionales, las migraciones?, ¿Cuál es la envergadura real y la dinámica de la población migrante?
                  </div>
        
                </div>
        
                <div className="col-lg-6">          
                    <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/dae9d461b7de4cbf976e50efbcb18293/data'
                    style={{width:"40vw",height:"60vh"}}
                    className='pdf-responsive'></iframe>
        
                </div>
        
              </div>
            </div>
          </>
    );
};
export default Analisis;