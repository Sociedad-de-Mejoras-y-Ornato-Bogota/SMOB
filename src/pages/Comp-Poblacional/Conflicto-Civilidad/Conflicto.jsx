import Page_principal from "../../../components/page-principal/page-principal"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './conflicto.css'
const Conflicto = () => {
    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo("/Componente%20poblacional/" + path)
    }
    return (
        <>
            <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente%20Poblacional/C%C3%8DRCULO%20CONTEXTO%20SOCIOCULTURAL-01.png" name_component="Conflicto - civilidad" description_component="                            Si la civilidad es el espíritu mismo del comportamiento ciudadano, de la convivencia, la armonía, la fuerza transformadora y protectora de los ciudadanos, el conflicto y la violencia son su némesis. Donde hay violencia y confrontación, sabemos que está o estuvo ausente la civilidad. ¿Cómo se dio esta lucha de fuerzas en nuestra sociedad, desde la llamada Conquista, pasando por la Colonia, y llegando después a la Independencia y la modernidad? ¿Cómo nace la civilidad en Colombia y en Bogotá? ¿Qué eventos sociales y políticos la han amenazado y la amenazan en la actualidad? ¿Cómo fraguó en la sociedad bogotana el espíritu civil, cuando habían prevalecido por siglos el espíritu militar y el clerical? ¿Cuál es y ha sido la fisonomía de nuestra ciudadanía?
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
    <div className="contenedorC">
        <div className="botonesC">
          <Link to={`/Componente poblacional/Conflicto - civilidad/Caminos hacia la Independencia`} className="botonC">Caminos hacia la independencia</Link>
          <Link to={`/Componente poblacional/Conflicto - civilidad/ Bogotá asediada siglo XIX`} className="botonC">Bogotá asediada Siglo XIX</Link>
          <Link to={`/Componente poblacional/Conflicto - civilidad/ Demografía: violencia y urbanización`} className="botonC">Demografía: violencia y urbanización</Link>
        </div>
    </div>
        </>
    )
}
export default Conflicto;
