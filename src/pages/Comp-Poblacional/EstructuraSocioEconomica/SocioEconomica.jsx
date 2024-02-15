import Page_principal from "../../../components/page-principal/page-principal"
import { useNavigate } from 'react-router-dom';
export default function SocioEconomica() {
    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo("/Componente%20poblacional/" + path)
    }
    return (
        <>
            <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente Poblacional/1.2. Estructura Socioeconómica y espacial-01.png" name_component="Estructura Socioeconómica" description_component="    Desde la ONU se ha desplegado, durante décadas, un complejo dispositivo para el estudio de la pobreza en los países del mundo. Se trata, acaso, del problema más acuciante de la humanidad. Ligado a asuntos de gran trascendencia como el cambio climático o la paz, es un punto neurálgico en la agenda de los organismos multilaterales y las naciones y Estados en todas las latitudes. Cómo se cuantifican y comportan en Colombia y en Bogotá, elementos definitivos como la línea de pobreza, la pobreza monetaria, extrema y multidimensional, la evolución del ingreso per-cápita, el crecimiento y las dinámicas demográficas, el precio de la vivienda y la estratificación, los programas de ordenamiento territorial, la densificación y los programas de subsidios, entre otros, es tarea que hay que enfrentar consuetudinariamente. Adviértanse, en este sentido, las terribles realidades que reveló la pandemia del COVID-19 recientemente. 
"
                areas={
                    [
                        <area shape="rect" coords="80,240,385,280" href='#' alt="Page1" onClick={() => { navigate('Conflicto%20-%20civilidad') }} />,
                        <area shape="circle" coords="130,180,105" href='#' alt="Page2" onClick={() => { navigate('demograf%C3%ADa') }} />,
                        <area shape="circle" coords="340,180,105" href='#' alt="Page2" onClick={() => { navigate('Estructura%20socioecon%C3%B3mica') }} />,
                        <area shape="circle" coords="235,360,105" href='#' alt="Page2" onClick={() => { navigate('Estructura%20socioespacial') }} />
                    ]
                } />

        </>
    )
}



