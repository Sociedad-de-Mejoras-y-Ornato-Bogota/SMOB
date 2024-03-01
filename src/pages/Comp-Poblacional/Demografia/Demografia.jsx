import Page_principal from "../../../components/page-principal/page-principal"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Demografia.css';
function demografia() {
  const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo("/Componente%20poblacional/" + path)
    }
  return (
    <>
      <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente Poblacional/1.1. Estructura demográfica-01.png" name_component="Estructura demográfica" description_component="La demografía es la disciplina que integra, como una estructura transversal, a todo el conjunto de las ciencias sociales. Una proyección certera y confiable de la población y del número de hogares, por ejemplo, es el fundamento de una adecuada planeación de los servicios públicos, de los equipamientos y de los requerimientos de vivienda y área futura. Al observar la historia de los planes de desarrollo que ha tenido Bogotá, resulta evidente que éstos fallaron, entre otras cosas, por los errores en las proyecciones de población. En particular, por los cometidos en las décadas del cincuenta al ochenta. Con posterioridad, y con base en fuentes como el DANE y las estimaciones del doctor Álvaro Pachón Morales, ha sido posible construir la serie del crecimiento de la población durante más de dos siglos. A partir del siglo XX, además, se cuenta con registros sobre las tasas de natalidad, fecundidad, mortalidad, y cálculos sobre las tasas o saldos migratorios. La distribución por edad y sexo para cada uno de los años censales de Colomba y Bogotá, los indicadores que dan cuenta de las dinámicas demográficas -índice de masculinidad, índice de dependencia, edad mediana, etapas vitales y expectativa de vida, entre otros-, son una fuente de información valiosa y han sido analizados cuidadosamente.
"
        areas={
          [
            <area shape="rect" coords="80,240,385,280" href='#' alt="Page1" onClick={() => { navigate('Conflicto%20-%20civilidad') }} />,
            <area shape="circle" coords="130,180,105" href='#' alt="Page2" onClick={() => { navigate('demograf%C3%ADa') }} />,
            <area shape="circle" coords="340,180,105" href='#' alt="Page2" onClick={() => { navigate('Estructura%20socioecon%C3%B3mica') }} />,
            <area shape="circle" coords="235,360,105" href='#' alt="Page2" onClick={() => { navigate('Estructura%20socioespacial') }} />,
            <area shape="circle" coords="230,245,235" href='#' alt="Page5" onClick={() => {navigate('')}}/>
          ]
        } />
        <div className="contenedorD">
        <div className="botonesD">
          <Link to={`/Componente poblacional/demografía/Evolución demográfica de Colombia y Bogotá en ochenta años 1938 - 2018`} className="botonD" style={{fontSize:'0.5em'}}>Evolución demográfica de Colombia y Bogotá en ochenta años 1938 - 2018</Link>
          <Link to={`/Componente poblacional/demografía/Series de población`} className="botonD">Series y proyecciones de población</Link>
          <Link to={`/Componente poblacional/Demografía/Crecimiento de la población (1790 - 2035)`} className="botonD">Crecimiento de la población (1790-2035)</Link>
          <Link to={`/Componente poblacional/Demografía/Ecuación compensadora de Bogotá`} className="botonD">Ecuación compensadora de Bogotá (1905-2035)</Link>
          <Link to={`/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo`} className="botonD">Pirámides de distribución por edad y sexo</Link>
          <Link to={`/Componente poblacional/Demografía/Indices demográficos`} className="botonD">Índices demográficos</Link>
        </div>
    </div>
    </>
  )
}
export default demografia

