import './ComparacionCenso.css';
import GraficasComparacion from './GraficasComparacion';
function PiramidesComparacion() {


  return (

    <div className='general-container' >
      <div className='row responsive-columna' style={{ height: "auto", width: "100vw", color: "black" }}>
        <div className='col-lg-2'></div>
        <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
          <p style={{ color: "#762f0b" }} className="general-title">
          Comparador pirámides de distribución por edad y sexo de Colombia y Bogotá por censo
          </p>

        </div>
        <div className='col-lg-2'></div>

      </div>

      <div className='row' style={{ height: "auto", width: "100vw", color: "black" }}>
        <div className='col-lg-2'></div>
        <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "#762f0b", fontSize: "18px" }}>

          <p className="general-content text-responsive" style={{textAlign:"justify"}}>
          Para ver un conjunto de pirámides de distribución, haga clic sobre el ítem de su interés en la lista de opciones. Si desea comparar censos haga clic sobre “Comparador pirámides Colombia y Bogotá por censos.
          </p>

          <p className="general-content text-responsive" style={{textAlign:"justify"}}>
          Los censos disponibles corresponden a los años 1938, 1951, 1964, 1973, 1985, 1993, 2005 y 2018.
          </p>
        </div>
        <div className='col-lg-2'></div>

      </div>

      <div className="row" style={{width:"100vw",height:"auto"}}>
        <div className="col-lg-12" style={{minHeight:"12.5vh"}}>
        <GraficasComparacion/>
        </div>
      </div>
    </div>
  );
}

export default PiramidesComparacion;