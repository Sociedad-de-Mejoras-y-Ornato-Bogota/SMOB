import Page_principal from "../../../components/page-principal/page-principal";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SSP.css'
const SistemaS = () => {

    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo("/componente bienestar/infraestructura" + path)
    }
    
    return (
        <>
            <Page_principal name_component="Sistema de servicios públicos" description_component="                        Una línea de tiempo en la que se observen los hitos del desarrollo de
                        nuestros servicios públicos, revela como un espejo nítido el talante de los
                        ciudadanos, sus autoridades, y los mecanismos y herramientas de planeación y
                        control con que ha contado Bogotá históricamente. En cada momento, en cada
                        etapa en el tiempo, la línea del tiempo permite ver cómo se va dibujando
                        literalmente la ciudad, como se va armando y expandiendo, en su esfuerzo por
                        dotar a los ciudadanos de energía eléctrica, agua potable, acueducto y
                        alcantarillado, y sistemas de comunicaciones." url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/Bienestar/3.1.2. Sistema de servios públicos - general.png"
                        
                        areas={
                            [
                            <area shape="circle" coords="130,180,105" href='#' alt="Page2" onClick={() => {navigate('/Sistema vial y de transporte')}}/>,
                            <area shape="circle" coords="340,180,105" href='#' alt="Page3" onClick={() => {navigate('/Sistema de servicios públicos')}}/>,
                            <area shape="circle" coords="235,360,105" href='#' alt="Page4" onClick={() => {navigate('/Sistema de espacio público')}}/>,
                            <area shape="circle" coords="230,245,235" href='#' alt="Page5" onClick={() => {navigate('')}}/>
                            ]
                        }/>
                        <div className="contenedorSSP">
        <div className="botonesSSP">
          <Link to={`/componente bienestar/infraestructura/Sistema de servicios públicos/Acueducto`} className="botonSSP">Historia del acueducto y alcantarillado</Link>
          <Link to={`/componente bienestar/infraestructura/Sistema de servicios públicos/Energia`} className="botonSSP">Historia de la energía eléctrica</Link>
          <Link to={`/componente bienestar/infraestructura/Sistema de servicios públicos/Gas`} className="botonSSP">Historia del Gas natural</Link>
          <Link to={`/componente bienestar/infraestructura/Sistema de servicios públicos/Telecomunicaciones`} className="botonSSP">Historia de las telecomunicaciones</Link>
          <Link to={`/componente bienestar/infraestructura/Sistema de servicios públicos/Basuras`} className="botonSSP">Historia de las basuras</Link>
        </div>
    </div>
        </>
    );
};
export default SistemaS;