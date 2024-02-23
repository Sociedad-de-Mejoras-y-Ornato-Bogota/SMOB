
import Page_principal from "../../../components/page-principal/page-principal"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SE.css'
export default function SocioEspacial() {
    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo("/Componente%20poblacional/" + path)
    }
    return (
        <>
            <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente Poblacional/1.3. Civilidad y conflictos-01.png " name_component="Estructura Socioespacial" description_component="La forma en que los habitantes de una ciudad se distribuyen y localizan en los diversos puntos geográficos del suelo urbano, así como la conformación misma de barrios, comunidades, sectores y localidades, son el reflejo de las dinámicas demográficas, de la movilidad social y de la capacidad monetaria de las familias. El gasto de los hogares, o el número de hijos por núcleo familiar, el ingreso laboral, el flujo de migrantes en un período determinado, el precio del suelo y la vivienda, son fuerzas que definen la fisonomía de la ciudad. Y que asignan, invariablemente, cargas y privilegios para los ciudadanos.
"
areas={
    [
    <area shape="rect" coords="80,240,385,280" href='#' alt="Page1" onClick={() => {navigate('Conflicto%20-%20civilidad')}}/>,
    <area shape="circle" coords="128,180,105" href='#' alt="Page2" onClick={() => {navigate('demograf%C3%ADa')}}/>,
    <area shape="circle" coords="340,180,105" href='#' alt="Page2" onClick={() => {navigate('Estructura%20socioecon%C3%B3mica')}}/>,
    <area shape="circle" coords="235,360,105" href='#' alt="Page2" onClick={() => {navigate('Estructura%20socioespacial')}}/>,
    <area shape="circle" coords="230,245,235" href='#' alt="Page5" onClick={() => {navigate('')}}/>
    ]
}/>
     <div className="contenedorSE">
        <div className="botonesSE">
          <Link to={`/Componente poblacional/Estructura socioespacial/Segregación espacial por Localidades`} className="botonSE">Segregación espacial por localidades</Link>
        </div>
      </div>
        </>
    )
}



