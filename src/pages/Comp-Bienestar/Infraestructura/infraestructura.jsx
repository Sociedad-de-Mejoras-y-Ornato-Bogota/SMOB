import Page_principal from "../../../components/page-principal/page-principal"
import { useNavigate } from 'react-router-dom';
const Infraestructura = () => {

    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo("/componente bienestar/" + path)
    }
    return (
        <>
            <Page_principal
                name_component="Infraestructura" description_component=""
                url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/Bienestar/3.1. Infraestructura  - general.png"
                areas={
                    [
                    <area shape="circle" coords="80,150,48.5" href='#' alt="Page1_1" onClick={() => {navigate('infraestructura/Sistema vial y de transporte')}}/>,  
                    <area shape="circle" coords="180,150,48.5" href='#' alt="Page1_2" onClick={() => {navigate('infraestructura/Sistema de servicios públicos')}}/>,  
                    <area shape="circle" coords="130,235,48.5" href='#' alt="Page1_3" onClick={() => {navigate('infraestructura/Sistema de espacio público')}}/>,  
                    <area shape="circle" coords="130,180,105" href='#' alt="Page1" onClick={() => {navigate('infraestructura')}}/>,
                    <area shape="circle" coords="310,140,42.5" href='#' alt="Page2_1" onClick={() => {navigate('Estructura urbana/Sistemas urbanos (subdivisón y lotificación)')}}/>,
                    <area shape="circle" coords="392,140,42.5" href='#' alt="Page2_2" onClick={() => {navigate('Estructura urbana/Vivienda, comercio e industria')}}/>,
                    <area shape="circle" coords="310,223,42.5" href='#' alt="Page2_3" onClick={() => {navigate('Estructura urbana/Tratamientos y normas urbanísticas')}}/>,
                    <area shape="circle" coords="392,223,42.5" href='#' alt="Page2_3" onClick={() => {navigate('Estructura urbana/Sistema de equipamientos')}}/>,
                    <area shape="circle" coords="352,180,102" href='#' alt="Page2" onClick={() => {navigate('Estructura urbana')}}/>,
                    <area shape="circle" coords="192,335,48.5" href='#' alt="Page3_1" onClick={() => {navigate('instrumentos/Planificación')}}/>,
                    <area shape="circle" coords="292,335,48.5" href='#' alt="Page3_2" onClick={() => {navigate('instrumentos/Gestión')}}/>,
                    <area shape="circle" coords="242,420,48.5" href='#' alt="Page3_3" onClick={() => {navigate('instrumentos/Financiación')}}/>,
                    <area shape="circle" coords="242,365,107" href='#' alt="Page3" onClick={() => {navigate('instrumentos')}}/>,
                    <area shape="circle" coords="230,245,235" href='#' alt="Page5" onClick={() => {navigate('')}}/>
                    ]
                }/>
        </>
    );
};
export default Infraestructura;