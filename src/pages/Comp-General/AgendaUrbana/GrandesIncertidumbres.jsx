import '../General.css';
            
function GrandesIncer() {
  return (
    <>
      <div className="general-container">
        <div className="row responsive-columna">

          <div className="col-lg-6">
            <div className="general-title">
              Las grandes incertidumbres y el Plan de Ordenamiento Territorial de Bogotá
            </div> 

            <div className="general-content text-responsive" style={{textAlign:"justify"}}>
              Como instrumento fundamental de la planeación de la ciudad, en particular, de las formas de ocupación del territorio, el POT tiene el desafío de descifrar y manejar las incertidumbres que plantean las fluctuaciones demográficas (tasas de fecundidad, tasas de mortalidad, etc.), la pandemia y su efecto en la pobreza, y los flujos migratorios. 
              Presentación realizada el 22 de julio de 2021 para el Consejo Territorial de Planeación Distrital-CTPD con apoyo de la Plataforma por el derecho a la ciudad.
            </div>

            <div className="general-content-video">
              <p className='text-responsive'>Ver completo en: <a href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=999398160829436">https://www.facebook.com/watch/live/?ref=watch_permalink&v=999398160829436</a> </p>
            </div>   
          </div>

          <div className="col-lg-6">          
  
              <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/5be3ede4a5bc48ffaa4dc67751ed8b44/data'
   style={{width:"40vw",height:"60vh"}}
   className='pdf-responsive'
              ></iframe>
  

          </div>
        </div>
      </div>
    </>
  );
}
export default GrandesIncer;