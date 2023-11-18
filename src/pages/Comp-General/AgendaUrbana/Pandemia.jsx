import '../General.css';
            
function Pandemia() {
  return (
    <>
      <div className="general-container">
        <div className="row responsive-columna">
          <div className="col-lg-6">
            <div className="general-title">
              Coloquio la nueva agenda urbana en tiempos de pandemia
            </div> 

            <div className="general-content text-responsive" style={{textAlign:"justify"}}>
            El Pensamiento Complejo ante las  metas trazadas por la ONU para los próximos años, en asuntos neurálgicos como pobreza y hambre, salud, agua y saneamiento básico, energías limpias, trabajo, infraestructura, cambio climático y paz, entre otros, exacerbados de manera angustiante por la pandemia del COVID 19. Y en estos términos, visión de Bogotá: transición demográfica, tasas de crecimiento, mortalidad y fecundidad, servicios públicos, migraciones, pobreza, hambre y hacinamiento. Panorama de la brutal inequidad revelada por un virus infeccioso.        
            </div>

            <div className="general-content-video">
              Ver el video de esta presentación realizada el 13 de julio de 2022 en: <a href="https://www.youtube.com/watch?v=nACL5B6M2H4 "></a> 
              <iframe src="https://www.youtube.com/embed/nACL5B6M2H4"
               className='pdf-responsive'></iframe>
            </div>   
          </div>

          <div className="col-lg-6">          

              <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/f62983bf1b3646ec9b8ba1f4436ff063/data'
              style={{width:"40vw",height:"60vh"}}
              className='pdf-responsive'
              ></iframe>

          </div>

        </div>
      </div>
    </>
  );
}
export default Pandemia;