import Page_principal from "../../../components/page-principal/page-principal"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LOT.css';

function LeyesOrdenamiento() {
    const navigateTo = useNavigate(); 
    const navigate = (path) => {
      navigateTo("/marco institucional/" + path)
    }
    return (
        <>
            <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/MarcoInstitucional/MARCO INSTITUCIONAL 900 PX-07.png" name_component="Leyes de ordenamiento territorial" description_component="La ley 388 de 1997 fue el referente de la capital en materia de ordenamiento urbano y territorial, durante más de dos décadas. En ella se definió detalladamente la estructura de los instrumentos normativos del ordenamiento territorial, sus metas y objetivos, en lo referente en asuntos neurálgicos como conservación ecológica, vías y movilidad, patrimonio cultural, inclusión y equidad, gestión del riesgo, servicios y equipamiento, y espacio público, entre otros. En 2019 se presenta un nuevo POT por parte de la alcaldía y toma vigencia la discusión de asuntos como la función social y ecológica de la propiedad, el concepto moderno del urbanismo, el modelo de ocupación de la ciudad, las condiciones de habitabilidad, el análisis minucioso y técnico de la pobreza, la precisión y rigor de las estadísticas poblacionales y de crecimiento, la clasificación del territorio urbano, la informalidad, y el mercado del suelo urbano y la vivienda.
"
areas={
    [
        <area shape="circle" coords="341.5,350,48.5" href='#' alt="Page4" onClick={() => {navigate('Leyes de ordenamiento territorial')}}/>,
        <area shape="circle" coords="390,267,48.5" href='#' alt="Page4" onClick={() => {navigate('Leyes de ordenamiento territorial')}}/>,
        <area shape="circle" coords="293,267,48.5" href='#' alt="Page4" onClick={() => {navigate('Leyes de ordenamiento territorial')}}/>,
        <area shape="circle" coords="237,120,105" href='#' alt="Page1" onClick={() => {navigate('Nueva agenda urbana y los ODS')}}/>,
        <area shape="circle" coords="134,297,105" href='#' alt="Page2" onClick={() => {navigate('Estructura administrativa de Bogotá')}}/>,
        <area shape="circle" coords="340,297,105" href='#' alt="Page3" onClick={() => {navigate('Leyes de ordenamiento territorial')}}/>,
        <area shape="circle" coords="238,240,235" href='#' alt="Page4" onClick={() => {navigate('')}}/>
    ]
}/>
    <div className="contenedorLO">
        <div className="botonesLO">
          <Link to={`/marco institucional/Leyes de ordenamiento territorial/Antecedentes de la Ley 388 de 1997`} className="botonLO">Antecedentes de la Ley 388 de 1997</Link>
          <Link to={`/marco institucional/Leyes de ordenamiento territorial/Esquema de la Ley 388 de 1997`} className="botonLO">Esquema de la Ley 388 de 1997</Link>
        </div>
      </div>
        </>
    )
}
export default LeyesOrdenamiento