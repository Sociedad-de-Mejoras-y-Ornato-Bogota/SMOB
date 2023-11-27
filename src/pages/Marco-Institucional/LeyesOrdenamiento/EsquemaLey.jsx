

export default function EsquemaLey() {
    return (
      <>
      <div className="general-container">
        <br></br>
        <div className="row responsive-columna">
          <div className="col-lg-6">
            <div className="general-title">
              Esquema de la Ley 388 de 1997
            </div> 

            <div className="general-content text-responsive" style={{textAlign:"justify"}}>
            La ley 388 de 1997 fue un avance en el ejercicio de comprender la ciudad moderna. Frente al cambio vertiginoso de Bogotá, la ciudadanía y sus autoridades respondieron con este instrumento de planeación y control de la vida en el territorio, que abarcaba todas las dimensiones y los ámbitos de la acción humana y su efecto en el medio. Se trató de una herramienta más dúctil y sensible que ninguna otra que se hubiera construido en el pasado, tal como lo exigía la nueva y compleja realidad de una metrópolis. Todos los aspectos esenciales quedaron incorporados: ordenamiento, acción ciudadana, equidad, inclusión, sostenibilidad, cultura y patrimonio, equipamiento e infraestructura, recursos naturales y regiones, espacio público, agenda urbana, edificabilidad y espacios institucionales. Fue un referente en la gestión urbana durante 20 años, cuando nuevas realidades y dinámicas hicieron impostergable el que fuera actualizada y robustecida.
            </div>
 
          </div>

          <div className="col-lg-6">          

              <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/1258478d96a34288989508a2fa866a03/data'
            style={{ width: "50vw", height: "70vh" }}
            className="pdf-responsive"
              ></iframe>
  
          </div>
        </div>
      </div>
    </>

  );
}