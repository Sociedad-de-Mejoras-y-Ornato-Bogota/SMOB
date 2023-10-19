import '../General.css';
            
function  ParaQuien() {
  return (
    <>
      <div className="general-container">

        <div className="row responsive-columna">
          <div className="col-lg-6">
            <div className="general-title">
              Para quién es el Plan de Ordenamiento Territorial de Bogotá
            </div> 

            <div className="general-content text-responsive" style={{textAlign:"justify"}}>
            El POT, que precisa y acota las normas de ocupación del territorio, debe reflejar la realidad cotidiana que viven los ciudadanos y proporcionarles las herramientas prácticas para solucionar sus problemas y atender sus necesidades. Así mismo, debe ocuparse de los mecanismos de participación de la ciudadanía, los objetivos de desarrollo sostenible, las cifras y progresiones demográficas, y los fenómenos migratorios. En él tienen que reflejarse de igual manera, aspectos neurálgicos como el cambio climático, los efectos de la pandemia, la ocupación y el trabajo, y la lucha contra el hambre y la pobreza.
            </div>
 
          </div>

          <div className="col-lg-6">          

              <p>¿Para quién es el Plan de Ordenamiento Territorial de Bogotá?</p>
              <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/6f750d86de874a85b212b5c0091e15a7/data'
       style={{width:"40vw",height:"60vh"}}
       className='pdf-responsive'
              ></iframe>

          </div>

        </div>
      </div>
    </>
  );
}
export default ParaQuien;