import './Piramides.css';
function Piramides() {
  return (
    <>
        <div className="general-container">
          <br></br>
          <div className="row responsive-columna">
            <div className="col-lg-6">
              <div className="general-title">
              Comparador pirámides de distribución por edad y sexo de Colombia y Bogotá por censo
              </div> 
    
              <div className="general-content text-responsive" style={{textAlign:"justify"}}>
               Para ver un conjunto de pirámides de distribución, haga clic sobre el ítem de su interés en la lista de opciones. Si desea comparar censos haga clic sobre “Comparador pirámides Colombia y Bogotá por censos. <br/>
               Los censos disponibles corresponden a los años 1938, 1951, 1964, 1973, 1985, 1993, 2005 y 2018.

              </div>
    
            </div>
    
            <div className="col-lg-6">          
                
                <img src='https://geoapps.esri.co/recursos/SMOB/circulos/Componente%20Poblacional/1.1.%20Estructura%20demogr%C3%A1fica-01.png'
                className='imagen-responsive' style={{width:"400px", height:"400px"}}></img>
    
            </div>
    
          </div>
        </div>
      </>
  );
}

export default Piramides