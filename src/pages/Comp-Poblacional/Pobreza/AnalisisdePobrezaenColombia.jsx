

function  AnalisisPob() {
    return (

      <>
      <div className="general-container">
        <br></br>
        <div className="row responsive-columna">
          <div className="col-lg-6">
            <div className="general-title">
  Análisis de la Pobreza en Colombia y Bogotá
            </div> 
  
            <div className="general-content text-responsive" style={{textAlign:"justify"}}>
     En una urbe de las proporciones de Bogotá, un asunto de la trascendencia de la pobreza no puede enfrentarse con una visión general o panorámica. Es imprescindible estudiarlo minuciosamente en cada una de las localidades, antes de acudir a los agregados y a los guarimos globales. Hay variables esenciales -pobreza monetaria, extrema y multidimensional, vivienda y hacinamiento, ingreso per-cápita y estratificación, por ejemplo-, cuyo comportamiento es diferente de una localidad a otra, hasta el punto de que dicha diferencia tipifica los grupos humanos que residen en cada sector de la capital. Esto es clave para la formulación de política en el escenario distrital y para entender muchas de las dinámicas sociales de la capital colombiana.
            </div>
  
          </div>
  
          <div className="col-lg-6">          
              <iframe src='https://geoapps.esri.co/recursos/SMOB/1.%20Análisis%20de%20la%20pobreza%20de%20Colombia%20y%20Bogotá%202018.pdf'
              style={{width:"40vw",height:"60vh"}}
              className='pdf-responsive'></iframe>
  
          </div>
  
        </div>
      </div>
    </>
    
    );
}

export default AnalisisPob;