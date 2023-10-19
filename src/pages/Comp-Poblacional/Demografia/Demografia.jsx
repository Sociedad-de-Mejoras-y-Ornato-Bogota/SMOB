
import './Demografia.css'

function demografia() {
  return (
    <>
    <div className="general-container">
        <div className="row responsive-columna">

            <div className="col-lg-6">
                <img src="https://geoapps.esri.co/recursos/SMOB/circulos/Componente Poblacional/1.1. Estructura demográfica-01.png"
                style={{width:"400px", height:"400px"}}
                className='imagen-responsive'></img>
            </div>

            <div className="col-lg-6">
                <div className="general-title">
                    Estructura Demográfica
                </div> 

                <div className="general-content text-responsive" style={{textAlign:"justify"}} >
La demografía es la disciplina que integra, como una estructura transversal, a todo el conjunto de las ciencias sociales. Una proyección certera y confiable de la población y del número de hogares, por ejemplo, es el fundamento de una adecuada planeación de los servicios públicos, de los equipamientos y de los requerimientos de vivienda y área futura. Al observar la historia de los planes de desarrollo que ha tenido Bogotá, resulta evidente que éstos fallaron, entre otras cosas, por los errores en las proyecciones de población. En particular, por los cometidos en las décadas del cincuenta al ochenta. Con posterioridad, y con base en fuentes como el DANE y las estimaciones del doctor Álvaro Pachón Morales, ha sido posible construir la serie del crecimiento de la población durante más de dos siglos. A partir del siglo XX, además, se cuenta con registros sobre las tasas de natalidad, fecundidad, mortalidad, y cálculos sobre las tasas o saldos migratorios. La distribución por edad y sexo para cada uno de los años censales de Colomba y Bogotá, los indicadores que dan cuenta de las dinámicas demográficas -índice de masculinidad, índice de dependencia, edad mediana, etapas vitales y expectativa de vida, entre otros-, son una fuente de información valiosa y han sido analizados cuidadosamente.
                </div>
            </div>
        </div>
    </div>
</>
  )
}
export default demografia

