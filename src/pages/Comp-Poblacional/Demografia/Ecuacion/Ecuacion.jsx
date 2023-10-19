import './Ecuacion.css';


function Ecuacion() {
  return (
    <div className='general-containe' >
      <div className='row responsive-columna' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
        <div className='col-lg-2'></div>
        <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
          <p style={{ color: "#762f0b" }} className="general-title">
            Ecuación compensadora de Bogotá 1905 - 2035
          </p>

        </div>
        <div className='col-lg-2'></div>

      </div>

      <div className='row' style={{ height: "62.5vh", width: "100vw", color: "black" }}>
        <div className='col-lg-2'></div>
        <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "#762f0b", fontSize: "18px" }}>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
            Ecuación compensadora:
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
            Técnica demográfica básica que permite establecer el cambio total del tamaño de la población entre dos fechas dadas, a partir de los componentes que producen dicho efecto. Permite conocer el comportamiento de los “componentes” del crecimiento demográfico (nacimientos, defunciones y migrantes) y sus efectos sobre el volumen, la composición y la distribución de la población.
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
          Tasa de crecimiento:
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
          Incremento o disminución del tamaño de una población, experimentado por el efecto del balance entre los nacimientos y las defunciones, adicionando el aporte de la migración neta. Puede calcularse también a partir de las tasas de crecimiento natural y de migración neta. Permite explicar en forma porcentual, a qué ritmo está creciendo una población determinada.
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
          Tcd = (tasa de natalidad-tasa de mortalidad) + saldo migratorio (inmigraciones-emigraciones)
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
          Tasa vegetativa:
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
          Es la diferencia entre los nacimientos y las defunciones de una determinada población. La tasa anual del crecimiento vegetativo o natural (referida a mil habitantes) resulta de la resta: tasa de natalidad menos tasa de mortalidad.
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
          Tv = tasa de natalidad- tasa de mortalidad
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
          Tasa de migración:
          </p>
          <p style={{fontWeight:"bold", textAlign:"justify"}} className="general-content text-responsive">
          Tm = tasa de crecimiento – tasa vegetativa
          </p>
        </div>
        <div className='col-lg-2'></div>

      </div>

      <div className='row' style={{ width: "100vw",height:"97vh"}}>
        <div className="col-lg-12">
          <iframe
            src='https://geogeeks2.maps.arcgis.com/apps/dashboards/45a68a91109b40318c6d2bb327d7befa'
            className='dashboards'
            style={{ width: "100%",height:"95vh" }}
          ></iframe>
        </div>

      </div>




    </div>
  );
}

export default Ecuacion