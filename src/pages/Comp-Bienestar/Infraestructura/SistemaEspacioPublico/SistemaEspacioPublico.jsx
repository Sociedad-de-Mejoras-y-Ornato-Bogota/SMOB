import Page_principal from "../../../../components/page-principal/page-principal";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SEP.css'
const SistemaEP = () => {

    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo("/componente bienestar/infraestructura" + path)
    }
    
    return (
        <>
        <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/Bienestar/3.1.3. Sistemas de espacio público.png" name_component="Sistema de espacio públicos y equipamientos" description_component=" Los espacios públicos y equipamientos que la ciudad pone al servicio de
        sus ciudadanos, al goce de los niños, sus padres y sus abuelos, reflejan como
        pocas cosas el espíritu de la ciudad, su generosidad, su mano providente, su
        compromiso verdadero con la ciudadanía. ¿Cuál ha sido el talante de Bogotá en
        este aspecto? ¿Han sido suficientes y oportunas -en número, en ubicación y
        extensión-, las obras de dotación, las plazas, parques, zonas verdes y plazoletas?"

        areas={
            [
            <area shape="circle" coords="130,180,105" href='#' alt="Page2" onClick={() => {navigate('/Sistema vial y de transporte')}}/>,
            <area shape="circle" coords="340,180,105" href='#' alt="Page3" onClick={() => {navigate('/Sistema de servicios públicos')}}/>,
            <area shape="circle" coords="235,360,105" href='#' alt="Page4" onClick={() => {navigate('/Sistema de espacio público')}}/>,
            <area shape="circle" coords="230,245,235" href='#' alt="Page5" onClick={() => {navigate('')}}/>
            ]
        }/>
            <div className="contenedorSEP">
        <div className="botonesSEP">
          <Link to={`/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Plazas`} className="botonSEP">Parques, plazas, plazoletas y monumentos</Link>
        </div>
    </div>
        </>
    );
};
export default SistemaEP;